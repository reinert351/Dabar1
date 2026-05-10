import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, BookOpen, Quote, Shield, LayoutGrid, List, Columns, Play } from 'lucide-react';
import { ESCHATOLOGY_DATA, ESCHATOLOGY_VIEWS, EschatologyTopic } from '../data/eschatology_data';
import InjectButton from './InjectButton';
import { CaptureTarget } from '../types';

interface EschatologyTabProps {
  captureTarget?: CaptureTarget | null;
}

const EschatologyTab: React.FC<EschatologyTabProps> = ({ captureTarget }) => {
  const [selectedTopic, setSelectedTopic] = useState<EschatologyTopic>(ESCHATOLOGY_DATA[0]);
  const [activeViews, setActiveViews] = useState<string[]>(['dispensational', 'historical', 'amillennial', 'postmillennial']);
  const [viewMode, setViewMode] = useState<'grid' | 'comparison'>('comparison');

  const toggleView = (viewId: string) => {
    setActiveViews(prev => 
      prev.includes(viewId) 
        ? prev.filter(v => v !== viewId) 
        : [...prev, viewId]
    );
  };

  const handlePlayTTS = (topic: EschatologyTopic) => {
    const text = `Tema: ${topic.title}. ${topic.description}. ` + 
      activeViews.map(v => {
        const view = ESCHATOLOGY_VIEWS[v as keyof typeof ESCHATOLOGY_VIEWS];
        return `Visão ${view.name}: ${topic.views[v as keyof typeof topic.views]}`;
      }).join(' ');

    window.dispatchEvent(new CustomEvent('dabar-play-tts', {
      detail: { 
        title: topic.title, 
        subtitle: 'Escatologia Comparada', 
        text 
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 pb-32">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Estudo Profético</span>
              <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px]">ESC-04</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">
              Escatologia <span className="text-amber-500">Comparada</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
              Analise as quatro principais linhas de interpretação das profecias bíblicas. Compare visões sobre o milênio, a tribulação e o estado final das coisas de forma cirúrgica.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setViewMode(viewMode === 'grid' ? 'comparison' : 'grid')}
              className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              {viewMode === 'grid' ? <Columns className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
              Alternar Modo
            </button>
            <button 
              onClick={() => handlePlayTTS(selectedTopic)}
              className="flex items-center gap-2 bg-amber-500 text-slate-950 px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              <Play className="w-4 h-4 fill-current" />
              Ouvir Resumo
            </button>
          </div>
        </header>

        {/* Filters and Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Topics Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] px-2">Principais Temas</h3>
            <div className="space-y-2">
              {ESCHATOLOGY_DATA.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left p-4 rounded-[24px] border transition-all duration-300 group relative overflow-hidden ${
                    selectedTopic.id === topic.id 
                    ? 'bg-white dark:bg-slate-900 border-amber-500 shadow-xl scale-[1.02] z-10' 
                    : 'bg-transparent border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="relative z-10">
                    <h4 className={`text-sm font-black uppercase tracking-tight mb-1 transition-colors ${selectedTopic.id === topic.id ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                      {topic.title}
                    </h4>
                    <div className="flex gap-1 overflow-hidden">
                      {topic.refs.slice(0, 2).map((ref, i) => (
                        <span key={i} className="text-[8px] font-bold text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{ref}</span>
                      ))}
                    </div>
                  </div>
                  {selectedTopic.id === topic.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-[32px] border border-indigo-100 dark:border-indigo-900/30">
               <div className="flex items-center gap-2 mb-4">
                 <Shield className="w-5 h-5 text-indigo-500" />
                 <h4 className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Filtros de Tese</h4>
               </div>
               <div className="space-y-3">
                 {Object.values(ESCHATOLOGY_VIEWS).map(view => (
                   <label key={view.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox" 
                          checked={activeViews.includes(view.id)}
                          onChange={() => toggleView(view.id)}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border-2 border-slate-200 dark:border-slate-800 rounded-md peer-checked:border-amber-500 peer-checked:bg-amber-500 transition-all"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 text-slate-900">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-tight transition-colors ${activeViews.includes(view.id) ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-600'}`}>
                        {view.name}
                      </span>
                   </label>
                 ))}
               </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div 
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>

              <div className="relative z-10 space-y-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none italic">
                      {selectedTopic.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-serif italic">
                      {selectedTopic.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTopic.refs.map((ref, i) => (
                      <span key={i} className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-4 py-2 rounded-2xl text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  <AnimatePresence mode="popLayout">
                    {activeViews.map(viewId => {
                      const viewInfo = ESCHATOLOGY_VIEWS[viewId as keyof typeof ESCHATOLOGY_VIEWS];
                      return (
                        <motion.div
                          key={viewId}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className={`group relative p-8 rounded-[32px] border-l-[12px] ${viewInfo.borderClass} ${viewInfo.bgClass} transition-all hover:shadow-xl hover:-translate-y-1`}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <div className="space-y-1">
                              <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] ${viewInfo.textClass}`}>
                                {viewInfo.name}
                              </h4>
                              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-bold opacity-70">Posição Teológica Tradicional</p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                               <InjectButton 
                                 captureTarget={captureTarget}
                                 title={selectedTopic.title}
                                 content={`Visão ${viewInfo.name}: ${selectedTopic.views[viewId as keyof typeof selectedTopic.views]}`}
                               />
                            </div>
                          </div>
                          <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl font-medium tracking-tight leading-relaxed italic bible-text opacity-90">
                            "{selectedTopic.views[viewId as keyof typeof selectedTopic.views]}"
                          </p>

                          {/* Decorative quote icon */}
                          <Quote className="absolute bottom-6 right-6 w-12 h-12 text-slate-400/10 pointer-events-none" />
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Comparison Table Mode Additional Info */}
            <div className="bg-slate-900 rounded-[32px] p-8 border border-slate-700/50 flex flex-col md:flex-row items-center gap-8 shadow-inner overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-30 pointer-events-none"></div>
               <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20 rotate-3 animate-pulse">
                  <Info className="w-8 h-8 text-slate-950" />
               </div>
               <div className="flex-1 text-center md:text-left space-y-2 relative z-10">
                  <h4 className="text-white font-black uppercase tracking-widest text-[11px]">Nota Hermenêutica</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    As divergências escatológicas geralmente derivam de como cada escola aborda o <span className="text-amber-500 font-bold">literalismo versus simbolismo</span> em textos apocalípticos. O Dabar-Logos apresenta essas visões para que o exegeta possa pesar as evidências bíblicas com clareza.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EschatologyTab;
