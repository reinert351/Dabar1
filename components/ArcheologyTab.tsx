import React from 'react';
import { archeologyData, ArcheologyItem } from '../data/archeology_data';
import InjectButton from './InjectButton';
import { CaptureTarget, Sermon } from '../types';
import { saveSermon } from '../services/database';
import { ICON_SERMON, ICON_STUDY } from '../constants';

interface ArcheologyTabProps {
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
  slate: "border-slate-500 bg-slate-500/10 text-slate-700 dark:text-slate-400",
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
  slate: "border-slate-500",
};

export default function ArcheologyTab({ captureTarget }: ArcheologyTabProps) {
  const formatForStudio = (item: ArcheologyItem) => {
    let text = `🏺 ARQUEOLOGIA BÍBLICA: ${item.title}\n`;
    if (item.period) text += `⏳ Período: ${item.period}\n`;
    if (item.location) text += `📍 Local: ${item.location} (Descoberto em ${item.discoveryYear})\n`;
    if (item.description) text += `📜 Descrição: ${item.description}\n`;
    if (item.biblicalRelevance) text += `📖 Relevância Bíblica: ${item.biblicalRelevance}\n`;
    if (item.details?.length) text += `🔍 Detalhes da Descoberta:\n- ${item.details.join('\n- ')}\n`;
    if (item.throneRevelation) text += `👑 Revelação Trono: ${item.throneRevelation}\n`;
    return text;
  };

  const createProject = async (item: ArcheologyItem, type: 'sermon' | 'lesson') => {
    const newSermon: Sermon = {
      id: `archeology_proj_${Date.now()}`,
      title: type === 'sermon' ? `Sermão: As Pedras Clamam - ${item.title}` : `Aula: Arqueologia Bíblica - ${item.title}`,
      type: type === 'sermon' ? 'expository' : 'bible-class',
      date: new Date().toISOString(),
      tags: ['Arqueologia', 'História Bíblica', 'Apologética'],
      status: 'draft',
      version: 1,
      folder: type === 'sermon' ? 'Sermões Apologéticos' : 'Arqueologia',
      blocks: type === 'sermon' ? [
        { id: 'b1', type: 'context', title: 'Contexto Histórico', content: `${item.period} - ${item.location}` },
        { id: 'b2', type: 'text-base', title: 'A Descoberta', content: item.description || '' },
        { id: 'b3', type: 'point', title: 'A Confirmação Bíblica', content: item.biblicalRelevance || '' },
        { id: 'b4', type: 'point', title: 'Detalhes Fascinantes', content: (item.details || []).join('\n') },
        { id: 'b5', type: 'application', title: 'Revelação Profunda', content: item.throneRevelation || '' }
      ] : [
        { id: 'b1', type: 'chronology', title: 'Dados da Descoberta', content: `Ano: ${item.discoveryYear}\nLocal: ${item.location}\nPeríodo: ${item.period}` },
        { id: 'b2', type: 'point', title: 'O Achado Arqueológico', content: `${item.description}\n\n${(item.details || []).join('\n')}` },
        { id: 'b3', type: 'exegesis', title: 'Relevância para a Fé', content: item.biblicalRelevance || '' },
        { id: 'b4', type: 'student-questions', title: 'Questões para Classe', content: `1. Como a descoberta de ${item.title} fortalece a nossa confiança na Bíblia?\n2. O que a arqueologia nos ensina sobre a precisão histórica das Escrituras?` }
      ]
    };

    await saveSermon(newSermon);
    alert(`${type === 'sermon' ? 'Sermão' : 'Aula'} sobre ${item.title} criado no Estúdio!`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl shadow-lg flex items-center justify-center text-3xl md:text-4xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">🏛️</div>
          Arqueologia Bíblica
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Quando as pedras clamam. Descubra as evidências históricas que comprovam a precisão e a veracidade das Escrituras Sagradas.
        </p>
      </div>

      {archeologyData.map((category) => (
        <section key={category.id} className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <div 
                key={item.id} 
                className={`relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border-l-4 ${borderMap[item.color] || 'border-slate-500'} transition-all hover:shadow-md`}
              >
                <div className="absolute top-4 right-4">
                  <InjectButton 
                    captureTarget={captureTarget} 
                    title={`Descoberta: ${item.title}`} 
                    content={formatForStudio(item)} 
                    className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  />
                </div>

                <div className="pr-12 flex items-start gap-4">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-sm hidden sm:flex items-center justify-center text-3xl ${colorMap[item.color] || 'bg-slate-100 dark:bg-slate-800'}`}>🏺</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {item.period} • {item.location} ({item.discoveryYear})
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {item.description && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">A Descoberta</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
                    </div>
                  )}

                  {item.biblicalRelevance && (
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1">
                        📖 Relevância Bíblica
                      </h4>
                      <p className="text-sm text-emerald-800 dark:text-emerald-300">{item.biblicalRelevance}</p>
                    </div>
                  )}

                  {item.details && item.details.length > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
                        🔍 Detalhes Fascinantes
                      </h4>
                      <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
                        {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                      </ul>
                    </div>
                  )}

                  {item.throneRevelation && (
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1">
                        👑 Revelação Trono
                      </h4>
                      <p className="text-sm text-indigo-800 dark:text-indigo-300">{item.throneRevelation}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <button onClick={() => createProject(item, 'sermon')} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-md">
                       {ICON_SERMON('w-4 h-4')} Criar Sermão
                    </button>
                    <button onClick={() => createProject(item, 'lesson')} className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all flex items-center justify-center gap-2 shadow-md">
                       {ICON_STUDY('w-4 h-4')} Criar Aula
                    </button>
                    <button 
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('dabar-play-tts', {
                          detail: { title: item.title, subtitle: 'Arqueologia', text: formatForStudio(item) }
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
    </div>
  );
}
