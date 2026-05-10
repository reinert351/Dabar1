
import React, { useState, useEffect } from 'react';
import { getDiaryEntries, saveDiaryEntry } from '../services/database';
import { DiaryEntry } from '../types';
import { ICON_DIARY } from '../constants';

const DiaryTab: React.FC = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isPromise, setIsPromise] = useState(false);

  useEffect(() => { loadEntries(); }, []);

  const loadEntries = async () => {
    const data = await getDiaryEntries();
    setEntries(data.sort((a, b) => b.date - a.date));
  };

  const handleSave = async () => {
    if (!newContent.trim()) return;
    const entry: DiaryEntry = {
      id: `diary_${Date.now()}`,
      date: Date.now(),
      title: newTitle || 'Insight Espiritual',
      content: newContent,
      refs: [],
      isPromise,
      tags: isPromise ? ['promessa'] : []
    };
    await saveDiaryEntry(entry);
    setNewTitle('');
    setNewContent('');
    setIsPromise(false);
    loadEntries();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in pb-40">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-xl">
        <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-6">Novo Registro da Jornada</h3>
        <input 
          type="text" placeholder="Título do momento..." 
          className="w-full bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl mb-4 font-bold outline-none border border-transparent focus:border-indigo-500"
          value={newTitle} onChange={e => setNewTitle(e.target.value)}
        />
        <textarea 
          placeholder="O que o Senhor falou ao seu coração hoje?" 
          className="w-full bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl mb-6 min-h-[150px] outline-none border border-transparent focus:border-indigo-500 bible-text text-xl"
          value={newContent} onChange={e => setNewContent(e.target.value)}
        />
        <div className="flex justify-between items-center">
           <button onClick={() => setIsPromise(!isPromise)} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase text-[10px] transition-all ${isPromise ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
              {isPromise ? '🌟 Promessa Marcada' : 'Marcar como Promessa'}
           </button>
           <button onClick={handleSave} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg">Salvar na História</button>
        </div>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800" />
        {entries.map(entry => (
          <div key={entry.id} className="relative pl-14 group">
            <div className={`absolute left-4 top-8 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${entry.isPromise ? 'bg-amber-500' : 'bg-indigo-600'} z-10`} />
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[35px] border border-slate-50 dark:border-slate-700 shadow-sm group-hover:shadow-md transition-all">
               <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(entry.date).toLocaleDateString()}</span>
                  {entry.isPromise && <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Promessa</span>}
               </div>
               <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-4">{entry.title}</h4>
               <p className="bible-text text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic mb-4">{entry.content}</p>
               <button
                 onClick={() => {
                   window.dispatchEvent(new CustomEvent('dabar-play-tts', {
                     detail: { title: entry.title, subtitle: 'Diário da Jornada', text: entry.content }
                   }));
                 }}
                 className="mt-4 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-600 transition-all flex items-center gap-2 w-fit active:scale-95"
               >
                 <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 Ouvir Registro
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryTab;
