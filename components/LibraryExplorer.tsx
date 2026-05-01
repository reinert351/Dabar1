import React, { useState, useEffect, useRef } from 'react';
import { 
  saveOCRDocument, getOCRDocuments, deleteOCRDocument, 
  saveOCRPage, getOCRPages 
} from '../services/database';

// Importações dinâmicas para evitar bloqueio de boot se o CDN falhar
const getTesseract = async () => {
  // @ts-ignore
  const mod = await import('https://esm.sh/tesseract.js@5.1.1');
  return mod.default || mod;
};

const getPdfLib = async () => {
  // @ts-ignore
  return await import('https://esm.sh/pdf-lib@1.17.1');
};

interface OCRDoc { id: string; title: string; createdAt: number; updatedAt: number; }
interface OCRPage { id: string; docId: string; index: number; image: string; text: string; }

const LibraryExplorer: React.FC = () => {
  const [view, setView] = useState<'list' | 'scanner' | 'editor'>('list');
  const [docs, setDocs] = useState<OCRDoc[]>([]);
  const [activeDoc, setActiveDoc] = useState<OCRDoc | null>(null);
  const [pages, setPages] = useState<OCRPage[]>([]);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);

  // New Doc state
  const [showNewDocModal, setShowNewDocModal] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');

  // Scanner Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  useEffect(() => { loadDocs(); }, []);

  const loadDocs = async () => {
    const data = await getOCRDocuments();
    setDocs(data.sort((a, b) => b.updatedAt - a.updatedAt));
  };

  const handleCreateDocSubmit = async () => {
    if (!newDocTitle.trim()) return;
    const title = newDocTitle.trim();
    const newDoc: OCRDoc = { id: `doc_${Date.now()}`, title, createdAt: Date.now(), updatedAt: Date.now() };
    await saveOCRDocument(newDoc);
    setActiveDoc(newDoc);
    setPages([]);
    setView('editor');
    loadDocs();
    setShowNewDocModal(false);
    setNewDocTitle('');
  };

  const startCamera = async () => {
    setView('scanner');
    setCapturedImage(null);
    setTimeout(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', width: 1280 } });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (e) {
        alert("Erro ao acessar câmera. Verifique permissões.");
        setView('list');
      }
    }, 100);
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0);
      // Filtro básico de contraste/pre-ocr
      ctx.filter = 'contrast(1.2) grayscale(1)';
      ctx.drawImage(canvas, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setCapturedImage(dataUrl);
      stopCamera();
    }
  };

  const runOCR = async () => {
    if (!capturedImage || !activeDoc) return;
    setStatus('Iniciando Motor OCR Offline...');
    setProgress(0);
    
    try {
      const Tesseract = await getTesseract();
      // Configuração para carregar do sistema local (offline)
      const worker = await Tesseract.createWorker('por', 1, {
        workerPath: 'https://esm.sh/tesseract.js@5.1.1/dist/worker.min.js',
        langPath: 'https://tessdata.projectnaptha.com/4.0.0_best', // Em produção PWA, altere para /assets/ocr/
        logger: (m: any) => {
          if (m.status === 'recognizing text') setProgress(Math.floor(m.progress * 100));
        }
      });

      const { data: { text } } = await worker.recognize(capturedImage);
      await worker.terminate();

      // Limpeza de texto específica para livros
      const cleanText = text
        .replace(/-\n/g, '') // Junta hifenizados
        .replace(/\n(?!\n)/g, ' ') // Une linhas do mesmo parágrafo
        .replace(/[ \t]+/g, ' ') // Normaliza espaços
        .trim();

      const newPage: OCRPage = {
        id: `page_${Date.now()}`,
        docId: activeDoc.id,
        index: pages.length + 1,
        image: capturedImage,
        text: cleanText
      };

      await saveOCRPage(newPage);
      setPages([...pages, newPage]);
      setStatus('');
      setView('editor');
    } catch (e) {
      alert("Falha no OCR. Verifique se os arquivos de idioma estão presentes.");
      setStatus('');
    }
  };

  const exportPDF = async () => {
    if (!activeDoc || pages.length === 0) return;
    setStatus('Gerando PDF...');
    try {
      const { PDFDocument, StandardFonts, rgb } = await getPdfLib();
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontSize = 11;

      for (const page of pages) {
        const pdfPage = pdfDoc.addPage([595.28, 841.89]); // A4
        const { width, height } = pdfPage.getSize();
        
        pdfPage.drawText(`Documento: ${activeDoc.title} - p. ${page.index}`, { x: 50, y: height - 50, size: 8, font, color: rgb(0.5, 0.5, 0.5) });
        
        const lines = page.text.split('\n');
        let yOffset = height - 80;
        for (const line of lines) {
          if (yOffset < 50) break; 
          pdfPage.drawText(line.substring(0, 85), { x: 50, y: yOffset, size: fontSize, font });
          yOffset -= 15;
        }
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${activeDoc.title}.pdf`;
      a.click();
    } catch (e) {
      console.error(e);
      alert("Erro ao carregar motor de PDF.");
    }
    setStatus('');
  };

  const cleanAllText = () => {
    const updated = pages.map(p => ({
      ...p,
      text: p.text.replace(/\n/g, ' ').replace(/  +/g, ' ').trim()
    }));
    setPages(updated);
    updated.forEach(p => saveOCRPage(p));
  };

  return (
    <div className="max-w-6xl mx-auto py-2 md:py-6 animate-in fade-in pb-40 px-2 font-sans">
      
      {/* Header Fixo do Scanner */}
      <div className="bg-slate-950 p-6 md:p-10 rounded-[30px] md:rounded-[50px] text-white shadow-2xl relative overflow-hidden mb-6 border border-indigo-500/20">
         <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"></div>
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
               <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block italic">Módulo Biblioteca • Dabar Scanner OCR</span>
               <h2 className="text-xl md:text-4xl font-black italic uppercase tracking-tighter mb-2 leading-none">Cofre de <span className="text-indigo-500">Documentos</span></h2>
               <p className="text-slate-400 max-w-xl text-xs md:text-sm leading-relaxed bible-text italic">
                  Escaner Profissional 100% Offline. Capture livros e extraia citações com privacidade total. Seus dados nunca saem deste aparelho.
               </p>
            </div>
            {view === 'list' && (
              <button onClick={() => setShowNewDocModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all active:scale-95">Novo Documento</button>
            )}
            {view === 'editor' && (
              <div className="flex gap-2">
                 <button onClick={startCamera} className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px]">Add Página</button>
                 <button onClick={() => setView('list')} className="bg-slate-800 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px]">Voltar</button>
              </div>
            )}
         </div>
      </div>

      {/* VIEW: LISTA DE DOCUMENTOS */}
      {view === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.length > 0 ? docs.map(doc => (
            <div key={doc.id} className="bg-white dark:bg-slate-800 p-6 rounded-[35px] border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all group">
               <div>
                  <div className="flex justify-between items-start mb-4">
                     <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" /></svg>
                     </div>
                     <button onClick={() => { if(confirm('Excluir biblioteca?')) deleteOCRDocument(doc.id).then(loadDocs); }} className="text-slate-200 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7" /></svg>
                     </button>
                  </div>
                  <h3 className="text-lg font-black uppercase text-slate-800 dark:text-white mb-1 line-clamp-1 italic">{doc.title}</h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{new Date(doc.createdAt).toLocaleDateString()} • Registro Local</p>
               </div>
               <button 
                 onClick={() => { setActiveDoc(doc); getOCRPages(doc.id).then(setPages); setView('editor'); }} 
                 className="mt-6 w-full py-3 bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-200 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-indigo-600 hover:text-white transition-all"
               >
                 Abrir Volume
               </button>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[50px]">
               <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Nenhum livro escaneado no cofre.</p>
            </div>
          )}
        </div>
      )}

      {/* VIEW: SCANNER CAMERA */}
      {view === 'scanner' && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-4">
          {!capturedImage ? (
            <div className="relative w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10">
               <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
               <div className="absolute inset-0 border-[40px] border-black/40 pointer-events-none">
                  <div className="w-full h-full border-2 border-indigo-500/50 rounded-xl flex items-center justify-center">
                     <div className="w-8 h-8 border-t-4 border-l-4 border-white absolute top-4 left-4"></div>
                     <div className="w-8 h-8 border-t-4 border-r-4 border-white absolute top-4 right-4"></div>
                     <div className="w-8 h-8 border-b-4 border-l-4 border-white absolute bottom-4 left-4"></div>
                     <div className="w-8 h-8 border-b-4 border-r-4 border-white absolute bottom-4 right-4"></div>
                  </div>
               </div>
               <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 px-10">
                  <button onClick={() => { stopCamera(); setView('editor'); }} className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs backdrop-blur-md">Cancelar</button>
                  <button onClick={capturePhoto} className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 border-indigo-500 scale-110 active:scale-95 transition-all">
                     <div className="w-14 h-14 bg-indigo-600 rounded-full"></div>
                  </button>
                  <label className="bg-white/10 text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs backdrop-blur-md cursor-pointer">
                     Galeria
                     <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (re) => setCapturedImage(re.target?.result as string);
                          reader.readAsDataURL(file);
                        }
                     }} />
                  </label>
               </div>
            </div>
          ) : (
            <div className="w-full max-w-2xl bg-slate-900 rounded-[50px] p-8 shadow-2xl border border-white/10 flex flex-col gap-6">
               <img src={capturedImage} className="w-full rounded-3xl border-2 border-indigo-500/30" />
               {status ? (
                 <div className="space-y-4 py-10">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-xs font-black text-indigo-400 uppercase tracking-widest animate-pulse">{status}</span>
                       <span className="text-xl font-black text-white">{progress}%</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner">
                       <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                    </div>
                 </div>
               ) : (
                 <div className="flex gap-4">
                    <button onClick={() => setCapturedImage(null)} className="flex-1 bg-white/5 text-white py-5 rounded-2xl font-black uppercase text-xs">Tentar Novamente</button>
                    <button onClick={runOCR} className="flex-1 bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase text-xs shadow-xl">Processar Texto</button>
                 </div>
               )}
            </div>
          )}
          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}

      {/* VIEW: EDITOR DO DOCUMENTO */}
      {view === 'editor' && activeDoc && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4">
           <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                 <h3 className="text-2xl font-black uppercase italic text-slate-800 dark:text-white">{activeDoc.title}</h3>
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{pages.length} Páginas Digitalizadas</p>
              </div>
              <div className="flex gap-2">
                 <button onClick={cleanAllText} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-xl font-black uppercase text-[9px]">Normalizar Tudo</button>
                 <button onClick={exportPDF} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[9px] shadow-lg">Exportar PDF</button>
              </div>
           </div>

           <div className="space-y-6">
              {pages.map((page, idx) => (
                <div key={page.id} className="bg-white dark:bg-slate-800 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[450px]">
                   <div className="lg:w-1/3 bg-slate-100 dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 relative">
                      <img src={page.image} className="w-full h-full object-cover grayscale opacity-80" />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black italic shadow-lg">p.{page.index}</div>
                   </div>
                   <div className="flex-1 p-8 md:p-12 flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                         <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Texto Extraído Localmente</span>
                         <button className="text-indigo-600 font-black uppercase text-[9px] hover:underline">Vincular ao Estúdio</button>
                      </div>
                      <textarea 
                        className="flex-1 w-full bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 bible-text text-base md:text-xl italic leading-relaxed text-slate-700 dark:text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none border border-slate-100 dark:border-slate-800"
                        value={page.text}
                        onChange={(e) => {
                          const newPages = [...pages];
                          newPages[idx].text = e.target.value;
                          setPages(newPages);
                          saveOCRPage(newPages[idx]);
                        }}
                      />
                   </div>
                </div>
              ))}
              
              {pages.length === 0 && (
                <div className="py-32 text-center bg-white dark:bg-slate-800 rounded-[60px] border-4 border-dashed border-slate-100 dark:border-slate-800">
                   <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-500 mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                   </div>
                   <h4 className="text-xl font-black text-slate-400 uppercase tracking-tighter italic">Nenhuma página capturada</h4>
                   <button onClick={startCamera} className="mt-8 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl">Iniciar Captura</button>
                </div>
              )}
           </div>
        </div>
      )}

      {/* FOOTER LEGAL */}
      <footer className="mt-12 p-8 border-t border-slate-100 dark:border-slate-800 text-center">
         <div className="max-w-2xl mx-auto p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-800">
            <p className="text-[10px] font-bold text-amber-600 leading-relaxed uppercase">
              ⚠️ AVISO LEGAL: Este módulo destina-se a uso pessoal. Não distribua material protegido por direitos autorais sem permissão. 
              O processamento é 100% local; o app NÃO envia suas imagens ou textos para a internet.
            </p>
         </div>
         <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mt-8">Dabar Architecture • Private Data Shield</p>
      </footer>

      {showNewDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-2xl max-w-md w-full border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-black uppercase tracking-tighter text-slate-800 dark:text-white mb-4 italic">Novo Documento</h3>
            <input 
              type="text"
              autoFocus
              value={newDocTitle}
              onChange={(e) => setNewDocTitle(e.target.value)}
              placeholder="Ex: Livro de Teologia Pt 1"
              className="w-full text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-none outline-none font-bold text-sm mb-6"
            />
            <div className="flex gap-4">
              <button 
                onClick={() => { setShowNewDocModal(false); setNewDocTitle(''); }}
                className="flex-1 py-4 rounded-2xl font-black uppercase text-[10px] text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleCreateDocSubmit}
                className="flex-1 py-4 rounded-2xl font-black uppercase text-[10px] text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Criar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LibraryExplorer;
