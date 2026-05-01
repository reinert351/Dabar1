import React, { useState } from 'react';
import { MARTYRS_DATA, Martyr } from '../data/martyrs_data';
import { ICON_STUDY, ICON_SERMON } from '../constants';
import { addTextToStudio } from '../core/studioFunnel';
import { Cross, ChevronDown } from 'lucide-react';

export default function MartyrsExplorer() {
  const [expandedMartyr, setExpandedMartyr] = useState<string | null>(null);
  const [filter, setFilter] = useState<'Todos' | 'Profeta (AT)' | 'Apóstolo/Líder (NT)'>('Todos');

  const filteredMartyrs = MARTYRS_DATA.filter(m => filter === 'Todos' ? true : m.group === filter);

  const handleInjectMartyr = (e: React.MouseEvent, martyr: Martyr) => {
    e.stopPropagation();
    const content = `🩸 MÁRTIR: ${martyr.name}
Grupo: ${martyr.group}

[Detalhes do Martírio]
• Método: ${martyr.method}
• Local Histórico: ${martyr.location}
• Ano Aproximado: ${martyr.yearApprox}
• Base: ${martyr.biblicalRef !== '-' ? martyr.biblicalRef : ''} ${martyr.historicalRef}

[Relato Detalhado]
${martyr.description}`;

    addTextToStudio(`[ESTUDO PROFUNDO - MÁRTIR: ${martyr.name}]\n\n${content}`);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-red-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Cross className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-4">
            O Cálice dos Mártires
          </h3>
          <p className="text-red-100 text-lg leading-relaxed">
            "O sangue dos mártires é a semente da Igreja". Desça nas profundezas teológicas e históricas sobre como os grandes profetas e os apóstolos de Cristo selaram seus ministérios, derramando sua própria vida em prol da revelação divina.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 mb-6">
        {['Todos', 'Profeta (AT)', 'Apóstolo/Líder (NT)'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
              filter === f ? 'bg-red-900 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMartyrs.map((martyr) => (
          <div 
            key={martyr.id}
            className={`border border-slate-200 dark:border-slate-800 transition-all cursor-pointer shadow-sm hover:shadow-md bg-white dark:bg-slate-900 ${expandedMartyr === martyr.id ? 'col-span-1 md:col-span-2 rounded-[30px] p-6' : 'rounded-2xl p-4'}`}
            onClick={() => setExpandedMartyr(expandedMartyr === martyr.id ? null : martyr.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${martyr.group === 'Profeta (AT)' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30' : 'bg-red-100 text-red-700 dark:bg-red-900/30'}`}>
                  {martyr.group}
                </span>
                <h4 className="text-xl font-bold dark:text-white mt-2">{martyr.name}</h4>
                <p className="text-slate-500 text-sm">{martyr.method}</p>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedMartyr === martyr.id ? 'rotate-180' : ''}`} />
            </div>

            {expandedMartyr === martyr.id && (
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Local Histórico</span>
                    <span className="font-bold dark:text-white">{martyr.location}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Ano Aproximado</span>
                    <span className="font-bold dark:text-white">{martyr.yearApprox}</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Base</span>
                    <span className="font-bold text-sky-600 dark:text-sky-400">{martyr.biblicalRef !== '-' ? martyr.biblicalRef : martyr.historicalRef}</span>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 dark:text-red-400 mb-3 block">Relato Detalhado</h5>
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic whitespace-pre-line">
                    {martyr.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <button 
                    onClick={(e) => handleInjectMartyr(e, martyr)}
                    className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                  >
                    {ICON_SERMON('w-5 h-5')} Injetar Estudo
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedMartyr(null);
                    }}
                    className="px-8 bg-white dark:bg-slate-800 text-slate-400 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest border border-slate-100 dark:border-slate-700"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
