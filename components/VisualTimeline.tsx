
import React from 'react';
import { KINGS_DATA } from '../data/kings_data';

const VisualTimeline: React.FC = () => {
  const allKings = [...KINGS_DATA.united, ...KINGS_DATA.judah, ...KINGS_DATA.israel].sort((a, b) => {
    const yearA = parseInt(a.years.split('-')[0]);
    const yearB = parseInt(b.years.split('-')[0]);
    return yearB - yearA; 
  });

  return (
    <div className="w-full bg-gradient-to-br from-sky-400 via-sky-50 to-white p-6 md:p-10 rounded-[40px] border border-sky-200 shadow-2xl overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-xl md:text-2xl font-black text-sky-900 uppercase italic tracking-tighter flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></div>
          Sincronia Real: O Fluxo do Tempo Monárquico
        </h3>
        <div className="flex gap-4">
           <Legend item="Reino Unificado" color="bg-amber-500" icon="👑" />
           <Legend item="Judá" color="bg-blue-600" icon="🦁" />
           <Legend item="Israel" color="bg-rose-600" icon="🌾" />
        </div>
      </div>
      
      <div className="overflow-x-auto no-scrollbar pb-10">
        <div className="relative flex items-start gap-1 min-w-[7000px] h-[450px] pt-24">
          {/* Linha do Tempo Histórica */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-sky-200 -translate-y-1/2 opacity-50"></div>
          
          {allKings.map((king, i) => {
            const isJudah = KINGS_DATA.judah.some(k => k.id === king.id);
            const isUnited = KINGS_DATA.united.some(k => k.id === king.id);
            const offset = isUnited ? 'top-1/2 -translate-y-1/2' : isJudah ? 'bottom-[55%]' : 'top-[55%]';
            const color = isUnited ? 'bg-amber-500' : isJudah ? 'bg-blue-600' : 'bg-rose-600';
            const icon = isUnited ? '👑' : isJudah ? '🦁' : '🔥';

            return (
              <div key={king.id} className={`absolute flex flex-col items-center ${offset}`} style={{ left: `${i * 160 + 60}px` }}>
                {/* Visual Connector */}
                <div className={`w-0.5 h-12 bg-gradient-to-${isJudah ? 't' : 'b'} from-${isUnited ? 'amber' : isJudah ? 'blue' : 'rose'}-500 to-transparent opacity-20 mb-2`}></div>
                
                {/* Icon small label */}
                <span className="text-xs mb-1 opacity-80">{icon}</span>
                
                {/* Circle Marker */}
                <div className={`w-4 h-4 rounded-full ${color} shadow-[0_0_15px_rgba(0,0,0,0.1)] z-10 border-2 border-white transform hover:scale-150 transition-all cursor-help`}></div>
                
                {/* King Tag */}
                <div className="mt-4 text-center bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-white/80 shadow-sm w-32 group hover:bg-white transition-all">
                  <p className="text-[10px] font-black text-sky-950 uppercase italic truncate">{king.name}</p>
                  <p className="text-[8px] font-bold text-sky-600 mt-0.5">{king.years}</p>
                  
                  <div className="mt-2 flex flex-wrap justify-center gap-1">
                    {king.prophets.slice(0, 1).map(p => (
                      <span key={p} className="text-[7px] bg-sky-100 border border-sky-200 px-1.5 py-0.5 rounded-md text-sky-700 font-black">🎙️ {p}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-4 bg-sky-900/5 p-6 rounded-[30px] border border-sky-100">
        <p className="text-[9px] font-black text-sky-800 uppercase tracking-[0.3em] text-center italic">
          Mapeamento Geopolítico e Profético do Cânon Sagrado • Arquitetura de Dados Dabar
        </p>
      </div>
    </div>
  );
};

const Legend = ({ item, color, icon }: any) => (
  <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/60 shadow-sm">
    <span className="text-xs">{icon}</span>
    <div className={`w-2 h-2 rounded-full ${color}`}></div>
    <span className="text-[9px] font-black text-sky-900 uppercase tracking-widest">{item}</span>
  </div>
);

export default VisualTimeline;
