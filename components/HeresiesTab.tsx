import React, { useState, Fragment } from 'react';
import { HERESIES_DATA } from '../data/heresies_data';
import { ICON_HERESIES, ICON_SERMON, ICON_BIBLE } from '../constants';
import { UserState, CaptureTarget, HeresyContent, HeresyBlock } from '../types';
import InjectButton from './InjectButton';

// Funil Único
import { addTextToStudio } from '../core/studioFunnel';

interface HeresiesTabProps {
  userState: UserState;
  captureTarget?: CaptureTarget | null;
}

const HeresiesTab: React.FC<HeresiesTabProps> = ({ userState, captureTarget }) => {
  const [activeBlockId, setActiveBlockId] = useState<string>('block_a');
  const [expandedHeresy, setExpandedHeresy] = useState<string | null>(null);

  const activeBlock = HERESIES_DATA.find(b => b.id === activeBlockId) || HERESIES_DATA[0];

  const getBlockColorClass = (color: string) => {
    switch(color) {
      case 'indigo': return 'border-indigo-500 text-indigo-500';
      case 'amber': return 'border-amber-500 text-amber-500';
      case 'emerald': return 'border-emerald-500 text-emerald-500';
      case 'rose': return 'border-rose-500 text-rose-500';
      default: return 'border-slate-500 text-slate-500';
    }
  };

  const getBlockBgClass = (color: string) => {
    switch(color) {
      case 'indigo': return 'bg-indigo-500';
      case 'amber': return 'bg-amber-500';
      case 'emerald': return 'bg-emerald-500';
      case 'rose': return 'bg-rose-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-12 animate-in fade-in duration-500 pb-40">
      <header className="bg-slate-900 p-10 md:p-14 rounded-[50px] md:rounded-[70px] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-600/40 via-transparent to-amber-500/10 pointer-events-none"></div>
        <div className="relative z-10 w-20 h-20 bg-white/10 rounded-[28px] flex items-center justify-center text-rose-400 shadow-2xl border border-white/10 backdrop-blur-md">
           {ICON_HERESIES('w-10 h-10')}
        </div>
        <div className="relative z-10 flex-1 text-center md:text-left">
          <span className="text-rose-400 font-black uppercase tracking-[0.5em] text-[9px] mb-2 block">Dabar Orthodoxy • Guardiões do Cânon</span>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-1 leading-tight">Titan Heresy Finder</h2>
          <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest italic">Anatomia das Distorções Teológicas</p>
        </div>
      </header>

      {/* Navegação de Blocos Premium */}
      <div className="flex flex-wrap justify-center gap-3">
        {HERESIES_DATA.map(block => (
          <button
            key={block.id}
            onClick={() => { setActiveBlockId(block.id); setExpandedHeresy(null); }}
            className={`px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all border-2 ${activeBlockId === block.id ? `${getBlockBgClass(block.color)} border-transparent text-white shadow-xl scale-105` : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-slate-200'}`}
          >
            {block.title.split('.')[0]}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
           <div className={`w-2 h-10 rounded-full ${getBlockBgClass(activeBlock.color)}`}></div>
           <h3 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-none">{activeBlock.title}</h3>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {activeBlock.items.map((heresy: HeresyContent) => (
            <div 
              key={heresy.id}
              className={`bg-white dark:bg-slate-800 rounded-[50px] border transition-all duration-300 overflow-hidden relative border-l-[15px] ${getBlockColorClass(activeBlock.color)} ${expandedHeresy === heresy.id ? 'shadow-2xl border-slate-200 dark:border-slate-700' : 'border-slate-50 dark:border-slate-700 hover:shadow-md'}`}
            >
              <button
                onClick={() => setExpandedHeresy(expandedHeresy === heresy.id ? null : heresy.id)}
                className="w-full flex items-center justify-between p-8 md:p-12 text-left group"
              >
                <div className="flex-1">
                   <h4 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-1 leading-none">{heresy.title}</h4>
                   <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2 italic">{heresy.subtitle}</p>
                </div>
                <div className={`p-4 rounded-full transition-transform ${expandedHeresy === heresy.id ? 'rotate-180 bg-slate-100 dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-900'}`}>
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>

              {expandedHeresy === heresy.id && (
                <div className="px-8 md:px-12 pb-12 space-y-12 animate-in slide-in-from-top-4">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[35px] border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] font-black text-slate-400 uppercase block mb-6 tracking-widest italic underline underline-offset-4">Contexto Histórico</span>
                        <ul className="space-y-4">
                           {heresy.context.map((c, i) => <li key={i} className="text-sm md:text-base font-bold text-slate-600 dark:text-slate-300 flex gap-3 italic"><div className="w-2 h-2 rounded-full bg-slate-300 mt-2 shrink-0"></div>{c}</li>)}
                        </ul>
                     </section>
                     <section className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-[35px] border border-amber-100 dark:border-amber-800">
                        <span className="text-[10px] font-black text-amber-600 uppercase block mb-6 tracking-widest italic underline underline-offset-4">Núcleo do Erro</span>
                        <ul className="space-y-4">
                           {heresy.errorNucleus.map((e, i) => <li key={i} className="text-sm md:text-base font-black text-amber-900 dark:text-amber-200 flex gap-3 uppercase tracking-tighter"><div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>{e}</li>)}
                        </ul>
                     </section>
                  </div>

                  <div className="bg-rose-50 dark:bg-rose-900/10 p-10 md:p-14 rounded-[45px] border border-rose-100 dark:border-rose-800">
                     <span className="text-[10px] font-black text-rose-600 uppercase block mb-8 tracking-widest italic">Problema Teológico Profundo</span>
                     <div className="space-y-6">
                        {heresy.deepProblem.map((p, i) => (
                           <div key={i} className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm font-black italic shrink-0">!</div>
                              <p className="text-lg md:text-3xl font-black text-rose-900 dark:text-rose-100 tracking-tighter leading-tight italic">
                                {p.split('->').map((part, idx) => (
                                  <Fragment key={idx}>
                                    {idx > 0 && <span className="mx-2 text-rose-300">{"->"}</span>}
                                    {part}
                                  </Fragment>
                                ))}
                              </p>
                           </div>
                        ))}
                     </div>
                     <div className="mt-12 pt-8 border-t border-rose-200/30 flex flex-wrap gap-3">
                        <span className="text-[11px] font-black text-rose-400 uppercase tracking-widest mr-4">ISSO DESTRÓI:</span>
                        {heresy.destroys.map(d => <span key={d} className="px-5 py-2 bg-white dark:bg-slate-800 text-rose-600 rounded-xl text-[10px] md:text-[12px] font-black uppercase border border-rose-100 shadow-sm">{d}</span>)}
                     </div>
                  </div>

                  <div className="bg-indigo-950 p-10 md:p-16 rounded-[60px] text-white shadow-2xl relative overflow-hidden border border-indigo-500/30">
                     <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12">{ICON_BIBLE('w-60 h-60')}</div>
                     <div className="relative z-10">
                        <span className="text-indigo-400 font-black uppercase tracking-[0.5em] text-[10px] mb-10 block italic">Resposta Bíblica Estrutural</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                           {heresy.biblicalResponse.map((r, i) => (
                              <div key={i} className="space-y-4">
                                 <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[12px]">✔</div>
                                    <span className="text-indigo-300 font-black text-[12px] md:text-[14px] uppercase tracking-widest">{r.ref}</span>
                                 </div>
                                 <p className="bible-text text-xl md:text-3xl italic text-slate-100 leading-relaxed font-light">"{r.text}"</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                     <div className="space-y-8">
                        <h5 className="text-[12px] font-black text-slate-400 uppercase tracking-widest ml-2 italic">Sintomas Atuais</h5>
                        <div className="grid grid-cols-1 gap-4">
                           {heresy.modernSymptoms.map((s, i) => (
                              <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center gap-6">
                                 <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                                 <p className="text-base md:text-lg font-bold text-slate-600 dark:text-slate-300 italic">{s}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="space-y-8">
                        <h5 className="text-[12px] font-black text-emerald-600 uppercase tracking-widest ml-2 italic">Remédio Pastoral</h5>
                        <div className="grid grid-cols-1 gap-4">
                           {heresy.pastoralRemedy.map((r, i) => (
                              <div key={i} className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-800 flex items-center gap-6">
                                 <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                                 <p className="text-base md:text-xl font-black text-emerald-900 dark:text-emerald-100 uppercase tracking-tighter leading-none">{r}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="pt-12 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => {
                        const content = `[ALERTA HERESIA: ${heresy.title}]\nNÚCLEO: ${heresy.errorNucleus.join(' ')}\nPROBLEMA: ${heresy.deepProblem.join('\n')}\nRESPOSTA: ${heresy.biblicalResponse.map(r => r.ref + " ("+r.text+")").join(', ')}\nREMÉDIO: ${heresy.pastoralRemedy.join(', ')}`;
                        addTextToStudio(content);
                      }}
                      className={`flex-1 ${getBlockBgClass(activeBlock.color)} text-white py-8 rounded-[30px] md:rounded-[40px] font-black uppercase text-xs md:text-sm tracking-widest shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-4`}
                    >
                      {ICON_SERMON('w-6 h-6')} Injetar Alerta no Estúdio
                    </button>
                    <button 
                      onClick={() => setExpandedHeresy(null)}
                      className="px-10 py-8 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-[30px] md:rounded-[40px] font-black uppercase text-xs tracking-widest"
                    >
                      Fechar Módulo
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {activeBlock.conclusion && (
          <div className="mt-16 p-10 md:p-16 bg-slate-900 rounded-[60px] text-white text-center shadow-2xl border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-transparent to-rose-600/20"></div>
             <span className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.5em] block mb-8 italic">Muro de Proteção Ortodoxa</span>
             <p className="text-xl md:text-4xl font-black italic tracking-tighter leading-tight uppercase">
                {activeBlock.conclusion}
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeresiesTab;