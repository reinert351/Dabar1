import React, { useState } from 'react';
import { UserState, AcademyModule, AcademyTopic, AcademyQuizQuestion } from '../types';
import { ACADEMY_DATA } from '../data/academy_data';
import { ICON_ASSISTANT } from '../constants';
import { addTextToStudio } from '../core/studioFunnel/index';
import CertificateModal from './CertificateModal';

const AcademyTab: React.FC<{ 
  userState: UserState; 
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  metadata?: any;
  onNavigate?: (tab: string) => void;
}> = ({ userState, setUserState, metadata, onNavigate }) => {
  const [selectedModule, setSelectedModule] = useState<AcademyModule | null>(ACADEMY_DATA[0]);
  const [selectedTopic, setSelectedTopic] = useState<AcademyTopic | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'content' | 'sources' | 'dilemmas' | 'bibliography' | 'timeline' | 'matrix' | 'quiz'>('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [studentName, setStudentName] = useState('');

  // Handle navigation from search results
  React.useEffect(() => {
    if (metadata && metadata.moduleId) {
      const module = ACADEMY_DATA.find(m => m.id === metadata.moduleId);
      if (module) {
        setSelectedModule(module);
        if (metadata.topicId) {
          const topic = module.topics.find(t => t.id === metadata.topicId);
          if (topic) {
            setSelectedTopic(topic);
            setShowQuiz(false);
            setQuizSubmitted(false);
            setQuizAnswers({});
            setActiveSubTab('content');
          }
        } else {
          setSelectedTopic(null);
        }
      }
    }
  }, [metadata]);

  const handleInject = () => {
    if (!selectedTopic) return;
    const fullText = selectedTopic.content.join('\n\n');
    addTextToStudio(fullText, `Estudo: ${selectedTopic.title}`);
  };

  const handleTTS = () => {
    if (!selectedTopic) return;
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    
    const textToRead = selectedTopic.content.join(' ');
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    utterance.onend = () => setIsReading(false);
    
    setIsReading(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleQuizSubmit = () => {
    if (!selectedTopic || !selectedTopic.quiz) return;
    
    const totalQuestions = selectedTopic.quiz.length;
    let correctCount = 0;
    selectedTopic.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswerIndex) {
        correctCount++;
      }
    });
    
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    // Salvar no histórico escolar
    setUserState(prev => ({
      ...prev,
      academyScores: {
        ...(prev.academyScores || {}),
        [selectedTopic.id]: score
      }
    }));

    setQuizSubmitted(true);
    
    // Scroll to top of quiz results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen pb-40 animate-in fade-in duration-700">
      {/* Header Estilo Acadêmico */}
      <div className="mb-12 text-center">
        <div className="inline-block p-4 bg-slate-900 rounded-full mb-6 border border-slate-800 shadow-2xl">
          <span className="text-4xl">🎓</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4">
          Dabar Academy
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
          Cátedra de Conhecimento Teológico Avançado
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar de Módulos */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[30px] border border-slate-100 dark:border-white/10 p-6 shadow-xl">
            <h2 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              Currículo Disponível
            </h2>
            <div className="space-y-2">
              {ACADEMY_DATA.map((module) => (
                <button
                  key={module.id}
                  onClick={() => {
                    setSelectedModule(module);
                    setSelectedTopic(null);
                    setShowQuiz(false);
                    setActiveSubTab('content');
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-3 ${
                    selectedModule?.id === module.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-[1.02]'
                      : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="text-xl">{module.icon}</span>
                  <span className="font-black uppercase text-[10px] tracking-wider">{module.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Histórico Escolar Estilizado */}
          <div className="bg-slate-900 rounded-[30px] p-8 shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/20 transition-all duration-700"></div>
            
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              Histórico Acadêmico
            </h2>
            
            <div className="space-y-6">
              {userState.academyScores && Object.keys(userState.academyScores).length > 0 ? (
                Object.entries(userState.academyScores).map(([topicId, score]) => {
                  const topic = ACADEMY_DATA.flatMap(m => m.topics).find(t => t.id === topicId);
                  return (
                    <div key={topicId} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-white/90 uppercase tracking-tight truncate max-w-[140px]">
                          {topic?.title.split(' ').slice(1).join(' ') || topicId}
                        </span>
                        <span className={`text-[11px] font-black ${score >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {score}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${score >= 70 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]'}`}
                          style={{ width: `${score}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 border-2 border-dashed border-white/5 rounded-2xl">
                  <span className="text-2xl mb-2 block opacity-30">📜</span>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Aguardando Avaliações</p>
                </div>
              )}
            </div>

            {/* Diploma Visual se módulo completo */}
            {selectedModule && userState.academyScores && selectedModule.topics.every(t => (userState.academyScores?.[t.id] || 0) >= 70) && (
              <div className="mt-10 p-6 bg-gradient-to-br from-amber-500/20 to-amber-600/5 rounded-2xl border border-amber-500/30 text-center animate-in zoom-in duration-700">
                <div className="text-3xl mb-3">🏅</div>
                <h3 className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">Certificado de Conclusão</h3>
                <p className="text-[9px] text-white/60 font-medium uppercase tracking-tighter mb-4">Módulo: {selectedModule.title}</p>
                <button 
                  onClick={() => setShowCertificate(true)}
                  className="w-full py-2 bg-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Ver Diploma
                </button>
              </div>
            )}
          </div>

          {/* NOVO: Atalho para Memorização (Flashcards) */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[30px] p-6 border border-indigo-500/30 shadow-2xl overflow-hidden relative group cursor-pointer"
            onClick={() => onNavigate?.('flashcards')}
          >
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/20 rounded-lg">
                  <span className="text-xl">🧠</span>
                </div>
                <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Academia de Memorização</h3>
              </div>
              <p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4">
                Domine vocabulário e dogmas com o sistema de <span className="text-indigo-400 font-bold">Repetição Espaçada (SRS)</span>.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-white px-3 py-1 bg-indigo-600 rounded-full animate-pulse uppercase tracking-tighter">
                  Praticar agora
                </span>
                <span className="text-white/30 text-[10px]">→</span>
              </div>
            </div>
          </div>

          {selectedModule && (
            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[30px] border border-slate-100 dark:border-white/10 p-6 shadow-xl">
              <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Doutrinas do Módulo
              </h2>
              <div className="space-y-1">
                {selectedModule.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setShowQuiz(false);
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                      setActiveSubTab('content');
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all text-[10px] font-bold uppercase tracking-tight ${
                      selectedTopic?.id === topic.id
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-300'
                    }`}
                  >
                    {topic.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Área de Conteúdo */}
        <div className="lg:col-span-9">
          {selectedTopic ? (
            <div className="bg-white dark:bg-slate-900/40 backdrop-blur-2xl rounded-[40px] md:rounded-[60px] border border-slate-100 dark:border-white/10 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
              {/* Capa do Tópico */}
              <div className="bg-slate-950 p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4 block">Módulo Avançado</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                    {selectedTopic.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedTopic.subItems?.map((item, idx) => (
                      <span key={idx} className="bg-white/10 backdrop-blur-md text-white/70 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navegação Interna Estilizada */}
              <div className="flex flex-wrap border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 p-2 gap-2">
                <button 
                  onClick={() => setActiveSubTab('content')}
                  className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeSubTab === 'content' 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                      : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>📖</span> Conteúdo
                </button>
                {selectedTopic.primarySources && (
                  <button 
                    onClick={() => setActiveSubTab('sources')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'sources' 
                        ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>📜</span> Fontes
                  </button>
                )}
                {selectedTopic.dilemmas && (
                  <button 
                    onClick={() => setActiveSubTab('dilemmas')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'dilemmas' 
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>⚖️</span> Dilemas
                  </button>
                )}
                {selectedTopic.bibliography && (
                  <button 
                    onClick={() => setActiveSubTab('bibliography')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'bibliography' 
                        ? 'bg-slate-700 text-white shadow-lg shadow-slate-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>📚</span> Ref.
                  </button>
                )}
                {selectedTopic.timeline && (
                  <button 
                    onClick={() => setActiveSubTab('timeline')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'timeline' 
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>⏳</span> Linha do Tempo
                  </button>
                )}
                {selectedTopic.comparativeMatrix && (
                  <button 
                    onClick={() => setActiveSubTab('matrix')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'matrix' 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>📊</span> Matriz
                  </button>
                )}
                {selectedTopic.quiz && (
                  <button 
                    onClick={() => setActiveSubTab('quiz')}
                    className={`flex-1 min-w-[120px] py-3 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeSubTab === 'quiz' 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                        : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>📝</span> Avaliação
                  </button>
                )}
              </div>

              {activeSubTab === 'content' && (
                <div className="p-10 md:p-20 space-y-12 max-w-4xl mx-auto">
                  {/* Seção Etimológica */}
                  {selectedTopic.etymology && selectedTopic.etymology.length > 0 && (
                    <div className="bg-indigo-500/5 rounded-3xl p-8 border border-indigo-500/10">
                      <h3 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-6">Análise Etimológica (Strong)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedTopic.etymology.map((et, idx) => (
                          <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-lg font-black text-slate-900 dark:text-white">{et.term}</span>
                              <span className="text-[10px] font-black bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full">{et.strong}</span>
                            </div>
                            <p className="text-xs text-slate-500 italic mb-1">{et.original} ({et.transliteration})</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{et.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Texto Principal */}
                  <div className="space-y-8">
                    {selectedTopic.content.map((paragraph, idx) => (
                      <p key={idx} className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed text-justify font-serif">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Correntes Teológicas */}
                  {selectedTopic.currents && (
                    <div className="pt-12 border-t border-slate-100 dark:border-white/5">
                      <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest mb-8">Comparação de Correntes Teológicas</h3>
                      <div className="space-y-4">
                        {selectedTopic.currents.map((curr, idx) => (
                          <div key={idx} className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                            <h4 className="text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase mb-2">{curr.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{curr.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tese Original */}
                  {selectedTopic.thesis && (
                    <div className="p-8 bg-amber-500/5 rounded-3xl border border-amber-500/20 italic">
                      <h3 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-4">Proposta de Tese Original</h3>
                      <p className="text-slate-700 dark:text-slate-300 font-serif text-lg leading-relaxed">
                        "{selectedTopic.thesis}"
                      </p>
                    </div>
                  )}
                  
                  <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center text-slate-400">
                        {ICON_ASSISTANT('w-6 h-6')}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status da Lição</p>
                        <p className="text-xs font-bold text-slate-900 dark:text-white uppercase">Nível Doutorado Concluído</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={handleTTS}
                        className={`px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-xl flex items-center gap-3 ${
                          isReading 
                            ? 'bg-rose-500 text-white animate-pulse' 
                            : 'bg-indigo-500 text-white hover:scale-105'
                        }`}
                      >
                        {isReading ? '⏹️ Parar Aula' : '🔊 Ouvir Aula'}
                      </button>
                      <button 
                        onClick={handleInject}
                        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:scale-105 transition-transform shadow-xl"
                      >
                        Injetar no Estúdio Pro
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSubTab === 'sources' && selectedTopic.primarySources && (
                <div className="p-10 md:p-20 space-y-12 animate-in fade-in slide-in-from-right-10 duration-500">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Biblioteca de Fontes Primárias</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Acesse os textos originais que moldaram a teologia cristã</p>
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    {selectedTopic.primarySources.map((source) => (
                      <div key={source.id} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[30px] overflow-hidden shadow-xl group hover:border-amber-500/30 transition-all">
                        <div className="p-8 border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 flex justify-between items-start">
                          <div>
                            <span className="text-[9px] font-black bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                              {source.period} • {source.year}
                            </span>
                            <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase italic">{source.title}</h4>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">{source.author}</p>
                          </div>
                          <button className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 hover:scale-110 transition-transform">
                            📖
                          </button>
                        </div>
                        <div className="p-8">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Resumo Acadêmico</p>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 italic">"{source.summary}"</p>
                          <div className="bg-slate-50 dark:bg-black/20 p-6 rounded-2xl border border-slate-100 dark:border-white/5 mb-6">
                            <p className="text-slate-700 dark:text-slate-300 font-serif leading-relaxed text-sm">
                              {source.content}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {source.tags?.map((tag, idx) => (
                              <span key={idx} className="text-[8px] font-black text-slate-400 border border-slate-200 dark:border-white/10 px-2 py-1 rounded-md uppercase">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'dilemmas' && selectedTopic.dilemmas && (
                <div className="p-10 md:p-20 space-y-12 animate-in fade-in slide-in-from-right-10 duration-500">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Dilemas Pastorais</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Aplicação prática e ética da doutrina em cenários reais</p>
                  </div>
                  <div className="space-y-8">
                    {selectedTopic.dilemmas.map((dilemma) => (
                      <div key={dilemma.id} className="bg-rose-500/5 border border-rose-500/10 rounded-[40px] p-10 md:p-16">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-rose-500/20">
                            ⚖️
                          </div>
                          <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">{dilemma.title}</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                          <div className="space-y-8">
                            <div>
                              <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-4">O Cenário</p>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
                                "{dilemma.scenario}"
                              </p>
                            </div>
                            <div>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Questões para Reflexão</p>
                              <ul className="space-y-3">
                                {dilemma.questions?.map((q, idx) => (
                                  <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 font-bold">
                                    <span className="text-rose-500">•</span> {q}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-rose-500/10 shadow-xl">
                            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">Princípios Bíblicos Norteadores</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                              {dilemma.biblicalPrinciples?.map((p, idx) => (
                                <span key={idx} className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-[9px] font-black uppercase border border-emerald-500/20">
                                  {p}
                                </span>
                              ))}
                            </div>
                            
                            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-4">Proposta de Resolução</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {dilemma.suggestedResolution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'bibliography' && selectedTopic.bibliography && (
                <div className="p-10 md:p-20 space-y-12 animate-in fade-in slide-in-from-right-10 duration-500">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Sistema de Bibliografia</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Referências acadêmicas para aprofundamento (ABNT/Chicago)</p>
                  </div>
                  <div className="max-w-2xl mx-auto bg-slate-50 dark:bg-white/5 rounded-[40px] p-10 border border-slate-100 dark:border-white/5">
                    <div className="flex justify-between items-center mb-8">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Obras Recomendadas</p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase border border-slate-100 dark:border-white/5">ABNT</button>
                        <button className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-[8px] font-black uppercase border border-slate-100 dark:border-white/5 opacity-50">Chicago</button>
                      </div>
                    </div>
                    <ul className="space-y-6">
                      {selectedTopic.bibliography.map((bib, idx) => (
                        <li key={idx} className="flex gap-4 items-start group">
                          <span className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100 dark:border-white/5 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed pt-1">
                            {bib}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeSubTab === 'timeline' && selectedTopic.timeline && (
                <div className="p-10 md:p-20 space-y-12 animate-in fade-in slide-in-from-right-10 duration-500">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Linha do Tempo Dogmática</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Marcos históricos no desenvolvimento desta doutrina</p>
                  </div>
                  <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500 before:to-transparent">
                    {selectedTopic.timeline.map((event, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 dark:bg-slate-800 text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all group-hover:bg-cyan-500 group-hover:text-white z-10">
                          ⏳
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-[30px] border border-slate-100 dark:border-white/5 shadow-xl transition-all group-hover:scale-[1.02]">
                          <div className="flex items-center justify-between space-x-2 mb-2">
                            <div className="font-black text-cyan-500 uppercase tracking-widest text-xs">{event.year}</div>
                          </div>
                          <div className="text-slate-900 dark:text-white font-black uppercase italic mb-2">{event.event}</div>
                          <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{event.significance}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'matrix' && selectedTopic.comparativeMatrix && (
                <div className="p-10 md:p-20 space-y-12 animate-in fade-in slide-in-from-right-10 duration-500">
                  <div className="text-center mb-12">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Matriz de Teologia Comparada</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Análise comparativa entre diferentes tradições cristãs</p>
                  </div>
                  <div className="space-y-12">
                    {selectedTopic.comparativeMatrix.map((matrix, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 rounded-[40px] border border-slate-100 dark:border-white/5 overflow-hidden shadow-2xl">
                        <div className="bg-purple-600 p-6">
                          <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs text-center">{matrix.category}</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-white/5">
                          {matrix.views?.map((view, vIdx) => (
                            <div key={vIdx} className="p-8 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                              <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-4">{view.tradition}</p>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
                                {view.position}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === 'quiz' && (
                <div className="p-10 md:p-20 max-w-3xl mx-auto">
                  {/* Resultado da Avaliação se submetido */}
                  {quizSubmitted && selectedTopic.quiz && (
                    <div className="mb-12 p-10 rounded-[40px] bg-slate-900 border border-white/10 shadow-2xl relative overflow-hidden animate-in zoom-in duration-500">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                      <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-6">
                          <span className="text-5xl">
                            {Math.round((Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length / selectedTopic.quiz!.length) * 100) >= 70 ? '🎯' : '📚'}
                          </span>
                        </div>
                        <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                          Resultado da Avaliação
                        </h3>
                        <p className="text-indigo-400 font-black uppercase tracking-[0.3em] text-xs mb-8">
                          Desempenho Acadêmico Global
                        </p>
                        
                        <div className="flex justify-center items-center gap-12 mb-10">
                          <div className="text-center">
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Acertos</p>
                            <p className="text-4xl font-black text-white">
                              {Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length}
                              <span className="text-white/20 text-xl ml-1">/ {selectedTopic.quiz!.length}</span>
                            </p>
                          </div>
                          <div className="w-px h-12 bg-white/10"></div>
                          <div className="text-center">
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Nota Final</p>
                            <p className={`text-4xl font-black ${Math.round((Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length / selectedTopic.quiz!.length) * 100) >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                              {Math.round((Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length / selectedTopic.quiz!.length) * 100)}%
                            </p>
                          </div>
                        </div>

                        <div className="max-w-md mx-auto">
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                            <div 
                              className={`h-full transition-all duration-1000 ${Math.round((Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length / selectedTopic.quiz!.length) * 100) >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                              style={{ width: `${(Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length / selectedTopic.quiz!.length) * 100}%` }}
                            ></div>
                          </div>
                          <p className="text-[10px] text-white/60 font-medium leading-relaxed">
                            {Math.round((Object.entries(quizAnswers).filter(([idx, ans]) => ans === selectedTopic.quiz![Number(idx)].correctAnswerIndex).length / selectedTopic.quiz!.length) * 100) >= 70 
                              ? "Parabéns! Você demonstrou domínio excepcional sobre esta doutrina. Sua nota foi registrada em seu histórico acadêmico."
                              : "Bom esforço. Recomendamos revisar o conteúdo doutoral e refazer a avaliação para atingir a nota de corte acadêmica (70%)."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-12 text-center">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-2">Avaliação de Conhecimento</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Teste seus conhecimentos sobre {selectedTopic.title}</p>
                  </div>

                  <div className="space-y-12">
                    {selectedTopic.quiz?.map((q, qIdx) => (
                      <div key={qIdx} className="space-y-6">
                        <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          <span className="text-indigo-500 mr-2">{qIdx + 1}.</span> {q.question}
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          {q.options?.map((opt, oIdx) => {
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
                        disabled={Object.keys(quizAnswers).length < (selectedTopic.quiz?.length || 0)}
                        className="bg-emerald-600 text-white px-12 py-5 rounded-3xl font-black uppercase text-xs tracking-widest shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
                      >
                        Finalizar Avaliação
                      </button>
                    ) : (
                      <button
                        onClick={resetQuiz}
                        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-3xl font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-105 transition-all"
                      >
                        Refazer Estudo
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full min-h-[600px] bg-slate-50 dark:bg-slate-900/20 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-[60px] flex flex-col items-center justify-center text-center p-10">
              <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full shadow-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-white/10">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-2xl font-black text-slate-400 dark:text-slate-600 uppercase italic tracking-widest mb-4">
                Selecione uma Doutrina
              </h3>
              <p className="text-slate-500 dark:text-slate-500 text-xs font-bold uppercase tracking-[0.2em] max-w-md">
                Escolha um tópico na barra lateral para iniciar o estudo profundo e acadêmico do currículo de doutorado.
              </p>
            </div>
          )}
        </div>
      </div>

      {showCertificate && selectedModule && (
        <CertificateModal 
          module={selectedModule}
          studentName={studentName}
          setStudentName={setStudentName}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};

export default AcademyTab;
