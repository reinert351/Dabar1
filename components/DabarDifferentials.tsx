import React, { useState, useMemo } from 'react';
import { 
  COMMON_ERRORS, NT_OT_CONNECTIONS, BIBLICAL_PROFILES, INTERTESTAMENTAL_CONTEXT 
} from '../data/dabar_hub';
import { ICON_SERMON, ICON_DIFFERENTIALS, ICON_BIBLE, ICON_STRONG, ICON_CHRONOLOGY } from '../constants';
import { getSermons, saveSermon } from '../services/database';
import { SermonBlock } from '../types';

const DabarDifferentials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'errors' | 'connections' | 'profiles' | 'inter'>('errors');
  const [search, setSearch] = useState('');

  const sendToStudio = async (title: string, content: string) => {
    const sermons = await getSermons();
    const target = sermons.find(s => s.status === 'draft') || (sermons.length > 0 ? sermons[0] : null);
    
    if (!target) return alert("Crie um projeto no Estúdio primeiro para capturar este tesouro teológico.");

    const newBlock: SermonBlock = {
      id: `diff_${Date.now()}`,
      type: 'note',
      title: `Diferencial: ${title}`,
      content: content
    };

    await saveSermon({ ...target, blocks: [...target.blocks, newBlock] });
    alert(`Conteúdo sincronizado com o projeto: ${target.title}`);
  };

  const filteredData = useMemo(() => {
    const s = search.toLowerCase();
    switch (activeTab) {
      case 'errors': return COMMON_ERRORS.filter(i => i.mistake.toLowerCase().includes(s) || i.ref.toLowerCase().includes(s));
      case 'connections': return NT_OT_CONNECTIONS.filter(i => i.ot_shadow.toLowerCase().includes(s) || i.nt_fulfillment.toLowerCase().includes(s));
      case 'profiles': return BIBLICAL_PROFILES.filter(i => i.name.toLowerCase().includes(s) || i.mainLessons.toLowerCase().includes(s));
      case 'inter': return INTERTESTAMENTAL_CONTEXT.filter(i => i.title.toLowerCase().includes(s) || i.description.toLowerCase().includes(s));
    }
  }, [activeTab, search]);

  return (
    <div className="space-y-12 animate-in fade-in pb-40">
      {/* Header Centralizado - Padrão Titan Elite */}
      <div className="bg-slate-900 p-12 md:p-16 rounded-[60px] shadow-2xl relative overflow-hidden text-white border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-indigo-600 rounded-[35px] flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20 rotate-3 transition-transform">
              {ICON_DIFFERENTIALS('w-12 h-12')}
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Diferenciais <span className="text-indigo-400">Dabar</span></h2>
              {/* Fix: Changed <p> to <div> to resolve invalid nesting (<div> inside <p>), which was likely confusing the JSX parser and causing downstream errors like "Cannot find name 'div'" */}
              <div className="text-slate-400 text-xs font-black uppercase tracking-[0.6em] mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                Restauração da Sã Doutrina • Base Titan Elite
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-96">
            <input 
              type="text"
              placeholder="Escavar na biblioteca profunda..."
              className="bg-white/5 border-2 border-white/10 rounded-[25px] px-14 py-6 text-sm font-bold w-full outline-none focus:border-indigo-500 backdrop-blur-md transition-all shadow-inner"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-16">
          {/* Fix: Added missing closing parenthesis to setActiveTab call */}
          <SubTab active={activeTab === 'errors'} onClick={() => setActiveTab('errors')} label="Distorções & Erros" icon="⚠️" color="rose" />
          <SubTab active={activeTab === 'connections'} onClick={() => setActiveTab('connections')} label="Sombras & Tipos" icon="🔗" color="indigo" />
          <SubTab active={activeTab === 'profiles'} onClick={() => setActiveTab('profiles')} label="Tratados Biográficos" icon="👤" color="emerald" />
          <SubTab active={activeTab === 'inter'} onClick={() => setActiveTab('inter')} label="Contexto Histórico" icon="⏳" color="amber" />
        </div>
      </div>

      <div className="min-h-[600px] px-2 md:px-0">
        {/* CATEGORIA: ERROS DE INTERPRETAÇÃO (ROSE) */}
        {activeTab === 'errors' && (
          <div className="grid grid-cols-1 gap-12 animate-in slide-in-from-bottom-8">
            {(filteredData as typeof COMMON_ERRORS).map(err => (
              <div key={err.id} className="bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[60px] border-l-[25px] border-rose-600 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none italic font-black text-rose-600 text-9xl uppercase leading-none select-none">ERRO</div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                     <div className="space-y-2">
                        <span className="text-[11px] font-black uppercase text-rose-500 tracking-[0.4em] bg-rose-50 dark:bg-rose-900/20 px-6 py-2 rounded-full border border-rose-100 dark:border-rose-800">Alerta de Engenharia Exegética</span>
                        <h4 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mt-4">"{err.mistake}"</h4>
                     </div>
                     <span className="text-xl font-black text-slate-300 dark:text-slate-600 uppercase italic tracking-widest bg-slate-50 dark:bg-slate-900 px-6 py-3 rounded-2xl">{err.ref}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-9 prose prose-slate dark:prose-invert max-w-none">
                       <h5 className="text-rose-600 font-black uppercase text-xs mb-8 tracking-[0.3em] border-b border-rose-100 dark:border-rose-900 pb-2 italic underline underline-offset-8">O Corretivo Dabar Integral (Exegese Profunda)</h5>
                       <div className="space-y-8">
                          {err.correction.split('\n').map((line, i) => (
                            <p key={i} className="bible-text text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed text-justify italic font-light">
                              {line}
                            </p>
                          ))}
                       </div>
                    </div>
                    <div className="lg:col-span-3 space-y-6">
                       <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-inner">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Domínio Técnico</span>
                          <p className="font-bold text-slate-800 dark:text-slate-200 uppercase text-xs tracking-tighter leading-relaxed">{err.context}</p>
                       </div>
                       <button 
                         onClick={() => sendToStudio(`Correção: ${err.ref}`, err.correction)}
                         className="w-full py-8 bg-slate-900 text-white rounded-[30px] font-black uppercase text-xs tracking-[0.3em] hover:bg-rose-600 transition-all shadow-2xl flex items-center justify-center gap-4"
                       >
                         {ICON_SERMON('w-6 h-6')} Injetar Alerta no Estúdio
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CATEGORIA: SOMBRAS & TIPOS (INDIGO) */}
        {activeTab === 'connections' && (
          <div className="space-y-12 animate-in slide-in-from-bottom-8">
            {(filteredData as typeof NT_OT_CONNECTIONS).map(conn => (
              <div key={conn.id} className="bg-white dark:bg-slate-800 p-10 md:p-16 rounded-[70px] border-l-[25px] border-indigo-600 shadow-2xl relative overflow-hidden group hover:border-indigo-400 transition-all">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-all scale-150 rotate-12 text-indigo-600">{ICON_BIBLE('w-64 h-64')}</div>
                <div className="relative z-10">
                   <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                      <div className="flex-1 text-center md:text-left">
                        <span className="text-[12px] font-black uppercase text-indigo-500 tracking-widest block mb-4 italic">AT: A Sombra Profética</span>
                        <h4 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">{conn.ot_shadow}</h4>
                      </div>
                      <div className="shrink-0 flex flex-col items-center">
                         <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse ring-8 ring-indigo-100 dark:ring-indigo-900/30">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                         </div>
                      </div>
                      <div className="flex-1 text-center md:text-right">
                        <span className="text-[12px] font-black uppercase text-emerald-500 tracking-widest block mb-4 italic">NT: A Realidade em Cristo</span>
                        <h4 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">{conn.nt_fulfillment}</h4>
                      </div>
                   </div>
                   
                   <div className="bg-slate-50 dark:bg-slate-900/50 p-12 md:p-20 rounded-[60px] border border-slate-100 dark:border-slate-700 shadow-inner">
                      <h5 className="text-indigo-600 font-black uppercase text-xs mb-10 tracking-[0.4em] text-center italic underline underline-offset-8 decoration-indigo-200">Exegese de Tipologia Comparada Multi-Camadas</h5>
                      <div className="prose prose-indigo dark:prose-invert max-w-none">
                         {conn.description.split('\n').map((line, i) => (
                           <p key={i} className="bible-text text-xl md:text-3xl text-slate-700 dark:text-slate-200 italic leading-relaxed mb-8 text-justify font-light">
                             {line}
                           </p>
                         ))}
                      </div>
                   </div>
                   
                   <div className="mt-12 flex justify-center">
                      <button 
                        onClick={() => sendToStudio(`Tipologia: ${conn.ot_shadow}`, conn.description)}
                        className="px-16 py-8 bg-indigo-600 text-white rounded-[40px] font-black uppercase text-sm tracking-widest shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-6 group/btn"
                      >
                        {ICON_SERMON('w-7 h-7')} Capturar Matriz Profética Integral
                      </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CATEGORIA: TRATADOS BIOGRÁFICOS (EMERALD) */}
        {activeTab === 'profiles' && (
          <div className="grid grid-cols-1 gap-12 animate-in slide-in-from-bottom-8">
            {(filteredData as typeof BIBLICAL_PROFILES).map(prof => (
              <div key={prof.id} className="bg-white dark:bg-slate-800 p-12 md:p-20 rounded-[80px] border-l-[25px] border-emerald-500 shadow-2xl flex flex-col group transition-all overflow-hidden relative">
                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                   {ICON_STRONG('w-80 h-80 text-emerald-600')}
                </div>
                <div className="relative z-10 flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                     <div>
                        <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[12px] mb-4 block italic">Cânon de Perfis • Biografias de Impacto Titan</span>
                        <h3 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">{prof.name}</h3>
                     </div>
                     <div className="flex flex-wrap gap-3">
                        {/* Fix: Corrected key syntax from key(a) to key={a}. This resolves the errors on line 187 where the parser was treating key(a) as a function call, causing it to fail JSX parsing. */}
                        {prof.appearances.map(a => <span key={a} className="px-6 py-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">{a}</span>)}
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-10 rounded-[50px] border border-emerald-100 dark:border-emerald-800/50 shadow-inner">
                      <span className="text-[12px] font-black uppercase text-emerald-600 tracking-[0.4em] block mb-8 flex items-center gap-4">
                         <div className="w-8 h-1 bg-emerald-500 rounded-full"></div> Aura de Força & Virtudes
                      </span>
                      <ul className="space-y-6">
                         {/* Fix: Corrected key syntax from key(s) to key={s} */}
                         {prof.strengths.map(s => <li key={s} className="text-lg font-black text-emerald-900 dark:text-emerald-100 flex items-center gap-4 italic uppercase tracking-tighter"><div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]"></div> {s}</li>)}
                      </ul>
                    </div>
                    <div className="bg-rose-50/50 dark:bg-rose-900/10 p-10 rounded-[50px] border border-rose-100 dark:border-rose-800/50 shadow-inner opacity-80">
                      <span className="text-[12px] font-black uppercase text-rose-500 tracking-[0.4em] block mb-8 flex items-center gap-4">
                         <div className="w-8 h-1 bg-rose-500 rounded-full"></div> Fissuras & Fragilidades Humanas
                      </span>
                      <ul className="space-y-6">
                         {/* Fix: Corrected key syntax from key(f) to key={f} */}
                         {prof.failures.map(f => <li key={f} className="text-lg font-black text-rose-900 dark:text-rose-100 flex items-center gap-4 italic uppercase tracking-tighter"><div className="w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_10px_#f43f5e]"></div> {f}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="p-12 md:p-16 bg-slate-900 text-white rounded-[70px] mb-12 border border-white/5 shadow-2xl relative overflow-hidden">
                     <span className="text-[12px] font-black uppercase text-emerald-400 tracking-[0.4em] block mb-10 italic underline underline-offset-[12px] decoration-emerald-500/30">Tratado de Antropologia Bíblica Exaustivo</span>
                     <div className="prose prose-invert max-w-none">
                        {prof.mainLessons.split('\n').map((line, i) => (
                          <p key={i} className="bible-text text-xl md:text-3xl text-slate-100 leading-relaxed mb-8 text-justify italic font-light">
                             {line}
                          </p>
                        ))}
                     </div>
                  </div>
                </div>

                <div className="pt-10 flex justify-end">
                   <button 
                     onClick={() => sendToStudio(`Perfil: ${prof.name}`, prof.mainLessons)}
                     className="px-20 py-10 bg-emerald-600 text-white rounded-[50px] font-black uppercase text-sm tracking-[0.3em] hover:bg-emerald-700 transition-all shadow-3xl flex items-center justify-center gap-6"
                   >
                     {ICON_SERMON('w-8 h-8')} Sincronizar Biografia Integral
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CATEGORIA: CONTEXTO INTERTESTAMENTAL (AMBER) */}
        {activeTab === 'inter' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-4">
            {(filteredData as typeof INTERTESTAMENTAL_CONTEXT).map(inter => (
              <div key={inter.id} className="bg-white dark:bg-slate-800 p-10 md:p-14 rounded-[60px] border-l-[25px] border-amber-500 shadow-xl group hover:border-amber-400 transition-all flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-500">{ICON_CHRONOLOGY('w-48 h-48')}</div>
                <div className="relative z-10 flex-1">
                  <span className="text-[11px] font-black uppercase text-amber-600 tracking-[0.4em] mb-4 block italic">Crônicas de Silêncio • Pontes do Cânon</span>
                  <h4 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4 leading-tight">{inter.title}</h4>
                  <span className="bg-amber-50 dark:bg-amber-900/30 px-6 py-2 rounded-xl text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest border border-amber-100 dark:border-amber-800 mb-10 inline-block">{inter.group}</span>
                  
                  <p className="bible-text text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed italic mb-8 text-justify">{inter.description}</p>
                  
                  <div className="p-8 bg-slate-900 text-white rounded-[40px] border border-white/5 shadow-inner">
                     <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-4 italic">Impacto na Plenitude dos Tempos</span>
                     <p className="text-base md:text-lg font-bold leading-relaxed">{inter.impact}</p>
                  </div>
                </div>
                <button 
                  onClick={() => sendToStudio(inter.title, `${inter.description}\n\nIMPACTO: ${inter.impact}`)}
                  className="mt-10 w-full py-6 bg-amber-500 text-slate-950 rounded-[30px] font-black uppercase text-xs tracking-widest shadow-xl hover:bg-amber-600 transition-all flex items-center justify-center gap-4"
                >
                  {ICON_SERMON('w-5 h-5')} Capturar Contexto Histórico
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SubTab = ({ active, onClick, label, icon, color }: any) => {
  const colors: any = {
    rose: 'bg-rose-600 border-rose-600 shadow-rose-500/20',
    indigo: 'bg-indigo-600 border-indigo-600 shadow-indigo-500/20',
    emerald: 'bg-emerald-600 border-emerald-600 shadow-emerald-500/20',
    amber: 'bg-amber-500 border-amber-500 shadow-amber-500/20'
  };

  return (
    <button 
      onClick={onClick} 
      className={`px-10 py-5 rounded-[30px] text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-4 border-2 ${active ? `${colors[color]} text-white shadow-2xl scale-105` : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'}`}
    >
      <span className="text-xl leading-none">{icon}</span>
      {label}
    </button>
  );
};

export default DabarDifferentials;