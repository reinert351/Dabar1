import React, { useState, useRef, useEffect } from 'react';
import { UserState, Course, CourseModule, CourseLesson } from '../types';
import { COURSES_DATA } from '../data/courses_data';

const CoursesTab: React.FC<{ 
  userState: UserState; 
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  onNavigate: (tab: string, metadata?: any) => void;
}> = ({ userState, setUserState, onNavigate }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<CourseLesson | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<'content' | 'flashcards' | 'draw' | 'quiz'>('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Pre-load voices for TTS
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const handleTTS = (text: string, transliteration: string, lang: 'he-IL' | 'el-GR') => {
    if (!window.speechSynthesis) return;
    
    // Cancel any ongoing speech to ensure the new one plays immediately
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance();
    
    // Check if the device has a voice for this language
    const voices = window.speechSynthesis.getVoices();
    const shortLang = lang.split('-')[0];
    const hasVoice = voices.some(v => v.lang.startsWith(shortLang));
    
    if (hasVoice && voices.length > 0) {
      // Native voice available
      utterance.text = text;
      utterance.lang = lang;
    } else {
      // Fallback: Read the transliteration using the default Portuguese voice
      // This guarantees sound will play even if Hebrew/Greek is not installed
      utterance.text = transliteration;
      utterance.lang = 'pt-BR';
    }
    
    utterance.rate = 0.8;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) ctx.beginPath();
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#4f46e5'; // indigo-600

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const handleQuizSubmit = () => {
    if (!selectedLesson || !selectedLesson.quiz) return;
    setQuizSubmitted(true);
    
    // Calculate score
    const totalQuestions = selectedLesson.quiz.length;
    let correctCount = 0;
    selectedLesson.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswerIndex) correctCount++;
    });
    
    // If passed (e.g., 100%), grant XP
    if (correctCount === totalQuestions) {
      completeLesson();
    }
  };

  const completeLesson = () => {
    if (!selectedLesson) return;
    
    setUserState(prev => {
      const currentProgress = prev.courseProgress || {};
      if (currentProgress[selectedLesson.id]?.completed) return prev; // already completed
      
      return {
        ...prev,
        courseProgress: {
          ...currentProgress,
          [selectedLesson.id]: { completed: true, xp: selectedLesson.xpReward }
        }
      };
    });
  };

  const totalXP = Object.values(userState.courseProgress || {}).reduce((acc, curr) => acc + (curr.completed ? curr.xp : 0), 0);

  return (
    <div className="min-h-screen pb-40 animate-in fade-in duration-700">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-block p-4 bg-slate-900 rounded-full mb-6 border border-slate-800 shadow-2xl">
          <span className="text-4xl">🎓</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4">
          Idiomas Bíblicos
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
          Aprenda Hebraico e Grego Koiné
        </p>
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
          <span className="text-amber-500 text-xl">⭐</span>
          <span className="text-amber-600 dark:text-amber-400 font-black text-sm">{totalXP} XP</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[30px] border border-slate-100 dark:border-white/10 p-6 shadow-xl">
            <h2 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              Cursos Disponíveis
            </h2>
            <div className="space-y-2">
              {COURSES_DATA.map((course) => (
                <button
                  key={course.id}
                  onClick={() => {
                    setSelectedCourse(course);
                    setSelectedLesson(null);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-3 ${
                    selectedCourse?.id === course.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-[1.02]'
                      : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="text-xl">{course.icon}</span>
                  <span className="font-black uppercase text-[10px] tracking-wider">{course.title}</span>
                </button>
              ))}
            </div>
          </div>

          {selectedCourse && (
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[30px] border border-slate-100 dark:border-white/10 p-6 shadow-xl">
              <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Módulos
              </h2>
              <div className="space-y-4">
                {selectedCourse.modules.map((module) => (
                  <div key={module.id} className="space-y-2">
                    <h3 className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2">{module.title}</h3>
                    {module.lessons.map((lesson) => {
                      const isCompleted = userState.courseProgress?.[lesson.id]?.completed;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setSelectedLesson(lesson);
                            setActiveSubTab('content');
                            setQuizSubmitted(false);
                            setQuizAnswers({});
                            setFlashcardIndex(0);
                            setIsFlipped(false);
                          }}
                          className={`w-full text-left p-3 rounded-xl transition-all text-[10px] font-bold uppercase tracking-tight flex items-center justify-between ${
                            selectedLesson?.id === lesson.id
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                              : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
                          }`}
                        >
                          <span className="truncate pr-2">{lesson.title}</span>
                          {isCompleted && <span className="text-emerald-500 text-sm">✅</span>}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9">
          {selectedLesson ? (
            <div className="bg-white dark:bg-slate-900/40 backdrop-blur-2xl rounded-[40px] md:rounded-[60px] border border-slate-100 dark:border-white/10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
              
              {/* Lesson Header */}
              <div className="bg-slate-950 p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4 block">
                      {selectedCourse?.title}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                      {selectedLesson.title}
                    </h2>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border border-white/5 flex items-center gap-2">
                    <span>⭐</span> +{selectedLesson.xpReward} XP
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 p-2 gap-2">
                <button 
                  onClick={() => setActiveSubTab('content')}
                  className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeSubTab === 'content' 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                      : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>📖</span> Aula
                </button>
                <button 
                  onClick={() => setActiveSubTab('flashcards')}
                  className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeSubTab === 'flashcards' 
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/20' 
                      : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>🗂️</span> Flashcards
                </button>
                {selectedLesson.drawingPractice && (
                  <button 
                    onClick={() => setActiveSubTab('draw')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'draw' 
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>✏️</span> Caligrafia
                  </button>
                )}
                {selectedLesson.quiz && (
                  <button 
                    onClick={() => setActiveSubTab('quiz')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'quiz' 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>📝</span> Quiz
                  </button>
                )}
              </div>

              {/* Content Tab */}
              {activeSubTab === 'content' && (
                <div className="p-10 md:p-20 space-y-12 max-w-4xl mx-auto">
                  <div className="space-y-8">
                    {selectedLesson.content.map((paragraph, idx) => (
                      <p key={idx} className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="pt-12 border-t border-slate-100 dark:border-white/5">
                    <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8">Vocabulário da Aula</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedLesson.vocabulary.map((vocab, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-3xl font-black text-slate-900 dark:text-white">{vocab.word}</span>
                              <button 
                                onClick={() => handleTTS(vocab.word, vocab.transliteration, vocab.audioLang as 'he-IL' | 'el-GR')}
                                className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                title="Ouvir Pronúncia"
                              >
                                🔊
                              </button>
                            </div>
                            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">
                              Pronúncia: <span className="text-slate-600 dark:text-slate-400">{vocab.transliteration}</span>
                            </p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1">Tradução:</span>
                              {vocab.translation}
                            </p>
                          </div>
                          {vocab.strong && (
                            <button 
                              onClick={() => onNavigate('strong', { initialSearch: vocab.strong })}
                              className="text-[10px] font-black bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-xl uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-colors"
                            >
                              {vocab.strong}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {!selectedLesson.quiz && (
                    <div className="pt-12 flex justify-center">
                      <button 
                        onClick={completeLesson}
                        className="bg-emerald-600 text-white px-12 py-5 rounded-3xl font-black uppercase text-xs tracking-widest shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all"
                      >
                        Concluir Aula (+{selectedLesson.xpReward} XP)
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Flashcards Tab */}
              {activeSubTab === 'flashcards' && (
                <div className="p-10 md:p-20 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Treino de Memorização</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Clique no cartão para virar</p>
                  </div>
                  
                  <div 
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full max-w-md aspect-[4/3] perspective-1000 cursor-pointer group"
                  >
                    <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                      {/* Front */}
                      <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 rounded-[40px] border-2 border-slate-100 dark:border-white/10 shadow-2xl flex flex-col items-center justify-center p-8">
                        <span className="text-8xl font-black text-slate-900 dark:text-white mb-6">
                          {selectedLesson.vocabulary[flashcardIndex].word}
                        </span>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">O que significa?</p>
                      </div>
                      
                      {/* Back */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 rounded-[40px] shadow-2xl flex flex-col items-center justify-center p-8 text-white">
                        <p className="text-3xl font-black uppercase italic tracking-tighter mb-4 text-center">
                          {selectedLesson.vocabulary[flashcardIndex].translation}
                        </p>
                        <div className="text-center mb-8">
                          <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-1">Pronúncia</p>
                          <p className="text-lg font-medium">
                            {selectedLesson.vocabulary[flashcardIndex].transliteration}
                          </p>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTTS(
                              selectedLesson.vocabulary[flashcardIndex].word, 
                              selectedLesson.vocabulary[flashcardIndex].transliteration, 
                              selectedLesson.vocabulary[flashcardIndex].audioLang as 'he-IL' | 'el-GR'
                            );
                          }}
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl hover:bg-white/30 transition-colors"
                        >
                          🔊
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-12">
                    <button 
                      onClick={() => {
                        setIsFlipped(false);
                        setTimeout(() => setFlashcardIndex(prev => Math.max(0, prev - 1)), 150);
                      }}
                      disabled={flashcardIndex === 0}
                      className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl disabled:opacity-50"
                    >
                      ⬅️
                    </button>
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                      {flashcardIndex + 1} / {selectedLesson.vocabulary.length}
                    </span>
                    <button 
                      onClick={() => {
                        setIsFlipped(false);
                        setTimeout(() => setFlashcardIndex(prev => Math.min(selectedLesson.vocabulary.length - 1, prev + 1)), 150);
                      }}
                      disabled={flashcardIndex === selectedLesson.vocabulary.length - 1}
                      className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl disabled:opacity-50"
                    >
                      ➡️
                    </button>
                  </div>
                </div>
              )}

              {/* Drawing Practice Tab */}
              {activeSubTab === 'draw' && selectedLesson.drawingPractice && (
                <div className="p-10 md:p-20 flex flex-col items-center justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Lousa de Caligrafia</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{selectedLesson.drawingPractice.instruction}</p>
                  </div>

                  <div className="flex gap-4 mb-8">
                    {selectedLesson.drawingPractice.characters.map((char, idx) => (
                      <div key={idx} className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-3xl font-black text-slate-900 dark:text-white border border-slate-200 dark:border-white/10">
                        {char}
                      </div>
                    ))}
                  </div>

                  <div className="relative bg-white dark:bg-slate-900 rounded-[40px] border-2 border-dashed border-slate-300 dark:border-white/20 p-4 shadow-xl">
                    <canvas
                      ref={canvasRef}
                      width={600}
                      height={300}
                      onMouseDown={startDrawing}
                      onMouseUp={endDrawing}
                      onMouseOut={endDrawing}
                      onMouseMove={draw}
                      onTouchStart={startDrawing}
                      onTouchEnd={endDrawing}
                      onTouchMove={draw}
                      className="bg-transparent cursor-crosshair w-full max-w-[600px] touch-none"
                    />
                    <button 
                      onClick={clearCanvas}
                      className="absolute bottom-6 right-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform"
                    >
                      Limpar Lousa
                    </button>
                  </div>
                </div>
              )}

              {/* Quiz Tab */}
              {activeSubTab === 'quiz' && selectedLesson.quiz && (
                <div className="p-10 md:p-20 max-w-3xl mx-auto">
                  <div className="mb-12 text-center">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Avaliação de Fixação</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Teste o que você aprendeu nesta aula</p>
                  </div>

                  <div className="space-y-12">
                    {selectedLesson.quiz.map((q, qIdx) => (
                      <div key={qIdx} className="space-y-6">
                        <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          <span className="text-indigo-500 mr-2">{qIdx + 1}.</span> {q.question}
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          {q.options.map((opt, oIdx) => {
                            const isSelected = quizAnswers[qIdx] === oIdx;
                            const isCorrect = q.correctAnswerIndex === oIdx;
                            let btnClass = "p-4 rounded-2xl border text-left transition-all font-medium ";
                            
                            if (quizSubmitted) {
                              if (isCorrect) btnClass += "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400";
                              else if (isSelected && !isCorrect) btnClass += "bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-400";
                              else btnClass += "bg-slate-50 dark:bg-white/5 border-transparent opacity-50";
                            } else {
                              btnClass += isSelected 
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-lg" 
                                : "bg-white dark:bg-slate-800 border-slate-100 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-indigo-300";
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={quizSubmitted}
                                onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                                className={btnClass}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        {quizSubmitted && (
                          <div className="p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            <span className="font-black text-indigo-500 uppercase mr-2">Explicação:</span> {q.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 flex justify-center gap-4">
                    {!quizSubmitted ? (
                      <button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(quizAnswers).length < selectedLesson.quiz.length}
                        className="bg-emerald-600 text-white px-12 py-5 rounded-3xl font-black uppercase text-xs tracking-widest shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
                      >
                        Finalizar Avaliação
                      </button>
                    ) : (
                      <div className="text-center">
                        {Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedLesson.quiz![Number(idx)].correctAnswerIndex).length === selectedLesson.quiz.length ? (
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl">
                            <p className="text-emerald-500 font-black text-xl mb-2">🎉 Parabéns!</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Você acertou tudo e ganhou +{selectedLesson.xpReward} XP.</p>
                          </div>
                        ) : (
                          <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-3xl">
                            <p className="text-amber-500 font-black text-xl mb-2">Quase lá!</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Revise o conteúdo e tente novamente para ganhar XP.</p>
                            <button
                              onClick={() => {
                                setQuizSubmitted(false);
                                setQuizAnswers({});
                              }}
                              className="bg-amber-500 text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:scale-105 transition-all"
                            >
                              Tentar Novamente
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full min-h-[600px] bg-slate-50 dark:bg-slate-900/20 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-[60px] flex flex-col items-center justify-center text-center p-10">
              <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full shadow-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-2xl font-black text-slate-400 dark:text-slate-600 uppercase italic tracking-widest mb-4">
                Selecione um Curso
              </h3>
              <p className="text-slate-500 dark:text-slate-500 text-xs font-bold uppercase tracking-[0.2em] max-w-md">
                Escolha um idioma na barra lateral para iniciar sua jornada de aprendizado.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesTab;
