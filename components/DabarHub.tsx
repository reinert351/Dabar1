import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BOOK_INTRODUCTIONS, DEVOTIONALS
} from '../data/dabar_hub';
import { BIBLICAL_VALUES } from '../data/values';
import { PRESCRIPTIONS, Prescription } from '../data/prescriptions';
import { DITOS_DUROS } from '../data/ditosDuros';
import { 
  ICON_STUDY, ICON_QUOTES, ICON_NOTE, 
  ICON_SERMON, ICON_DEVOTIONAL, ICON_BIBLE, ICON_DNA, ICON_VALUES
} from '../constants';
import { CaptureTarget, UserNote, SermonBlockType } from '../types';

interface DabarHubProps {
  captureTarget?: CaptureTarget | null;
  onInject?: (title: string, content: string, type: SermonBlockType) => void;
  onNavigate?: (tab: string, metadata?: any) => void;
}

const DabarHub: React.FC<DabarHubProps> = ({ captureTarget, onInject, onNavigate }) => {
  const [activePillar, setActivePillar] = useState<number>(1);
  const [subTab, setSubTab] = useState<string>('default');

  // States para Notas
  const [notes, setNotes] = useState<UserNote[]>(() => {
    const saved = localStorage.getItem('dabar_user_notes');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingNote, setEditingNote] = useState<UserNote | null>(null);

  // State para Prescrições
  const [selectedPrescription, setSelectedPrescription] = useState<Prescription | null>(null);

  const pillars = [
    { id: 1, title: 'Estrutural', icon: ICON_STUDY('w-5 h-5 md:w-6 h-6'), color: 'bg-blue-600', shadow: 'shadow-blue-200' },
    { id: 3, title: 'Notas', icon: ICON_NOTE('w-5 h-5 md:w-6 h-6'), color: 'bg-amber-600', shadow: 'shadow-amber-200' },
    { id: 5, title: 'Prescrições', icon: ICON_DNA('w-5 h-5 md:w-6 h-6'), color: 'bg-rose-600', shadow: 'shadow-rose-200' },
    { id: 6, title: 'Devocional', icon: ICON_DEVOTIONAL('w-5 h-5 md:w-6 h-6'), color: 'bg-orange-600', shadow: 'shadow-orange-200' },
    { id: 7, title: 'Valores', icon: ICON_VALUES('w-5 h-5 md:w-6 h-6'), color: 'bg-indigo-600', shadow: 'shadow-indigo-200' },
    { id: 8, title: 'Apologética', icon: <span className="text-lg">❓</span>, color: 'bg-red-600', shadow: 'shadow-red-200' }
  ];

  const saveNotes = (newNotes: UserNote[]) => {
    setNotes(newNotes);
    localStorage.setItem('dabar_user_notes', JSON.stringify(newNotes));
  };

  const handleAddNote = () => {
    const newNote: UserNote = {
      id: Date.now().toString(),
      title: 'Nova Anotação',
      content: '',
      date: Date.now()
    };
    saveNotes([newNote, ...notes]);
    setEditingNote(newNote);
  };

  const handleUpdateNote = (id: string, title: string, content: string, tags?: string[], connectedRef?: string) => {
    const updated = notes.map(n => n.id === id ? { ...n, title, content, tags, connectedRef } : n);
    saveNotes(updated);
  };

  const handleDeleteNote = (id: string) => {
    saveNotes(notes.filter(n => n.id !== id));
    if (editingNote?.id === id) setEditingNote(null);
  };

  const handleNavigateToBible = (ref: string) => {
    if (!onNavigate) return;
    
    // Parser simples para referências como "Gênesis 1-3" ou "Êxodo 20:3"
    const bookMap: Record<string, string> = {
      'Gênesis': 'GEN', 'Êxodo': 'EXO', 'Levítico': 'LEV', 'Números': 'NUM', 'Deuteronômio': 'DEU',
      'Josué': 'JOS', 'Juízes': 'JDG', 'Rute': 'RUT', '1 Samuel': '1SA', '2 Samuel': '2SA',
      '1 Reis': '1KI', '2 Reis': '2KI', '1 Crônicas': '1CH', '2 Crônicas': '2CH', 'Esdras': 'EZR',
      'Neemias': 'NEH', 'Ester': 'EST', 'Jó': 'JOB', 'Salmo': 'PSA', 'Salmos': 'PSA', 'Provérbios': 'PRO',
      'Eclesiastes': 'ECC', 'Cantares': 'SNG', 'Isaías': 'ISA', 'Jeremias': 'JER', 'Lamentações': 'LAM',
      'Ezequiel': 'EZE', 'Daniel': 'DAN', 'Oseias': 'HOS', 'Joel': 'JOE', 'Amós': 'AMO',
      'Obadias': 'OBA', 'Jonas': 'JON', 'Miqueias': 'MIC', 'Naum': 'NAH', 'Habacuque': 'HAB',
      'Sofonias': 'ZEP', 'Ageu': 'HAG', 'Zacarias': 'ZEC', 'Malaquias': 'MAL', 'Mateus': 'MAT',
      'Marcos': 'MRK', 'Lucas': 'LUK', 'João': 'JHN', 'Atos': 'ACT', 'Romanos': 'ROM',
      '1 Coríntios': '1CO', '2 Coríntios': '2CO', 'Gálatas': 'GAL', 'Efésios': 'EPH',
      'Filipenses': 'PHI', 'Colossenses': 'COL', '1 Tessalonicenses': '1TH', '2 Tessalonicenses': '2TH',
      '1 Timóteo': '1TI', '2 Timóteo': '2TI', 'Tito': 'TIT', 'Filemom': 'PHM', 'Hebreus': 'HEB',
      'Tiago': 'JAM', '1 Pedro': '1PE', '2 Pedro': '2PE', '1 João': '1JN', '2 João': '2JN',
      '3 João': '3JN', 'Judas': 'JUD', 'Apocalipse': 'REV'
    };

    const parts = ref.split(' ');
    let bookName = parts[0];
    let rest = parts[1];

    // Trata livros com número no início (1 Samuel, etc)
    if (['1', '2', '3'].includes(parts[0])) {
      bookName = `${parts[0]} ${parts[1]}`;
      rest = parts[2];
    }

    const bookId = bookMap[bookName];
    if (!bookId) return;

    const chapterMatch = rest?.match(/^(\d+)/);
    const chapter = chapterMatch ? parseInt(chapterMatch[1]) : 1;
    
    const verseMatch = rest?.match(/:(\d+)/);
    const verse = verseMatch ? parseInt(verseMatch[1]) : undefined;

    onNavigate('bible', { bookId, chapter, verse });
  };

  const handlePillarChange = (id: number) => {
    setActivePillar(id);
    setSubTab('default');
  };

  const handleInject = (title: string, content: string, type: SermonBlockType = 'library-clip') => {
    if (onInject) {
      onInject(title, content, type);
    }
  };

  const getGenreColor = (genre: string) => {
    switch(genre) {
      case 'Pentateuco': return 'border-l-blue-600';
      case 'Poéticos': return 'border-l-indigo-500';
      case 'Históricos': return 'border-l-emerald-600';
      case 'Profetas Maiores': return 'border-l-rose-600';
      case 'Profetas Menores': return 'border-l-pink-500';
      case 'Evangelhos': return 'border-l-amber-500';
      case 'Históricos NT': return 'border-l-orange-500';
      case 'Epístolas Paulinas': return 'border-l-violet-600';
      case 'Epístolas Gerais': return 'border-l-cyan-600';
      case 'Revelação': return 'border-l-purple-800';
      default: return 'border-l-slate-400';
    }
  };


  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in pb-40">
      {/* Header Central do Hub */}
      <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[35px] md:rounded-[50px] shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-1.5 h-10 bg-indigo-600 rounded-full"></div>
           <h2 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Dabar Hub</h2>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4">
          {pillars.map(p => (
            <button 
              key={p.id}
              onClick={() => handlePillarChange(p.id)}
              className={`flex flex-col items-center p-4 md:p-6 rounded-[25px] md:rounded-[35px] transition-all border-2 ${activePillar === p.id ? `${p.color} border-transparent text-white shadow-2xl ${p.shadow} scale-105` : 'bg-slate-50 dark:bg-slate-900/50 border-transparent text-slate-400 hover:border-slate-200'}`}
            >
              <div className={activePillar === p.id ? 'scale-110 transition-transform' : ''}>
                {p.icon}
              </div>
              <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-3">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        {/* PILLAR 1: ESTRUTURAL (RESTAURAÇÃO TOTAL 66 LIVROS) */}
        {activePillar === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4">
            {Object.entries(BOOK_INTRODUCTIONS).map(([key, intro]) => (
              <div key={key} className={`bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden border-t-[12px] ${getGenreColor(intro.genre).replace('border-l', 'border-t')}`}>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black dark:text-white uppercase tracking-tighter italic group-hover:text-indigo-600 transition-colors leading-none">{intro.abbreviation}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-black text-sm italic mt-2">Tema: {intro.theme}</p>
                  </div>
                  <span className="text-[10px] font-black bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full uppercase text-indigo-600 border border-indigo-100 dark:border-indigo-800">{intro.genre}</span>
                </div>

                {intro.description && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {intro.description}
                  </p>
                )}

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Autor</span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{intro.author}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Data</span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{intro.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Local</span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{intro.location || 'N/A'}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Esboço Analítico Dinâmico */}
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-700">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Esboço Analítico (Clique para Ler)</span>
                    <div className="space-y-2">
                      {intro.outline.map((item, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleNavigateToBible(`${intro.bookId} ${item.range.split('-')[0].split(':')[0]}`)}
                          className="w-full flex justify-between items-center text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors text-left"
                        >
                          <span className="truncate pr-2">{item.title}</span>
                          <span className="text-indigo-500 shrink-0">{item.range}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Métricas e Ordens */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-[8px] font-black text-slate-400 uppercase">Caps</span>
                      <span className="text-sm font-black text-indigo-600">{intro.chapters}</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-[8px] font-black text-slate-400 uppercase">Vers</span>
                      <span className="text-sm font-black text-indigo-600">{intro.verses}</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-[8px] font-black text-slate-400 uppercase">Cânon</span>
                      <span className="text-sm font-black text-slate-500">#{intro.usualOrder}</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-[8px] font-black text-slate-400 uppercase">Cronol</span>
                      <span className="text-sm font-black text-slate-500">#{intro.chronologicalOrder}</span>
                    </div>
                  </div>

                  {/* Novas Informações: Versículo Chave e Cristo */}
                  {(intro.keyVerse || intro.christType) && (
                    <div className="space-y-3 pt-4 border-t border-slate-50 dark:border-slate-700">
                      {intro.keyVerse && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-2xl border border-amber-100 dark:border-amber-800/50">
                          <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest block mb-1">Versículo Chave</span>
                          <p className="text-[10px] text-amber-800 dark:text-amber-200 italic font-medium leading-tight">{intro.keyVerse}</p>
                        </div>
                      )}
                      {intro.christType && (
                        <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-2xl border border-rose-100 dark:border-rose-800/50">
                          <span className="text-[8px] font-black text-rose-600 uppercase tracking-widest block mb-1">Cristo em {intro.bookId}</span>
                          <p className="text-[10px] text-rose-800 dark:text-rose-200 font-bold leading-tight">{intro.christType}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Dataset de Promessas */}
                  <div className="space-y-4 pt-4 border-t border-slate-50 dark:border-slate-700">
                    <div>
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest block mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Promessas Cumpridas
                      </span>
                      <ul className="space-y-2">
                        {intro.fulfilledPromises.slice(0, 2).map((p, i) => (
                          <li key={i} className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight italic flex gap-2">
                             <span className="text-emerald-500 font-bold shrink-0">✓</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {intro.unfulfilledPromises && intro.unfulfilledPromises.length > 0 && (
                      <div>
                        <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block mb-3 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Escatológicas
                        </span>
                        <ul className="space-y-2">
                          {intro.unfulfilledPromises.slice(0, 1).map((p, i) => (
                            <li key={i} className="text-[10px] text-slate-500 dark:text-slate-500 leading-tight italic flex gap-2">
                               <span className="text-amber-500 font-bold shrink-0">⏳</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {captureTarget && (
                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700">
                      <button 
                        onClick={() => handleInject(intro.bookId, `TEMA: ${intro.theme}\nAUTOR: ${intro.author}\nDATA: ${intro.date}\nCAPÍTULOS: ${intro.chapters}\nVERSÍCULOS: ${intro.verses}\nVERSÍCULO CHAVE: ${intro.keyVerse || 'N/A'}\nCRISTO EM ${intro.bookId}: ${intro.christType || 'N/A'}`)}
                        className="w-full flex items-center justify-center gap-2 p-3 bg-amber-500 text-white rounded-xl shadow-md hover:bg-amber-600 transition-all font-bold text-xs uppercase tracking-widest"
                        title="Injetar Metadados"
                      >
                        <span>Injetar no Sermão</span> 🎯
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PILLAR 3: NOTAS */}
        {activePillar === 3 && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">Minhas Anotações</h3>
              <button 
                onClick={handleAddNote}
                className="px-6 py-3 bg-amber-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-amber-700 transition-all flex items-center gap-2"
              >
                <span>+</span> Nova Nota
              </button>
            </div>

            {editingNote ? (
              <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[50px] border-2 border-amber-500 shadow-2xl animate-in zoom-in-95">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <input 
                    type="text"
                    value={editingNote.title}
                    onChange={(e) => {
                      const newTitle = e.target.value;
                      setEditingNote({ ...editingNote, title: newTitle });
                      handleUpdateNote(editingNote.id, newTitle, editingNote.content, editingNote.tags, editingNote.connectedRef);
                    }}
                    className="flex-1 text-3xl font-black text-slate-800 dark:text-white bg-transparent border-none focus:ring-0 uppercase italic tracking-tighter"
                    placeholder="Título da Nota"
                  />
                  <input 
                    type="text"
                    value={editingNote.connectedRef || ''}
                    onChange={(e) => {
                      const newRef = e.target.value;
                      setEditingNote({ ...editingNote, connectedRef: newRef });
                      handleUpdateNote(editingNote.id, editingNote.title, editingNote.content, editingNote.tags, newRef);
                    }}
                    className="w-full md:w-48 text-xs font-black text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-xl border border-amber-100 dark:border-amber-800 focus:ring-0 uppercase tracking-widest"
                    placeholder="Ref: GEN 1:1"
                  />
                </div>
                
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {['#Estudo', '#Devocional', '#Sermão', '#Insight'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => {
                        const currentTags = editingNote.tags || [];
                        const newTags = currentTags.includes(tag) ? currentTags.filter(t => t !== tag) : [...currentTags, tag];
                        setEditingNote({ ...editingNote, tags: newTags });
                        handleUpdateNote(editingNote.id, editingNote.title, editingNote.content, newTags, editingNote.connectedRef);
                      }}
                      className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${editingNote.tags?.includes(tag) ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <textarea 
                  value={editingNote.content}
                  onChange={(e) => {
                    const newContent = e.target.value;
                    setEditingNote({ ...editingNote, content: newContent });
                    handleUpdateNote(editingNote.id, editingNote.title, newContent, editingNote.tags, editingNote.connectedRef);
                  }}
                  className="w-full h-64 text-xl text-slate-600 dark:text-slate-300 bg-transparent border-none focus:ring-0 resize-none leading-relaxed italic"
                  placeholder="Comece a escrever sua reflexão aqui..."
                />
                <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                  <button 
                    onClick={() => setEditingNote(null)}
                    className="px-8 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-black text-xs uppercase tracking-widest"
                  >Fechar</button>
                  <button 
                    onClick={() => handleDeleteNote(editingNote.id)}
                    className="px-8 py-3 bg-rose-100 text-rose-600 rounded-xl font-black text-xs uppercase tracking-widest"
                  >Excluir</button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {notes.length === 0 ? (
                  <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-900/50 rounded-[50px] border-2 border-dashed border-slate-200 dark:border-slate-800">
                    <p className="text-slate-400 font-bold italic">Nenhuma anotação ainda. Comece agora!</p>
                  </div>
                ) : (
                  notes.map(note => (
                    <div 
                      key={note.id} 
                      onClick={() => setEditingNote(note)}
                      className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter group-hover:text-amber-600 transition-colors">{note.title || 'Sem Título'}</h4>
                        <span className="text-[9px] font-black text-slate-400">{new Date(note.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-slate-500 line-clamp-3 italic leading-relaxed">{note.content || 'Sem conteúdo...'}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* PILLAR 5: PRESCRIÇÕES DE CRISTO */}
        {activePillar === 5 && (
          <div className="space-y-10 animate-in slide-in-from-bottom-4 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {!selectedPrescription ? (
                <motion.div 
                  key="list"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-10"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                      <h3 className="text-3xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">Prescrições de Cristo</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Remédios espirituais para as dores da alma</p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                      {['TODAS', 'Emocional', 'Espiritual', 'Relacional', 'Mental'].map(cat => (
                        <button 
                          key={cat}
                          onClick={() => setSubTab(cat)}
                          className={`px-4 py-2 rounded-full font-black text-[9px] uppercase tracking-widest transition-all whitespace-nowrap ${subTab === cat || (subTab === 'default' && cat === 'TODAS') ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRESCRIPTIONS
                      .filter(p => subTab === 'default' || subTab === 'TODAS' || p.category === subTab)
                      .map(prescription => (
                      <motion.div 
                        key={prescription.id} 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPrescription(prescription)}
                        className="bg-white dark:bg-slate-800 p-6 rounded-[35px] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          {ICON_DNA('w-12 h-12')}
                        </div>
                        <span className="text-[8px] font-black bg-rose-50 dark:bg-rose-900/20 text-rose-600 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">{prescription.category}</span>
                        <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-tight mb-2">{prescription.symptom}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2 italic">{prescription.diagnosis}</p>
                        <div className="mt-4 flex justify-end">
                          <span className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Ver Receituário →</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="recipe"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="max-w-xl mx-auto"
                >
                  {/* MODO RECEITUÁRIO: RECEITA MÉDICA DIGITAL */}
                  <div className="bg-white dark:bg-slate-900 rounded-[40px] shadow-2xl overflow-hidden border-4 border-rose-600 relative">
                    {/* Header da Receita */}
                    <div className="p-6 border-b-2 border-dashed border-rose-200 dark:border-rose-800 flex justify-between items-start bg-rose-50/30 dark:bg-rose-900/10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-rose-600 rounded-lg flex items-center justify-center text-white font-black text-[10px]">Rx</div>
                          <span className="text-[8px] font-black text-rose-600 uppercase tracking-[0.3em]">Receituário de Cristo</span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-none">{selectedPrescription.symptom}</h4>
                      </div>
                      <button 
                        onClick={() => setSelectedPrescription(null)}
                        className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl hover:bg-rose-100 hover:text-rose-600 transition-all"
                      >
                        <span className="font-black text-[10px]">VOLTAR</span>
                      </button>
                    </div>

                    {/* Corpo da Receita (Vertical) */}
                    <div className="p-6 md:p-10 space-y-8 relative">
                      {/* Marca d'água sutil */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        {ICON_DNA('w-64 h-64')}
                      </div>

                      {/* 1. Diagnóstico */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-600 font-black text-[9px]">01</div>
                          <h5 className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Diagnóstico Espiritual</h5>
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-200 font-bold italic leading-relaxed pl-8">{selectedPrescription.diagnosis}</p>
                      </div>

                      <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>

                      {/* 2. Prescrição */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-600 font-black text-[9px]">02</div>
                          <h5 className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Prescrição de Jesus</h5>
                        </div>
                        <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-[30px] border-2 border-rose-100 dark:border-rose-800/50 ml-8">
                          <p className="bible-text text-xl text-rose-900 dark:text-rose-100 italic font-medium leading-relaxed">"{selectedPrescription.jesusPrescription}"</p>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>

                      {/* 3. Explicação */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-600 font-black text-[9px]">03</div>
                          <h5 className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Explicação Simples</h5>
                        </div>
                        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed italic pl-8">{selectedPrescription.simpleExplanation}</p>
                      </div>

                      <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>

                      {/* 4. Aplicação */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-600 font-black text-[9px]">04</div>
                          <h5 className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Aplicação Prática</h5>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-[30px] border border-slate-100 dark:border-slate-700 ml-8">
                          <p className="text-lg text-slate-700 dark:text-slate-200 font-bold leading-relaxed">{selectedPrescription.practicalApplication}</p>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>

                      {/* 5. Resultado */}
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-rose-600 font-black text-[9px]">05</div>
                          <h5 className="text-[9px] font-black text-rose-600 uppercase tracking-widest">Resultado Esperado</h5>
                        </div>
                        <div className="flex items-center gap-5 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-[30px] border-2 border-emerald-100 dark:border-emerald-800/50 ml-8">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-lg">✓</div>
                          <p className="text-emerald-800 dark:text-emerald-200 font-black italic uppercase tracking-tighter text-lg">{selectedPrescription.expectedResult}</p>
                        </div>
                      </div>

                      {/* Footer da Receita: Botão de Injeção */}
                      {captureTarget && (
                        <div className="pt-8 mt-8 border-t-2 border-dashed border-rose-100 dark:border-rose-800">
                          <button 
                            onClick={() => handleInject(selectedPrescription.symptom, `DIAGNÓSTICO: ${selectedPrescription.diagnosis}\nPRESCRIÇÃO: ${selectedPrescription.jesusPrescription}\nEXPLICAÇÃO: ${selectedPrescription.simpleExplanation}\nAPLICAÇÃO: ${selectedPrescription.practicalApplication}\nRESULTADO: ${selectedPrescription.expectedResult}`, 'prescription')}
                            className="w-full flex items-center justify-center gap-3 p-5 bg-amber-500 text-white rounded-[25px] shadow-2xl hover:bg-amber-600 transition-all font-black text-xs uppercase tracking-widest group"
                          >
                            <span className="group-hover:scale-110 transition-transform">Anexar ao Sermão</span> 🎯
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Selo de Autenticidade */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 flex justify-center">
                      <div className="text-center opacity-30">
                        <p className="text-[7px] font-black uppercase tracking-[0.5em] text-slate-400">Assinado Digitalmente por Jesus Cristo</p>
                        <p className="text-[5px] font-bold text-slate-300 mt-1">DABAR LOGOS AI - PROTOCOLO DE CURA ESPIRITUAL</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* PILLAR 6: DEVOCIONAL */}
        {activePillar === 6 && (
          <div className="space-y-10 animate-in slide-in-from-bottom-4 max-w-4xl mx-auto">
            {DEVOTIONALS.map(dev => (
              <div key={dev.id} className="bg-amber-50/50 dark:bg-amber-900/10 p-12 md:p-16 rounded-[60px] border border-amber-100 dark:border-amber-800 text-center relative overflow-hidden group">
                <h3 className="text-3xl md:text-6xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-10 leading-tight">{dev.title}</h3>
                <p className="bible-text text-2xl md:text-4xl text-slate-700 dark:text-slate-300 leading-relaxed mb-14 italic font-light">"{dev.content}"</p>
                <div className="bg-white dark:bg-slate-800/80 p-8 rounded-[35px] border border-amber-200 inline-block">
                   <p className="text-xs font-black text-amber-700 uppercase mb-2 tracking-widest italic">{dev.ref}</p>
                   <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-white italic">"{dev.prayer}"</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PILLAR 7: VALORES */}
        {activePillar === 7 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 max-w-6xl mx-auto">
            {BIBLICAL_VALUES.map((value: any) => (
              <div 
                key={value.id} 
                className={`${value.color} p-8 rounded-[40px] border-2 ${value.borderColor} shadow-sm hover:shadow-xl transition-all group relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{value.emoji}</span>
                    <h3 className={`text-2xl font-black ${value.textColor} uppercase italic tracking-tighter leading-tight`}>
                      {value.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium italic leading-relaxed">
                  {value.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-white/50 dark:bg-slate-800/50 p-6 rounded-[30px] border border-white dark:border-slate-700">
                    <ul className="space-y-3">
                      {value.points.map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                          <span className={`${value.textColor}`}>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/80 dark:bg-slate-900/80 p-5 rounded-[25px] border-2 border-dashed border-slate-200 dark:border-slate-700">
                    <p className={`text-xs font-black ${value.textColor} uppercase tracking-widest mb-2`}>Reflexão Prática</p>
                    <p className="text-sm text-slate-800 dark:text-slate-100 font-bold italic">"{value.question}"</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {value.biblicalRefs.map((ref: string, i: number) => (
                    <button 
                      key={i}
                      onClick={() => handleNavigateToBible(ref)}
                      className={`px-4 py-2 rounded-full bg-white dark:bg-slate-800 border ${value.borderColor} text-[10px] font-black ${value.textColor} uppercase tracking-widest hover:scale-105 transition-transform shadow-sm`}
                    >
                      {ref}
                    </button>
                  ))}
                </div>

                {captureTarget && (
                  <button 
                    onClick={() => handleInject(value.title, `${value.description}\n\nPRINCÍPIOS:\n${value.points.map((p: string) => `- ${p}`).join('\n')}\n\nREFLEXÃO: ${value.question}\n\nREFERÊNCIAS: ${value.biblicalRefs.join(', ')}`, 'point')}
                    className={`w-full flex items-center justify-center gap-3 p-4 bg-amber-500 text-white rounded-[25px] shadow-lg hover:bg-amber-600 transition-all font-black text-xs uppercase tracking-widest`}
                  >
                    <span>Injetar no Sermão</span> 🎯
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Apologética / Ditos Duros */}
        {activePillar === 8 && (
          <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic mb-4">
                Ditos Duros
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                Respostas teológicas e apologéticas para aparentes contradições e textos complexos da Bíblia.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {DITOS_DUROS.map((dito) => (
                <div key={dito.id} className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-10 shadow-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-8">
                    <button 
                      onClick={() => handleNavigateToBible(`${dito.bookId} ${dito.chapter}:${dito.verse}`)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span>📖</span> {dito.bookId} {dito.chapter}:{dito.verse}
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-100 dark:border-rose-800/30">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-600 mb-2 flex items-center gap-2">
                        <span>❓</span> O Problema
                      </h4>
                      <p className="text-lg text-rose-900 dark:text-rose-200 font-medium italic leading-relaxed">
                        "{dito.problem}"
                      </p>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/30">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2 flex items-center gap-2">
                        <span>📖</span> A Resposta (Exegese)
                      </h4>
                      <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {dito.exegesis}
                      </p>
                    </div>
                    
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
                        <span>🧩</span> Harmonização
                      </h4>
                      <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {dito.harmonization}
                      </p>
                    </div>
                  </div>

                  {captureTarget && (
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                      <button 
                        onClick={() => handleInject(`Apologética: ${dito.bookId} ${dito.chapter}:${dito.verse}`, `O Problema: ${dito.problem}\n\nA Resposta: ${dito.exegesis}\n\nHarmonização: ${dito.harmonization}`, 'exegesis')}
                        className="flex items-center gap-3 px-6 py-3 bg-rose-600 text-white rounded-2xl shadow-lg hover:bg-rose-700 transition-all font-black text-[10px] uppercase tracking-widest"
                      >
                        <span>Injetar Defesa no Estúdio</span> 🛡️
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DabarHub;