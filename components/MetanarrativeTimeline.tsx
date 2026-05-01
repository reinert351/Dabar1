
import React from 'react';

const METANARRATIVE_STAGES = [
  { id: 'c1', label: 'Criação', ref: 'Gn 1:1', color: 'bg-emerald-500', icon: '✨', desc: 'Início do Tempo' },
  { id: 'c2', label: 'A Queda', ref: 'Gn 3:6', color: 'bg-rose-600', icon: '🍎', desc: 'Entrada do Pecado' },
  { id: 'c3', label: 'Dilúvio', ref: 'Gn 7', color: 'bg-blue-600', icon: '🌊', desc: 'Juízo e Preservação' },
  { id: 'c4', label: 'Patriarcas', ref: 'Gn 12', color: 'bg-amber-500', icon: '⛺', desc: 'O Chamado da Fé' },
  { id: 'c5', label: 'Êxodo', ref: 'Ex 12', color: 'bg-orange-600', icon: '👣', desc: 'Redenção e Libertação' },
  { id: 'c6', label: 'A Lei', ref: 'Ex 20', color: 'bg-indigo-600', icon: '📜', desc: 'Padrão de Santidade' },
  { id: 'c7', label: 'Monarquia', ref: '1 Sm', color: 'bg-yellow-600', icon: '👑', desc: 'Reino Teocrático' },
  { id: 'c8', label: 'Exílio', ref: '2 Reis', color: 'bg-slate-600', icon: '⛓️', desc: 'Disciplina Nacional' },
  { id: 'c9', label: 'Encarnação', ref: 'Gálatas 4:4', color: 'bg-emerald-400', icon: '⭐', desc: 'Cristo em Carne' },
  { id: 'c10', label: 'Cruz', ref: 'João 19', color: 'bg-rose-700', icon: '✝️', desc: 'Substituição Penal' },
  { id: 'c11', label: 'Ressurreição', ref: '1 Co 15', color: 'bg-white', icon: '🌅', desc: 'Vitória sobre a Morte' },
  { id: 'c12', label: 'Igreja', ref: 'Atos 2', color: 'bg-violet-600', icon: '🔥', desc: 'Era do Espírito' },
  { id: 'c13', label: 'Arrebatamento', ref: '1 Ts 4', color: 'bg-sky-400', icon: '☁️', desc: 'Esperança da Noiva' },
  { id: 'c14', label: 'Tribulação', ref: 'Ap 6-18', color: 'bg-red-900', icon: '🎺', desc: 'Ira do Cordeiro' },
  { id: 'c15', label: '2ª Vinda', ref: 'Ap 19', color: 'bg-amber-400', icon: '⚡', desc: 'Retorno do Rei' },
  { id: 'c16', label: 'Milênio', ref: 'Ap 20', color: 'bg-emerald-600', icon: '🕊️', desc: 'Reinado de 1000 anos' },
  { id: 'c17', label: 'Juízo Final', ref: 'Ap 20:11', color: 'bg-slate-900', icon: '⚖️', desc: 'Trono Branco' },
  { id: 'c18', label: 'Eternidade', ref: 'Ap 21-22', color: 'bg-indigo-500', icon: '💎', desc: 'Novo Céu e Terra' },
];

const MetanarrativeTimeline: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-sky-400 via-sky-100 to-white p-6 md:p-10 rounded-[40px] border border-sky-200 shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h3 className="text-xl md:text-2xl font-black text-sky-900 uppercase italic tracking-tighter flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse"></div>
          A Metanarrativa Celestial: Da Criação à Eternidade
        </h3>
        <span className="bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black text-sky-700 uppercase tracking-widest border border-white/60">
          Fluxo do Plano de Redenção
        </span>
      </div>
      
      <div className="overflow-x-auto no-scrollbar pb-10">
        <div className="relative flex items-start gap-1 min-w-[3400px] h-[350px] pt-24">
          {/* Eixo de Luz */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-indigo-500 to-violet-400 -translate-y-1/2 opacity-30 blur-[1px] rounded-full"></div>
          
          {METANARRATIVE_STAGES.map((stage, i) => (
            <div key={stage.id} className="absolute flex flex-col items-center top-1/2 -translate-y-1/2" style={{ left: `${i * 190 + 60}px` }}>
              {/* Icon Container */}
              <div className="mb-4 text-3xl md:text-4xl animate-bounce" style={{ animationDuration: `${2 + (i % 3)}s` }}>
                {stage.icon}
              </div>
              
              {/* Node */}
              <div className={`w-8 h-8 rounded-full ${stage.color} shadow-[0_0_25px_rgba(255,255,255,0.8)] z-10 border-4 border-white transform transition-transform hover:scale-125 cursor-pointer`}></div>
              
              {/* Info Card */}
              <div className="mt-8 text-center bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white/80 shadow-sm w-44">
                <p className="text-xs font-black text-sky-950 uppercase italic tracking-tighter">{stage.label}</p>
                <p className="text-[10px] font-bold text-indigo-600 uppercase mt-1">{stage.ref}</p>
                <div className="h-px w-8 bg-sky-200 mx-auto my-2"></div>
                <p className="text-[9px] text-sky-700 uppercase font-bold leading-tight">{stage.desc}</p>
              </div>
              
              {/* Vertical Guide */}
              <div className="absolute top-[-40px] w-px h-[200px] bg-gradient-to-b from-transparent via-sky-300 to-transparent -z-10 opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mt-6 border-t border-sky-200/50 pt-8">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black text-sky-800 uppercase tracking-widest italic">Engine Titan Pro</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span className="text-[9px] font-bold text-sky-600 uppercase">Dados Verificados</span>
        </div>
      </div>
    </div>
  );
};

export default MetanarrativeTimeline;
