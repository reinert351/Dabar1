
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getVerseTokens, getVerseById, getStrongEntry, getSermons, saveSermon } from '../services/database';
import { BIBLE_METADATA, ICON_STRONG, ICON_BIBLE, ICON_SERMON, ICON_STUDY } from '../constants';
import { StrongToken, StrongEntry, UserState, SermonBlock } from '../types';

interface LabNode {
  id: string;
  type: 'word' | 'strong' | 'note';
  text: string;
  x: number;
  y: number;
  data?: any;
}

interface LabConnection {
  from: string;
  to: string;
}

const ExegesisLab: React.FC<{ userState: UserState }> = ({ userState }) => {
  const [verseRef, setVerseRef] = useState('');
  const [nodes, setNodes] = useState<LabNode[]>([]);
  const [connections, setConnections] = useState<LabConnection[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const parseReference = (input: string): string => {
    const trimmed = input.trim();
    if (!trimmed) return '';

    // Match pattern: "Book Name Chapter:Verse" or "Book Name Chapter Verse"
    const match = trimmed.match(/^(.+?)\s+(\d+)[:\s](\d+)$/);
    if (!match) return trimmed.toUpperCase();

    const [_, bookPart, chapter, verse] = match;
    const normalizedBook = bookPart.toLowerCase().trim();

    // Find book ID by name or abbreviation
    const bookId = Object.keys(BIBLE_METADATA).find(id => {
      const meta = BIBLE_METADATA[id];
      return meta.name.toLowerCase() === normalizedBook || 
             meta.abbreviation.toLowerCase() === normalizedBook ||
             id.toLowerCase() === normalizedBook;
    });

    if (bookId) {
      return `${bookId} ${chapter}:${verse}`;
    }

    return trimmed.toUpperCase();
  };

  const handleExplodeVerse = async () => {
    if (!verseRef.trim()) return;
    setIsLoading(true);
    
    try {
      const parsedRef = parseReference(verseRef);
      const verse = await getVerseById(parsedRef);
      
      if (!verse) {
        alert("Versículo não encontrado para esta referência.");
        setIsLoading(false);
        return;
      }

      const tokens = await getVerseTokens(parsedRef, verse.text);
      
      if (tokens.length === 0) {
        alert("Não foi possível gerar dados Strong para este versículo.");
        setIsLoading(false);
        return;
      }

      const newNodes: LabNode[] = tokens.map((t, i) => ({
        id: `word_${i}`,
        type: 'word',
        text: t.text || t.surface || t.t || '',
        x: 100 + (i * 120) % 600,
        y: 100 + Math.floor(i / 5) * 100,
        data: t
      }));

      setNodes(newNodes);
      setConnections([]);
      setSelectedNodeId(null);
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar versículo.");
    } finally {
      setIsLoading(false);
    }
  };

  const addStrongNode = async (token: StrongToken, parentId: string) => {
    const strongId = Array.isArray(token.strong) ? token.strong[0] : token.strong;
    if (!strongId) return;
    
    const entry = await getStrongEntry(strongId);
    if (!entry) return;

    const parentNode = nodes.find(n => n.id === parentId);
    const newNode: LabNode = {
      id: `strong_${strongId}_${Date.now()}`,
      type: 'strong',
      text: `${strongId}: ${entry.transliteration || entry.original}`,
      x: (parentNode?.x || 0) + 50,
      y: (parentNode?.y || 0) + 100,
      data: entry
    };

    setNodes(prev => [...prev, newNode]);
    setConnections(prev => [...prev, { from: parentId, to: newNode.id }]);
  };

  const addNoteNode = (parentId: string) => {
    const parentNode = nodes.find(n => n.id === parentId);
    const newNode: LabNode = {
      id: `note_${Date.now()}`,
      type: 'note',
      text: 'Nova Anotação Exegética...',
      x: (parentNode?.x || 0) + 150,
      y: (parentNode?.y || 0) + 50
    };

    setNodes(prev => [...prev, newNode]);
    setConnections(prev => [...prev, { from: parentId, to: newNode.id }]);
  };

  const updateNodeText = (id: string, text: string) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, text } : n));
  };

  const deleteNode = (id: string) => {
    setNodes(prev => prev.filter(n => n.id !== id));
    setConnections(prev => prev.filter(c => c.from !== id && c.to !== id));
    if (selectedNodeId === id) setSelectedNodeId(null);
  };

  const saveToStudio = async () => {
    if (nodes.length === 0) return;
    
    const sermons = await getSermons();
    let target = sermons.find(s => s.status === 'draft') || sermons[0];
    if (!target) return alert("Crie um projeto no Estúdio.");

    const content = nodes.map(n => {
      if (n.type === 'word') return `[PALAVRA] ${n.text}`;
      if (n.type === 'strong') return `[STRONG] ${n.text}\nSignificado: ${n.data?.definition || 'N/A'}`;
      if (n.type === 'note') return `[NOTA] ${n.text}`;
      return '';
    }).join('\n\n');

    const newBlock: SermonBlock = {
      id: `exegesis_${Date.now()}`,
      type: 'exegesis',
      title: `Exegese Visual: ${verseRef}`,
      content: content,
    };

    await saveSermon({ ...target, blocks: [...target.blocks, newBlock] });
    alert("Análise exegética injetada no Estúdio.");
  };

  const addManualWord = (text: string) => {
    if (!text.trim()) return;
    const newNode: LabNode = {
      id: `manual_${Date.now()}`,
      type: 'word',
      text: text.trim(),
      x: 300,
      y: 300,
      data: { surface: text.trim(), strong: '' }
    };
    setNodes(prev => [...prev, newNode]);
  };

  const selectedNode = nodes.find(n => n.id === selectedNodeId);

  return (
    <div className="h-full flex flex-col gap-6 animate-in fade-in duration-500 pb-10">
      {/* HEADER / SEARCH */}
      <div className="bg-slate-900/50 p-6 rounded-[30px] border border-white/5 space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 items-end">
          {/* Verse Search */}
          <div className="flex-1 w-full space-y-2">
            <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] ml-2">Explodir Versículo</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-indigo-400">
                {ICON_BIBLE('w-5 h-5')}
              </div>
              <input 
                type="text" 
                placeholder="EX: João 1:1"
                className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white font-black uppercase italic tracking-widest outline-none focus:border-indigo-500 transition-all"
                value={verseRef}
                onChange={e => setVerseRef(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleExplodeVerse()}
              />
            </div>
          </div>

          {/* Manual Word */}
          <div className="flex-1 w-full space-y-2">
            <label className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] ml-2">Adicionar Palavra Manual</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-emerald-400">
                {ICON_STUDY('w-5 h-5')}
              </div>
              <input 
                type="text" 
                placeholder="DIGITE UMA PALAVRA..."
                className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white font-black uppercase italic tracking-widest outline-none focus:border-emerald-500 transition-all"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    addManualWord((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
                  }
                }}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full lg:w-auto">
            <button 
              onClick={handleExplodeVerse}
              disabled={isLoading}
              className="flex-1 lg:flex-none bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black uppercase italic tracking-widest transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? '...' : 'Explodir'}
            </button>
            <button 
              onClick={saveToStudio}
              className="flex-1 lg:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black uppercase italic tracking-widest transition-all flex items-center justify-center gap-3"
            >
              {ICON_SERMON('w-5 h-5')} Salvar
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        {/* CANVAS AREA */}
        <div 
          ref={containerRef}
          className="flex-1 bg-slate-950 rounded-[40px] border border-white/5 relative overflow-hidden cursor-crosshair shadow-inner"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

          {/* Connections (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              return (
                <line 
                  key={i}
                  x1={fromNode.x + 60} 
                  y1={fromNode.y + 30} 
                  x2={toNode.x + 60} 
                  y2={toNode.y + 30} 
                  stroke="#4f46e5" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                  className="opacity-40"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map(node => (
            <motion.div
              key={node.id}
              drag
              dragMomentum={false}
              onDrag={(e, info) => {
                setNodes(prev => prev.map(n => n.id === node.id ? { ...n, x: n.x + info.delta.x, y: n.y + info.delta.y } : n));
              }}
              onClick={() => setSelectedNodeId(node.id)}
              className={`absolute w-32 md:w-40 p-4 rounded-2xl border cursor-move transition-shadow ${
                selectedNodeId === node.id ? 'border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] z-20' : 'border-white/10 shadow-xl z-10'
              } ${
                node.type === 'word' ? 'bg-slate-900' : 
                node.type === 'strong' ? 'bg-indigo-950/40' : 'bg-emerald-950/40'
              }`}
              style={{ left: node.x, top: node.y }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-widest opacity-50">
                  {node.type === 'word' ? 'Palavra' : node.type === 'strong' ? 'Strong' : 'Nota'}
                </span>
                {node.type === 'note' ? (
                  <textarea 
                    className="bg-transparent border-none text-xs text-white outline-none resize-none h-16 bible-text"
                    value={node.text}
                    onChange={e => updateNodeText(node.id, e.target.value)}
                  />
                ) : (
                  <p className="text-sm font-bold text-white uppercase italic tracking-tighter truncate">
                    {node.text}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {nodes.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <div className="w-24 h-24 bg-indigo-600/10 rounded-full flex items-center justify-center text-indigo-500 mb-6 animate-pulse">
                {ICON_STUDY('w-12 h-12')}
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">Laboratório de Exegese</h3>
              <p className="text-slate-500 max-w-sm italic">
                Insira um versículo para explodir o texto em componentes exegéticos e iniciar sua análise visual.
              </p>
            </div>
          )}
        </div>

        {/* SIDEBAR DETAILS */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div 
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="w-80 bg-slate-900 border border-white/5 rounded-[40px] p-8 flex flex-col gap-8 overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Propriedades</span>
                <button onClick={() => setSelectedNodeId(null)} className="text-slate-500 hover:text-white transition-colors">✕</button>
              </div>

              <div>
                <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">
                  {selectedNode.type === 'word' ? selectedNode.text : 'Detalhes'}
                </h4>
                <div className="h-1 w-12 bg-indigo-600 rounded-full"></div>
              </div>

              {selectedNode.type === 'word' && (
                <div className="space-y-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Strong ID</p>
                    <p className="text-xl font-black text-white italic">{selectedNode.data?.strong || 'N/A'}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <button 
                      onClick={() => addStrongNode(selectedNode.data, selectedNode.id)}
                      className="w-full bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest border border-indigo-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      {ICON_STRONG('w-4 h-4')} Expandir Strong
                    </button>
                    <button 
                      onClick={() => addNoteNode(selectedNode.id)}
                      className="w-full bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest border border-emerald-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      {ICON_STUDY('w-4 h-4')} Adicionar Nota
                    </button>
                  </div>
                </div>
              )}

              {selectedNode.type === 'strong' && (
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Definição</p>
                      <p className="text-sm text-slate-300 italic leading-relaxed">
                        {selectedNode.data?.definition || 'Sem definição disponível.'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Transliteração</p>
                      <p className="text-lg font-black text-indigo-400 italic">{selectedNode.data?.transliteration || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-auto pt-6 border-t border-white/5">
                <button 
                  onClick={() => deleteNode(selectedNode.id)}
                  className="w-full text-rose-500 hover:text-rose-400 font-black uppercase text-[10px] tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  Remover do Lab
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExegesisLab;
