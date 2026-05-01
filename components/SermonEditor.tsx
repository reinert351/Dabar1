
import React, { useState, useEffect } from 'react';
import { Sermon, SermonBlock, SermonBlockType, CaptureTarget } from '../types';
import { getSermons, saveSermon } from '../services/database';
import { motion, AnimatePresence, Reorder } from 'motion/react';

// Importação dinâmica para evitar bloqueio de boot
const getPdfLib = async () => {
  // @ts-ignore
  return await import('https://esm.sh/pdf-lib@1.17.1');
};
import { buildOfflineOutline } from '../engine/homiletic/builder';
import { outlineToSermonBlocks } from '../engine/homiletic/toBlocks';

interface SermonEditorProps {
  sermon: Sermon;
  onSave: (sermon: Sermon) => void;
  onClose: () => void;
  onDelete: () => void;
  onPulpit: () => void;
  captureTarget: CaptureTarget | null;
  setCaptureTarget: (target: CaptureTarget | null) => void;
}

const SermonEditor: React.FC<SermonEditorProps> = ({ 
  sermon, onSave, onClose, onDelete, onPulpit, captureTarget, setCaptureTarget 
}) => {
  const [localSermon, setLocalSermon] = useState<Sermon>(sermon);
  const [isExporting, setIsExporting] = useState(false);
  const [focusBlockId, setFocusBlockId] = useState<string | null>(null);

  useEffect(() => {
    setLocalSermon(sermon);
  }, [sermon.id, sermon.blocks.length]);

  useEffect(() => {
    const handleGlobalSync = async (e: any) => {
      if (e.detail?.sermonId === localSermon.id) {
        try {
          const list = await getSermons();
          const updated = list.find(s => s.id === localSermon.id);
          if (updated) setLocalSermon(updated);
        } catch (err) { console.error(err); }
      }
    };
    window.addEventListener('dabar-sync', handleGlobalSync);
    return () => window.removeEventListener('dabar-sync', handleGlobalSync);
  }, [localSermon.id]);

  const handleTitanGenerate = async () => {
    const textBase = localSermon.blocks.find(b => b.type === 'text-base');
    const ref = textBase?.content.trim() || "";

    if (!ref) {
      alert("⚠️ Erro: Preencha a referência no bloco Texto Áureo antes de gerar o esboço.");
      return;
    }

    let titleToPass: string | undefined = localSermon.title;
    if (titleToPass === 'Novo Projeto Teológico' || titleToPass.trim() === '') {
      titleToPass = undefined;
    }

    try {
      console.log("[EDITOR-TITAN] Gerando esboço para:", ref);
      const outline = await buildOfflineOutline([ref], { topic: titleToPass });
      const newBlocks = outlineToSermonBlocks(outline);
      
      const updatedSermon = {
        ...localSermon,
        blocks: [...localSermon.blocks, ...newBlocks]
      };
      
      setLocalSermon(updatedSermon);
      onSave(updatedSermon);
      alert(`✅ Perícope "${outline.pericopeTitle}" detectada e esboço injetado com sucesso!`);
    } catch (e: any) {
      console.error(e);
      alert("❌ Falha no motor Titan Offline:\n" + e.message);
    }
  };

  const exportProPDF = async () => {
    setIsExporting(true);
    try {
      const { PDFDocument, StandardFonts, rgb } = await getPdfLib();
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      let page = pdfDoc.addPage([595, 842]);
      const { height } = page.getSize();
      let y = height - 50;
      page.drawText('DABAR LOGOS - PROTOCOLO PÚLPITO', { x: 50, y, size: 8, font, color: rgb(0.4, 0.4, 0.7) });
      y -= 30;
      page.drawText((localSermon.title || '').toUpperCase(), { x: 50, y, size: 24, font: fontBold });
      y -= 60;
      localSermon.blocks.forEach((block, idx) => {
        if (y < 100) { page = pdfDoc.addPage([595, 842]); y = height - 50; }
        page.drawRectangle({ x: 45, y: y - 5, width: 5, height: 15, color: rgb(0.3, 0.3, 0.8) });
        page.drawText(`${idx + 1}. ${(block.title || '').toUpperCase()}`, { x: 55, y, size: 12, font: fontBold });
        y -= 20;
        const lines = block.content.split('\n');
        lines.forEach(line => {
          if (y < 50) { page = pdfDoc.addPage([595, 842]); y = height - 50; }
          page.drawText(line.substring(0, 85), { x: 50, y, size: 11, font });
          y -= 15;
        });
        y -= 20;
      });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `sermao-${localSermon.title.replace(/ /g, '-')}.pdf`;
      a.click();
    } catch (e) { 
      console.error(e);
      alert("Erro ao gerar PDF."); 
    } finally { setIsExporting(false); }
  };

  const addBlock = (type: SermonBlockType) => {
    const newBlock: SermonBlock = { id: `b_${Date.now()}`, type, title: getBlockLabel(type), content: '' };
    const updated = { ...localSermon, blocks: [...localSermon.blocks, newBlock] };
    setLocalSermon(updated);
    onSave(updated);
  };

  const applyTemplate = (templateName: string) => {
    let newBlocks: SermonBlock[] = [];
    const now = Date.now();
    
    if (templateName === 'expositivo') {
      newBlocks = [
        { id: `t1_${now}`, type: 'text-base', title: 'Texto Áureo', content: '' },
        { id: `t2_${now}`, type: 'introduction', title: 'Introdução Contextual', content: '' },
        { id: `t3_${now}`, type: 'exegesis', title: 'Exegese do Texto', content: '' },
        { id: `t4_${now}`, type: 'point', title: 'Divisão 1', content: '' },
        { id: `t5_${now}`, type: 'point', title: 'Divisão 2', content: '' },
        { id: `t6_${now}`, type: 'application', title: 'Aplicação Prática', content: '' },
        { id: `t7_${now}`, type: 'conclusion', title: 'Conclusão e Apelo', content: '' },
      ];
    } else if (templateName === 'tematico') {
      newBlocks = [
        { id: `t1_${now}`, type: 'introduction', title: 'Definição do Tema', content: '' },
        { id: `t2_${now}`, type: 'point', title: 'Argumento Bíblico 1', content: '' },
        { id: `t3_${now}`, type: 'point', title: 'Argumento Bíblico 2', content: '' },
        { id: `t4_${now}`, type: 'point', title: 'Argumento Bíblico 3', content: '' },
        { id: `t5_${now}`, type: 'conclusion', title: 'Síntese e Decisão', content: '' },
      ];
    }

    if (newBlocks.length > 0) {
      const updated = { ...localSermon, blocks: [...localSermon.blocks, ...newBlocks] };
      setLocalSermon(updated);
      onSave(updated);
      alert(`Template ${templateName.toUpperCase()} aplicado!`);
    }
  };

  const updateBlock = (id: string, content: string, title?: string) => {
    const updated = {
      ...localSermon,
      blocks: localSermon.blocks.map(b => b.id === id ? { ...b, content, title: title ?? b.title } : b)
    };
    setLocalSermon(updated);
    onSave(updated);
  };

  const updateMetadata = (key: string, value: string) => {
    const updated = {
      ...localSermon,
      metadata: { ...(localSermon.metadata || {}), [key]: value }
    };
    setLocalSermon(updated);
    onSave(updated);
  };

  const toggleTargetLock = (block: SermonBlock) => {
    setCaptureTarget(captureTarget?.blockId === block.id ? null : {
      sermonId: localSermon.id, blockId: block.id, blockTitle: block.title
    });
  };

  const handleReorder = (newBlocks: SermonBlock[]) => {
    const updated = { ...localSermon, blocks: newBlocks };
    setLocalSermon(updated);
    onSave(updated);
  };

  const renderFocusMode = () => {
    if (!focusBlockId) return null;
    const block = localSermon.blocks.find(b => b.id === focusBlockId);
    if (!block) return null;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-white dark:bg-slate-900 p-10 flex flex-col"
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-black text-slate-400 uppercase tracking-widest italic">Modo Foco: {block.title}</h2>
          <button onClick={() => setFocusBlockId(null)} className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-black uppercase text-xs">Sair do Foco</button>
        </div>
        <textarea 
          autoFocus
          value={block.content}
          onChange={e => updateBlock(block.id, e.target.value)}
          className="flex-1 w-full bg-transparent bible-text text-4xl leading-relaxed outline-none dark:text-white resize-none"
          placeholder="Escreva aqui com foco total..."
        />
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col h-[85vh] bg-slate-50 dark:bg-slate-900 rounded-[50px] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
      <AnimatePresence>
        {renderFocusMode()}
      </AnimatePresence>

      <div className="bg-white dark:bg-slate-800 p-8 border-b border-slate-100 dark:border-slate-700 flex flex-wrap justify-between items-center gap-6">
        <div className="flex-1 min-w-[300px]">
          <input 
            value={localSermon.title}
            onChange={e => setLocalSermon(prev => ({ ...prev, title: e.target.value }))}
            className="text-3xl font-black bg-transparent border-none outline-none dark:text-white uppercase tracking-tighter italic w-full"
            placeholder="Título do Projeto..."
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportProPDF} disabled={isExporting} className="px-6 py-3 bg-amber-500 text-slate-900 rounded-2xl font-black uppercase text-[9px] shadow-lg hover:bg-amber-600 transition-all">
            {isExporting ? 'Processando...' : 'Exportar PDF Pro'}
          </button>
          <button onClick={onPulpit} className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[9px] shadow-lg hover:bg-emerald-700 transition-all">Púlpito</button>
          <button onClick={onDelete} className="px-6 py-3 bg-rose-50 dark:bg-rose-900/20 text-rose-500 rounded-2xl font-black uppercase text-[9px] hover:bg-rose-100 transition-all">Excluir</button>
          <button onClick={onClose} className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-400 rounded-2xl font-black uppercase text-[9px]">Fechar</button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 px-8 pb-8 flex flex-wrap gap-6 items-start border-b border-slate-100 dark:border-slate-700">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-2">Local / Evento</label>
          <input 
            value={localSermon.metadata?.location || ''}
            onChange={e => updateMetadata('location', e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl outline-none text-xs font-bold dark:text-white border border-transparent focus:border-indigo-500 transition-all"
            placeholder="Onde será pregado?"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-2">Público-Alvo</label>
          <input 
            value={localSermon.metadata?.audience || ''}
            onChange={e => updateMetadata('audience', e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl outline-none text-xs font-bold dark:text-white border border-transparent focus:border-indigo-500 transition-all"
            placeholder="Para quem?"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-2">Objetivo Principal</label>
          <input 
            value={localSermon.metadata?.objective || ''}
            onChange={e => updateMetadata('objective', e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl outline-none text-xs font-bold dark:text-white border border-transparent focus:border-indigo-500 transition-all"
            placeholder="Qual o propósito?"
          />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 bg-white dark:bg-slate-800 border-r border-slate-100 dark:border-slate-700 p-6 overflow-y-auto no-scrollbar flex-shrink-0">
           <div className="space-y-6 pb-10">
              <div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-3">Templates Homiléticos</span>
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => applyTemplate('expositivo')} className="text-left p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 font-black text-[9px] uppercase tracking-widest">Expositivo (7 Blocos)</button>
                  <button onClick={() => applyTemplate('tematico')} className="text-left p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 font-black text-[9px] uppercase tracking-widest">Temático (5 Blocos)</button>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-3">Componentes Manuais</span>
                <BlockTool onClick={() => addBlock('text-base')} label="Texto Áureo" />
                <BlockTool onClick={() => addBlock('introduction')} label="Introdução" />
                <BlockTool onClick={() => addBlock('exegesis')} label="Exegese" />
                <BlockTool onClick={() => addBlock('point')} label="Tópico" />
                <BlockTool onClick={() => addBlock('media-action')} label="Ação de Mídia 🎬" />
                <BlockTool onClick={() => addBlock('application')} label="Aplicação" />
                <BlockTool onClick={() => addBlock('conclusion')} label="Conclusão" />
              </div>
           </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto custom-scroll">
          <Reorder.Group axis="y" values={localSermon.blocks} onReorder={handleReorder} className="max-w-4xl mx-auto space-y-8">
            {localSermon.blocks.map((block, index) => (
              <Reorder.Item 
                key={block.id} 
                value={block}
                className={`group relative bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm transition-all cursor-grab active:cursor-grabbing ${getBlockColorClass(block.type)}`}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-50 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 font-black text-xs">{index + 1}</div>
                    <input 
                      value={block.title}
                      onChange={e => updateBlock(block.id, block.content, e.target.value)}
                      className="font-black text-slate-800 dark:text-white uppercase tracking-widest text-[10px] bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                     <button onClick={() => setFocusBlockId(block.id)} className="p-2 text-slate-200 hover:text-indigo-500" title="Modo Foco">🔍</button>
                     <button onClick={() => toggleTargetLock(block)} className={`p-2 rounded-lg transition-all ${captureTarget?.blockId === block.id ? 'bg-amber-500 text-white shadow-md' : 'text-slate-200 hover:text-amber-500'}`}>🎯</button>
                     <button onClick={() => { if(confirm('Excluir bloco?')) setLocalSermon(p => ({...p, blocks: p.blocks.filter(b => b.id !== block.id)}))}} className="p-2 text-slate-200 hover:text-rose-500">×</button>
                  </div>
                </div>
                <textarea 
                  value={block.content}
                  onChange={e => updateBlock(block.id, e.target.value)}
                  className="w-full bg-slate-50/50 dark:bg-slate-900/30 rounded-3xl p-8 bible-text text-xl leading-relaxed outline-none min-h-[160px] dark:text-slate-100 resize-none"
                  placeholder="..."
                />
                
                {/* Auto-Link Biblical Hint */}
                {block.content.match(/\d?\s?[A-Z][a-z]+\.?\s\d+[:]\d+/) && (
                  <div className="mt-4 flex items-center gap-2 text-[8px] font-black text-indigo-500 uppercase tracking-widest">
                    <span>✨ Referência Bíblica Detectada</span>
                  </div>
                )}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
};

const BlockTool = ({ onClick, label }: any) => (
  <button onClick={onClick} className="w-full text-left p-3 rounded-xl border border-slate-50 dark:border-slate-700 hover:bg-slate-50 transition-all">
    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{label}</span>
  </button>
);

const getBlockLabel = (type: SermonBlockType): string => {
  const labels: Record<string, string> = { 
    'text-base': 'Texto Áureo', 'introduction': 'Introdução', 'exegesis': 'Exegese', 
    'point': 'Tópico Principal', 'application': 'Aplicação', 'conclusion': 'Conclusão',
    'media-action': '🎬 Ação de Mídia', 'prescription': 'Prescrição de Cristo', 'quote': 'Citação'
  };
  return labels[type] || 'Bloco';
};

const getBlockColorClass = (type: SermonBlockType): string => {
  switch (type) {
    case 'text-base': return 'border-l-[8px] border-l-indigo-500';
    case 'introduction': return 'border-l-[8px] border-l-sky-400';
    case 'exegesis': return 'border-l-[8px] border-l-emerald-500';
    case 'point': return 'border-l-[8px] border-l-amber-500';
    case 'application': return 'border-l-[8px] border-l-rose-500';
    case 'conclusion': return 'border-l-[8px] border-l-violet-600';
    case 'media-action': return 'border-l-[8px] border-l-slate-800 bg-slate-50/50';
    case 'prescription': return 'border-l-[8px] border-l-rose-600';
    case 'quote': return 'border-l-[8px] border-l-indigo-300';
    default: return 'border-l-[8px] border-l-slate-200';
  }
};

export default SermonEditor;
