import React from 'react';
import { councilsData, propheticVision, heresiesMap, finalInsight, CouncilEvent } from '../data/councils_data';
import InjectButton from './InjectButton';
import { CaptureTarget, Sermon } from '../types';
import { saveSermon } from '../services/database';
import { ICON_SERMON, ICON_STUDY } from '../constants';

interface CouncilsTabProps {
  captureTarget: CaptureTarget | null;
}

const colorMap: Record<string, string> = {
  amber: "border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  blue: "border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-400",
  emerald: "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  purple: "border-purple-500 bg-purple-500/10 text-purple-700 dark:text-purple-400",
  rose: "border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-400",
  sky: "border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-400",
  orange: "border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-400",
  red: "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400",
  indigo: "border-indigo-500 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400",
  stone: "border-stone-500 bg-stone-500/10 text-stone-700 dark:text-stone-400",
  zinc: "border-zinc-500 bg-zinc-500/10 text-zinc-700 dark:text-zinc-400",
};

const borderMap: Record<string, string> = {
  amber: "border-amber-500",
  blue: "border-blue-500",
  emerald: "border-emerald-500",
  purple: "border-purple-500",
  rose: "border-rose-500",
  sky: "border-sky-500",
  orange: "border-orange-500",
  red: "border-red-500",
  indigo: "border-indigo-500",
  stone: "border-stone-500",
  zinc: "border-zinc-500",
};

export default function CouncilsTab({ captureTarget }: CouncilsTabProps) {
  const formatForStudio = (event: any) => {
    let text = `🏛️ CONCÍLIO: ${event.title} (${event.period})\n`;
    if (event.scripture) text += `📖 Base Bíblica: ${event.scripture}\n`;
    if (event.context) text += `🧠 Contexto: ${event.context}\n`;
    if (event.heresy) text += `⚔️ Heresia Combatida: ${event.heresy}\n`;
    if (event.response) text += `🔥 Resposta Ortodoxa: ${event.response}\n`;
    if (event.decision) text += `⚖️ Decisão: ${event.decision}\n`;
    if (event.throneRevelation) text += `👑 Revelação Trono: ${event.throneRevelation}\n`;
    if (event.warning) text += `⚠️ Alerta: ${event.warning}\n`;
    return text;
  };

  const createProject = async (event: CouncilEvent, type: 'sermon' | 'lesson') => {
    const newSermon: Sermon = {
      id: `council_proj_${Date.now()}`,
      title: type === 'sermon' ? `Sermão: O Concílio de ${event.title}` : `Aula: O Concílio de ${event.title}`,
      type: type === 'sermon' ? 'expository' : 'bible-class',
      date: new Date().toISOString(),
      tags: ['Concílio', event.title, 'História da Igreja', 'Teologia'],
      status: 'draft',
      version: 1,
      folder: type === 'sermon' ? 'Sermões Históricos' : 'História da Igreja',
      blocks: type === 'sermon' ? [
        { id: 'b1', type: 'context', title: 'Contexto Histórico', content: event.context || '' },
        { id: 'b2', type: 'text-base', title: 'Texto Base', content: event.scripture || '' },
        { id: 'b3', type: 'point', title: 'A Heresia Combatida', content: event.heresy || '' },
        { id: 'b4', type: 'point', title: 'A Resposta Ortodoxa', content: event.response || '' },
        { id: 'b5', type: 'application', title: 'Aplicação Hoje', content: event.throneRevelation || event.warning || '' }
      ] : [
        { id: 'b1', type: 'chronology', title: 'Período', content: event.period },
        { id: 'b2', type: 'point', title: 'O Problema Teológico', content: event.heresy || '' },
        { id: 'b3', type: 'exegesis', title: 'A Decisão do Concílio', content: `${event.response}\n\nDecisão: ${event.decision}` },
        { id: 'b4', type: 'student-questions', title: 'Questões para Classe', content: `1. Qual era o perigo da heresia combatida em ${event.title}?\n2. Como a decisão deste concílio afeta nossa fé hoje?` }
      ]
    };

    await saveSermon(newSermon);
    alert(`${type === 'sermon' ? 'Sermão' : 'Aula'} sobre ${event.title} criado no Estúdio!`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-lg flex items-center justify-center text-3xl md:text-4xl bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800">
            ⚖️
          </div>
          A Batalha pela Verdade
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Uma jornada através dos grandes Concílios da História da Igreja, onde a ortodoxia cristã foi forjada no fogo da controvérsia.
        </p>
      </div>

      {councilsData.map((category) => (
        <section key={category.id} className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.events.map((event) => (
              <div 
                key={event.id} 
                className={`relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border-l-4 ${borderMap[event.color] || 'border-slate-500'} transition-all hover:shadow-md`}
              >
                <div className="absolute top-4 right-4">
                  <InjectButton 
                    captureTarget={captureTarget} 
                    title={`Concílio: ${event.title}`} 
                    content={formatForStudio(event)} 
                    className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  />
                </div>

                <div className="pr-12 flex items-start gap-4">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-sm hidden sm:flex items-center justify-center text-3xl ${colorMap[event.color] || 'bg-slate-100 dark:bg-slate-800'}`}>
                    {event.icon || '⚖️'}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {event.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {event.period} {event.scripture && `• ${event.scripture}`}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {event.context && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Contexto</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{event.context}</p>
                    </div>
                  )}

                  {event.heresy && (
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
                        ⚔️ Heresia
                      </h4>
                      <p className="text-sm text-red-800 dark:text-red-300">{event.heresy}</p>
                    </div>
                  )}

                  {event.response && (
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1">
                        🔥 Resposta Ortodoxa
                      </h4>
                      <p className="text-sm text-emerald-800 dark:text-emerald-300">{event.response}</p>
                    </div>
                  )}
                  
                  {event.decision && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Decisão</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">{event.decision}</p>
                    </div>
                  )}

                  {event.throneRevelation && (
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1">
                        👑 Revelação Trono
                      </h4>
                      <p className="text-sm text-indigo-800 dark:text-indigo-300">{event.throneRevelation}</p>
                    </div>
                  )}
                  
                  {event.warning && (
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1">
                        ⚠️ Alerta
                      </h4>
                      <p className="text-sm text-amber-800 dark:text-amber-300">{event.warning}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={() => createProject(event, 'sermon')} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-md">
                       {ICON_SERMON('w-4 h-4')} Criar Sermão
                    </button>
                    <button onClick={() => createProject(event, 'lesson')} className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-2 shadow-md">
                       {ICON_STUDY('w-4 h-4')} Criar Aula
                    </button>
                    <button 
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('dabar-play-tts', {
                          detail: { title: event.title, subtitle: 'Concílios', text: formatForStudio(event) }
                        }));
                      }}
                      className="flex-1 bg-amber-500 text-slate-900 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Ouvir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <section className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
           <div className="absolute top-4 right-4 z-10">
            <InjectButton 
              captureTarget={captureTarget} 
              title="Mapa das Heresias" 
              content={`⚔️ MAPA DAS HERESIAS:\n${heresiesMap.map(h => `${h.attack} ➡️ ${h.response}`).join('\n')}`} 
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
            />
          </div>
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span>🗺️</span> Mapa das Heresias (Nível Dabar)
          </h2>
          <div className="space-y-3">
            {heresiesMap.map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <span className="text-red-400 font-medium text-sm">{item.attack}</span>
                <span className="text-slate-400">→</span>
                <span className="text-emerald-400 font-bold text-sm">{item.response}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <InjectButton 
              captureTarget={captureTarget} 
              title="Visão Profética dos Concílios" 
              content={`👁️ VISÃO PROFÉTICA:\n${propheticVision.deepConnection.join('\n')}\n\n🔥 REVELAÇÃO CENTRAL (3 CICLOS):\n${propheticVision.centralRevelation.join('\n')}`} 
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
            />
          </div>
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <span>👁️</span> {propheticVision.title}
          </h2>
          <div className="space-y-6">
            <div>
               <h3 className="text-sm font-bold text-indigo-300 mb-2 uppercase tracking-wider">Ligação Profunda</h3>
               <ul className="space-y-2 text-sm font-medium text-indigo-100">
                  {propheticVision.deepConnection.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">📖</span>
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
               <h3 className="text-sm font-bold text-purple-300 mb-2 uppercase tracking-wider">Revelação Central (3 Ciclos)</h3>
               <ul className="space-y-2 text-sm font-medium text-purple-100">
                  {propheticVision.centralRevelation.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
               </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8 bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden text-center">
         <div className="absolute top-4 right-4 z-10">
            <InjectButton 
              captureTarget={captureTarget} 
              title="Insight Final (Nível Trono)" 
              content={`👑 INSIGHT FINAL:\n${finalInsight.content.join('\n')}`} 
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
            />
          </div>
        <h2 className="text-3xl font-black mb-6">
          {finalInsight.title}
        </h2>
        <div className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto space-y-4">
          {finalInsight.content.map((line, i) => (
            <p key={i} className={i === finalInsight.content.length - 1 ? "font-black text-rose-200 mt-6 text-3xl italic" : ""}>
              {line}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
