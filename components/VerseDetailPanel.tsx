import React, { useState, useEffect } from 'react';
import { Verse } from '../types';
import { getLinksForVerse } from '../services/cross_link_engine';
import { ICON_STUDY, ICON_SERMON } from '../constants';
import { BIBLE_CHAINS } from '../data/chains';
import { DITOS_DUROS } from '../data/ditosDuros';
import { addTextToStudio } from '../core/studioFunnel';

interface VerseDetailPanelProps {
  verse: Verse;
  onClose: () => void;
  onSelect: () => void;
  onNavigateToVerse: (ref: string) => void;
}

const VerseDetailPanel: React.FC<VerseDetailPanelProps> = ({ verse, onClose, onSelect, onNavigateToVerse }) => {
  const [expandedChain, setExpandedChain] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'chains' | 'apologetics'>('chains');
  
  const links = getLinksForVerse(verse.id);
  const activeChains = BIBLE_CHAINS.filter(chain => chain.verses.includes(verse.id));
  const ditoDuro = DITOS_DUROS.find(d => d.id === verse.id);

  useEffect(() => {
    if (ditoDuro) {
      setActiveTab('apologetics');
    }
  }, [ditoDuro]);

  return (
    <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in" onClick={onClose}>
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[40px] p-6 md:p-10 shadow-2xl max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-10 md:zoom-in-95" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6 shrink-0">
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">{verse.id}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-rose-500 p-2 bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6" /></svg>
          </button>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2 shrink-0">
          {activeChains.length > 0 && (
            <button 
              onClick={() => setActiveTab('chains')}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'chains' ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              Cadeias Temáticas
            </button>
          )}
          {ditoDuro && (
            <button 
              onClick={() => setActiveTab('apologetics')}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'apologetics' ? 'bg-rose-600 text-white shadow-md' : 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-900/40'}`}
            >
              <span>❓</span> Apologética / Ditos Duros
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto custom-scroll pr-2 space-y-8">
          <div className="animate-in fade-in space-y-8">
              <>
                {/* Cadeias de Referências */}
                {activeTab === 'chains' && activeChains.length > 0 && (
                    <div className="animate-in fade-in">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                        🔗 Cadeias Temáticas (Thompson)
                      </h4>
                      <div className="flex flex-col gap-3">
                        {activeChains.map(chain => {
                          const isExpanded = expandedChain === chain.id;
                          const currentIndex = chain.verses.indexOf(verse.id);
                          const prevVerse = currentIndex > 0 ? chain.verses[currentIndex - 1] : null;
                          const nextVerse = currentIndex < chain.verses.length - 1 ? chain.verses[currentIndex + 1] : null;

                          return (
                            <div key={chain.id} className={`w-full transition-all ${isExpanded ? 'bg-amber-50 dark:bg-amber-900/20 p-5 rounded-[24px] border border-amber-200 dark:border-amber-800/50 shadow-sm' : ''}`}>
                              <button 
                                onClick={() => setExpandedChain(isExpanded ? null : chain.id)}
                                className={`flex items-center gap-3 text-left transition-all w-full ${!isExpanded ? 'bg-amber-50/50 dark:bg-amber-900/10 hover:bg-amber-100 dark:hover:bg-amber-900/30 p-4 rounded-2xl border border-amber-100 dark:border-amber-800/30' : 'mb-4'}`}
                              >
                                <div className="w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center shrink-0">
                                  🔗
                                </div>
                                <div className="flex flex-col flex-1">
                                  <span className="text-sm font-black text-amber-900 dark:text-amber-100 uppercase tracking-tighter">{chain.topic}</span>
                                  {!isExpanded && <span className="text-[10px] text-amber-700 dark:text-amber-400 line-clamp-1">{chain.description}</span>}
                                </div>
                              </button>
                              
                              {isExpanded && (
                                <div className="animate-in slide-in-from-top-2">
                                  <p className="text-sm text-amber-800 dark:text-amber-200 mb-6 italic">{chain.description}</p>
                                  
                                  <div className="relative flex flex-col items-center">
                                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 dark:bg-amber-800/50 -translate-x-1/2"></div>
                                    
                                    {prevVerse && (
                                      <button onClick={() => { onNavigateToVerse(prevVerse); onClose(); }} className="relative z-10 flex flex-col items-center group mb-4">
                                        <span className="text-[8px] font-black uppercase text-amber-500 mb-1">Anterior</span>
                                        <div className="px-4 py-2 bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:border-amber-500 group-hover:text-amber-600 transition-all shadow-sm">
                                          {prevVerse}
                                        </div>
                                      </button>
                                    )}
                                    
                                    <div className="relative z-10 flex flex-col items-center my-2">
                                      <span className="text-[8px] font-black uppercase text-amber-600 mb-1">Atual</span>
                                      <div className="px-5 py-2.5 bg-amber-500 border-2 border-amber-600 rounded-full text-xs font-black text-white shadow-md scale-110">
                                        {verse.id}
                                      </div>
                                    </div>
                                    
                                    {nextVerse && (
                                      <button onClick={() => { onNavigateToVerse(nextVerse); onClose(); }} className="relative z-10 flex flex-col items-center group mt-4">
                                        <span className="text-[8px] font-black uppercase text-amber-500 mb-1">Próximo</span>
                                        <div className="px-4 py-2 bg-white dark:bg-slate-800 border-2 border-amber-200 dark:border-amber-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:border-amber-500 group-hover:text-amber-600 transition-all shadow-sm">
                                          {nextVerse}
                                        </div>
                                      </button>
                                    )}
                                  </div>

                                  <div className="mt-8 pt-4 border-t border-amber-200/50 dark:border-amber-800/50 flex justify-center">
                                    <button 
                                      onClick={() => {
                                        const chainText = `[CADEIA TEMÁTICA: ${chain.topic}]\n${chain.description}\n\nVersículos da Trilha:\n${chain.verses.map(v => v === verse.id ? `-> ${v} (Atual)` : `- ${v}`).join('\n')}`;
                                        addTextToStudio(chainText);
                                        onClose();
                                      }}
                                      className="text-[10px] font-black uppercase tracking-widest text-amber-600 hover:text-amber-700 bg-amber-100 dark:bg-amber-900/40 px-4 py-2 rounded-xl transition-colors"
                                    >
                                      Injetar Trilha Completa no Estúdio
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Apologética / Ditos Duros */}
                  {activeTab === 'apologetics' && ditoDuro && (
                    <div className="animate-in fade-in space-y-6">
                      <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-100 dark:border-rose-800/30">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-600 mb-2 flex items-center gap-2">
                          <span>❓</span> O Problema
                        </h4>
                        <p className="text-base text-rose-900 dark:text-rose-200 font-medium italic leading-relaxed">
                          "{ditoDuro.problem}"
                        </p>
                      </div>
                      
                      <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2 flex items-center gap-2">
                          <span>📖</span> A Resposta (Exegese)
                        </h4>
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                          {ditoDuro.exegesis}
                        </p>
                      </div>
                      
                      <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
                          <span>🧩</span> Harmonização
                        </h4>
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                          {ditoDuro.harmonization}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                        <button 
                          onClick={() => {
                            const text = `[APOLOGÉTICA - ${verse.id}]\n\nO Problema: ${ditoDuro.problem}\n\nA Resposta: ${ditoDuro.exegesis}\n\nHarmonização: ${ditoDuro.harmonization}`;
                            addTextToStudio(text);
                            onClose();
                          }}
                          className="text-[10px] font-black uppercase tracking-widest text-rose-600 hover:text-rose-700 bg-rose-100 dark:bg-rose-900/40 px-4 py-2 rounded-xl transition-colors"
                        >
                          Injetar Defesa no Estúdio
                        </button>
                      </div>
                    </div>
                  )}
              </>
            </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
          <button 
            onClick={() => { onSelect(); onClose(); }} 
            className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
          >
            {ICON_STUDY('w-4 h-4')} Selecionar Versículo
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerseDetailPanel;
