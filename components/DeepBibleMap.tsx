import React, { useState } from 'react';
import { DEEP_MAP_DATA } from '../data/deep_map_data';
import { DeepMapEvent, SermonBlock, CaptureTarget, SermonBlockType } from '../types';
import { ICON_SERMON, ICON_BIBLE, ICON_DEEP_MAP, ICON_STUDY } from '../constants';
import { getSermons, saveSermon } from '../services/database';

interface DeepBibleMapProps {
  captureTarget?: CaptureTarget | null;
  onInject?: (title: string, content: string, type: SermonBlockType) => void;
}

const DeepBibleMap: React.FC<DeepBibleMapProps> = ({ captureTarget, onInject }) => {
  const [activeLine, setActiveLine] = useState<string | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const lines = [
    { 
      id: 'throne', label: 'Trono', color: 'text-amber-500', border: 'border-amber-500/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" className="animate-pulse" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path className="animate-bounce" style={{ animationDuration: '3s' }} d="M20 70L10 30L30 45L50 10L70 45L90 30L80 70H20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="3"/>
          <path d="M20 75H80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    { 
      id: 'blood', label: 'Sangue', color: 'text-rose-500', border: 'border-rose-500/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <path className="animate-pulse" d="M50 10C50 10 20 40 20 65C20 82 33 95 50 95C67 95 80 82 80 65C80 40 50 10 50 10Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="65" r="8" fill="currentColor" className="animate-ping" style={{ animationDuration: '2s' }} />
        </svg>
      )
    },
    { 
      id: 'water', label: 'Água', color: 'text-blue-500', border: 'border-blue-500/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <path className="animate-pulse" d="M0 50 Q 25 35, 50 50 T 100 50 V 100 H 0 Z" fill="currentColor" fillOpacity="0.2" />
          <path className="animate-pulse" style={{ animationDelay: '0.5s' }} d="M0 65 Q 25 50, 50 65 T 100 65 V 100 H 0 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M0 50 Q 25 35, 50 50 T 100 50" stroke="currentColor" strokeWidth="3" />
        </svg>
      )
    },
    { 
      id: 'fire', label: 'Fogo', color: 'text-orange-500', border: 'border-orange-500/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <path className="animate-bounce" style={{ animationDuration: '0.8s' }} d="M50 5C50 5 80 40 80 70C80 88 67 95 50 95C33 95 20 88 20 70C20 40 50 5 50 5Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <path className="animate-pulse" d="M50 35C50 35 65 55 65 75C65 85 58 90 50 90C42 90 35 85 35 75C35 55 50 35 50 35Z" fill="currentColor" />
        </svg>
      )
    },
    { 
      id: 'tree', label: 'Árvore', color: 'text-emerald-500', border: 'border-emerald-500/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <path d="M50 95V40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <g className="animate-bounce" style={{ animationDuration: '4s' }}>
             <path d="M50 40C30 30 10 40 10 60C10 80 30 90 50 80" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
             <path d="M50 40C70 30 90 40 90 60C90 80 70 90 50 80" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
             <circle cx="50" cy="30" r="15" fill="currentColor" fillOpacity="0.2" className="animate-pulse" />
          </g>
        </svg>
      )
    },
    { 
      id: 'kingdom', label: 'Reino', color: 'text-yellow-600', border: 'border-yellow-600/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <rect x="25" y="40" width="50" height="45" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
          <rect className="animate-pulse" x="20" y="25" width="15" height="15" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
          <rect className="animate-pulse" style={{ animationDelay: '0.5s' }} x="65" y="25" width="15" height="15" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
          <path d="M45 85V65H55V85" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="20" r="5" className="animate-ping" fill="currentColor" />
        </svg>
      )
    },
    { 
      id: 'presence', label: 'Presença', color: 'text-indigo-400', border: 'border-indigo-400/30',
      figure: (cls: string) => (
        <svg className={cls} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" className="animate-pulse" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="20" className="animate-ping" fill="currentColor" fillOpacity="0.2" />
          <path className="animate-spin" style={{ animationDuration: '10s' }} d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="currentColor" fillOpacity="0.4" />
        </svg>
      )
    },
  ];

  const filteredData = activeLine === 'all' 
    ? DEEP_MAP_DATA 
    : DEEP_MAP_DATA.filter(e => e.line === activeLine);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCapture = async (event: DeepMapEvent) => {
    const sermons = await getSermons();
    let target = sermons.find(s => s.status === 'draft') || (sermons.length > 0 ? sermons[0] : null);
    
    if (!target) {
      target = {
        id: `map_sermon_${Date.now()}`,
        title: "Mapa Profundo: " + event.event,
        type: 'theological-study',
        date: new Date().toISOString(),
        tags: ['Deep Map', event.line],
        blocks: [],
        status: 'draft',
        version: 1
      };
    }

    const newBlock: SermonBlock = {
      id: `map_block_${Date.now()}`,
      type: 'exegesis',
      title: `Insight Matrix: ${event.event}`,
      content: `TEXTO BASE: ${event.baseText}\n\nTEOLOGIA:\n${event.theology}\n\nAPLICAÇÃO:\n${event.application}`
    };

    await saveSermon({ ...target, blocks: [...target.blocks, newBlock] });
    alert("Dados exegéticos capturados para o Estúdio.");
  };

  const handleInject = (event: DeepMapEvent) => {
    if (onInject) {
      onInject(
        `INSIGHT MATRIX: ${event.event}`, 
        `TEOLOGIA: ${event.theology}\nAPLICAÇÃO: ${event.application}`,
        'library-clip'
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-3 md:p-8 rounded-[30px] md:rounded-[45px] shadow-2xl border border-white/5 animate-in fade-in pb-40 overflow-x-hidden">
      
      {/* Header - Tipografia Equilibrada */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/5 px-5 py-2 md:px-8 md:py-3 rounded-full border border-amber-500/10 backdrop-blur-3xl">
           {ICON_DEEP_MAP('w-4 h-4 md:w-5 h-5 text-amber-500')}
           <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] text-amber-500/80 italic">Metanarrativa Bíblica</span>
        </div>
        <h2 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight">Mapa <span className="text-amber-500">Dinâmico</span></h2>
        <p className="text-slate-500 text-[10px] md:text-base font-medium bible-text italic max-w-2xl mx-auto leading-relaxed">
          "As sete figuras vivas que atravessam os séculos, pulsando com a glória da revelação eterna."
        </p>
      </div>

      {/* Seletor de Linhas - Mais Compacto */}
      <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-10 md:mb-16 sticky top-4 z-50 py-3 md:py-4 bg-slate-950/90 backdrop-blur-2xl rounded-2xl md:rounded-[30px] px-3 md:px-6 border border-white/5 shadow-2xl">
        <button 
          onClick={() => { setActiveLine('all'); setExpandedId(null); }}
          className={`px-4 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl text-[7px] md:text-[10px] font-black uppercase tracking-widest transition-all ${activeLine === 'all' ? 'bg-amber-500 text-slate-950 scale-105' : 'bg-white/5 text-slate-500 hover:bg-white/10'}`}
        >
          Omnis
        </button>
        {lines.map(line => (
          <button
            key={line.id}
            onClick={() => { setActiveLine(line.id); setExpandedId(null); }}
            className={`flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-lg md:rounded-xl text-[7px] md:text-[10px] font-black uppercase tracking-widest border transition-all ${activeLine === line.id ? `bg-white/10 ${line.border} ${line.color} scale-105` : `bg-white/5 border-transparent text-slate-500 hover:text-slate-200`}`}
          >
            <div className="w-3 h-3 md:w-4 md:h-4">{line.figure('w-full h-full')}</div>
            <span className="hidden sm:inline">{line.label}</span>
          </button>
        ))}
      </div>

      {/* Grid de Eventos - Hierarquia Profissional */}
      <div className="max-w-4xl mx-auto space-y-3 md:space-y-5">
        {filteredData.map((item) => {
          const lineStyle = lines.find(l => l.id === item.line);
          const isExpanded = expandedId === item.id;

          return (
            <div 
              key={item.id}
              className={`group bg-slate-900/40 backdrop-blur-md rounded-2xl md:rounded-[40px] border transition-all duration-300 overflow-hidden ${isExpanded ? `border-amber-500/30 bg-slate-900 shadow-xl` : `border-white/5 hover:border-amber-500/10`}`}
            >
              <button 
                onClick={() => toggleExpand(item.id)}
                className="w-full text-left p-4 md:p-8 flex items-center justify-between gap-4 md:gap-8"
              >
                <div className="flex items-center gap-3 md:gap-8">
                   <div className={`w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-3xl bg-slate-950 flex items-center justify-center border transition-all ${lineStyle?.border} ${isExpanded ? 'scale-105' : ''}`}>
                      {lineStyle?.figure(`w-5 h-5 md:w-12 md:h-12 ${lineStyle.color}`)}
                   </div>
                   <div className="min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-0.5 md:mb-1">
                        <span className={`text-[7px] md:text-[9px] font-black uppercase tracking-widest ${lineStyle?.color}`}>{lineStyle?.label}</span>
                        <div className="w-0.5 h-0.5 rounded-full bg-slate-700"></div>
                        <span className="text-[7px] md:text-[9px] font-black text-slate-500 uppercase italic">{item.chronology}</span>
                      </div>
                      <h3 className="text-sm md:text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-amber-500 transition-colors truncate">
                        {item.event}
                      </h3>
                      {!isExpanded && <p className="text-slate-600 font-bold text-[7px] md:text-xs uppercase tracking-widest mt-0.5 md:mt-1 opacity-60 truncate">{item.theme}</p>}
                   </div>
                </div>
                <div className={`p-2 md:p-3 rounded-full transition-all ${isExpanded ? 'rotate-180 bg-amber-500 text-slate-950' : 'bg-white/5 text-slate-700'}`}>
                   <svg className="w-3 h-3 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>

              {isExpanded && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-500 border-t border-white/5">
                  <div className="px-5 md:px-12 pb-8 md:pb-14 pt-4 md:pt-10 space-y-8 md:space-y-12">
                     
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
                        <div className="space-y-8">
                           <section>
                              <div className="flex items-center gap-2 mb-4">
                                 {ICON_BIBLE('w-3 h-3 md:w-4 md:h-4 text-amber-500/50')}
                                 <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic">Fundamento Canônico</h4>
                              </div>
                              <div className="relative p-5 md:p-8 bg-slate-950/50 rounded-2xl md:rounded-[30px] border border-white/5 border-l-4 border-l-amber-500/30">
                                 <p className="bible-text text-sm md:text-lg text-slate-300 leading-relaxed italic">
                                    "{item.baseText}"
                                 </p>
                              </div>
                           </section>

                           <section className="bg-amber-500/5 p-5 md:p-8 rounded-2xl md:rounded-[35px] border border-amber-500/10">
                              <div className="flex items-center gap-2 mb-4">
                                 {ICON_STUDY('w-3 h-3 md:w-4 md:h-4 text-amber-500')}
                                 <h4 className="text-[8px] md:text-[10px] font-black uppercase text-amber-500 tracking-widest">Aplicação Titan</h4>
                              </div>
                              <p className="text-xs md:text-base font-bold text-slate-200 leading-relaxed italic">
                                "{item.application}"
                              </p>
                           </section>
                        </div>

                        <div className="space-y-8">
                           <section>
                              <div className="flex items-center gap-2 mb-4">
                                 {ICON_SERMON('w-3 h-3 md:w-4 md:h-4 text-indigo-400')}
                                 <h4 className="text-[8px] md:text-[10px] font-black uppercase text-indigo-400 tracking-widest">Exegese de Dados</h4>
                              </div>
                              <p className="text-xs md:text-base text-slate-400 leading-relaxed text-justify bible-text font-light">
                                 <span className="text-2xl md:text-4xl font-black text-white mr-1 float-left">{item.theology.charAt(0)}</span>
                                 {item.theology.slice(1)}
                              </p>
                           </section>

                           <div className="pt-4 border-t border-white/5">
                              <div className="flex flex-wrap gap-1.5 md:gap-2">
                                 {item.connections.map(c => (
                                   <span key={c} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg md:rounded-xl text-[6px] md:text-[9px] font-black uppercase tracking-wider text-slate-500 hover:text-amber-500 transition-all cursor-default">
                                     🔗 {c.split('_').join(' ')}
                                   </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="pt-6 md:pt-10 flex flex-col sm:flex-row gap-3 md:gap-4 border-t border-white/5">
                        <button 
                          onClick={() => handleCapture(item)}
                          className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black uppercase py-4 md:py-6 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] tracking-widest shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          {ICON_SERMON('w-3 h-3 md:w-4 md:h-4')} Captura
                        </button>
                        {captureTarget && (
                          <button 
                            onClick={() => handleInject(item)}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase py-4 md:py-6 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] tracking-widest shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                          >
                            🎯 Injetar
                          </button>
                        )}
                        <button 
                          onClick={() => setExpandedId(null)}
                          className="px-6 py-4 md:px-10 md:py-6 bg-white/5 text-slate-400 font-black uppercase rounded-xl md:rounded-2xl text-[8px] md:text-[10px] border border-white/5 hover:bg-white/10"
                        >
                          Fechar
                        </button>
                     </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-20 md:mt-32 text-center opacity-20 border-t border-white/5 pt-8 md:pt-12">
         <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[1em]">Deep Map System • Dabar Edition</p>
      </div>

    </div>
  );
};

export default DeepBibleMap;