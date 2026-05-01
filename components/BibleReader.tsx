
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { getChapter, initDB, getStrongEntry, getVersesByStrong, refreshStrongEntry } from '../services/database';
import HighlightedVerse from './HighlightedVerse';
import { BIBLE_METADATA, BIBLE_VERSION, ICON_STRONG, ICON_SERMON, ICON_BIBLE, ICON_STUDY } from '../constants';
import { UserState, Verse, TheologicalLens, CaptureTarget, StrongEntry } from '../types';
import HermeneuticsLab from './HermeneuticsLab';
import { getLinksForVerse, getLinkDetails, CrossLink } from '../services/cross_link_engine';
import { INITIAL_SEED, STRONGS_DATA } from '../data';
import { 
  BOOK_INTRODUCTIONS, THEOLOGICAL_TOPICS, GLOBAL_TIMELINE_EVENTS 
} from '../data/dabar_hub';
import { BIBLE_CHAINS } from '../data/chains';
import { PERICOPES, PericopeOutline } from '../data/pericopes';
import { DITOS_DUROS } from '../data/ditosDuros';
import VerseDetailPanel from './VerseDetailPanel';
import { UserNote } from '../types';

// Funil Único
import { addTextToStudio, addRefsToStudio } from '../core/studioFunnel';

interface BibleReaderProps {
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  captureTarget?: CaptureTarget | null;
  metadata?: any;
}

const BibleReader: React.FC<BibleReaderProps> = ({ userState, setUserState, captureTarget, metadata }) => {
  const [currentBookId, setCurrentBookId] = useState<string>(metadata?.bookId || "GEN");
  const [currentChapter, setCurrentChapter] = useState<number>(metadata?.chapter || 1);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);
  const [selectedVerses, setSelectedVerses] = useState<Verse[]>([]);
  const [strongDetail, setStrongDetail] = useState<StrongEntry | null>(null);
  const [strongOccurrences, setStrongOccurrences] = useState<string[]>([]);
  const [navModalOpen, setNavModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'book' | 'chapter'>('book');
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [selectedExpositoryLink, setSelectedExpositoryLink] = useState<CrossLink | null>(null);
  const [quickStrongSearch, setQuickStrongSearch] = useState('');
  const [highlightedVerse, setHighlightedVerse] = useState<number | null>(metadata?.verse || null);
  const [verseDetailPanel, setVerseDetailPanel] = useState<Verse | null>(null);
  
  const [activeStrongId, setActiveStrongId] = useState<string | null>(null);
  const [isFetchingStrong, setIsFetchingStrong] = useState(false);
  const [activeOutline, setActiveOutline] = useState<PericopeOutline | null>(null);
  
  const [userNotes, setUserNotes] = useState<UserNote[]>([]);
  const verseRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const saved = localStorage.getItem('dabar_user_notes');
    if (saved) setUserNotes(JSON.parse(saved));
  }, []);

  const currentBookNotes = useMemo(() => {
    return userNotes.filter(n => n.connectedRef?.startsWith(currentBookId));
  }, [userNotes, currentBookId]);

  const currentTimelineEvents = useMemo(() => {
    return GLOBAL_TIMELINE_EVENTS.filter(e => e.bookContext?.includes(currentBookId));
  }, [currentBookId]);
  const activeBook = BIBLE_METADATA[currentBookId];

  useEffect(() => { initDB().then(() => setIsInitializing(false)); }, []);

  useEffect(() => {
    if (metadata?.bookId) setCurrentBookId(metadata.bookId);
    if (metadata?.chapter) setCurrentChapter(metadata.chapter);
    if (metadata?.verse) {
      setHighlightedVerse(metadata.verse);
      setTimeout(() => setHighlightedVerse(null), 3000);
    }
  }, [metadata]);

  useEffect(() => {
    if (isInitializing) return;
    getChapter(currentBookId, currentChapter).then(data => {
      setVerses(data);
      setSelectedVerses([]);
      if (highlightedVerse) {
        setTimeout(() => {
          verseRefs.current[highlightedVerse]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, [currentBookId, currentChapter, isInitializing, highlightedVerse]);

  const handleStrongClick = async (e: React.MouseEvent, id: string) => {
    if (e) e.stopPropagation();
    if (!id) return;
    
    setActiveStrongId(id);
    setIsFetchingStrong(true);
    try {
      const entry = await getStrongEntry(id);
      if (entry) {
        setStrongDetail(entry);
        const refs = await getVersesByStrong(id);
        setStrongOccurrences(refs);
      } else {
        // Se não encontrar, tenta pelo menos mostrar o ID
        setStrongDetail({
          id,
          original: '?',
          transliteration: '?',
          definition: 'Definição não encontrada no banco de dados local.',
          pronunciation: ''
        } as any);
      }
    } catch (err) {
      console.error("Erro ao buscar Strong:", err);
      // Em caso de erro, define um detalhe básico para não ficar em branco
      setStrongDetail({
        id,
        original: 'Erro',
        transliteration: '?',
        definition: 'Ocorreu um erro ao buscar a definição. Por favor, tente novamente.',
        pronunciation: ''
      } as any);
    } finally {
      setIsFetchingStrong(false);
    }
  };

  const handleQuickStrongLookup = async () => {
    if (!quickStrongSearch) return;
    const code = quickStrongSearch.toUpperCase().trim();
    if (!/^[HG][0-9]{1,5}$/.test(code)) {
      alert("Formato inválido. Use ex: H7225");
      return;
    }
    const entry = await getStrongEntry(code);
    if (entry) {
      setStrongDetail(entry);
      setActiveStrongId(code);
      // Scroll to first occurrence in chapter if exists
      const occurrences = await getVersesByStrong(code);
      const firstOccur = verses.find(v => occurrences.includes(v.id));
      if (firstOccur) {
        verseRefs.current[firstOccur.verse]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    else alert(`Chave ${code} não encontrada.`);
    setQuickStrongSearch('');
  };

  const handleLabComplete = (analysis: string) => {
    addTextToStudio(analysis);
    setIsLabOpen(false);
    setSelectedVerses([]);
  };

  const renderVerseText = (text: string, verseId: string) => {
    const isLexicalActive = (userState.activeLayers || []).includes('lexical' as any);
    const isExpositoryActive = (userState.activeLayers || []).includes('expository');
    const isHistoricalActive = (userState.activeLayers || []).includes('historical');
    const isDoctrinalActive = (userState.activeLayers || []).includes('doctrinal');
    const isPracticalActive = (userState.activeLayers || []).includes('practical');
    const isTypologicalActive = (userState.activeLayers || []).includes('typological');
    const isHomileticalActive = (userState.activeLayers || []).includes('homiletical');
    const isChainActive = (userState.activeLayers || []).includes('chain' as any);

    const expositoryLinks = isExpositoryActive ? getLinksForVerse(verseId) : [];
    const chainLinks = isChainActive ? BIBLE_CHAINS.filter(c => c.verses.includes(verseId)) : [];

    return (
      <div className="space-y-6">
        <p className={`${userState.fontFamily === 'serif' ? 'bible-text' : 'font-sans'} leading-relaxed text-slate-800 dark:text-slate-100 text-lg md:text-3xl font-light`}>
          <HighlightedVerse 
            verse={verses.find(v => v.id === verseId) || { id: verseId, text } as Verse}
            activeStrongId={activeStrongId}
            isLexicalActive={isLexicalActive}
            handleStrongClick={handleStrongClick}
          />
        </p>

        {/* Camadas Ativas */}
        <div className="grid grid-cols-1 gap-4">
          {isChainActive && chainLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 bg-amber-50/50 dark:bg-amber-900/10 p-4 rounded-2xl border border-amber-100 dark:border-amber-800/30 animate-in fade-in slide-in-from-bottom-2">
              <div className="w-full mb-2 flex items-center gap-2">
                <span className="text-lg">🔗</span>
                <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest">Cadeia Temática</span>
              </div>
              {chainLinks.map(chain => (
                <div key={chain.id} className="flex flex-col gap-1 w-full p-2 bg-white dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-amber-800/50 shadow-sm">
                  <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-tighter">{chain.topic}</span>
                  <span className="text-[9px] text-slate-500 dark:text-slate-400 italic">{chain.description}</span>
                </div>
              ))}
            </div>
          )}

          {isExpositoryActive && expositoryLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-100 dark:border-blue-800/30 animate-in fade-in slide-in-from-bottom-2">
              <div className="w-full mb-2 flex items-center gap-2">
                <span className="text-lg">📖</span>
                <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Conexões Expositivas</span>
              </div>
              {expositoryLinks.map(link => (
                <div 
                  key={link.id} 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedExpositoryLink(link);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800/50 shadow-sm cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className={`text-[7px] font-black px-1.5 py-0.5 rounded uppercase ${link.category === 'map' ? 'bg-emerald-100 text-emerald-600' : link.category === 'prophecy' ? 'bg-amber-100 text-amber-600' : 'bg-purple-100 text-purple-600'}`}>
                    {link.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-tighter">{link.title}</span>
                </div>
              ))}
            </div>
          )}

          {isHistoricalActive && (
            <div className="p-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-800/30 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🏛️</span>
                <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest">Lente Histórica</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic">
                {userState.aiPreference === 'deep' 
                  ? "Análise Titan: O contexto deste versículo remete ao período do Segundo Templo, onde a tensão entre a tradição oral e a lei escrita moldava o discurso religioso."
                  : "Contexto histórico disponível no modo Deep AI."}
              </p>
            </div>
          )}

          {isDoctrinalActive && (
            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚖️</span>
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Lente Doutrinária</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic">
                {userState.aiPreference === 'deep'
                  ? "Sistemática: Este texto fundamenta a doutrina da união hipostática e a preexistência do Logos, essencial para a cristologia ortodoxa."
                  : "Conexões doutrinárias requerem processamento em nuvem."}
              </p>
            </div>
          )}

          {isTypologicalActive && (
            <div className="p-4 bg-violet-50/50 dark:bg-violet-900/10 rounded-2xl border border-violet-100 dark:border-violet-800/30 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💎</span>
                <span className="text-[9px] font-black text-violet-600 uppercase tracking-widest">Lente Tipológica</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic">
                {userState.aiPreference === 'deep'
                  ? "Sombras: O 'Verbo' (Logos) ecoa o 'Haja Luz' da criação, estabelecendo Cristo como o novo Adão e o agente da nova criação."
                  : "Análise tipológica avançada disponível."}
              </p>
            </div>
          )}

          {isPracticalActive && (
            <div className="p-4 bg-pink-50/50 dark:bg-pink-900/10 rounded-2xl border border-pink-100 dark:border-pink-800/30 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🌱</span>
                <span className="text-[9px] font-black text-pink-600 uppercase tracking-widest">Lente Prática</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic">
                Aplicação: Reconhecer a autoridade suprema de Cristo em todas as esferas da vida diária, submetendo nossos planos ao Verbo Eterno.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (isInitializing) return (
    <div className="p-20 text-center flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-6"></div>
      <p className="font-black text-indigo-600 uppercase tracking-widest">Sincronizando Cânon...</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-0 pb-40 relative">
      <div className="sticky top-[64px] lg:top-0 z-40 bg-slate-50/95 dark:bg-black/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-md">
        <div className="px-4 py-3 flex items-center justify-between bg-white/50 dark:bg-slate-900/50">
          <button onClick={() => { setNavModalOpen(true); setModalMode('book'); }} className="text-left flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg group-hover:scale-105 transition-transform text-xs">{activeBook.abbreviation}</div>
            <div>
              <h2 className="text-sm md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
                {activeBook.name} <span className="text-indigo-600">{currentChapter}</span>
              </h2>
              <div className="flex items-center gap-2 -mt-1 scale-90 origin-left">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">469 Esboços AT</span>
                <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">269 Esboços NT</span>
              </div>
            </div>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <button onClick={() => setCurrentChapter(c => Math.max(1, c - 1))} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => setCurrentChapter(c => Math.min(activeBook.chapters, c + 1))} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Camadas de Estudo */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-100 dark:border-white/5 bg-white/30 dark:bg-slate-900/30">
          <LayerToggle 
            active={(userState.activeLayers || []).includes('expository')} 
            onClick={() => {
              const layers = (userState.activeLayers || []).includes('expository') 
                ? (userState.activeLayers || []).filter(l => l !== 'expository')
                : [...(userState.activeLayers || []), 'expository' as const];
              setUserState({ ...userState, activeLayers: layers as any });
            }}
            label="Expositivo"
            icon="📖"
          />
          <LayerToggle 
            active={(userState.activeLayers || []).includes('chain' as any)} 
            onClick={() => {
              const layers = (userState.activeLayers || []).includes('chain' as any) 
                ? (userState.activeLayers || []).filter((l: any) => l !== 'chain')
                : [...(userState.activeLayers || []), 'chain' as const];
              setUserState({ ...userState, activeLayers: layers as any });
            }}
            label="Cadeias (Thompson)"
            icon="🔗"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 md:p-12 mt-4 rounded-t-[40px] md:rounded-t-[60px] shadow-sm border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto space-y-10">
          {verses.map((v) => {
            const isSelected = selectedVerses.some(sv => sv.id === v.id);
            const isHighlighted = highlightedVerse === v.verse;
            const pericope = PERICOPES.find(p => p.bookId === currentBookId && p.chapter === currentChapter && p.startVerse === v.verse);
            return (
              <React.Fragment key={`frag-${v.id}`}>
                {pericope && (
                  <div className="mt-12 mb-6 flex items-center justify-between bg-indigo-50/50 dark:bg-indigo-900/20 p-5 rounded-3xl border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">
                        {pericope.title}
                      </h3>
                      <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{activeBook.name} {currentChapter}:{pericope.startVerse}-{pericope.endVerse}</span>
                    </div>
                    <button onClick={() => setActiveOutline(pericope)} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      <span className="text-lg">📝</span>
                      <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Esboço</span>
                    </button>
                  </div>
                )}
                <div 
                  key={v.id} 
                  ref={(el) => { verseRefs.current[v.verse] = el; }}
                  className={`group transition-all rounded-3xl p-4 md:p-6 -mx-2 md:-mx-4 ${isSelected ? 'bg-indigo-50/50 dark:bg-indigo-900/10 ring-1 ring-indigo-500/30' : isHighlighted ? 'bg-amber-50 dark:bg-amber-900/20 ring-2 ring-amber-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'}`}
                  onClick={() => {
                    if (selectedVerses.length > 0) {
                      setSelectedVerses(prev => prev.some(sv => sv.id === v.id) ? prev.filter(sv => sv.id !== v.id) : [...prev, v]);
                    } else {
                      setVerseDetailPanel(v);
                    }
                  }}
                >
                  <div className="flex gap-4 md:gap-8 items-start cursor-pointer">
                    <div className="flex flex-col items-center shrink-0 mt-1">
                      <span className={`font-serif font-black text-lg md:text-2xl italic ${isSelected ? 'text-indigo-600 scale-125' : isHighlighted ? 'text-amber-600' : 'text-slate-300 dark:text-slate-700'}`}>{v.verse}</span>
                      {DITOS_DUROS.some(d => d.id === v.id) && (
                        <span className="text-sm mt-1 animate-bounce" title="Dito Duro - Apologética">❓</span>
                      )}
                    </div>
                    <div className="flex-1">
                      {renderVerseText(v.text, v.id)}
                      
                      {/* Notas Contextuais */}
                      {currentBookNotes.filter(n => n.connectedRef === `${currentBookId} ${currentChapter}:${v.verse}`).map(note => (
                        <div key={note.id} className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-100 dark:border-amber-800/50 animate-in fade-in slide-in-from-left-2">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest">Minha Nota</span>
                            <div className="flex gap-1">
                              {note.tags?.map(t => (
                                <span key={t} className="text-[7px] font-black bg-amber-200 dark:bg-amber-800 px-1.5 py-0.5 rounded uppercase">{t}</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-amber-900 dark:text-amber-200 font-bold italic leading-relaxed">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Linha do Tempo Global Integrada */}
      {(currentTimelineEvents.length > 0 || (userState.activeLayers || []).includes('expository' as any)) && (
        <div className="fixed bottom-0 left-0 right-0 lg:left-64 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 animate-in slide-in-from-bottom-full">
          <div className="max-w-5xl mx-auto flex gap-6 overflow-x-auto no-scrollbar pb-2">
            <div className="shrink-0 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 pr-6">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-tighter dark:text-white block leading-tight">Contexto Global</span>
                <p className="text-[7px] text-slate-400 uppercase font-black tracking-widest leading-none mt-1">Função: Panorama Histórico-Redentivo</p>
              </div>
            </div>

            {(userState.activeLayers || []).includes('expository' as any) && (
              <div className="shrink-0 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 pr-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101" /></svg>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-tighter dark:text-white block leading-tight">Conexões Expositivas</span>
                  <p className="text-[7px] text-slate-400 uppercase font-black tracking-widest leading-none mt-1">Função: Referências e Encadeamento</p>
                </div>
              </div>
            )}

            {currentTimelineEvents.map(event => (
              <div key={event.id} className="shrink-0 max-w-[200px] group">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-black text-amber-600 uppercase">{event.year}</span>
                  <span className={`text-[7px] font-black px-1.5 py-0.5 rounded uppercase ${event.category === 'Biblical' ? 'bg-blue-100 text-blue-600' : event.category === 'Secular' ? 'bg-slate-100 text-slate-600' : 'bg-purple-100 text-purple-600'}`}>
                    {event.category}
                  </span>
                </div>
                <h4 className="text-[10px] font-black text-slate-800 dark:text-white uppercase truncate">{event.title}</h4>
                <p className="text-[9px] text-slate-400 line-clamp-1 italic group-hover:line-clamp-none transition-all">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(activeStrongId || strongDetail) && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md" onClick={() => { setStrongDetail(null); setActiveStrongId(null); setIsFetchingStrong(false); }}>
           <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[45px] p-8 md:p-12 shadow-2xl animate-in zoom-in-95" onClick={e => e.stopPropagation()}>
              {isFetchingStrong ? (
                 <div className="flex flex-col items-center justify-center py-12 space-y-6">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-center">
                       <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-white mb-2 tracking-tight">Consultando Titan AI...</h3>
                       <p className="text-slate-400 text-sm italic">Buscando definição léxica para {activeStrongId}</p>
                    </div>
                 </div>
              ) : strongDetail ? (
                 <>
                    <div className="flex justify-between items-start mb-6">
                 <div>
                    <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full mb-3 inline-block">{strongDetail.id}</span>
                    <h3 className="text-5xl font-serif font-bold text-slate-800 dark:text-white leading-none">{strongDetail.original}</h3>
                    <p className="text-slate-400 italic text-sm mt-3">Transliteração: <span className="text-indigo-500 font-bold">{strongDetail.transliteration}</span></p>
                 </div>
                 <button onClick={() => { setStrongDetail(null); setActiveStrongId(null); }} className="text-slate-400 hover:text-rose-500 transition-colors p-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6" /></svg>
                 </button>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-[30px] mb-8 border border-slate-100 dark:border-slate-700 relative group">
                 <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic bible-text">"{strongDetail.definition}"</p>
                 <button 
                   onClick={async () => {
                     setIsFetchingStrong(true);
                     const updated = await refreshStrongEntry(strongDetail.id);
                     if (updated) setStrongDetail(updated);
                     setIsFetchingStrong(false);
                   }}
                   className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white dark:bg-slate-700 rounded-full shadow-sm text-indigo-500 hover:text-indigo-600"
                   title="Recarregar via IA"
                 >
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                   </svg>
                 </button>
              </div>

              {strongOccurrences.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                    {ICON_BIBLE('w-3 h-3')} Ocorrências ({strongOccurrences.length})
                  </h4>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto no-scrollbar p-1">
                    {strongOccurrences.map(ref => (
                      <button
                        key={ref}
                        onClick={() => {
                          const parts = ref.split(' ');
                          const bookId = parts[0];
                          const chapterVerse = parts[1].split(':');
                          const chapter = parseInt(chapterVerse[0]);
                          const verse = parseInt(chapterVerse[1]);
                          setCurrentBookId(bookId);
                          setCurrentChapter(chapter);
                          setHighlightedVerse(verse);
                          setStrongDetail(null);
                          setActiveStrongId(null);
                        }}
                        className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl text-[9px] font-black uppercase tracking-tighter hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100 dark:border-indigo-800/50"
                      >
                        {ref}
                      </button>
                    ))}
                  </div>
                </div>
              )}

                    <button 
                       onClick={() => { addTextToStudio(`[ESTUDIO LÉXICO ${strongDetail.id}] ${strongDetail.original} (${strongDetail.transliteration}): ${strongDetail.definition}`); setStrongDetail(null); setActiveStrongId(null); }}
                       className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                    >🎯 Injetar no Estúdio</button>
                 </>
              ) : null}
           </div>
        </div>
      )}

      {navModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[50px] flex flex-col max-h-[85vh] overflow-hidden shadow-2xl border border-white/5">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div><h3 className="text-xl md:text-3xl font-black dark:text-white uppercase tracking-tighter italic">Navegador Canônico</h3></div>
              <button onClick={() => setNavModalOpen(false)} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scroll">
              {modalMode === 'book' ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {Object.values(BIBLE_METADATA).map(meta => (
                    <button 
                      key={meta.id} 
                      onClick={() => { setCurrentBookId(meta.id); setModalMode('chapter'); }} 
                      className={`p-4 rounded-xl font-black text-[10px] uppercase tracking-tighter border-2 transition-all ${currentBookId === meta.id ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-transparent hover:border-indigo-400'}`}
                    >
                      {meta.name}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                  {Array.from({ length: activeBook.chapters }, (_, i) => i + 1).map(chap => (
                    <button 
                      key={chap} 
                      onClick={() => { setCurrentChapter(chap); setNavModalOpen(false); }} 
                      className={`h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 font-black text-sm border-2 ${currentChapter === chap ? 'border-indigo-500 bg-indigo-600 text-white' : 'border-transparent'}`}
                    >
                      {chap}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {modalMode === 'chapter' && (
              <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t dark:border-slate-700 flex justify-center">
                 <button onClick={() => setModalMode('book')} className="text-[10px] font-black uppercase text-indigo-600 hover:underline">← Voltar para Livros</button>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedVerses.length > 0 && (
        <div className="fixed bottom-10 left-4 right-4 z-[100] md:left-1/2 md:-translate-x-1/2 md:w-auto animate-in slide-in-from-bottom-10">
          <div className="bg-slate-900/95 backdrop-blur-xl p-4 md:p-6 rounded-[30px] shadow-2xl flex items-center gap-4 border border-white/10">
             <div className="flex items-center gap-4 px-2">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-lg italic shadow-lg">{selectedVerses.length}</div>
                <div className="hidden sm:block">
                   <p className="text-white font-bold text-[10px] uppercase tracking-widest">{selectedVerses[0].id} ...</p>
                </div>
             </div>
             <div className="flex gap-2">
                <button 
                  onClick={() => setIsLabOpen(true)}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[9px] shadow-xl flex items-center gap-2 hover:bg-indigo-700 transition-all"
                >
                  {ICON_STUDY('w-4 h-4')} Lab
                </button>
                <button 
                  onClick={() => { addTextToStudio(selectedVerses.map(v => `${v.id}: ${v.text}`).join('\n\n')); setSelectedVerses([]); }}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[9px] shadow-xl flex items-center gap-2 hover:bg-emerald-700 transition-all"
                >
                  🎯 Injetar
                </button>
                <button 
                  onClick={() => { addRefsToStudio(selectedVerses.map(v => v.id)); setSelectedVerses([]); }}
                  className="bg-amber-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[9px] shadow-xl flex items-center gap-2 hover:bg-amber-700 transition-all"
                >
                  {ICON_SERMON('w-4 h-4')} Anexar
                </button>
                <button onClick={() => setSelectedVerses([])} className="p-3 bg-white/5 text-white rounded-xl hover:bg-rose-600 transition-all">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6" /></svg>
                </button>
             </div>
          </div>
        </div>
      )}

      {isLabOpen && (
        <HermeneuticsLab 
          verses={selectedVerses} 
          onClose={() => setIsLabOpen(false)} 
          onComplete={handleLabComplete} 
        />
      )}

      {verseDetailPanel && (
        <VerseDetailPanel 
          verse={verseDetailPanel} 
          onClose={() => setVerseDetailPanel(null)} 
          onSelect={() => setSelectedVerses(prev => [...prev, verseDetailPanel])} 
          onNavigateToVerse={(ref) => {
            const parts = ref.split(' ');
            const bookId = parts[0];
            const chapterVerse = parts[1].split(':');
            const chapter = parseInt(chapterVerse[0]);
            const verse = parseInt(chapterVerse[1]);
            setCurrentBookId(bookId);
            setCurrentChapter(chapter);
            setHighlightedVerse(verse);
            setVerseDetailPanel(null);
          }}
        />
      )}

      {/* Modal de Esboço Expositivo */}
      {activeOutline && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in" onClick={() => setActiveOutline(null)}>
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[40px] p-6 md:p-10 shadow-2xl max-h-[90vh] flex flex-col animate-in zoom-in-95" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6 shrink-0">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-1 block">Esboço Expositivo</span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-tight">{activeOutline.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-bold">{activeBook.name} {activeOutline.chapter}:{activeOutline.startVerse}-{activeOutline.endVerse}</p>
              </div>
              <button onClick={() => setActiveOutline(null)} className="text-slate-400 hover:text-rose-500 p-2 bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6" /></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scroll pr-2 space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/10 p-5 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">Tema Central</h4>
                <p className="text-lg text-slate-800 dark:text-slate-200 font-serif italic">"{activeOutline.theme}"</p>
              </div>
              
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Introdução</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeOutline.introduction}</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Desenvolvimento</h4>
                {activeOutline.points.map((pt, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-black">{i + 1}</span>
                      <h5 className="font-bold text-slate-800 dark:text-slate-200">{pt.title}</h5>
                      <span className="text-[10px] font-black text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded uppercase">{pt.verseRef}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 pl-9">{pt.description}</p>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Conclusão</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeOutline.conclusion}</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 shrink-0">
              <button 
                onClick={() => {
                  const outlineText = `[ESBOÇO EXPOSITIVO: ${activeOutline.title}]\nTexto: ${activeBook.name} ${activeOutline.chapter}:${activeOutline.startVerse}-${activeOutline.endVerse}\nTema: ${activeOutline.theme}\n\nINTRODUÇÃO:\n${activeOutline.introduction}\n\nDESENVOLVIMENTO:\n${activeOutline.points.map((p, i) => `${i+1}. ${p.title} (${p.verseRef})\n   ${p.description}`).join('\n\n')}\n\nCONCLUSÃO:\n${activeOutline.conclusion}`;
                  addTextToStudio(outlineText);
                  setActiveOutline(null);
                }}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
              >
                🎯 Usar como Base do Sermão
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expository Link Modal */}
      {selectedExpositoryLink && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-[30px] shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <span className={`text-[9px] font-black px-2 py-1 rounded uppercase ${selectedExpositoryLink.category === 'map' ? 'bg-emerald-100 text-emerald-600' : selectedExpositoryLink.category === 'prophecy' ? 'bg-amber-100 text-amber-600' : 'bg-purple-100 text-purple-600'}`}>
                  {selectedExpositoryLink.category}
                </span>
                <h3 className="font-bold text-slate-800 dark:text-white uppercase tracking-tighter">{selectedExpositoryLink.title}</h3>
              </div>
              <button onClick={() => setSelectedExpositoryLink(null)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {(() => {
                const details = getLinkDetails(selectedExpositoryLink.category, selectedExpositoryLink.id);
                if (!details) return <p className="text-slate-500 text-sm">Detalhes não encontrados.</p>;

                if (selectedExpositoryLink.category === 'map') {
                  return (
                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Tema</span>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{details.theme}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Teologia</span>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{details.theology}</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Aplicação</span>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{details.application}</p>
                      </div>
                    </div>
                  );
                }

                if (selectedExpositoryLink.category === 'prophecy') {
                  return (
                    <div className="space-y-4">
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block mb-1">Profecia ({details.prophecyRef})</span>
                        <p className="text-slate-700 dark:text-slate-300 italic text-sm">"{details.prophecyText}"</p>
                      </div>
                      {details.fulfillmentRef && (
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                          <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Cumprimento ({details.fulfillmentRef})</span>
                          <p className="text-slate-700 dark:text-slate-300 italic text-sm">"{details.fulfillmentText}"</p>
                        </div>
                      )}
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Descrição</span>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{details.description}</p>
                      </div>
                    </div>
                  );
                }

                if (selectedExpositoryLink.category === 'typology') {
                  return (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Sombra</span>
                          <p className="text-slate-700 dark:text-slate-300 font-medium text-sm">{details.shadow}</p>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                          <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Realidade</span>
                          <p className="text-slate-700 dark:text-slate-300 font-medium text-sm">{details.reality}</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Explicação</span>
                        <div className="space-y-2">
                          {details.paragraphs?.map((p: string, i: number) => (
                            <p key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{p}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface LayerToggleProps {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: string;
}

const LayerToggle = ({ active, onClick, label, icon }: LayerToggleProps) => (
  <button 
    onClick={onClick} 
    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border-2 flex items-center gap-2 ${active ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
  >
    <span className="text-xs opacity-70">{icon}</span>
    <span>{label}</span>
  </button>
);

export default BibleReader;
