import React, { useState, useMemo } from 'react';
import { PRAYERS_30 } from '../data/prayers_30';
import { BiblicalPrayer, PrayerType } from '../domain/types';
import PrayerCard from '../ui/PrayerCard';

const typeLabels: Record<string, string> = {
  intercession: 'Intercessão',
  confession: 'Confissão',
  gratitude: 'Gratidão',
  sovereignty: 'Soberania',
  petition: 'Petição',
  warfare: 'Batalha Espiritual',
  lament: 'Lamento'
};

const PrayersListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<PrayerType | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return PRAYERS_30.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' || p.type === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  const activePrayer = useMemo(() => PRAYERS_30.find(p => p.id === selectedId), [selectedId]);

  return (
    <div className="space-y-10 animate-in fade-in pb-40 px-2 font-sans">
      {/* Header com Contador e Tradução */}
      <div className="bg-slate-900 p-8 md:p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <span className="text-indigo-400 font-black uppercase tracking-[0.5em] text-[8px] mb-3 block italic">Dabar Lex-Orandi • Módulo Offline</span>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">Banco de <span className="text-indigo-500">Orações</span></h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
             <p className="text-slate-400 max-w-xl text-xs md:text-base leading-relaxed bible-text italic">
               Anatomia da petição bíblica: {PRAYERS_30.length} orações fundamentais analisadas por contexto, fundamentação e resultado.
             </p>
             <div className="bg-indigo-600/30 border border-indigo-500 px-4 py-2 rounded-2xl w-fit">
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Total: {PRAYERS_30.length}</span>
             </div>
          </div>
        </div>
      </div>

      {/* Busca e Filtros Traduzidos */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Pesquisar oração ou autor..." 
            className="w-full bg-white dark:bg-slate-900 rounded-[25px] px-14 py-5 text-sm font-bold border border-slate-100 dark:border-slate-800 outline-none focus:border-indigo-500 shadow-sm transition-all"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {['all', 'intercession', 'confession', 'gratitude', 'sovereignty', 'petition', 'warfare'].map(t => (
            <button
              key={t}
              onClick={() => setFilter(t as any)}
              className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border-2 ${filter === t ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
            >
              {t === 'all' ? 'Todas' : typeLabels[t] || t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lista Lateral Integral */}
        <div className="lg:col-span-4 space-y-4 max-h-[70vh] overflow-y-auto no-scrollbar pr-2">
          {filtered.length > 0 ? filtered.map(p => (
            <PrayerCard 
              key={p.id} 
              prayer={p} 
              onSelect={setSelectedId} 
              isSelected={selectedId === p.id} 
            />
          )) : (
            <div className="py-10 text-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[35px]">
              <p className="text-slate-400 font-black uppercase tracking-widest text-[9px]">Nenhum resultado encontrado</p>
            </div>
          )}
        </div>

        {/* Detalhes da Oração Traduzidos */}
        <div className="lg:col-span-8">
          {activePrayer ? (
            <div className="bg-white dark:bg-slate-800 p-8 md:p-14 rounded-[60px] shadow-sm border border-slate-50 dark:border-slate-700 animate-in slide-in-from-bottom-4">
              <div className="flex justify-between items-start mb-10 border-b dark:border-slate-700 pb-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight">{activePrayer.title}</h3>
                  <p className="text-indigo-600 font-black uppercase text-xs mt-2 tracking-widest">{activePrayer.ref} • {activePrayer.author}</p>
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-4">I. Contexto Histórico</label>
                  <p className="bible-text text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed">{activePrayer.context}</p>
                </section>

                <section>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-4">II. Estrutura Exegética</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activePrayer.structure.map((item, i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700">
                        <span className="text-[8px] font-black text-indigo-500 mb-2 block uppercase">Parte {i+1}</span>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tighter italic">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-indigo-600 p-8 md:p-10 rounded-[40px] text-white shadow-xl">
                  <label className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.4em] block mb-4">Súplica Central (Petição)</label>
                  <p className="text-xl md:text-2xl font-black italic tracking-tighter leading-tight uppercase">"{activePrayer.petition}"</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-[40px] border border-indigo-100 dark:border-indigo-800 shadow-inner">
                    <label className="text-[9px] font-black text-indigo-600 uppercase tracking-widest block mb-4">Fundamentação Teológica</label>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-relaxed italic">"{activePrayer.foundation}"</p>
                  </section>
                  <section className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-[40px] border border-emerald-100 dark:border-emerald-800 shadow-inner">
                    <label className="text-[9px] font-black text-emerald-600 uppercase tracking-widest block mb-4">Resposta Divina</label>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-relaxed italic">"{activePrayer.result}"</p>
                  </section>
                </div>

                <section className="p-10 bg-slate-900 rounded-[50px] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] block mb-4">III. Aplicação para o Púlpito</label>
                    <p className="text-xl md:text-2xl font-black italic tracking-tighter leading-tight uppercase">{activePrayer.application}</p>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center py-20 bg-slate-50 dark:bg-slate-900/30 rounded-[60px] border-4 border-dashed border-slate-100 dark:border-slate-800">
              <svg className="w-16 h-16 text-slate-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <p className="text-slate-400 font-black uppercase tracking-widest text-xs italic">Selecione uma oração para análise profunda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrayersListPage;