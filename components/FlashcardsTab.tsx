import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  RotateCcw, 
  ChevronLeft, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  Languages,
  Shield,
  Sword,
  BookOpen
} from 'lucide-react';
import { UserState, Flashcard, FlashcardDeck, FlashcardProgress } from '../types';
import { calculateNextReview } from '../lib/srs';
import { councilsData } from '../data/councils_data';
import { HERESIES_DATA } from '../data/heresies_data';

interface FlashcardsTabProps {
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
}

const FlashcardsTab: React.FC<FlashcardsTabProps> = ({ userState, setUserState }) => {
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [isStudying, setIsStudying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Geração dinâmica de Decks
  const allDecks = useMemo(() => {
    const decks: FlashcardDeck[] = [];

    // 1. Concílios
    const councilCards: Flashcard[] = [];
    councilsData.forEach(cat => {
      cat.events.forEach(ev => {
        if (ev.decision || ev.response) {
          councilCards.push({
            id: `council-${ev.id}`,
            front: ev.title,
            back: `Ano: ${ev.period}\n\n${ev.decision || ev.response}`,
            hint: ev.scripture,
            category: 'História e Concílios'
          });
        }
      });
    });
    decks.push({
      id: 'deck-councils',
      title: 'Concílios Ecumênicos',
      description: 'Datas, batalhas teológicas e as grandes decisões da Igreja.',
      icon: 'Shield',
      color: 'blue',
      cards: councilCards
    });

    // 2. Heresias
    const heresyCards: Flashcard[] = [];
    HERESIES_DATA.forEach(block => {
      block.items.forEach(item => {
        heresyCards.push({
          id: `heresy-${item.id}`,
          front: item.title,
          back: `Erro: ${item.subtitle}\n\nResposta Bíblica: ${item.biblicalResponse[0]?.ref} - ${item.biblicalResponse[0]?.text}`,
          hint: item.context[0],
          category: 'Heresiologia'
        });
      });
    });
    decks.push({
      id: 'deck-heresies',
      title: 'Heresias e Ortodoxia',
      description: 'Identifique erros teológicos e a defesa bíblica clássica.',
      icon: 'Sword',
      color: 'red',
      cards: heresyCards
    });

    // 3. Hebraico Básico (Mocked para o Academy)
    decks.push({
      id: 'deck-hebrew',
      title: 'Vocabulário Hebraico I',
      description: 'Os termos mais fundamentais da Torah e Profetas.',
      icon: 'Languages',
      color: 'amber',
      cards: [
        { id: 'h-1', front: 'אֱלֹהִים', back: 'Elohim (Deus)', hint: 'Gênesis 1:1', category: 'Idiomas' },
        { id: 'h-2', front: 'אֶרֶץ', back: 'Eretz (Terra)', hint: 'Gênesis 1:1', category: 'Idiomas' },
        { id: 'h-3', front: 'דָּבָר', back: 'Dabar (Palavra, acontecimento)', hint: 'O Verbo', category: 'Idiomas' },
        { id: 'h-4', front: 'בְּרֵאשִׁית', back: 'Bereshit (No princípio)', hint: 'Abertura da Torah', category: 'Idiomas' },
        { id: 'h-5', front: 'קָדוֹשׁ', back: 'Qadosh (Santo, separado)', hint: 'Natureza de Deus', category: 'Idiomas' },
      ]
    });

    return decks;
  }, []);

  const selectedDeck = useMemo(() => 
    allDecks.find(d => d.id === selectedDeckId), [allDecks, selectedDeckId]
  );

  // Filtrar cartas que precisam de revisão hoje (ou cartas novas)
  const dueCards = useMemo(() => {
    if (!selectedDeck) return [];
    return selectedDeck.cards.filter(card => {
      const progress = userState.flashcardProgress?.[card.id];
      if (!progress) return true; // Nova
      return progress.nextReview <= Date.now(); // Precisa de revisão
    });
  }, [selectedDeck, userState.flashcardProgress]);

  const handleRate = (quality: number) => {
    if (!selectedDeck || !dueCards[currentIndex]) return;

    const card = dueCards[currentIndex];
    const currentProgress = userState.flashcardProgress?.[card.id] || {
      cardId: card.id,
      deckId: selectedDeck.id,
      interval: 0,
      easeFactor: 2.5,
      consecutiveCorrect: 0,
      lastReviewed: 0,
      nextReview: 0
    };

    const nextState = calculateNextReview(quality, currentProgress);

    setUserState(prev => ({
      ...prev,
      flashcardProgress: {
        ...prev.flashcardProgress,
        [card.id]: {
          ...currentProgress,
          ...nextState
        }
      }
    }));

    // Próxima carta
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < dueCards.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsStudying(false);
        setCurrentIndex(0);
      }
    }, 150);
  };

  const currentCard = dueCards[currentIndex];

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">Dabar Academy: Memorização</h1>
            <p className="text-sm text-slate-500">Repetição espaçada para domínio teológico</p>
          </div>
        </div>

        {isStudying && (
          <button 
            onClick={() => setIsStudying(false)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Sair da Sessão
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {!isStudying ? (
          <div className="max-w-4xl mx-auto">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-medium text-slate-500">Para revisar hoje</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {allDecks.reduce((acc, deck) => {
                    return acc + deck.cards.filter(c => {
                      const p = userState.flashcardProgress?.[c.id];
                      return p && p.nextReview <= Date.now();
                    }).length;
                  }, 0)}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-500">Cartas aprendidas</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {Object.values(userState.flashcardProgress || {}).filter(p => p.consecutiveCorrect > 2).length}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <RotateCcw className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium text-slate-500">Cartas novas</span>
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                   {allDecks.reduce((acc, deck) => {
                    return acc + deck.cards.filter(c => !userState.flashcardProgress?.[c.id]).length;
                  }, 0)}
                </div>
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6">Baralhos Disponíveis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allDecks.map(deck => {
                const dueCount = deck.cards.filter(c => {
                  const p = userState.flashcardProgress?.[c.id];
                  if (!p) return true;
                  return p.nextReview <= Date.now();
                }).length;

                return (
                  <motion.div
                    key={deck.id}
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border ${selectedDeckId === deck.id ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200 dark:border-slate-800'} shadow-sm cursor-pointer transition-all`}
                    onClick={() => setSelectedDeckId(deck.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-${deck.color}-100 dark:bg-${deck.color}-900/30`}>
                        {deck.icon === 'Shield' && <Shield className={`w-6 h-6 text-${deck.color}-600`} />}
                        {deck.icon === 'Sword' && <Sword className={`w-6 h-6 text-${deck.color}-600`} />}
                        {deck.icon === 'Languages' && <Languages className={`w-6 h-6 text-${deck.color}-600`} />}
                      </div>
                      {dueCount > 0 && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                          {dueCount} Pendentes
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">{deck.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                      {deck.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {deck.cards.length} cartas • {Math.round((Object.values(userState.flashcardProgress || {}).filter(p => p.deckId === deck.id && p.consecutiveCorrect > 1).length / deck.cards.length) * 100)}% domínio
                      </div>
                      {selectedDeckId === deck.id && dueCount > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsStudying(true);
                            setCurrentIndex(0);
                          }}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20"
                        >
                          Começar Estudo
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto h-full flex flex-col items-center justify-center">
            {currentCard ? (
              <>
                <div className="w-full flex justify-between mb-4 px-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Carta {currentIndex + 1} de {dueCards.length}
                  </span>
                  <div className="flex gap-1">
                    {dueCards.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? 'bg-indigo-500' : i < currentIndex ? 'bg-emerald-400' : 'bg-slate-200 dark:bg-slate-800'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative w-full aspect-[4/5] md:aspect-[3/2] cursor-pointer" style={{ perspective: '1000px' }}>
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    {/* Front */}
                    <div 
                      className="absolute inset-0 backface-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-center"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-6 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                        {currentCard.category}
                      </span>
                      <h3 className={`text-4xl font-serif font-bold text-slate-800 dark:text-slate-100 ${currentCard.category === 'Idiomas' ? 'text-5xl' : ''}`}>
                        {currentCard.front}
                      </h3>
                      {currentCard.hint && (
                        <p className="mt-6 text-slate-400 text-sm italic flex items-center gap-2">
                          <ExternalLink className="w-3 h-3" />
                         Dica: {currentCard.hint}
                        </p>
                      )}
                      
                      <div className="absolute bottom-8 flex items-center gap-2 text-slate-300 dark:text-slate-700 animate-pulse">
                         <span className="text-xs font-bold uppercase tracking-tighter">Clique para ver o verso</span>
                      </div>
                    </div>

                    {/* Back */}
                    <div 
                      className="absolute inset-0 backface-hidden bg-indigo-50 dark:bg-indigo-950/40 border-2 border-indigo-500/30 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-center"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="overflow-y-auto max-h-[70%] mb-12 custom-scrollbar">
                        <p className="text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                          {currentCard.back}
                        </p>
                      </div>

                      <div className="absolute bottom-8 left-4 right-4 grid grid-cols-4 gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleRate(0); }}
                          className="flex flex-col items-center gap-1 p-3 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-2xl hover:bg-red-200 transition-colors"
                        >
                          <RotateCcw className="w-5 h-5" />
                          <span className="text-[10px] font-bold uppercase">Errei</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleRate(1); }}
                          className="flex flex-col items-center gap-1 p-3 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-2xl hover:bg-amber-200 transition-colors"
                        >
                          <Clock className="w-5 h-5" />
                          <span className="text-[10px] font-bold uppercase">Difícil</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleRate(2); }}
                          className="flex flex-col items-center gap-1 p-3 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-2xl hover:bg-emerald-200 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-[10px] font-bold uppercase">Bom</span>
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleRate(3); }}
                          className="flex flex-col items-center gap-1 p-3 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-indigo-200 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 rotate-45" />
                          <span className="text-[10px] font-bold uppercase">Fácil</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8"
              >
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Sessão Concluída!</h2>
                <p className="text-slate-500 mb-8">Você terminou todas as cartas pendentes deste baralho por hoje.</p>
                <button
                  onClick={() => setIsStudying(false)}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-shadow shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30"
                >
                  Voltar para Deck
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlashcardsTab;
