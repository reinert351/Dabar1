
import React, { useState, useEffect } from 'react';
import { ICON_DNA, ICON_STUDY, ICON_BIBLE } from '../constants';
import { getSermons } from '../services/database';
import { Sermon, SermonType } from '../types';

const PastorDNATab: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    topThemes: [] as { name: string; count: number }[],
    topBooks: [] as { name: string; count: number }[],
    style: 'Em análise...' as string,
    intensity: 0,
    totalSermons: 0,
    totalBlocks: 0
  });

  useEffect(() => {
    const analyzeDNA = async () => {
      try {
        const sermons = await getSermons();
        if (!sermons || sermons.length === 0) {
          setLoading(false);
          return;
        }

        const themeMap: Record<string, number> = {};
        const bookMap: Record<string, number> = {};
        const typeMap: Record<string, number> = {};
        let totalBlocksCount = 0;

        const bibleBooks = [
          'Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Josué', 'Juízes', 'Rute', 'Samuel', 'Reis', 
          'Crônicas', 'Esdras', 'Neemias', 'Ester', 'Jó', 'Salmos', 'Provérbios', 'Eclesiastes', 'Cantares', 
          'Isaías', 'Jeremias', 'Lamentações', 'Ezequiel', 'Daniel', 'Oseias', 'Joel', 'Amós', 'Obadias', 
          'Jonas', 'Miqueias', 'Naum', 'Habacuque', 'Sofonia', 'Ageu', 'Zacarias', 'Malaquias', 'Mateus', 
          'Marcos', 'Lucas', 'João', 'Atos', 'Romanos', 'Coríntios', 'Gálatas', 'Efésios', 'Filipenses', 
          'Colossenses', 'Tessalonicenses', 'Timóteo', 'Tito', 'Filemom', 'Hebreus', 'Tiago', 'Pedro', 'Judas', 'Apocalipse'
        ];

        sermons.forEach(s => {
          // Processar Tags (Temas)
          if (s.tags) {
            s.tags.forEach(t => {
              themeMap[t] = (themeMap[t] || 0) + 1;
            });
          }

          // Processar Tipos de Sermão
          typeMap[s.type] = (typeMap[s.type] || 0) + 1;

          // Contagem de blocos para intensidade
          if (s.blocks) totalBlocksCount += s.blocks.length;

          // Tentar identificar livros no título
          bibleBooks.forEach(book => {
            if (s.title.toLowerCase().includes(book.toLowerCase())) {
              bookMap[book] = (bookMap[book] || 0) + 1;
            }
          });
        });

        // Ordenar e formatar Temas (Top 4)
        const sortedThemes = Object.entries(themeMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([name, count]) => ({ 
            name, 
            count: Math.round((count / sermons.length) * 100) 
          }));

        // Ordenar Livros (Top 3)
        const sortedBooks = Object.entries(bookMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([name, count]) => ({ name, count }));

        // Determinar Estilo Predominante
        const mainType = Object.entries(typeMap).sort((a, b) => b[1] - a[1])[0]?.[0] as SermonType;
        const styleLabel = mainType === 'expository' ? 'Expositivo' : 
                          mainType === 'thematic' ? 'Temático' : 
                          mainType === 'bible-class' ? 'Didático' : 'Analítico';

        setStats({
          topThemes: sortedThemes,
          topBooks: sortedBooks,
          style: styleLabel,
          intensity: Math.min(100, (totalBlocksCount / 20) * 100),
          totalSermons: sermons.length,
          totalBlocks: totalBlocksCount
        });
      } catch (e) {
        console.error("DNA Analysis Fail:", e);
      } finally {
        setLoading(false);
      }
    };

    analyzeDNA();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center animate-pulse">
        <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
           {ICON_DNA('w-10 h-10 animate-spin')}
        </div>
        <p className="text-slate-400 font-black uppercase tracking-[0.4em]">Sequenciando Genoma Teológico...</p>
      </div>
    );
  }

  if (stats.totalSermons === 0) {
    return (
      <div className="max-w-5xl mx-auto p-12 bg-white dark:bg-slate-800 rounded-[50px] border-4 border-dashed border-slate-100 dark:border-slate-700 text-center">
         <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full mx-auto mb-6 flex items-center justify-center text-slate-300">
            {ICON_DNA('w-10 h-10')}
         </div>
         <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter italic">Sequenciamento Pendente</h3>
         <p className="text-slate-500 mt-4 max-w-md mx-auto">
            O DNA Ministerial é gerado a partir dos seus projetos no Estúdio Pro. Comece a criar sermões e estudos para ver seu perfil aqui.
         </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in pb-40">
      <div className="bg-indigo-900 p-12 rounded-[60px] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
           <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
              {ICON_DNA('w-16 h-16 text-indigo-300')}
           </div>
           <div className="text-center md:text-left">
              <span className="text-indigo-400 font-black uppercase tracking-[0.5em] text-[10px] mb-2 block">Dabar Analytics • Estilo {stats.style}</span>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-2">DNA Ministerial</h2>
              <p className="text-indigo-200 text-lg bible-text italic">Análise de profundidade baseada em {stats.totalSermons} projetos e {stats.totalBlocks} blocos exegéticos.</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* EIXOS DOUTRINÁRIOS */}
         <div className="bg-white dark:bg-slate-800 p-10 rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col">
            <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
               Eixos Temáticos Dominantes
            </h3>
            <div className="space-y-8 flex-1">
               {stats.topThemes.length > 0 ? stats.topThemes.map(t => (
                 <div key={t.name}>
                    <div className="flex justify-between mb-3">
                       <span className="font-black text-slate-800 dark:text-white uppercase text-xs tracking-tighter italic">{t.name}</span>
                       <span className="text-indigo-600 font-black italic text-xs">{t.count}%</span>
                    </div>
                    <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full transition-all duration-1000" style={{ width: `${t.count}%` }} />
                    </div>
                 </div>
               )) : (
                 <p className="text-slate-400 text-sm italic">Adicione tags aos seus sermões para mapear temas.</p>
               )}
            </div>
            
            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-[30px] border-l-4 border-indigo-500">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Resumo de Estilo</span>
               <p className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase leading-relaxed italic">
                  Sua pregação foca primariamente em <span className="text-indigo-600">"{stats.topThemes[0]?.name || 'Fundamentos'}"</span>.
               </p>
            </div>
         </div>

         {/* FONTES E INTENSIDADE */}
         <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-between">
               <h3 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-10">Laboratório de Fontes</h3>
               <div className="flex flex-wrap gap-4">
                  {stats.topBooks.length > 0 ? stats.topBooks.map(b => (
                    <div key={b.name} className="px-8 py-6 bg-slate-50 dark:bg-slate-900 rounded-[35px] border border-slate-100 dark:border-slate-700 text-center flex-1 min-w-[120px] group hover:border-indigo-400 transition-all">
                       <span className="text-4xl font-black text-indigo-600 italic block group-hover:scale-110 transition-transform">{b.count}</span>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 block">{b.name}</span>
                    </div>
                  )) : (
                    <div className="py-10 text-center w-full text-slate-400 italic text-sm">Projetos sem títulos de livros detectados.</div>
                  )}
               </div>
            </div>

            <div className="bg-slate-950 p-10 rounded-[50px] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">Fator de Profundidade</h3>
                     <span className="text-2xl font-black italic">{Math.round(stats.intensity)}%</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner mb-6">
                     <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${stats.intensity}%` }} />
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed bible-text italic">
                    Esta métrica mede a densidade da sua exegese. Atualmente, seu sequenciamento indica uma inclinação para {stats.intensity > 70 ? 'Estudo Acadêmico Exaustivo' : stats.intensity > 40 ? 'Proclamação Homilética Equilibrada' : 'Esboços de Início Rápido'}.
                  </p>
               </div>
            </div>
         </div>
      </div>
      
      {/* INSIGHT PASTORAL FINAL */}
      <div className="bg-white dark:bg-slate-800 p-12 rounded-[60px] border border-slate-100 dark:border-slate-700 shadow-sm text-center">
         <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.6em]">Projeção de Perfil</span>
            <h4 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
               Você é um <span className="text-indigo-600">Pastor {stats.style === 'Expositivo' ? 'Bíblico-Expositivo' : stats.style === 'Temático' ? 'Arquiteto de Temas' : 'Mestre de Ensino'}</span>
            </h4>
            <p className="text-slate-500 bible-text text-xl italic leading-relaxed">
              "O seu DNA revela um amor pela {stats.topThemes[0]?.name || 'Verdade'}, com base sólida em {stats.topBooks[0]?.name || 'todo o Cânon'}. Continue escavando as profundezas do Dabar."
            </p>
         </div>
      </div>
    </div>
  );
};

export default PastorDNATab;
