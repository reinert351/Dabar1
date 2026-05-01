
import React, { useState } from 'react';
import { PROPHECIES_DATA } from '../data/prophecies_data';
import { ICON_SERMON, ICON_BIBLE } from '../constants';
import { Prophecy, UserState, CaptureTarget } from '../types';

// Funil Único
import { addTextToStudio, addRefsToStudio } from '../core/studioFunnel';

interface PropheciesTabProps {
  userState: UserState;
  setUserState: any;
  captureTarget?: CaptureTarget | null;
}

const PropheciesTab: React.FC<PropheciesTabProps> = ({ userState, setUserState, captureTarget }) => {
  const [activeTestament, setActiveTestament] = useState<'OT' | 'NT'>('OT');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleInject = (title: string, content: string) => {
    addTextToStudio(`[PROFECIA - ${title}]\n${content}`);
  };

  const toggleSermon = (ref: string, text: string) => {
    addRefsToStudio([ref]);
  };

  const filteredProphecies = PROPHECIES_DATA.filter(p => p.testament === activeTestament);

  return (
    <div className="max-w-6xl mx-auto py-8 animate-in fade-in pb-32">
      {/* Header Profético */}
      <header className="bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Profecias & Cumprimentos</h2>
        </div>
      </header>

      {/* Grid de Profecias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProphecies.map(p => (
          <div 
            key={p.id} 
            className={`bg-white dark:bg-slate-800 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm transition-all overflow-hidden relative ${expandedId === p.id ? 'ring-2 ring-indigo-500/20 shadow-xl' : 'hover:border-indigo-200'}`}
          >
            {captureTarget && (
              <button 
                onClick={() => handleInject(p.theme, `REFERÊNCIA: ${p.prophecyRef}\nTEXTO: ${p.prophecyText}`)}
                className="absolute top-4 right-4 p-3 bg-amber-500 text-white rounded-xl shadow-lg z-20"
              >🎯</button>
            )}
            <div className="p-8">
               <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-4">{p.theme}</h3>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl mb-6">
                  <span className="text-[9px] font-black text-indigo-500 uppercase block mb-2">{p.prophecyRef}</span>
                  <p className="bible-text text-lg italic text-slate-700 dark:text-slate-200 leading-relaxed">"{p.prophecyText}"</p>
               </div>

               <button 
                 onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                 className="w-full flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-700 rounded-2xl text-[10px] font-black uppercase text-slate-500 hover:text-indigo-600 transition-all mb-4"
               >
                 {expandedId === p.id ? 'Ocultar Detalhes' : 'Ver Cumprimento'}
               </button>

               {expandedId === p.id && p.fulfillmentStatus === 'fulfilled' && p.fulfillmentRef && (
                 <div className="animate-in slide-in-from-top-2 space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-100">
                       <span className="text-[9px] font-black text-emerald-600 uppercase block mb-2">Cumprimento: {p.fulfillmentRef}</span>
                       <p className="bible-text text-lg italic text-emerald-900 dark:text-emerald-200 leading-relaxed">"{p.fulfillmentText}"</p>
                    </div>
                    {captureTarget && (
                       <button 
                         onClick={() => handleInject(`Cumprimento: ${p.theme}`, `REF: ${p.fulfillmentRef}\nTEXTO: ${p.fulfillmentText}`)}
                         className="w-full py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-lg"
                       >🎯 Injetar Cumprimento</button>
                    )}
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropheciesTab;
