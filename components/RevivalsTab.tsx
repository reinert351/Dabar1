import React from 'react';
import { revivalsData, finalRevelation, RevivalEvent } from '../data/revivals_data';
import InjectButton from './InjectButton';
import { CaptureTarget, Sermon } from '../types';
import { saveSermon } from '../services/database';
import { ICON_SERMON, ICON_STUDY, ICON_REVIVAL } from '../constants';

interface RevivalsTabProps {
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
  green: "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400",
  yellow: "border-yellow-500 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  cyan: "border-cyan-500 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  violet: "border-violet-500 bg-violet-500/10 text-violet-700 dark:text-violet-400",
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
  green: "border-green-500",
  yellow: "border-yellow-500",
  cyan: "border-cyan-500",
  violet: "border-violet-500",
};

export default function RevivalsTab({ captureTarget }: RevivalsTabProps) {
  const formatForStudio = (event: any) => {
    let text = `🔥 AVIVAMENTO: ${event.title} (${event.period})\n`;
    if (event.scripture) text += `📖 Base Bíblica: ${event.scripture}\n`;
    if (event.context) text += `🧠 Contexto: ${event.context}\n`;
    if (event.description) text += `📜 Descrição: ${event.description}\n`;
    if (event.actions?.length) text += `⚡ Ações: ${event.actions.join(', ')}\n`;
    if (event.leaders?.length) text += `👤 Líderes: ${event.leaders.join(', ')}\n`;
    if (event.marks?.length) text += `✨ Marcas: ${event.marks.join(', ')}\n`;
    if (event.criticalPoint) text += `⚠️ Ponto Crítico: ${event.criticalPoint}\n`;
    if (event.insight) text += `💡 Insight: ${event.insight}\n`;
    return text;
  };

  const createProject = async (event: RevivalEvent, type: 'sermon' | 'lesson') => {
    const newSermon: Sermon = {
      id: `revival_proj_${Date.now()}`,
      title: type === 'sermon' ? `Sermão: O Avivamento de ${event.title}` : `Aula: O Avivamento de ${event.title}`,
      type: type === 'sermon' ? 'expository' : 'bible-class',
      date: new Date().toISOString(),
      tags: ['Avivamento', event.title, 'História'],
      status: 'draft',
      version: 1,
      folder: type === 'sermon' ? 'Sermões Históricos' : 'História da Igreja',
      blocks: type === 'sermon' ? [
        { id: 'b1', type: 'context', title: 'Contexto Histórico', content: event.context || '' },
        { id: 'b2', type: 'text-base', title: 'Texto Base', content: event.scripture || '' },
        { id: 'b3', type: 'point', title: 'O Mover de Deus', content: event.description || '' },
        { id: 'b4', type: 'point', title: 'Marcas do Avivamento', content: (event.marks || []).join('\n') },
        { id: 'b5', type: 'application', title: 'Aplicação Hoje', content: event.insight || event.criticalPoint || '' }
      ] : [
        { id: 'b1', type: 'chronology', title: 'Período', content: event.period },
        { id: 'b2', type: 'point', title: 'Ações e Líderes', content: `Líderes: ${(event.leaders || []).join(', ')}\n\nAções:\n${(event.actions || []).join('\n')}` },
        { id: 'b3', type: 'exegesis', title: 'Análise do Avivamento', content: event.description || '' },
        { id: 'b4', type: 'student-questions', title: 'Questões para Classe', content: `1. Quais foram as principais marcas deste avivamento?\n2. Como podemos aplicar os princípios de ${event.title} hoje?` }
      ]
    };

    await saveSermon(newSermon);
    alert(`${type === 'sermon' ? 'Sermão' : 'Aula'} sobre ${event.title} criado no Estúdio!`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-lg bg-orange-500 flex items-center justify-center text-white">
            {ICON_REVIVAL("w-8 h-8 md:w-10 md:h-10")}
          </div>
          Chamas da História
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Uma jornada através dos maiores avivamentos registrados na Bíblia e na História da Igreja.
        </p>
      </div>

      {revivalsData.map((category) => (
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
                    title={`Avivamento: ${event.title}`} 
                    content={formatForStudio(event)} 
                    className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  />
                </div>

                <div className="pr-12 flex items-start gap-4">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-sm hidden sm:flex border ${colorMap[event.color] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {ICON_REVIVAL("w-8 h-8 md:w-10 md:h-10")}
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

                  {event.actions && event.actions.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Ações</h4>
                      <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                        {event.actions.map((action, i) => <li key={i}>{action}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {event.leaders && event.leaders.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Líderes</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.leaders.map((leader, i) => (
                            <span key={i} className={`text-xs px-2 py-1 rounded-md font-medium ${colorMap[event.color] || 'bg-slate-100 text-slate-700'}`}>
                              {leader}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {event.marks && event.marks.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Marcas</h4>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                          {event.marks.map((mark, i) => <li key={i} className="flex items-start gap-1"><span className="text-amber-500">⚡</span> {mark}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {event.criticalPoint && (
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-1 flex items-center gap-1">
                        ⚠️ Ponto Crítico
                      </h4>
                      <p className="text-sm text-red-800 dark:text-red-300">{event.criticalPoint}</p>
                    </div>
                  )}

                  {event.insight && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1">
                        💡 Insight
                      </h4>
                      <p className="text-sm text-blue-800 dark:text-blue-300">{event.insight}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={() => createProject(event, 'sermon')} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-md">
                       {ICON_SERMON('w-4 h-4')} Criar Sermão
                    </button>
                    <button onClick={() => createProject(event, 'lesson')} className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-2 shadow-md">
                       {ICON_STUDY('w-4 h-4')} Criar Aula
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <InjectButton 
            captureTarget={captureTarget} 
            title="Padrão dos Avivamentos" 
            content={`🧠 PADRÃO FINAL:\n${finalRevelation.summary.join(', ')}\n\n🔥 REVELAÇÃO FINAL:\n${finalRevelation.throneLevel.join('\n')}`} 
            className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <span>🔥</span> Padrão Final (Resumo Absoluto)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-amber-100 mb-3 uppercase tracking-wider">Todos têm:</h3>
              <ul className="space-y-2 text-lg font-medium">
                {finalRevelation.summary.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold text-amber-100 mb-3 uppercase tracking-wider">Revelação Nível Trono:</h3>
              <div className="space-y-4 text-lg">
                {finalRevelation.throneLevel.map((item, i) => (
                  <p key={i} className="font-medium leading-relaxed">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
