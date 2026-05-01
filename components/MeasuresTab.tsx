
import React, { useState } from 'react';
import { UserState, CaptureTarget } from '../types';
import { ICON_MEASURES, ICON_BIBLE } from '../constants';
import InjectButton from './InjectButton';

import { MEASURES_DATA, MEASURES_CATEGORIES, MeasureItem } from '../data/measures_data';

type MeasureCategory = 'comprimento' | 'pesos' | 'liquidos' | 'secos' | 'moedas' | 'area' | 'tempo' | 'clima' | 'construcoes' | 'distancias' | 'metais' | 'matematica' | 'arqueologia' | 'navegacao' | 'conversoes' | 'teologia' | 'calendario' | 'monumentos' | 'padroes';

interface MeasuresTabProps {
  userState: UserState;
  setUserState: any;
  captureTarget?: CaptureTarget | null;
}

const MeasuresTab: React.FC<MeasuresTabProps> = ({ userState, captureTarget }) => {
  const [activeTab, setActiveTab] = useState<MeasureCategory>('comprimento');

  const filteredMeasures = MEASURES_DATA.filter(m => m.category === activeTab);
  const activeCategoryData = MEASURES_CATEGORIES.find(c => c.id === activeTab);

  return (
    <div className="space-y-8 animate-in fade-in pb-40 px-1 md:px-4 font-sans">
      {/* HEADER TITAN FINAL ARCHIVE */}
      <div className="bg-slate-950 p-8 md:p-14 rounded-[40px] md:rounded-[60px] text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex items-center gap-8">
           <div className="w-16 h-16 md:w-24 md:h-24 bg-indigo-600 rounded-[30px] flex items-center justify-center text-white shadow-2xl shrink-0">
              {ICON_MEASURES('w-10 h-10 md:w-14 h-14')}
           </div>
           <div>
              <span className="text-amber-500 font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-2 block italic underline underline-offset-4">Titan Final Archive • Engenharia de Dados Bíblicos</span>
              <h2 className="text-2xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Matriz de <span className="text-indigo-400">Medidas</span></h2>
              <p className="text-slate-400 text-xs md:text-lg mt-3 bible-text italic">Dataset completo: Conversões técnicas, exegese dimensional e ciclo anual sagrado.</p>
           </div>
        </div>
      </div>

      {/* SELETOR DE CATEGORIAS - MODERN GLASSMOPHISM */}
      <div className="flex flex-wrap justify-center gap-2 sticky top-24 z-30 py-4 bg-slate-50/90 dark:bg-black/80 backdrop-blur-xl rounded-[30px] px-4 border border-slate-200/50 dark:border-white/5 shadow-2xl">
        <NavBtn active={activeTab === 'comprimento'} color="indigo" onClick={() => setActiveTab('comprimento')} label="📏 Comprimento" />
        <NavBtn active={activeTab === 'pesos'} color="amber" onClick={() => setActiveTab('pesos')} label="⚖️ Pesos" />
        <NavBtn active={activeTab === 'liquidos'} color="emerald" onClick={() => setActiveTab('liquidos')} label="🏺 Líquidos" />
        <NavBtn active={activeTab === 'secos'} color="emerald" onClick={() => setActiveTab('secos')} label="🌾 Secos" />
        <NavBtn active={activeTab === 'moedas'} color="violet" onClick={() => setActiveTab('moedas')} label="🪙 Moedas" />
        <NavBtn active={activeTab === 'area'} color="sky" onClick={() => setActiveTab('area')} label="📐 Área" />
        <NavBtn active={activeTab === 'tempo'} color="rose" onClick={() => setActiveTab('tempo')} label="⏳ Tempo" />
        <NavBtn active={activeTab === 'clima'} color="sky" onClick={() => setActiveTab('clima')} label="🌤️ Clima" />
        <NavBtn active={activeTab === 'construcoes'} color="slate" onClick={() => setActiveTab('construcoes')} label="🏛️ Construções" />
        <NavBtn active={activeTab === 'distancias'} color="indigo" onClick={() => setActiveTab('distancias')} label="🗺️ Distâncias" />
        <NavBtn active={activeTab === 'metais'} color="amber" onClick={() => setActiveTab('metais')} label="⛏️ Metais" />
        <NavBtn active={activeTab === 'matematica'} color="violet" onClick={() => setActiveTab('matematica')} label="🧮 Matemática" />
        <NavBtn active={activeTab === 'arqueologia'} color="emerald" onClick={() => setActiveTab('arqueologia')} label="🏺 Arqueologia" />
        <NavBtn active={activeTab === 'navegacao'} color="sky" onClick={() => setActiveTab('navegacao')} label="⚓ Navegação" />
        <NavBtn active={activeTab === 'conversoes'} color="slate" onClick={() => setActiveTab('conversoes')} label="🔄 Conversões" />
        <NavBtn active={activeTab === 'teologia'} color="rose" onClick={() => setActiveTab('teologia')} label="📖 Teologia" />
        
        {/* Legacy tabs */}
        <NavBtn active={activeTab === 'calendario'} color="rose" onClick={() => setActiveTab('calendario')} label="⏳ Calendário" />
        <NavBtn active={activeTab === 'monumentos'} color="sky" onClick={() => setActiveTab('monumentos')} label="🏛️ Monumentos" />
        <NavBtn active={activeTab === 'padroes'} color="slate" onClick={() => setActiveTab('padroes')} label="🔢 Padrões" />
      </div>

      {activeCategoryData && (
        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-xl relative">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-slate-800 dark:text-white leading-none">
              {activeCategoryData.title}
            </h3>
            <InjectButton 
              captureTarget={captureTarget} 
              title={`ESTUDO: ${activeCategoryData.title}`} 
              content={activeCategoryData.description.join('\n\n')}
              className="relative p-3 rounded-xl shadow-lg transition-all active:scale-95 bg-indigo-600 text-white shadow-[0_0_15px_rgba(0,0,0,0.1)] shrink-0"
            />
          </div>
          <div className="space-y-6">
            {activeCategoryData.description.map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {filteredMeasures.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeasures.map((measure, idx) => (
            <MeasureCard 
              key={idx}
              color={
                ['comprimento', 'distancias'].includes(activeTab) ? 'indigo' :
                ['pesos', 'metais'].includes(activeTab) ? 'amber' :
                ['liquidos', 'secos', 'arqueologia'].includes(activeTab) ? 'emerald' :
                ['moedas', 'matematica'].includes(activeTab) ? 'violet' :
                ['tempo', 'calendario', 'teologia'].includes(activeTab) ? 'rose' :
                ['area', 'clima', 'monumentos', 'navegacao'].includes(activeTab) ? 'sky' : 'slate'
              }
              {...measure}
              captureTarget={captureTarget}
            />
          ))}
        </div>
      )}

      {/* MATRIX DE PROGRESSÃO INTERESTRUTURAL (O CUBO) - LAYOUT PREMIUM RECONSTRUÍDO */}
      {(activeTab === 'monumentos' || activeTab === 'padroes') && (
        <div className="bg-slate-900 p-8 md:p-14 rounded-[50px] text-white shadow-2xl border border-sky-500/30 mt-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-sky-600/5 rounded-full blur-3xl"></div>
           <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-sky-400">
                 <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 0l16 10M4 17L20 7" /></svg>
              </div>
              <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-sky-400 leading-none">Matrix Interestrutural <br/><span className="text-white">A Engenharia do Cubo</span></h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProgressCard title="Tabernáculo" measure="10 Côvados" desc="Presença Móvel" detail="Santíssimo: Cubo 10³" color="border-sky-500" />
              <ProgressCard title="Templo de Salomão" measure="20 Côvados" desc="Glória Fixa" detail="Santíssimo: Cubo 20³" color="border-amber-500" />
              <ProgressCard title="Nova Jerusalém" measure="12.000 Est." desc="Consumação Eterna" detail="Cidade: Cubo 12000³" color="border-rose-500" highlight />
           </div>

           <div className="mt-10 p-6 md:p-10 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-md">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center shrink-0 font-black italic">!</div>
                 <div>
                    <h4 className="text-[12px] font-black uppercase text-sky-400 tracking-widest mb-2">Observação Arquitetônica Titan</h4>
                    <p className="bible-text text-sm md:text-xl italic text-slate-300 leading-relaxed">
                      A progressão **10 -&gt; 20 -&gt; 12.000** demonstra o aumento exponencial da habitação divina. O Cubo é a única forma geométrica onde altura, largura e profundidade são idênticas, eliminando qualquer sombra de variação ou desigualdade na Presença.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

const ProgressCard = ({ title, measure, desc, detail, color, highlight }: any) => (
  <div className={`p-8 rounded-[40px] border-l-[10px] ${color} bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:scale-105 ${highlight ? 'ring-2 ring-white/20' : ''}`}>
     <span className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em] block mb-2">{desc}</span>
     <h4 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-white leading-none mb-4">{title}</h4>
     <div className="text-3xl font-black text-sky-400 italic mb-1">{measure}</div>
     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{detail}</p>
  </div>
);

const NavBtn = ({ active, onClick, label, color }: any) => {
  const colorMap: any = {
    indigo: 'bg-indigo-600 border-indigo-600',
    amber: 'bg-amber-500 border-amber-500',
    emerald: 'bg-emerald-600 border-emerald-600',
    violet: 'bg-violet-600 border-violet-600',
    rose: 'bg-rose-600 border-rose-600',
    sky: 'bg-sky-500 border-sky-500',
    slate: 'bg-slate-700 border-slate-700'
  };
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2.5 md:px-6 md:py-3 rounded-2xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all border-2 ${active ? `${colorMap[color]} text-white shadow-xl scale-105` : 'bg-white dark:bg-slate-800 text-slate-400 border-transparent hover:border-slate-200 dark:hover:border-slate-700'}`}
    >
      {label}
    </button>
  );
};

const MeasureCard = ({ label, val, strong, ref, theo, color, captureTarget, extra }: any) => {
  const borderColors: any = {
    indigo: 'border-l-indigo-500',
    amber: 'border-l-amber-500',
    emerald: 'border-l-emerald-500',
    violet: 'border-l-violet-500',
    rose: 'border-l-rose-500',
    sky: 'border-l-sky-500',
    slate: 'border-l-slate-500'
  };

  const textColors: any = {
    indigo: 'text-indigo-600',
    amber: 'text-amber-600',
    emerald: 'text-emerald-600',
    violet: 'text-violet-600',
    rose: 'text-rose-600',
    sky: 'text-sky-600',
    slate: 'text-slate-600'
  };

  const bgColors: any = {
    indigo: 'bg-indigo-50 dark:bg-indigo-900/10',
    amber: 'bg-amber-50 dark:bg-amber-900/10',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/10',
    violet: 'bg-violet-50 dark:bg-violet-900/10',
    rose: 'bg-rose-50 dark:bg-rose-900/10',
    sky: 'bg-sky-50 dark:bg-sky-900/10',
    slate: 'bg-slate-50 dark:bg-slate-900/10'
  };

  return (
    <div className={`bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[35px] md:rounded-[45px] border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col group transition-all hover:border-slate-300 dark:hover:border-slate-500 relative overflow-hidden border-l-[12px] ${borderColors[color]}`}>
       <div className="flex justify-between items-start mb-6">
          <div>
             <span className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${textColors[color]}`}>{label}</span>
             <div className="flex items-center gap-2">
                <span className="text-[8px] font-black bg-slate-100 dark:bg-slate-900 text-slate-500 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">{strong}</span>
                <span className="text-[8px] font-bold text-slate-300 uppercase italic">{ref}</span>
             </div>
          </div>
          <div className="flex gap-2">
             <InjectButton 
               captureTarget={captureTarget} 
               title={`METROLOGIA: ${label}`} 
               content={`VALOR: ${val}\nREF: ${ref}\nEXEGESE: ${theo}${extra ? `\nEXTRA: ${extra}` : ''}`}
               className={`relative p-2.5 rounded-xl shadow-lg transition-all active:scale-95 ${color === 'amber' ? 'bg-indigo-600' : 'bg-amber-500'} text-white shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
             />
          </div>
       </div>

       <div className="mb-6">
          <span className={`text-3xl md:text-5xl font-black italic tracking-tighter leading-none block ${textColors[color]}`}>{val}</span>
          {extra && <p className="text-[9px] font-black text-slate-400 uppercase mt-2 tracking-widest italic">{extra}</p>}
       </div>

       <div className={`${bgColors[color]} p-5 md:p-7 rounded-[25px] md:rounded-[35px] border border-slate-100 dark:border-white/5 shadow-inner mt-auto`}>
          <span className={`text-[9px] font-black uppercase tracking-widest block mb-2 italic ${textColors[color]}`}>Significado Teológico</span>
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed bible-text font-medium text-justify">
             "{theo}"
          </p>
       </div>
    </div>
  );
};

export default MeasuresTab;
