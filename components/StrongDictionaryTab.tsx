import React, { useState, useEffect } from 'react';
import { StrongEntry } from '../types';
import { searchStrongsInDB, getStrongEntry, getVersesByStrong } from '../services/database';
import { ICON_STUDY, ICON_BIBLE } from '../constants';

interface StrongDictionaryTabProps {
  onNavigate?: (tab: string, metadata?: any) => void;
}

const StrongDictionaryTab: React.FC<StrongDictionaryTabProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<StrongEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [occurrences, setOccurrences] = useState<Record<string, string[]>>({});

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    
    const q = query.trim();
    let foundEntries: StrongEntry[] = [];
    if (/^[HG][0-9]{1,5}$/i.test(q)) {
      const entry = await getStrongEntry(q.toUpperCase());
      foundEntries = entry ? [entry] : [];
    } else {
      foundEntries = await searchStrongsInDB(q);
    }
    
    setResults(foundEntries);
    
    // Fetch occurrences for each result
    const occMap: Record<string, string[]> = {};
    for (const entry of foundEntries) {
      const refs = await getVersesByStrong(entry.id);
      occMap[entry.id] = refs;
    }
    setOccurrences(occMap);
    
    setLoading(false);
  };

  const handleRefClick = (ref: string) => {
    if (!onNavigate) return;
    const parts = ref.split(' ');
    const bookId = parts[0];
    const chapterVerse = parts[1].split(':');
    const chapter = parseInt(chapterVerse[0]);
    const verse = parseInt(chapterVerse[1]);
    
    onNavigate('bible', { bookId, chapter, verse });
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto animate-in fade-in">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic mb-4">
          Dicionário Strong
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Pesquise por código Strong (ex: H7225, G2316) ou por palavra em português para encontrar as raízes originais em hebraico e grego.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-800 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Digite um código Strong ou palavra..."
            className="flex-1 bg-slate-50 dark:bg-slate-800 border-none text-slate-800 dark:text-white font-bold text-lg rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            disabled={loading || !query.trim()}
            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                {ICON_STUDY('w-5 h-5')} Buscar
              </>
            )}
          </button>
        </div>
      </div>

      {searched && !loading && results.length === 0 && (
        <div className="text-center p-12 bg-slate-50 dark:bg-slate-800/50 rounded-[32px] border border-slate-100 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Nenhum resultado encontrado para "{query}".
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-8">
          {results.map((entry) => (
            <div key={entry.id} className="bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-8 shadow-md border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black uppercase text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-lg tracking-widest">
                      {entry.id}
                    </span>
                    {entry.occurrences > 0 && (
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-lg">
                        {entry.occurrences} ocorrências
                      </span>
                    )}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 dark:text-white mt-2">
                    {entry.original}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 italic mt-2 text-lg">
                    Transliteração: <span className="font-bold text-indigo-500">{entry.transliteration}</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[24px] border border-slate-100 dark:border-slate-700 mb-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Definição</h4>
                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  {entry.definition}
                </p>
              </div>

              {occurrences[entry.id] && occurrences[entry.id].length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    {ICON_BIBLE('w-3 h-3')} Ocorrências na Bíblia ({occurrences[entry.id].length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {occurrences[entry.id].map(ref => (
                      <button
                        key={ref}
                        onClick={() => handleRefClick(ref)}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-tighter hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100 dark:border-indigo-800/50"
                      >
                        {ref}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StrongDictionaryTab;
