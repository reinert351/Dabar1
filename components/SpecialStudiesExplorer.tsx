import React, { useState, useRef } from 'react';
import { SPECIAL_STUDIES_DATA } from '../data';
import { ICON_SERMON } from '../constants';
import { motion, useScroll, useSpring } from 'motion/react';

interface SpecialStudiesExplorerProps {
  onInject?: (title: string, content: string) => void;
}

const getThemeStyles = (color?: string) => {
  switch (color) {
    case 'amber':
      return { 
        bg: 'bg-amber-600', text: 'text-amber-600', textLight: 'text-amber-400', 
        lightBg: 'bg-amber-50', darkBg: 'dark:bg-amber-900/10', 
        border: 'border-amber-200', darkBorder: 'dark:border-amber-800',
        ring: 'ring-amber-500/20', shadow: 'shadow-amber-500/20', from: 'from-amber-600/20'
      };
    case 'fuchsia':
      return { 
        bg: 'bg-fuchsia-600', text: 'text-fuchsia-600', textLight: 'text-fuchsia-400', 
        lightBg: 'bg-fuchsia-50', darkBg: 'dark:bg-fuchsia-900/10', 
        border: 'border-fuchsia-200', darkBorder: 'dark:border-fuchsia-800',
        ring: 'ring-fuchsia-500/20', shadow: 'shadow-fuchsia-500/20', from: 'from-fuchsia-600/20'
      };
    default:
      return { 
        bg: 'bg-indigo-600', text: 'text-indigo-600', textLight: 'text-indigo-400', 
        lightBg: 'bg-indigo-50', darkBg: 'dark:bg-indigo-900/10', 
        border: 'border-indigo-200', darkBorder: 'dark:border-indigo-800',
        ring: 'ring-indigo-500/20', shadow: 'shadow-indigo-500/20', from: 'from-indigo-600/20'
      };
  }
};

const SpecialStudiesExplorer: React.FC<SpecialStudiesExplorerProps> = ({ onInject }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const study = SPECIAL_STUDIES_DATA.find(s => s.id === selectedId);
  const theme = getThemeStyles(study?.themeColor);

  const { scrollYProgress: windowScroll } = useScroll();
  const scaleX = useSpring(windowScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="space-y-8 relative">
      {/* 5. Marcador de Leitura e Progresso */}
      {study && (
        <motion.div
          className={`fixed top-0 left-0 right-0 h-1.5 ${theme.bg} z-50 origin-left`}
          style={{ scaleX }}
        />
      )}

      {/* Grid selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SPECIAL_STUDIES_DATA.map(s => {
          const sTheme = getThemeStyles(s.themeColor);
          const isSelected = selectedId === s.id;
          return (
            <button 
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`p-6 rounded-3xl border text-center transition-all duration-300 ${
                isSelected 
                  ? `${sTheme.bg} border-transparent text-white shadow-xl ${sTheme.shadow}` 
                  : `bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white hover:border-${sTheme.border.split('-')[1]}-300 hover:shadow-md`
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300 ${isSelected ? 'bg-white/20 text-white' : `${sTheme.lightBg} ${sTheme.darkBg} ${sTheme.text} ${sTheme.textLight}`}`}>
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider">{s.title}</h4>
            </button>
          );
        })}
      </div>

      {study ? (
        <motion.div 
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden"
        >
          {/* 4. Cabeçalho de Estudo (Hero Section) */}
          <div className={`relative p-10 md:p-14 overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.from} to-transparent opacity-20 dark:opacity-10`}></div>
            <div className={`absolute top-0 right-0 w-64 h-64 ${theme.bg} rounded-full -mr-20 -mt-20 blur-[80px] opacity-30`}></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {study.tags?.map((tag, idx) => (
                  <span key={idx} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${theme.lightBg} ${theme.darkBg} ${theme.text}`}>
                    {tag}
                  </span>
                ))}
                {study.readingTime && (
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                    {study.readingTime}
                  </span>
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-slate-800 dark:text-white mb-4 leading-tight break-words">{study.title}</h2>
            </div>
          </div>

          <div className="p-10 md:p-14 pt-0 md:pt-0">
            <div className={`prose prose-lg dark:prose-invert max-w-none prose-headings:${theme.text}`}>
              <div className="space-y-6">
                {study.content.split('\n\n').map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className={`leading-relaxed text-slate-700 dark:text-slate-300 bible-text text-justify ${
                      idx === 0 
                        ? `first-letter:text-7xl first-letter:font-black ${theme.text} first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest` 
                        : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* 2. Destravar os Cards "Engessados" */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className={`${theme.lightBg} ${theme.darkBg} p-8 rounded-[30px] border ${theme.border} ${theme.darkBorder} shadow-lg transition-transform hover:-translate-y-1`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">⚡</span>
                    <h5 className={`font-black uppercase tracking-tighter italic ${theme.text} text-xl`}>Simbolismo Teológico</h5>
                  </div>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {study.theologicalSymbolism || "A tipologia aplicada a este estudo revela camadas profundas sobre o plano da redenção."}
                  </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[30px] border border-slate-200 dark:border-slate-700 shadow-lg transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🔗</span>
                    <h5 className="font-black uppercase tracking-tighter italic text-slate-800 dark:text-white text-xl">Referências Cruzadas</h5>
                  </div>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {study.crossReferences || "Conecte este estudo com outros temas para uma visão holística das Escrituras."}
                  </p>
               </div>
            </div>

            {/* 3. Efeitos Especiais na Linha do Tempo */}
            {study.events && study.events.length > 0 && (
              <div className="mt-20 mb-8 relative border-t border-slate-100 dark:border-slate-800 pt-20">
                <div className="text-center mb-16">
                  <span className={`font-black uppercase tracking-[0.4em] text-[10px] ${theme.text} block mb-2`}>Cronologia Explícita</span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter flex items-center justify-center gap-4">
                    <span className="text-4xl animate-pulse">⏳</span> Eventos Históricos
                  </h3>
                </div>
                
                <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                  {study.events.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index} 
                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12`}
                      >
                        {/* Ícone ou Ponto Central com Glow Dinâmico */}
                        <div 
                          className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform group-hover:scale-125 duration-300" 
                          style={{ 
                            backgroundColor: event.customColor || '#4f46e5',
                            boxShadow: `0 0 20px ${event.customColor || '#4f46e5'}60`
                          }}
                        >
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        </div>

                        {/* Conteúdo do Card com Efeitos Especiais */}
                        <div className={`w-[calc(100%-4.5rem)] md:w-[calc(50%-3rem)] p-8 rounded-[30px] border shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl relative overflow-hidden ${
                          isEven 
                            ? 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700' 
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800'
                        }`}
                        style={{ borderBottomWidth: '4px', borderBottomColor: event.customColor || '#4f46e5' }}
                        >
                          {/* Glow Background do Card */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${event.customColor || '#4f46e5'})` }}
                          ></div>

                          <div className="relative z-10">
                            <div className="flex flex-col gap-2 mb-3">
                              <span 
                                className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] w-fit" 
                                style={{ backgroundColor: `${event.customColor || '#4f46e5'}20`, color: event.customColor || '#4f46e5' }}
                              >
                                {event.year}
                              </span>
                              <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-tight break-words">{event.title}</h4>
                            </div>
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{event.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {onInject && (
              <div className="mt-16 flex justify-center border-t border-slate-100 dark:border-slate-800 pt-12 pb-4">
                <button
                  onClick={() => onInject(study.title, study.content)}
                  className={`${theme.bg} text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-sm shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 ${theme.shadow}`}
                >
                  {ICON_SERMON('w-6 h-6')} Injetar Estudo no Chat
                </button>
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className="py-24 px-6 text-center bg-white dark:bg-slate-800 rounded-[40px] border border-dashed border-slate-200 dark:border-slate-700">
          <div className="w-20 h-20 bg-slate-50 dark:bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
             <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Pronto para o Mergulho?</h3>
          <p className="text-slate-500 font-medium">Selecione um tópico acima para iniciar o estudo profundo.</p>
        </div>
      )}
    </div>
  );
};

export default SpecialStudiesExplorer;
