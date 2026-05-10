
import React, { useState, useEffect, useMemo } from 'react';
import { globalSearch } from '../services/database';
import { Verse, Sermon, LibraryClip, DiaryEntry, Hymn } from '../types';
import { BIBLE_METADATA, ICON_SERMON } from '../constants';
import HighlightedVerse from './HighlightedVerse';
import { THEME_TAXONOMY, ThemeNode } from '../engine/data/theme_taxonomy';
import { THEME_COLORS } from '../engine/data/theme_colors';
import { classifyThemeSpiritual, SpiritualClassification } from '../engine/classifiers/classifyThemeSpiritual';
import { suggestWords, normalizeWord } from '../core/concordance';
import { BOOK_NAMES_PT } from '../engine/data/book_names_pt';

// Funil Único
import { addRefsToStudio, addTextToStudio } from '../core/studioFunnel';

interface GlobalSearchProps {
  onClose: () => void;
  onNavigate: (tab: string, metadata?: any) => void;
  savedForSermons?: string[];
}

const CANONICAL_ORDER = [
  'GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST',
  'JOB', 'PSA', 'PRO', 'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZE', 'DAN', 'HOS', 'JOE', 'AMO', 'OBA', 'JON', 'MIC', 'NAH',
  'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL', 'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHI', 'COL',
  '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAM', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'
];

const CATEGORY_ORDER = [
  "Pentateuco", "Históricos", "Poéticos", "Profetas Maiores", "Profetas Menores",
  "Evangelhos", "Histórico NT", "Epístolas Paulinas", "Epístolas Gerais", "Revelação"
];

const PT_ABBREV: Record<string, string> = {
  GEN: 'Gn', EXO: 'Êx', LEV: 'Lv', NUM: 'Nm', DEU: 'Dt', JOS: 'Js', JDG: 'Jz', RUT: 'Rt',
  '1SA': '1Sm', '2SA': '2Sm', '1KI': '1Rs', '2KI': '2Rs', '1CH': '1Cr', '2CH': '2Cr',
  EZR: 'Ed', NEH: 'Ne', EST: 'Et', JOB: 'Jó', PSA: 'Sl', PRO: 'Pv', ECC: 'Ec', SNG: 'Ct',
  ISA: 'Is', JER: 'Jr', LAM: 'Lm', EZE: 'Ez', DAN: 'Dn', HOS: 'Os', JOE: 'Jl', AMO: 'Am',
  OBA: 'Ob', JON: 'Jn', MIC: 'Mq', NAH: 'Na', HAB: 'Hc', ZEP: 'Sf', HAG: 'Ag', ZEC: 'Zc',
  MAL: 'Ml', MAT: 'Mt', MRK: 'Mc', LUK: 'Lc', JHN: 'Jo', ACT: 'At', ROM: 'Rm', '1CO': '1Co',
  '2CO': '2Co', GAL: 'Gl', EPH: 'Ef', PHI: 'Fp', COL: 'Cl', '1TH': '1Ts', '2TH': '2Ts',
  '1TI': '1Tm', '2TI': '2Tm', TIT: 'Tt', PHM: 'Fm', HEB: 'Hb', JAM: 'Tg', '1PE': '1Pe',
  '2PE': '2Pe', '1JN': '1Jo', '2JN': '2Jo', '3JN': '3Jo', JUD: 'Jd', REV: 'Ap'
};

const isNewTestament = (bookId: string) => {
  const ntBooks = [
    'MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHI', 'COL', 
    '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAM', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'
  ];
  return ntBooks.includes(bookId);
};

const GlobalSearch: React.FC<GlobalSearchProps> = ({ onClose, onNavigate, savedForSermons = [] }) => {
  const RESET_RESULTS = {
    books: [],
    verses: [], sermons: [], clips: [], diary: [], hymns: [],
    academy: [], metrology: [], kings: [], prophecies: [], revivals: [],
    councils: [], customs: [], archeology: [], heresies: [], quotes: [], messages: [], ditosDuros: [],
    timeline: [], courses: [], typology: [], deepStudies: [], prayers: [], hub: [], strongs: [],
    pericopes: []
  };

  const [term, setTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('bible_list');
  const [openThemes, setOpenThemes] = useState<Set<string>>(new Set());
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [results, setResults] = useState<any>(RESET_RESULTS);
  const [isSearching, setIsSearching] = useState(false);
  const [spiritualCache, setSpiritualCache] = useState<Record<string, SpiritualClassification>>({});
  
  // Dabar Real State
  const [selectedBookFilter, setSelectedBookFilter] = useState<string | null>(null);
  const [showAllBooksModal, setShowAllBooksModal] = useState(false);

  // Autocomplete Engine
  useEffect(() => {
    if (term.length >= 2) {
      suggestWords(term, 8).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [term]);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (term.length < 2) {
        setResults(RESET_RESULTS);
        return;
      }
      setIsSearching(true);
      try {
        const data = await globalSearch(term);
        
        if (data.verses) {
          data.verses.sort((a: Verse, b: Verse) => {
            const indexA = CANONICAL_ORDER.indexOf(a.bookId);
            const indexB = CANONICAL_ORDER.indexOf(b.bookId);
            if (indexA !== indexB) return indexA - indexB;
            if (a.chapter !== b.chapter) return a.chapter - b.chapter;
            return a.verse - b.verse;
          });
        }

        setResults({ ...RESET_RESULTS, ...data });
      } catch (error) {
        console.error("Global search error:", error);
        setResults(RESET_RESULTS);
      } finally {
        setIsSearching(false);
        setSpiritualCache({});
        setSuggestions([]); 
        setSelectedBookFilter(null);
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [term]);

  // Histograma de Livros (Baseado no resultado bruto da busca)
  const bookHistogram = useMemo(() => {
    if (results.verses.length === 0) return [];
    const counts: Record<string, number> = {};
    results.verses.forEach((v: Verse) => {
      counts[v.bookId] = (counts[v.bookId] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([id, count]) => ({ id, count, name: BOOK_NAMES_PT[id] || id }))
      .sort((a, b) => b.count - a.count);
  }, [results.verses]);

  // Resultados Filtrados pela UI
  const filteredVerses = useMemo(() => {
    if (!selectedBookFilter) return results.verses;
    return results.verses.filter((v: Verse) => v.bookId === selectedBookFilter);
  }, [results.verses, selectedBookFilter]);

  const stats = useMemo(() => {
    const ot = results.verses.filter((v: Verse) => !isNewTestament(v.bookId)).length;
    const nt = results.verses.filter((v: Verse) => isNewTestament(v.bookId)).length;
    return { ot, nt, total: results.verses.length, normalized: normalizeWord(term) };
  }, [results.verses, term]);

  const groupedVerses = useMemo(() => {
    const groups: Record<string, Verse[]> = {};
    filteredVerses.forEach((v: Verse) => {
      const cat = BIBLE_METADATA[v.bookId]?.category || "Outros";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(v);
    });
    return groups;
  }, [filteredVerses]);

  const thematicGroups = useMemo(() => {
    const groups: Record<string, { verses: Verse[], themeId: string }> = {};
    const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    filteredVerses.forEach((v: Verse) => {
      const normText = normalize(v.text);
      const scores = THEME_TAXONOMY.map(theme => {
        let score = 0;
        theme.keywords.forEach(kw => {
          const normKw = normalize(kw);
          if (normText.includes(normKw)) {
            score += 10;
            if (normText.startsWith(normKw) || normText.includes(" " + normKw)) score += 5;
          }
        });
        return { theme, score };
      }).filter(s => s.score > 0).sort((a, b) => b.score - a.score);

      let assigned: ThemeNode[] = [];
      if (scores.length > 0) {
        assigned.push(scores[0].theme);
        if (scores[1] && scores[1].score >= (scores[0].score * 0.8)) {
          assigned.push(scores[1].theme);
        }
      } else {
        assigned.push({ id: 'life_christian', title: 'Vida cristã', keywords: [] });
      }

      assigned.forEach(theme => {
        if (!groups[theme.title]) groups[theme.title] = { verses: [], themeId: theme.id };
        if (!groups[theme.title].verses.find(existing => existing.id === v.id)) {
          groups[theme.title].verses.push(v);
        }
      });
    });

    return Object.entries(groups)
      .sort((a, b) => b[1].verses.length - a[1].verses.length)
      .map(([title, data]) => ({ title, verses: data.verses, themeId: data.themeId }));
  }, [filteredVerses]);

  const availableTabs = useMemo(() => {
    return [
      ...(results.books?.length > 0 ? [{ id: 'books', label: 'Livros', count: results.books.length }] : []),
      ...(results.verses?.length > 0 ? [
        { id: 'bible_list', label: 'Bíblia (Canônica)', count: results.verses.length },
        { id: 'bible_themes', label: 'Bíblia (Temas)', count: thematicGroups.length }
      ] : []),
      ...(results.sermons?.length > 0 ? [{ id: 'sermons', label: 'Projetos no Estúdio', count: results.sermons.length }] : []),
      ...(results.messages?.length > 0 ? [{ id: 'messages', label: 'Mensagens Homiléticas', count: results.messages.length }] : []),
      ...(results.academy?.length > 0 ? [{ id: 'academy', label: 'Dabar Academy', count: results.academy.length }] : []),
      ...(results.hub?.length > 0 ? [{ id: 'hub', label: 'Dabar Hub', count: results.hub.length }] : []),
      ...(results.pericopes?.length > 0 ? [{ id: 'pericopes', label: 'Esboços & Perícopes', count: results.pericopes.length }] : []),
      ...(results.strongs?.length > 0 ? [{ id: 'strongs', label: 'Dicionário Strong', count: results.strongs.length }] : []),
      ...(results.courses?.length > 0 ? [{ id: 'courses', label: 'Idiomas Bíblicos', count: results.courses.length }] : []),
      ...(results.deepStudies?.length > 0 ? [{ id: 'deepStudies', label: 'Estudos Profundos', count: results.deepStudies.length }] : []),
      ...(results.heresies?.length > 0 ? [{ id: 'heresies', label: 'Heresias e Seitas', count: results.heresies.length }] : []),
      ...(results.councils?.length > 0 ? [{ id: 'councils', label: 'Concílios', count: results.councils.length }] : []),
      ...(results.ditosDuros?.length > 0 ? [{ id: 'ditosDuros', label: 'Ditos Duros', count: results.ditosDuros.length }] : []),
      ...(results.kings?.length > 0 ? [{ id: 'kings', label: 'Monarquia Bíblica', count: results.kings.length }] : []),
      ...(results.typology?.length > 0 ? [{ id: 'typology', label: 'Tipologia Bíblica', count: results.typology.length }] : []),
      ...(results.prophecies?.length > 0 ? [{ id: 'prophecies', label: 'Profecias', count: results.prophecies.length }] : []),
      ...(results.archeology?.length > 0 ? [{ id: 'archeology', label: 'Arqueologia', count: results.archeology.length }] : []),
      ...(results.revivals?.length > 0 ? [{ id: 'revivals', label: 'Reavivamentos', count: results.revivals.length }] : []),
      ...(results.customs?.length > 0 ? [{ id: 'customs', label: 'Usos & Costumes', count: results.customs.length }] : []),
      ...(results.quotes?.length > 0 ? [{ id: 'quotes', label: 'Citações', count: results.quotes.length }] : []),
      ...(results.prayers?.length > 0 ? [{ id: 'prayers', label: 'Orações', count: results.prayers.length }] : []),
      ...(results.timeline?.length > 0 ? [{ id: 'timeline', label: 'Cronologia', count: results.timeline.length }] : []),
      ...(results.metrology?.length > 0 ? [{ id: 'metrology', label: 'Metrologia', count: results.metrology.length }] : []),
      ...(results.diary?.length > 0 ? [{ id: 'diary', label: 'Diário', count: results.diary.length }] : []),
      ...(results.hymns?.length > 0 ? [{ id: 'hymns', label: 'Hinário', count: results.hymns.length }] : []),
      ...(results.clips?.length > 0 ? [{ id: 'clips', label: 'Biblioteca OCR', count: results.clips.length }] : []),
    ];
  }, [results, thematicGroups.length]);

  useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.find(t => t.id === activeTab)) {
      setActiveTab(availableTabs[0].id);
    }
  }, [availableTabs, activeTab]);

  useEffect(() => {
    thematicGroups.forEach(group => {
      if (openThemes.has(group.title) && !spiritualCache[group.title]) {
        const classification = classifyThemeSpiritual(group.verses);
        setSpiritualCache(prev => ({ ...prev, [group.title]: classification }));
      }
    });
  }, [openThemes, thematicGroups, spiritualCache]);

  const toggleTheme = (title: string) => {
    setOpenThemes(prev => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.clear();
        next.add(title);
      }
      return next;
    });
  };

  const expandAll = () => setOpenThemes(new Set(thematicGroups.map(g => g.title)));
  const collapseAll = () => setOpenThemes(new Set());

  const formatVerseId = (id: string) => {
    const parts = id.split(' ');
    if (parts.length < 2) return id;
    const bookId = parts[0];
    const rest = parts.slice(1).join(' ');
    return `${PT_ABBREV[bookId] || bookId} ${rest}`;
  };

  const handleSendThemeToStudio = (group: any) => {
    const refs = group.verses.map((v: Verse) => v.id);
    addRefsToStudio(refs);
    alert(`${refs.length} referências enviadas ao Cesto Pro.`);
  };

  const maxBookCount = bookHistogram[0]?.count || 1;

  return (
    <div className="fixed inset-0 z-[200] bg-slate-950/90 backdrop-blur-2xl p-4 md:p-10 animate-in fade-in flex justify-center items-start overflow-y-auto">
      <div className="w-full max-w-5xl mt-12 mb-20">
        <div className="relative mb-8">
          <input 
            autoFocus
            type="text" 
            placeholder="Pesquisa Universal Dabar Real..."
            className="w-full bg-white/10 border-2 border-white/20 rounded-[35px] px-16 py-6 text-xl md:text-3xl font-black italic uppercase tracking-tighter text-white outline-none focus:border-indigo-500 transition-all shadow-2xl"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <button onClick={onClose} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6m0 0l-12 12m12 0L6 6" /></svg>
          </button>

          {suggestions.length > 0 && (
            <div className="absolute top-full left-10 right-10 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-b-3xl shadow-2xl z-50 py-4 mt-[-10px] animate-in slide-in-from-top-2">
              {suggestions.map(s => (
                <button key={s} onClick={() => setTerm(s)} className="w-full text-left px-8 py-3 hover:bg-indigo-600/20 text-slate-300 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors">{s}</button>
              ))}
            </div>
          )}
        </div>

        {results.verses.length > 0 && (
          <div className="space-y-6 mb-12 animate-in fade-in">
            {/* A: CONTADORES EM CARDS COLORIDOS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard label="Resultados Totais" value={stats.total} color="bg-indigo-600 shadow-indigo-500/20" />
              <StatCard label="Antigo Testamento" value={stats.ot} color="bg-emerald-600 shadow-emerald-500/20" />
              <StatCard label="Novo Testamento" value={stats.nt} color="bg-blue-600 shadow-blue-500/20" />
            </div>

            {/* B: HISTOGRAMA POR LIVRO */}
            <div className="bg-white/5 border border-white/10 rounded-[35px] p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  Top Livros com Ocorrências
                </h4>
                {bookHistogram.length > 8 && (
                  <button onClick={() => setShowAllBooksModal(true)} className="text-[9px] font-black text-indigo-400 hover:text-white uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full transition-all">Ver Todos</button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                {bookHistogram.slice(0, 8).map(book => (
                  <button 
                    key={book.id} 
                    onClick={() => setSelectedBookFilter(selectedBookFilter === book.id ? null : book.id)}
                    className={`group w-full flex flex-col gap-1.5 p-3 rounded-2xl transition-all ${selectedBookFilter === book.id ? 'bg-indigo-600/20 ring-1 ring-indigo-500/50' : 'hover:bg-white/5'}`}
                  >
                    <div className="flex justify-between items-center px-1">
                      <span className={`text-[10px] font-black uppercase tracking-tighter ${selectedBookFilter === book.id ? 'text-indigo-400' : 'text-slate-200'}`}>{book.name}</span>
                      <span className="text-[10px] font-bold text-slate-500 italic">{book.count} hits</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${selectedBookFilter === book.id ? 'bg-indigo-400' : 'bg-indigo-600/50'}`}
                        style={{ width: `${(book.count / maxBookCount) * 100}%` }}
                      />
                    </div>
                  </button>
                ))}
              </div>

              {selectedBookFilter && (
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => setSelectedBookFilter(null)}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg animate-in zoom-in-95"
                  >
                    Filtro Ativo: {BOOK_NAMES_PT[selectedBookFilter]} <span className="opacity-60">✕</span>
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-center flex-col items-center gap-4 pt-4">
              {availableTabs.length > 0 && (
                <div className="bg-white/5 p-1.5 rounded-[22px] border border-white/10 flex gap-2 max-w-full overflow-x-auto no-scrollbar scroll-smooth snap-x">
                  {availableTabs.map(tab => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap snap-center flex items-center gap-2 ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}
                    >
                      {tab.label}
                      <span className={`px-2 py-0.5 rounded-md text-[9px] ${activeTab === tab.id ? 'bg-white/20' : 'bg-slate-800'}`}>{tab.count}</span>
                    </button>
                  ))}
                </div>
              )}
              {activeTab === 'bible_themes' && thematicGroups.length > 1 && (
                <div className="flex gap-2 mt-2">
                   <button onClick={expandAll} className="text-[8px] font-black uppercase text-indigo-400 hover:text-white transition-colors tracking-widest bg-white/5 px-4 py-2 rounded-lg">Expandir Tudo</button>
                   <button onClick={collapseAll} className="text-[8px] font-black uppercase text-slate-500 hover:text-white transition-colors tracking-widest bg-white/5 px-4 py-2 rounded-lg">Recolher Tudo</button>
                </div>
              )}
            </div>
          </div>
        )}

        {isSearching && (
          <div className="py-20 text-center animate-pulse">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-indigo-400 font-black uppercase tracking-widest text-xs">Vasculhando Cânon...</p>
          </div>
        )}

        <div className="space-y-16 pb-20">
          {results.books?.length > 0 && (activeTab === 'bible_list' || activeTab === 'books') && (
            <SearchSection title="Livros Bíblicos" count={results.books.length} color="amber">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {results.books.map((b: any) => (
                  <button
                    key={b.id}
                    onClick={() => onNavigate('bible', { bookId: b.id, chapter: 1, verse: 1 })}
                    className="flex flex-col items-center justify-center p-6 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-[30px] transition-all hover:scale-[1.02] active:scale-95 group"
                  >
                    <span className="text-3xl font-black text-amber-500 mb-2 group-hover:scale-110 transition-transform">{b.abbreviation}</span>
                    <span className="text-sm font-black text-white uppercase tracking-widest">{b.name}</span>
                    <span className="text-[10px] text-amber-500/60 font-bold mt-1 uppercase">{b.category}</span>
                  </button>
                ))}
              </div>
            </SearchSection>
          )}

          {activeTab === 'bible_list' && (
            CATEGORY_ORDER.map(cat => groupedVerses[cat] && groupedVerses[cat].length > 0 && (
              <SearchSection key={cat} title={cat} count={groupedVerses[cat].length} color="indigo">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {groupedVerses[cat].map(v => (
                    <div key={v.id} className="relative group/card h-full">
                      <button 
                        onClick={() => onNavigate('bible', { bookId: v.bookId, chapter: v.chapter, verse: v.verse })} 
                        className="w-full h-full text-left bg-white/5 hover:bg-indigo-600/20 border border-white/10 rounded-[30px] p-6 transition-all active:scale-[0.98]"
                      >
                         <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-black text-white group-hover:text-indigo-400 truncate pr-14">{formatVerseId(v.id)}</h4>
                            <span className="text-[9px] font-black uppercase text-slate-500">Canon</span>
                         </div>
                         <div className="text-sm text-slate-400 line-clamp-3 italic bible-text">
                           <HighlightedVerse 
                             verse={v} 
                             activeStrongId={null} 
                             isLexicalActive={true} 
                             handleStrongClick={(e) => e.stopPropagation()} 
                             skipGemini={true}
                           />
                         </div>
                      </button>
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <button onClick={(e) => { e.stopPropagation(); addTextToStudio(`${formatVerseId(v.id)}: ${v.text}`); }} className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-lg transition-all active:scale-90" title="Injetar no Estúdio">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); addRefsToStudio([v.id]); }} className={`p-2.5 rounded-xl shadow-lg transition-all active:scale-90 ${savedForSermons.includes(v.id) ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-300 hover:text-white'}`} title="Anexar ao Cesto">
                          {ICON_SERMON('w-5 h-5')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </SearchSection>
            ))
          )}
          
          {activeTab === 'bible_themes' && (
            <div className="space-y-4">
              {thematicGroups.map(group => {
                const isOpen = openThemes.has(group.title);
                const classification = spiritualCache[group.title];
                const themeColor = THEME_COLORS[group.themeId] || 'border-l-slate-700';

                return (
                  <div key={group.title} className={`bg-white/5 rounded-[30px] border border-white/5 overflow-hidden transition-all duration-300 border-l-[12px] ${themeColor}`}>
                    <button onClick={() => toggleTheme(group.title)} className={`w-full flex items-center justify-between p-6 md:p-8 hover:bg-white/5 transition-colors group ${isOpen ? 'bg-indigo-600/10' : ''}`}>
                      <div className="flex items-center gap-6">
                        <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-indigo-500 shadow-[0_0_10px_#6366f1]' : 'bg-slate-700'}`}></div>
                        <div className="text-left">
                          <h4 className={`text-xl md:text-2xl font-black uppercase italic tracking-tighter transition-colors ${isOpen ? 'text-indigo-400' : 'text-slate-300 group-hover:text-white'}`}>{group.title}</h4>
                          {classification && <span className="bg-indigo-600 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-full mt-1 inline-block">{classification.profile} • {classification.intensity}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{group.verses.length} ocorrências</span>
                        <svg className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-4 md:p-8 pt-0 animate-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-4 md:px-8 gap-4">
                           {classification && <p className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">Motivo: {classification.reason}</p>}
                           <button onClick={() => handleSendThemeToStudio(group)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all shadow-lg flex items-center gap-2">➕ Enviar este tema ao Estúdio</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {group.verses.map(v => (
                            <ResultCard 
                              key={v.id} 
                              onClick={() => onNavigate('bible', { bookId: v.bookId, chapter: v.chapter, verse: v.verse })} 
                              onInject={() => addTextToStudio(`${formatVerseId(v.id)}: ${v.text}`)} 
                              onToggleSermon={() => addRefsToStudio([v.id])}
                              isSaved={savedForSermons.includes(v.id)}
                              title={formatVerseId(v.id)} 
                              sub={v.text} 
                              type="Thematic" 
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {results.sermons?.length > 0 && activeTab === 'sermons' && !selectedBookFilter && (
            <SearchSection title="Projetos no Estúdio" count={results.sermons.length} color="emerald">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.sermons.map((s: any) => (
                  <ResultCard key={s.id} onClick={() => onNavigate('sermons', { id: s.id })} title={s.title} sub={s.type} type="Studio" />
                ))}
              </div>
            </SearchSection>
          )}

          {results.pericopes?.length > 0 && activeTab === 'pericopes' && !selectedBookFilter && (
            <SearchSection title="Anuário de Perícopes" count={results.pericopes.length} color="indigo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.pericopes.map((p: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('bible', { bookId: p.bookId, chapter: p.chapter, verse: p.startVerse })} 
                    onInject={() => addTextToStudio(`ESBOÇO: ${p.title}\nTEMA: ${p.theme}\n\nINTRO: ${p.introduction}\n\nPONTOS:\n${p.points.map((pt: any) => `- ${pt.title}: ${pt.description}`).join('\n')}\n\nCONCLUSÃO: ${p.conclusion}`)}
                    title={p.title} 
                    sub={`${p.bookId} ${p.chapter}:${p.startVerse}-${p.endVerse} — ${p.theme}`} 
                    type="Perícope" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.metrology?.length > 0 && activeTab === 'metrology' && !selectedBookFilter && (
            <SearchSection title="Metrologia Bíblica" count={results.metrology.length} color="amber">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.metrology.map((m: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('measures')} 
                    onInject={() => addTextToStudio(`METROLOGIA: ${m.label}\nVALOR: ${m.val}\nREF: ${m.ref}\nEXEGESE: ${m.theo}`)}
                    title={m.label} 
                    sub={`${m.val} - ${m.theo}`} 
                    type="Metrologia" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.academy?.length > 0 && activeTab === 'academy' && !selectedBookFilter && (
            <SearchSection title="Dabar Academy" count={results.academy.length} color="indigo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.academy.map((t: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('academy', { moduleId: t.moduleId, topicId: t.id })} 
                    onInject={() => addTextToStudio(`ESTUDO: ${t.title}\n\n${t.content.join('\n\n')}`)}
                    title={t.title} 
                    sub={`${t.moduleTitle} - ${t.content[0]}`} 
                    type="Academy" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.kings?.length > 0 && activeTab === 'kings' && !selectedBookFilter && (
            <SearchSection title="Monarquia Bíblica" count={results.kings.length} color="indigo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.kings.map((k: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('kings')} 
                    onInject={() => addTextToStudio(`REI: ${k.name}\nRESUMO: ${k.summary}\nPERFIL: ${k.spiritualProfile}`)}
                    title={k.name} 
                    sub={k.summary} 
                    type="Reis" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.prophecies?.length > 0 && activeTab === 'prophecies' && !selectedBookFilter && (
            <SearchSection title="Profecias Messiânicas" count={results.prophecies.length} color="rose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.prophecies.map((p: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('prophecies')} 
                    onInject={() => addTextToStudio(`PROFECIA: ${p.theme}\nCUMPRIMENTO: ${p.fulfillmentRef}\nTEXTO: ${p.fulfillmentText}`)}
                    title={p.theme} 
                    sub={p.fulfillmentText} 
                    type="Profecias" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.revivals?.length > 0 && activeTab === 'revivals' && !selectedBookFilter && (
            <SearchSection title="Reavivamentos Históricos" count={results.revivals.length} color="emerald">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.revivals.map((r: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('revivals')} 
                    onInject={() => addTextToStudio(`REAVIVAMENTO: ${r.title}\nDESCRIÇÃO: ${r.description || ''}\nINSIGHT: ${r.insight || ''}`)}
                    title={r.title} 
                    sub={r.description || r.categoryTitle} 
                    type="Reavivamentos" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.councils?.length > 0 && activeTab === 'councils' && !selectedBookFilter && (
            <SearchSection title="Concílios Ecumênicos" count={results.councils.length} color="violet">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.councils.map((c: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('councils')} 
                    onInject={() => addTextToStudio(`CONCÍLIO: ${c.title}\nDESCRIÇÃO: ${c.description || ''}\nINSIGHT: ${c.insight || ''}`)}
                    title={c.title} 
                    sub={c.description || c.categoryTitle} 
                    type="Concílios" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.archeology?.length > 0 && activeTab === 'archeology' && !selectedBookFilter && (
            <SearchSection title="Arqueologia Bíblica" count={results.archeology.length} color="amber">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.archeology.map((a: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('archeology')} 
                    onInject={() => addTextToStudio(`ARQUEOLOGIA: ${a.title}\nDESCRIÇÃO: ${a.description || ''}\nINSIGHT: ${a.insight || ''}`)}
                    title={a.title} 
                    sub={a.description || a.categoryTitle} 
                    type="Arqueologia" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.heresies?.length > 0 && activeTab === 'heresies' && !selectedBookFilter && (
            <SearchSection title="Heresias e Seitas" count={results.heresies.length} color="rose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.heresies.map((h: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('heresies')} 
                    onInject={() => addTextToStudio(`HERESIA: ${h.title}\nSUBTÍTULO: ${h.subtitle}\nERRO: ${h.errorNucleus.join(', ')}`)}
                    title={h.title} 
                    sub={h.subtitle} 
                    type="Heresias" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.customs?.length > 0 && activeTab === 'customs' && !selectedBookFilter && (
            <SearchSection title="Usos e Costumes" count={results.customs.length} color="slate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.customs.map((c: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('customs')} 
                    onInject={() => addTextToStudio(`COSTUME: ${c.title}\nDESCRIÇÃO: ${c.description || ''}\nINSIGHT: ${c.insight || ''}`)}
                    title={c.title} 
                    sub={c.description || c.categoryTitle} 
                    type="Costumes" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.quotes?.length > 0 && activeTab === 'quotes' && !selectedBookFilter && (
            <SearchSection title="Citações Patrísticas" count={results.quotes.length} color="slate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.quotes.map((q: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('quotes')} 
                    onInject={() => addTextToStudio(`CITAÇÃO: ${q.text}\nAUTOR: ${q.author}`)}
                    title={q.author} 
                    sub={q.text} 
                    type="Citações" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.messages?.length > 0 && activeTab === 'messages' && !selectedBookFilter && (
            <SearchSection title="Mensagens Homiléticas" count={results.messages.length} color="indigo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.messages.map((m: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('messages')} 
                    onInject={() => addTextToStudio(`MENSAGEM: ${m.title}\nRESUMO: ${m.summary}\nCONTEÚDO: ${m.content.join('\n')}`)}
                    title={m.title} 
                    sub={m.summary} 
                    type="Mensagens" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.ditosDuros?.length > 0 && activeTab === 'ditosDuros' && !selectedBookFilter && (
            <SearchSection title="Ditos Duros" count={results.ditosDuros.length} color="rose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.ditosDuros.map((d: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('hub')} 
                    onInject={() => addTextToStudio(`DITO DURO (${d.bookId} ${d.chapter}:${d.verse}): ${d.problem}\nEXEGESE: ${d.exegesis}\nHARMONIZAÇÃO: ${d.harmonization}`)}
                    title={`${d.bookId} ${d.chapter}:${d.verse}`} 
                    sub={d.problem} 
                    type="Ditos Duros" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.timeline?.length > 0 && activeTab === 'timeline' && !selectedBookFilter && (
            <SearchSection title="Cronologia Titan" count={results.timeline.length} color="amber">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.timeline.map((t: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('timeline')} 
                    onInject={() => addTextToStudio(`PERÍODO: ${t.title}\nDESCRIÇÃO: ${t.description}`)}
                    title={t.title} 
                    sub={t.description} 
                    type="Cronologia" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.courses?.length > 0 && activeTab === 'courses' && !selectedBookFilter && (
            <SearchSection title="Idiomas Bíblicos" count={results.courses.length} color="indigo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.courses.map((c: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('courses')} 
                    onInject={() => addTextToStudio(`CURSO: ${c.title}\nDESCRIÇÃO: ${c.description}`)}
                    title={c.title} 
                    sub={c.description} 
                    type="Idiomas" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.typology?.length > 0 && activeTab === 'typology' && !selectedBookFilter && (
            <SearchSection title="Tipologia Bíblica" count={results.typology.length} color="emerald">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.typology.map((t: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('typology')} 
                    onInject={() => addTextToStudio(`TIPO: ${t.title}\nSOMBRA: ${t.shadow}\nREALIDADE: ${t.reality}`)}
                    title={t.title} 
                    sub={`${t.shadow} -> ${t.reality}`} 
                    type="Tipologia" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.deepStudies?.length > 0 && activeTab === 'deepStudies' && !selectedBookFilter && (
            <SearchSection title="Estudos Profundos" count={results.deepStudies.length} color="violet">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.deepStudies.map((d: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('deep_studies')} 
                    onInject={() => addTextToStudio(`ESTUDO PROFUNDO: ${d.title}\nCONTEÚDO: ${d.description || d.meaning}`)}
                    title={d.title} 
                    sub={d.description || d.meaning} 
                    type="Estudos Profundos" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.prayers?.length > 0 && activeTab === 'prayers' && !selectedBookFilter && (
            <SearchSection title="Orações Bíblicas" count={results.prayers.length} color="sky">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.prayers.map((p: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('prayers')} 
                    onInject={() => addTextToStudio(`ORAÇÃO: ${p.title}\nTEMA: ${p.theme}\nCONTEÚDO: ${p.content}`)}
                    title={p.title} 
                    sub={p.theme} 
                    type="Orações" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.hub?.length > 0 && activeTab === 'hub' && !selectedBookFilter && (
            <SearchSection title="Dabar Hub" count={results.hub.length} color="blue">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.hub.map((h: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('hub')} 
                    onInject={() => addTextToStudio(`HUB: ${h.term || h.topic || h.title || h.error || h.theme || h.name || h.event || h.quote || h.prayer}\nCONTEÚDO: ${h.definition || h.explanation || h.correction || h.impact || h.reflection || h.description || h.text || ''}`)}
                    title={h.term || h.topic || h.title || h.error || h.theme || h.name || h.event || h.quote || h.prayer || 'Hub Item'} 
                    sub={h.definition || h.explanation || h.correction || h.impact || h.reflection || h.description || h.text || ''} 
                    type="Hub" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.diary?.length > 0 && activeTab === 'diary' && !selectedBookFilter && (
            <SearchSection title="Diário da Jornada" count={results.diary.length} color="pink">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.diary.map((d: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('diary')} 
                    onInject={() => addTextToStudio(`DIÁRIO: ${d.title}\nCONTEÚDO: ${d.content}`)}
                    title={d.title} 
                    sub={d.content} 
                    type="Diário" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.hymns?.length > 0 && activeTab === 'hymns' && !selectedBookFilter && (
            <SearchSection title="Hinário Inteligente" count={results.hymns.length} color="sky">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.hymns.map((h: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('hymnal')} 
                    onInject={() => addTextToStudio(`HINO ${h.number}: ${h.title}\nLETRA:\n${h.lyrics}`)}
                    title={`${h.number} - ${h.title}`} 
                    sub={h.lyrics.substring(0, 50) + '...'} 
                    type="Hinário" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.clips?.length > 0 && activeTab === 'clips' && !selectedBookFilter && (
            <SearchSection title="Biblioteca OCR" count={results.clips.length} color="slate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.clips.map((c: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('library')} 
                    onInject={() => addTextToStudio(`OCR CLIP: ${c.title}\nCONTEÚDO: ${c.content}`)}
                    title={c.title} 
                    sub={c.content} 
                    type="OCR Clip" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {results.strongs?.length > 0 && activeTab === 'strongs' && !selectedBookFilter && (
            <SearchSection title="Dicionário Strong" count={results.strongs.length} color="indigo">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.strongs.map((s: any, idx: number) => (
                  <ResultCard 
                    key={idx} 
                    onClick={() => onNavigate('strong')} 
                    onInject={() => addTextToStudio(`STRONG ${s.id}: ${s.originalWord} (${s.transliteration})\nDEFINIÇÃO: ${s.shortDefinition || s.definition}`)}
                    title={`${s.id} - ${s.originalWord} (${s.transliteration})`} 
                    sub={s.shortDefinition || s.definition} 
                    type="Strong" 
                  />
                ))}
              </div>
            </SearchSection>
          )}

          {term.length >= 2 && !isSearching && availableTabs.length === 0 && (
            <div className="py-32 text-center bg-white/5 rounded-[60px] border border-white/5">
               <p className="text-slate-500 font-black uppercase text-xl italic">Nenhum registro localizado.</p>
            </div>
          )}
        </div>
      </div>

      {/* MODAL: VER TODOS OS LIVROS */}
      {showAllBooksModal && (
        <div className="fixed inset-0 z-[300] bg-slate-950/95 backdrop-blur-3xl flex items-center justify-center p-6 animate-in zoom-in-95">
          <div className="bg-slate-900 w-full max-w-2xl rounded-[45px] border border-white/10 shadow-2xl flex flex-col max-h-[80vh] overflow-hidden">
            <div className="p-10 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Matriz Canônica de Ocorrências</h3>
              <button onClick={() => setShowAllBooksModal(false)} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            <div className="flex-1 overflow-y-auto p-10 space-y-3 custom-scroll">
              {bookHistogram.map(book => (
                <button 
                  key={book.id} 
                  onClick={() => { setSelectedBookFilter(book.id); setShowAllBooksModal(false); }}
                  className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-indigo-600/30 transition-all border border-transparent hover:border-indigo-500/50"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-[10px] font-black text-indigo-400">{book.id}</span>
                    <span className="font-black text-white uppercase italic">{book.name}</span>
                  </div>
                  <span className="text-xl font-black text-indigo-400 italic">{book.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ label, value, color }: any) => (
  <div className={`${color} p-5 md:p-7 rounded-[30px] flex flex-col items-center justify-center shadow-2xl transition-transform hover:scale-[1.02]`}>
    <span className="text-[8px] md:text-[9px] font-black uppercase text-white/50 tracking-[0.2em] mb-1">{label}</span>
    <span className="text-3xl md:text-5xl font-black italic tracking-tighter text-white">{value}</span>
  </div>
);

const TabButton = ({ active, onClick, label }: any) => (
  <button onClick={onClick} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}>{label}</button>
);

const SearchSection = ({ title, count, color, children }: any) => {
  const colorMap: any = { 
    indigo: 'text-indigo-400 border-indigo-400/20', 
    emerald: 'text-emerald-400 border-emerald-400/20',
    amber: 'text-amber-400 border-amber-400/20',
    rose: 'text-rose-400 border-rose-400/20',
    violet: 'text-violet-400 border-violet-400/20',
    slate: 'text-slate-400 border-slate-400/20'
  };
  return (
    <div className="space-y-6">
      <div className={`flex items-center justify-between px-4 border-b pb-4 ${colorMap[color]}`}>
        <h3 className="text-xs font-black uppercase tracking-[0.4em]">{title}</h3>
        <span className="bg-white/5 px-3 py-1 rounded-lg text-[10px] font-black text-slate-500 uppercase">{count} hits</span>
      </div>
      {children}
    </div>
  );
};

const ResultCard = ({ title, sub, type, onClick, onInject, onToggleSermon, isSaved }: any) => (
  <div className="relative group/card h-full">
    <button onClick={onClick} className="w-full h-full text-left bg-white/5 hover:bg-indigo-600/20 border border-white/10 rounded-[30px] p-6 transition-all active:scale-[0.98]">
       <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-black text-white group-hover:text-indigo-400 truncate pr-14">{title}</h4>
          <span className="text-[9px] font-black uppercase text-slate-500">{type}</span>
       </div>
       <p className="text-sm text-slate-400 line-clamp-2 italic bible-text">{sub}</p>
    </button>
    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
      {onInject && (
        <button onClick={(e) => { e.stopPropagation(); onInject(); }} className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-lg transition-all active:scale-90" title="Injetar no Estúdio">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
        </button>
      )}
      {onToggleSermon && (
        <button onClick={(e) => { e.stopPropagation(); onToggleSermon(); }} className={`p-2.5 rounded-xl shadow-lg transition-all active:scale-90 ${isSaved ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-300 hover:text-white'}`} title="Anexar ao Cesto">
          {ICON_SERMON('w-5 h-5')}
        </button>
      )}
    </div>
  </div>
);

export default GlobalSearch;
