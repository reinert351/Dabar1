import React, { useState } from 'react';
import { generateTeiaOffline, enrichTeiaWithAI } from '../services/graph_engine';
import { TeiaNode, TeiaGraph, UserState, Sermon, SermonBlock } from '../types';
import { saveTeiaCache, getTeiaCache, getSermons, saveSermon } from '../services/database';
import GraphCanvas from './GraphCanvas';
import { ICON_SERMON, ICON_BIBLE, ICON_ASSISTANT } from '../constants';

const TeiaTab: React.FC<{ userState: UserState, onNavigate: (tab: string, metadata?: any) => void }> = ({ userState, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [graph, setGraph] = useState<TeiaGraph | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnriching, setIsEnriching] = useState(false);
  const [selectedNode, setSelectedNode] = useState<TeiaNode | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    const hash = btoa(query.toLowerCase().trim());
    const cached = await getTeiaCache(hash);
    
    if (cached) {
      setGraph(cached);
      setIsLoading(false);
      return;
    }

    const result = await generateTeiaOffline(query);
    await saveTeiaCache(result);
    setGraph(result);
    setIsLoading(false);
  };

  const handleExpand = async () => {
    if (!selectedNode || !graph) return;
    setIsEnriching(true);
    const result = await generateTeiaOffline(selectedNode.title, graph);
    setGraph(result);
    setIsEnriching(false);
  };

  const handleAIEnrich = async () => {
    if (!selectedNode || !graph) return;
    setIsEnriching(true);
    const enriched = await enrichTeiaWithAI(graph, selectedNode);
    setGraph(enriched);
    setIsEnriching(false);
  };

  const saveToStudio = async (node: TeiaNode) => {
    const sermons = await getSermons();
    let target = sermons.find(s => s.status === 'draft') || sermons[0];
    if (!target) return alert("Crie um projeto no Estúdio.");

    const newBlock: SermonBlock = {
      id: `teia_${Date.now()}`,
      type: 'ai-commentary',
      title: `Teia Insight: ${node.title}`,
      content: `${node.summary}\n\nFontes: ${node.refs.join(', ') || 'Base Hermenêutica Local'}`,
    };

    await saveSermon({ ...target, blocks: [...target.blocks, newBlock] });
    alert("Inserido no Estúdio Dabar.");
  };

   const handleNavigateToSource = () => {
    if (!selectedNode) return;
    
    switch (selectedNode.type) {
      case 'bible_ref':
        onNavigate('bible', { ref: selectedNode.refs[0] });
        break;
      case 'king':
        onNavigate('kings', { search: selectedNode.title });
        break;
      case 'event':
        onNavigate('timeline', { search: selectedNode.title });
        break;
      case 'prophecy':
        onNavigate('prophecies', { search: selectedNode.title });
        break;
      case 'doctrine':
      case 'theme':
        onNavigate('hub', { search: selectedNode.title });
        break;
      case 'user_sermon':
        onNavigate('sermons');
        break;
      default:
        onNavigate('bible');
    }
  };

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in pb-40">
      {/* Busca Estilo Terminal High-Tech */}
      <div className="max-w-4xl mx-auto w-full">
        <div className="relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-[30px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
           <div className="relative bg-white dark:bg-slate-900 rounded-[25px] flex items-center overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="pl-6 text-indigo-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <input 
                type="text" 
                placeholder="Escavar conexões teológicas (ex: Tabernáculo)..."
                className="w-full bg-transparent border-none px-6 py-6 text-lg font-black uppercase italic tracking-widest text-slate-800 dark:text-white outline-none placeholder:text-slate-400 dark:placeholder:text-slate-700"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
              />
              <button 
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-indigo-600 text-white h-full px-10 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-indigo-700 transition-all border-l border-white/10"
              >
                {isLoading ? 'Escaneando...' : 'Executar'}
              </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
        <div className={selectedNode ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'}>
          <GraphCanvas 
            nodes={graph?.nodes || []} 
            edges={graph?.edges || []} 
            onNodeClick={setSelectedNode} 
            theme={userState.theme} 
          />
          {!graph && (
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center p-10">
               <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-slate-700 border border-slate-800 mb-6">
                  {ICON_ASSISTANT('w-12 h-12')}
               </div>
               <h3 className="text-xl font-black text-slate-500 uppercase tracking-[0.4em] italic mb-2">Link Neural em Espera</h3>
               <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">Insira um conceito teológico para iniciar o mapeamento</p>
            </div>
          )}
        </div>

        {selectedNode && (
          <div className="lg:col-span-5 xl:col-span-4 animate-in slide-in-from-right-10 duration-500">
             <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[45px] md:rounded-[60px] border border-slate-100 dark:border-white/10 shadow-2xl p-8 md:p-12 sticky top-24 overflow-hidden">
                {/* Glow de Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="relative z-10">
                   <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                         <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.3em]">Telemetria do Nó</span>
                      </div>
                      <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-rose-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                   </div>
                   
                   <div className="mb-10">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
                         {selectedNode.type === 'theme' ? 'Tema' : 
                          selectedNode.type === 'bible_ref' ? 'Referência Bíblica' : 
                          selectedNode.type === 'person' ? 'Personagem' : 
                          selectedNode.type === 'doctrine' ? 'Doutrina' : 
                          selectedNode.type === 'king' ? 'Rei / Liderança' :
                          selectedNode.type === 'event' ? 'Evento Cronológico' :
                          selectedNode.type === 'prophecy' ? 'Profecia' : 'Sermão'}
                       </span>
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none mb-4">{selectedNode.title}</h3>
                      <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
                   </div>
                   
                   <div className="bg-slate-50 dark:bg-black/40 p-8 rounded-[40px] mb-10 border border-slate-100 dark:border-white/5 shadow-inner">
                      <p className="bible-text text-lg md:text-xl italic text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                         "{selectedNode.summary}"
                      </p>
                   </div>

                   <div className="grid grid-cols-2 gap-4 mb-10">
                      <ActionButton 
                        onClick={handleExpand} 
                        label="Exploração" 
                        sub="Expande Local" 
                        icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>}
                      />
                      <ActionButton 
                        onClick={handleAIEnrich} 
                        disabled={isEnriching}
                        label="Dabar AI" 
                        sub={isEnriching ? "Processando..." : "Enriquecer Dados"} 
                        icon={isEnriching ? <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div> : ICON_ASSISTANT('w-5 h-5')}
                        color="text-emerald-500"
                      />
                   </div>

                   <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-white/5">
                      <button 
                        onClick={() => saveToStudio(selectedNode)}
                        className="w-full bg-indigo-600 text-white py-5 rounded-[25px] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 flex items-center justify-center gap-3 transition-all"
                      >
                         {ICON_SERMON('w-5 h-5')} Injetar no Estúdio
                      </button>
                      <button 
                        onClick={handleNavigateToSource}
                        className="w-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 py-5 rounded-[25px] font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                      >
                         {selectedNode.type === 'bible_ref' ? ICON_BIBLE('w-5 h-5') : 
                          selectedNode.type === 'king' ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> :
                          selectedNode.type === 'event' ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> :
                          selectedNode.type === 'prophecy' ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> :
                          ICON_BIBLE('w-5 h-5')} 
                         {selectedNode.type === 'bible_ref' ? 'Ver na Bíblia' : 
                          selectedNode.type === 'king' ? 'Ver na Galeria de Reis' :
                          selectedNode.type === 'event' ? 'Ver na Cronologia' :
                          selectedNode.type === 'prophecy' ? 'Ver no Cânon Profético' :
                          selectedNode.type === 'doctrine' || selectedNode.type === 'theme' ? 'Ver no Dabar Hub' : 'Explorar Fonte'}
                      </button>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ActionButton = ({ onClick, label, sub, icon, color = "text-indigo-500", disabled = false }: any) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className="bg-white dark:bg-white/5 p-4 rounded-[30px] border border-slate-100 dark:border-white/5 text-left flex flex-col gap-2 transition-all hover:border-indigo-500 group"
  >
     <div className={`${color} group-hover:scale-110 transition-transform`}>{icon}</div>
     <div>
        <p className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-tighter">{label}</p>
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{sub}</p>
     </div>
  </button>
);

export default TeiaTab;
