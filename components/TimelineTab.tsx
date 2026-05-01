
import React, { useState } from 'react';
import { DISPENSATIONS_DATA, HISTORICAL_PERIODS_DATA } from '../data';
import { ICON_SERMON, ICON_BIBLE } from '../constants';
import { UserState, CaptureTarget, HistoricalPeriod } from '../types';
import MetanarrativeTimeline from './MetanarrativeTimeline';

// Funil Único
import { addTextToStudio, addRefsToStudio } from '../core/studioFunnel';

interface TimelineTabProps {
  userState: UserState;
  setUserState: any;
  captureTarget?: CaptureTarget | null;
}

const TimelineTab: React.FC<TimelineTabProps> = ({ userState, setUserState, captureTarget }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeLens, setActiveLens] = useState<'dispensations' | 'historical'>('dispensations');

  const handleInject = (title: string, content: string) => {
    addTextToStudio(`[CRONOLOGIA - ${title}]\n${content}`);
  };

  const toggleSermon = (ref: string) => {
    addRefsToStudio([ref]);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-12 animate-in fade-in duration-500 pb-40">
      <header className="bg-white dark:bg-slate-800 p-10 rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-sm">
        <h2 className="text-4xl font-black text-slate-800 dark:text-white italic uppercase tracking-tighter mb-4">Panorama Metanarrativo</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-base leading-relaxed">
          A estrutura cronológica do plano da redenção, mapeando eras, governos e a vinda gloriosa de Cristo.
        </p>
      </header>

      {/* Sincronia Metanarrativa (Criação ao Fim) */}
      <MetanarrativeTimeline />

      <div className="flex gap-4 px-6">
        <button 
          onClick={() => { setActiveLens('dispensations'); setExpandedId(null); }}
          className={`flex-1 py-4 rounded-[30px] font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 border-2 ${activeLens === 'dispensations' ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 hover:border-indigo-200'}`}
        >
          <span className="text-xl">⏳</span> 7 Dispensações
        </button>
        <button 
          onClick={() => { setActiveLens('historical'); setExpandedId(null); }}
          className={`flex-1 py-4 rounded-[30px] font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 border-2 ${activeLens === 'historical' ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 hover:border-indigo-200'}`}
        >
          <span className="text-xl">📜</span> Períodos Históricos
        </button>
      </div>

      <div className="space-y-6">
        {activeLens === 'dispensations' ? (
          <>
            <h3 className="text-xs font-black uppercase text-indigo-600 tracking-[0.4em] ml-6 mb-4 italic">Os 7 Ciclos Dispensacionais (Dados Integrais)</h3>
            
            {DISPENSATIONS_DATA.map((disp, index) => {
              const isExpanded = expandedId === disp.id;

              return (
                <div 
                  key={disp.id}
                  className={`rounded-[40px] border transition-all duration-300 overflow-hidden relative ${isExpanded ? 'bg-white dark:bg-slate-800 shadow-2xl border-slate-200 dark:border-slate-700' : 'bg-white/50 dark:bg-slate-900/50 border-transparent hover:bg-white dark:hover:bg-slate-800'}`}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: disp.color }} />
                  
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : disp.id)}
                    className="w-full flex items-center justify-between p-6 md:p-10 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl italic shadow-lg transition-transform group-hover:scale-110`} style={{ backgroundColor: disp.color }}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter italic ${isExpanded ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                          {disp.title}
                        </h3>
                        <div className="flex gap-4 mt-1">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{disp.period}</span>
                          <span className="text-[10px] font-black uppercase text-indigo-500">Duração: {disp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <button 
                         onClick={(e) => { e.stopPropagation(); toggleSermon(`DISPENSAÇÃO: ${disp.title}`); }}
                         className={`p-4 rounded-2xl transition-all ${userState.savedForSermons.includes(`DISPENSAÇÃO: ${disp.title}`) ? 'bg-amber-500 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-700 text-slate-300 hover:text-amber-500'}`}
                       >
                         {ICON_SERMON('w-6 h-6')}
                       </button>
                       <div className={`p-4 rounded-full transition-transform ${isExpanded ? 'rotate-180 bg-slate-100 dark:bg-slate-700' : 'bg-transparent'}`}>
                         <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                       </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-10 pb-12 space-y-12 animate-in slide-in-from-top-4">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-indigo-950 text-white rounded-[40px] border border-indigo-500/30 shadow-xl relative overflow-hidden group/theo">
                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/theo:opacity-10 transition-opacity">
                             {ICON_BIBLE('w-20 h-20')}
                          </div>
                          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] block mb-4 italic">Definição Exegética Titan</span>
                          <p className="bible-text text-lg md:text-2xl leading-relaxed italic text-indigo-50 font-light">
                            "{disp.exegeticalDefinition}"
                          </p>
                        </div>
                        <div className="p-8 bg-slate-900 text-white rounded-[40px] border border-amber-500/30 shadow-xl relative overflow-hidden group/trans">
                          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/trans:opacity-10 transition-opacity rotate-12">
                             <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] block mb-4 italic">Mecanismo de Transição</span>
                          <p className="bible-text text-lg md:text-2xl leading-relaxed italic text-amber-50 font-light">
                            "{disp.transitionMechanism}"
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800">
                        <p className="bible-text text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic leading-relaxed text-justify">
                          {disp.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-[35px] border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 flex justify-between items-start group/card relative">
                          {captureTarget && (
                            <button onClick={() => handleInject(`Início: ${disp.title}`, disp.startText + " ("+disp.startRef+")")} className="absolute top-4 right-4 text-amber-500 opacity-0 group-hover/card:opacity-100 transition-opacity">🎯</button>
                          )}
                          <div>
                            <span className="text-[10px] font-black text-emerald-500 uppercase block mb-3 tracking-widest">Início da Era</span>
                            <h5 className="text-xl font-black text-slate-800 dark:text-white mb-1 uppercase italic tracking-tighter">{disp.startRef}</h5>
                            <p className="text-sm text-slate-500 font-medium">{disp.startText}</p>
                          </div>
                        </div>
                        <div className="p-8 rounded-[35px] border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 flex justify-between items-start group/card relative">
                          {captureTarget && (
                            <button onClick={() => handleInject(`Fim: ${disp.title}`, disp.endText + " ("+disp.endRef+")")} className="absolute top-4 right-4 text-amber-500 opacity-0 group-hover/card:opacity-100 transition-opacity">🎯</button>
                          )}
                          <div>
                            <span className="text-[10px] font-black text-rose-500 uppercase block mb-3 tracking-widest">Juízo / Término</span>
                            <h5 className="text-xl font-black text-slate-800 dark:text-white mb-1 uppercase italic tracking-tighter">{disp.endRef}</h5>
                            <p className="text-sm text-slate-500 font-medium">{disp.endText}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <DetailBlock title="Responsabilidade" content={disp.responsibility} color="border-indigo-500" />
                        <DetailBlock title="Falha Humana" content={disp.humanFailure} color="border-rose-500" />
                        <DetailBlock title="Juízo Divino" content={disp.divineJudgment} color="border-slate-600" />
                        <DetailBlock title="Graça Manifesta" content={disp.divineGrace} color="border-emerald-500" />
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2 italic underline underline-offset-8">Marcos e Eventos</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {disp.events.map((event, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[35px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group/event hover:border-indigo-300 transition-all relative overflow-hidden">
                              {captureTarget && (
                                 <button onClick={() => handleInject(event.title, event.description)} className="absolute top-6 right-6 p-2 bg-amber-500 text-white rounded-lg opacity-0 group-hover/event:opacity-100 transition-opacity">🎯</button>
                              )}
                              <div className="md:w-32 shrink-0">
                                 <span className="text-xs font-black text-indigo-600 uppercase tracking-tighter block mb-1">{event.ref}</span>
                                 <div className="h-0.5 w-10 bg-indigo-200 dark:bg-indigo-900"></div>
                              </div>
                              <div className="flex-1">
                                 <h6 className="font-black text-xl text-slate-800 dark:text-white uppercase italic tracking-tighter mb-2">{event.title}</h6>
                                 <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed bible-text italic font-medium">{event.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-100 dark:border-slate-700">
                        <div className="space-y-6">
                           <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Conexões e Alianças</h4>
                           <div className="space-y-4">
                              <LinkItem label="Promessa Central" content={disp.promisesLink} icon="🌟" />
                              <LinkItem label="Aliança Vinculada" content={disp.covenantsLink} icon="📜" />
                              <LinkItem label="Natureza da Transição" content={disp.transition} icon="🔄" />
                           </div>
                        </div>
                        <div className="space-y-6">
                           <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Laboratório de Interpretação</h4>
                           <div className="space-y-4">
                              <LinkItem label="Lições para Hoje" content={disp.todayLessons} icon="💡" />
                              <LinkItem label="Erros de Interpretação" content={disp.interpretationErrors} icon="⚠️" color="text-rose-500" />
                              <LinkItem label="Não Confunda" content={disp.howToNotConfuse} icon="🔍" />
                           </div>
                        </div>
                      </div>

                      <div className="pt-6 flex flex-wrap gap-4">
                        <button 
                          onClick={() => handleInject(disp.title, `DEFINIÇÃO EXEGÉTICA: ${disp.exegeticalDefinition}\nTRANSIÇÃO: ${disp.transitionMechanism}\nRESUMO: ${disp.description}`)} 
                          className="flex-1 bg-indigo-600 text-white py-5 rounded-[25px] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                        >
                          {ICON_SERMON('w-5 h-5')} Capturar Panorama Era
                        </button>
                        <button onClick={() => setExpandedId(null)} className="px-10 py-5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-[25px] font-black uppercase text-[10px]">Fechar Módulo</button>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h3 className="text-xs font-black uppercase text-indigo-600 tracking-[0.4em] ml-6 mb-4 italic">Linha do Tempo dos Períodos Históricos</h3>
            
            {HISTORICAL_PERIODS_DATA.map((period, index) => {
              const isExpanded = expandedId === period.id;

              return (
                <div 
                  key={period.id}
                  className={`rounded-[40px] border transition-all duration-300 overflow-hidden relative ${isExpanded ? 'bg-white dark:bg-slate-800 shadow-2xl border-slate-200 dark:border-slate-700' : 'bg-white/50 dark:bg-slate-900/50 border-transparent hover:bg-white dark:hover:bg-slate-800'}`}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-indigo-500" />
                  
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : period.id)}
                    className="w-full flex items-center justify-between p-6 md:p-10 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-indigo-600 text-white font-black text-2xl italic shadow-lg transition-transform group-hover:scale-110`}>
                        {period.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter italic ${isExpanded ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                          {period.title}
                        </h3>
                        <div className="flex gap-4 mt-1">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{period.reference}</span>
                          <span className="text-[10px] font-black uppercase text-indigo-500">{period.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <button 
                         onClick={(e) => { e.stopPropagation(); toggleSermon(`PERÍODO: ${period.title}`); }}
                         className={`p-4 rounded-2xl transition-all ${userState.savedForSermons.includes(`PERÍODO: ${period.title}`) ? 'bg-amber-500 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-700 text-slate-300 hover:text-amber-500'}`}
                       >
                         {ICON_SERMON('w-6 h-6')}
                       </button>
                       <div className={`p-4 rounded-full transition-transform ${isExpanded ? 'rotate-180 bg-slate-100 dark:bg-slate-700' : 'bg-transparent'}`}>
                         <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                       </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-10 pb-12 space-y-12 animate-in slide-in-from-top-4">
                      
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">📖</span>
                          <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">Resumo</h4>
                        </div>
                        <p className="bible-text text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic leading-relaxed text-justify">
                          {period.summary}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-3 ml-2">
                          <span className="text-2xl">📅</span>
                          <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] italic underline underline-offset-8">Eventos</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {period.events.map((event, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-[35px] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group/event hover:border-indigo-300 transition-all relative overflow-hidden">
                              {captureTarget && (
                                 <button onClick={() => handleInject(event.title, event.year)} className="absolute top-6 right-6 p-2 bg-amber-500 text-white rounded-lg opacity-0 group-hover/event:opacity-100 transition-opacity">🎯</button>
                              )}
                              <div className="md:w-32 shrink-0">
                                 <span className="text-xs font-black text-indigo-600 uppercase tracking-tighter block mb-1">{event.year}</span>
                                 <div className="h-0.5 w-10 bg-indigo-200 dark:bg-indigo-900"></div>
                              </div>
                              <div className="flex-1">
                                 <h6 className="font-black text-xl text-slate-800 dark:text-white uppercase italic tracking-tighter">{event.title}</h6>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-100 dark:border-slate-700">
                        <div className="space-y-6">
                           <div className="flex items-center gap-3">
                             <span className="text-2xl">👤</span>
                             <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Personagens-chave</h4>
                           </div>
                           <div className="flex flex-wrap gap-2">
                              {period.characters.map((char, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-200 italic">
                                  {char}
                                </span>
                              ))}
                           </div>
                        </div>
                        <div className="space-y-6">
                           <div className="flex items-center gap-3">
                             <span className="text-2xl">📚</span>
                             <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Livros-chave</h4>
                           </div>
                           <p className="text-lg font-black text-indigo-600 uppercase italic tracking-tighter">
                             {period.books}
                           </p>
                        </div>
                      </div>

                      <div className="pt-6 flex flex-wrap gap-4">
                        <button 
                          onClick={() => handleInject(period.title, `RESUMO: ${period.summary}\nLIVROS: ${period.books}`)} 
                          className="flex-1 bg-indigo-600 text-white py-5 rounded-[25px] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                        >
                          {ICON_SERMON('w-5 h-5')} Capturar Panorama Período
                        </button>
                        <button onClick={() => setExpandedId(null)} className="px-10 py-5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-[25px] font-black uppercase text-[10px]">Fechar Módulo</button>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

const DetailBlock = ({ title, content, color }: { title: string, content: string, color: string }) => (
  <div className={`bg-white dark:bg-slate-800 p-6 rounded-[30px] border-l-8 ${color} shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-full`}>
    <span className="text-[9px] font-black text-slate-400 uppercase block mb-3 tracking-[0.2em]">{title}</span>
    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-tight italic">{content}</p>
  </div>
);

const LinkItem = ({ label, content, icon, color = "text-indigo-600" }: any) => (
  <div className="flex gap-4 items-start p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all">
    <span className="text-xl shrink-0">{icon}</span>
    <div>
      <span className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${color}`}>{label}</span>
      <p className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">{content}</p>
    </div>
  </div>
);

export default TimelineTab;
