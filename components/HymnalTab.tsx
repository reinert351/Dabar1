
import React, { useState } from 'react';
import { ICON_HYMNAL, ICON_BIBLE } from '../constants';

const HymnalTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockHymns = [
    { num: 15, title: 'Foi na Cruz', author: 'Isaac Watts', themes: ['Redenção', 'Cruz', 'Amor'], ref: 'João 3:16' },
    { num: 545, title: 'Porque Ele Vive', author: 'Bill Gaither', themes: ['Ressurreição', 'Esperança'], ref: 'Mateus 28:6' },
    { num: 1, title: 'Chuvas de Bênçãos', author: 'D.W. Whittle', themes: ['Espírito Santo', 'Promessa'], ref: 'Ezequiel 34:26' }
  ];

  const filtered = mockHymns.filter(h => h.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in pb-40">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 flex items-center gap-6 overflow-hidden">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shrink-0">
           {ICON_HYMNAL('w-6 h-6')}
        </div>
        <input 
          type="text" placeholder="Buscar hino por título ou número..."
          className="w-full bg-transparent p-4 text-xl font-bold outline-none dark:text-white"
          value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(h => (
          <div key={h.num} className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm hover:border-indigo-400 transition-all flex flex-col justify-between">
             <div>
                <div className="flex justify-between items-start mb-6">
                   <span className="text-4xl font-black text-slate-100 dark:text-slate-700 italic">#{h.num}</span>
                   <div className="flex gap-2">
                      {h.themes.map(t => <span key={t} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[8px] font-black uppercase">{t}</span>)}
                   </div>
                </div>
                <h4 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-2">{h.title}</h4>
                <p className="text-slate-400 text-xs font-bold uppercase mb-8">Autor: {h.author}</p>
             </div>
             <div className="pt-6 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-2 text-indigo-600 font-black text-[10px] uppercase">
                   {ICON_BIBLE('w-4 h-4')} {h.ref}
                </div>
                <button className="bg-slate-50 dark:bg-slate-700 px-6 py-2 rounded-xl font-black uppercase text-[9px] text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">Ver Letra</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HymnalTab;
