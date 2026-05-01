import React, { useState } from 'react';
import { APOCRYPHA_DATA, ApocryphaBook } from '../data/apocrypha_data';
import { ICON_SERMON } from '../constants';
import { addTextToStudio } from '../core/studioFunnel';
import { BookText, ChevronDown, History, ShieldAlert } from 'lucide-react';

export default function ApocryphaExplorer() {
  const [expandedBook, setExpandedBook] = useState<string | null>(null);
  const [filter, setFilter] = useState<'Todos' | 'Deuterocanônico' | 'Pseudepígrafo' | 'Textos Primitivos'>('Todos');

  const filteredBooks = APOCRYPHA_DATA.filter(b => filter === 'Todos' ? true : b.category === filter);

  const handleInjectBook = (e: React.MouseEvent, book: ApocryphaBook) => {
    e.stopPropagation();
    const content = `📜 REGISTRO EXTRA-BÍBLICO: ${book.title}
Categoria: ${book.category} | Data: ${book.dateApprox}

[História e Resumo]
${book.summary}

[Valor Histórico]
${book.historicalValue}

[Status Canônico e Conexão Bíblica]
Canonicidade: ${book.canonicityStatus}
Conexão com a Bíblia: ${book.notableConnection}`;

    addTextToStudio(`[ESTUDO PROFUNDO - CONTEXTO HISTÓRICO: ${book.title}]\n\n${content}`);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <BookText className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-4 text-violet-400">
            A Biblioteca Apócrifa
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            Uma imersão segura nos livros extra-bíblicos do Período Intertestamentário e da Igreja Primitiva. Embora <strong className="text-white">não</strong> componham o Cânon sagrado protestante, são vitrines vitais da cultura, literatura de resistência e misticismo que circundavam Israel nos dias de Cristo.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-6">
        {['Todos', 'Deuterocanônico', 'Pseudepígrafo', 'Textos Primitivos'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              filter === f ? 'bg-violet-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredBooks.map((book) => (
          <div 
            key={book.id}
            className={`border border-slate-200 dark:border-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md bg-white dark:bg-slate-900 overflow-hidden ${expandedBook === book.id ? 'rounded-[30px]' : 'rounded-2xl'}`}
            onClick={() => setExpandedBook(expandedBook === book.id ? null : book.id)}
          >
            <div className={`p-6 ${expandedBook === book.id ? 'bg-slate-50 dark:bg-slate-800/30' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      book.category === 'Deuterocanônico' ? 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30' : 
                      book.category === 'Pseudepígrafo' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30' : 
                      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30'
                    }`}>
                      {book.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                      {book.dateApprox}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold dark:text-white">{book.title}</h4>
                </div>
                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${expandedBook === book.id ? 'rotate-180' : ''}`} />
              </div>

              {expandedBook === book.id && (
                <div className="mt-8 animate-in slide-in-from-top-4 duration-300">
                  <div className="space-y-6">
                    {/* Resumo */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-violet-500">
                      <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic whitespace-pre-line">
                        {book.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Valor Histórico */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl">
                        <div className="flex items-center gap-2 mb-3">
                          <History className="w-5 h-5 text-indigo-500" />
                          <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Valor Histórico</h5>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">{book.historicalValue}</p>
                      </div>

                      {/* Canonicidade */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-2xl">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldAlert className="w-5 h-5 text-amber-500" />
                          <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Canonicidade</h5>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">{book.canonicityStatus}</p>
                      </div>
                    </div>

                    {/* Conexão Marcante */}
                    <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-2xl">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-3">Conexão Bíblica Marcante</h5>
                      <p className="text-base text-slate-800 dark:text-slate-200 font-medium whitespace-pre-line">
                        {book.notableConnection}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-200 dark:border-slate-700 mt-8">
                    <button 
                      onClick={(e) => handleInjectBook(e, book)}
                      className="flex-1 bg-violet-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-violet-500 transition-all flex items-center justify-center gap-3"
                    >
                      {ICON_SERMON('w-5 h-5')} Injetar Contexto Histórico
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedBook(null);
                      }}
                      className="px-8 bg-white dark:bg-slate-800 text-slate-400 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest border border-slate-200 dark:border-slate-700"
                    >
                      Recolher
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
