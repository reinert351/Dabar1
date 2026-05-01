import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { AcademyModule } from '../types';

interface CertificateModalProps {
  module: AcademyModule;
  studentName: string;
  setStudentName: (name: string) => void;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ module, studentName, setStudentName, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [tempName, setTempName] = useState(studentName);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // High resolution
        backgroundColor: '#0f172a', // slate-900 to match dark theme
        useCORS: true,
        onclone: (clonedDoc) => {
          const scrollContainer = clonedDoc.getElementById('certificate-scroll-container');
          if (scrollContainer) {
            scrollContainer.style.overflow = 'visible';
            scrollContainer.style.maxHeight = 'none';
            if (scrollContainer.parentElement) {
              scrollContainer.parentElement.style.overflow = 'visible';
              scrollContainer.parentElement.style.maxHeight = 'none';
            }
          }
        }
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `Certificado_${module.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveName = () => {
    setStudentName(tempName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-slate-900 border border-white/10 rounded-[40px] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/50">
          <h2 className="text-xl font-black text-white uppercase italic tracking-tighter">
            🎓 Emissão de Certificado
          </h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-rose-500/20 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div id="certificate-scroll-container" className="p-8 overflow-y-auto flex-1 flex flex-col items-center">
          
          {/* Name Input Form */}
          {!studentName ? (
            <div className="w-full max-w-md bg-slate-800/50 p-8 rounded-3xl border border-white/5 mb-8 text-center animate-in zoom-in">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-lg font-black text-white uppercase tracking-widest mb-2">Nome do Aluno</h3>
              <p className="text-xs text-slate-400 mb-6">Digite seu nome completo como deseja que apareça no certificado oficial.</p>
              
              <input 
                type="text" 
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Ex: João da Silva"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              
              <button 
                onClick={handleSaveName}
                disabled={!tempName.trim()}
                className="w-full py-3 bg-indigo-600 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Nome
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <div className="flex gap-4 mb-8 w-full max-w-3xl justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Aluno:</span>
                  <span className="text-sm font-black text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    {studentName}
                  </span>
                  <button 
                    onClick={() => setStudentName('')}
                    className="text-[10px] text-indigo-400 hover:text-indigo-300 underline uppercase tracking-widest"
                  >
                    Editar
                  </button>
                </div>
                
                <button 
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-amber-500 text-slate-950 font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  {isGenerating ? '⏳ Gerando...' : '📥 Baixar Certificado'}
                </button>
              </div>

              {/* The Certificate (Hidden from screen readers, used for rendering) */}
              <div className="w-full overflow-x-auto pb-8 flex justify-center">
                <div 
                  ref={certificateRef}
                  className="relative w-[800px] h-[565px] bg-slate-900 border-[12px] border-double border-amber-500/30 p-8 flex flex-col items-center justify-between text-center overflow-hidden shrink-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(30,41,59,1) 0%, rgba(15,23,42,1) 100%)'
                  }}
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] -ml-32 -mt-32"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -mr-32 -mb-32"></div>
                  
                  {/* Corner Ornaments */}
                  <div className="absolute top-4 left-4 text-amber-500/20 text-4xl">⚜️</div>
                  <div className="absolute top-4 right-4 text-amber-500/20 text-4xl">⚜️</div>
                  <div className="absolute bottom-4 left-4 text-amber-500/20 text-4xl">⚜️</div>
                  <div className="absolute bottom-4 right-4 text-amber-500/20 text-4xl">⚜️</div>

                  {/* Header */}
                  <div className="mb-4 mt-2">
                    <div className="text-5xl mb-2">🎓</div>
                    <h1 className="text-4xl font-black text-white uppercase tracking-[0.2em] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Dabar Academy
                    </h1>
                    <p className="text-[10px] text-amber-500 uppercase tracking-[0.4em] font-bold">
                      Cátedra de Conhecimento Teológico Avançado
                    </p>
                  </div>

                  {/* Body */}
                  <div className="space-y-4 mb-6 relative z-10 w-full max-w-2xl">
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                      Certificamos que
                    </p>
                    <h2 className="text-5xl font-black text-amber-400 italic tracking-tighter border-b border-white/10 pb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {studentName}
                    </h2>
                    <p className="text-sm text-slate-400 uppercase tracking-widest leading-relaxed">
                      concluiu com excelência acadêmica e aproveitamento superior a 70% todas as avaliações do módulo de doutorado em
                    </p>
                    <h3 className="text-3xl font-black text-white uppercase tracking-widest">
                      {module.title}
                    </h3>
                  </div>

                  {/* Footer */}
                  <div className="w-full flex justify-between items-end px-8 mb-2 relative z-10">
                    <div className="text-center">
                      <div className="w-40 border-b border-white/20 mb-2"></div>
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Data de Emissão</p>
                      <p className="text-[10px] text-white font-medium">{new Date().toLocaleDateString('pt-BR')}</p>
                    </div>
                    
                    <div className="w-24 h-24 rounded-full border-2 border-amber-500/30 flex items-center justify-center bg-amber-500/5 relative">
                      <div className="absolute inset-2 border border-dashed border-amber-500/30 rounded-full"></div>
                      <span className="text-3xl">🏅</span>
                    </div>

                    <div className="text-center">
                      <div className="w-40 border-b border-white/20 mb-2">
                        <p className="text-amber-500 font-signature text-2xl -mb-2">Dabar</p>
                      </div>
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Direção Acadêmica</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
