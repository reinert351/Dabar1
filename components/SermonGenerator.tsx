import React, { useState, useEffect } from 'react';
import { generateSermonWithAI } from '../services/gemini';
import { aiLimitService } from '../services/aiLimitService';
import { UserState, SermonBlock } from '../types';
import { buildOfflineOutline } from '../engine/homiletic/builder';
import { outlineToSermonBlocks } from '../engine/homiletic/toBlocks';
import { Outline } from '../engine/homiletic/types';
import { isPrayerText } from '../engine/detectors/isPrayerText';

interface SermonGeneratorProps {
  isPremium: boolean;
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  onInjectBlocks?: (blocks: SermonBlock[]) => void;
}

const SermonGenerator: React.FC<SermonGeneratorProps> = ({ isPremium, userState, setUserState, onInjectBlocks }) => {
  const [topic, setTopic] = useState('');
  const [mode, setMode] = useState<'sermon' | 'lesson'>('sermon');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [offlineOutline, setOfflineOutline] = useState<Outline | null>(null);
  const [titanStatus, setTitanStatus] = useState<string>('');

  const canUseIA = aiLimitService.canUseFeature('sermon_generator');
  
  // Detector Titan Corrigido: Avalia a primeira referência do cesto como string
  const refAtual = userState.savedForSermons[0] || topic || "";
  const isPrayerDetected = refAtual ? isPrayerText(refAtual) : false;

  useEffect(() => {
    console.log("[ESTUDIO-PRO] Refs atuais no cesto:", userState.savedForSermons);
  }, [userState.savedForSermons]);

  const handleGenerate = async () => {
    if (!canUseIA) {
      alert("IA bloqueada ou limite de uso excedido.");
      return;
    }
    const refsToUse = userState.savedForSermons.length > 0 ? userState.savedForSermons : (topic ? [topic] : []);
    if (refsToUse.length === 0) {
      alert("Por favor, informe um Tema ou selecione versículos no cesto.");
      return;
    }
    if (isLoading) return;
    
    console.log("[ESTUDIO-PRO] Iniciando Geração com IA para tema:", topic || refsToUse[0]);
    setIsLoading(true);
    setOfflineOutline(null);
    try {
      const output = await generateSermonWithAI(topic || refsToUse[0], refsToUse, mode);
      setResult(output || null);
    } catch (error: any) {
      alert(error.message || "Erro na conexão com Dabar AI.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateOffline = async () => {
    if (isLoading) return;
    
    const refsToUse = userState.savedForSermons.length > 0 ? userState.savedForSermons : (topic ? [topic] : []);

    if (refsToUse.length === 0) {
      setTitanStatus("Erro ❌: Sem referências");
      alert("Informe um Tema ou selecione versículos no cesto primeiro.");
      return;
    }

    setTitanStatus("Gerando offline...");
    console.log("REF TITAN:", refAtual);
    console.log("isPrayerDetected:", isPrayerDetected);

    try {
      console.log("[ESTUDIO-PRO] Acionando Motor OFFLINE TITAN...");
      setResult(null);
      
      // 3 & 5) Suporte a motor async e garantia de objeto Outline
      const outline = await buildOfflineOutline(refsToUse, { topic });
      
      if (!outline) {
        throw new Error("O motor Titan retornou um esboço vazio.");
      }
      
      setOfflineOutline(outline);
      setTitanStatus("Outline gerado ✅");
    } catch (err: any) {
      // 4) Catch robusto com alert e status na UI
      console.error("ERRO TITAN:", err);
      const errorMsg = err?.message || String(err);
      setTitanStatus("Erro ❌: " + errorMsg);
      alert("ERRO TITAN: " + errorMsg);
    }
  };

  const handleInjectOffline = () => {
    console.log("INSERT BLOCKS");
    if (offlineOutline && onInjectBlocks) {
      const blocks = outlineToSermonBlocks(offlineOutline);
      
      if (blocks.length === 0) {
        alert("Erro: Nenhum bloco homilético foi gerado.");
        return;
      }
      
      onInjectBlocks(blocks);
      setOfflineOutline(null);
      setTitanStatus('');
      alert("Estrutura injetada no Editor com sucesso.");
    }
  };

  const removeVerse = (ref: string) => {
    setUserState(prev => ({
      ...prev,
      savedForSermons: prev.savedForSermons.filter(r => r !== ref)
    }));
  };

  if (!isPremium) return <div className="p-20 text-center font-bold">Funcionalidade exclusiva Premium.</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden">
        {isPrayerDetected && (
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-8 py-4 rounded-bl-[35px] font-black text-[11px] uppercase tracking-[0.25em] shadow-2xl z-[100] animate-in slide-in-from-right-10 flex items-center gap-3 border-b-2 border-l-2 border-white/30">
            <span className="text-lg">🏛️</span> MODO SEMINÁRIO ATIVADO
          </div>
        )}
        
        <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-8 italic uppercase tracking-tighter">Motor de Geração</h3>
        
        <div className="space-y-6">
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl w-fit border border-slate-200 dark:border-slate-800">
            <button 
              onClick={() => setMode('sermon')}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${mode === 'sermon' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
            >
              Sermão Expositivo
            </button>
            <button 
              onClick={() => setMode('lesson')}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${mode === 'lesson' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
            >
              Aula Temática
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tema ou Título Provável</label>
            <input 
              type="text" 
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="Ex: A Soberania de Deus no Sofrimento"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl px-6 py-4 text-lg font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
            />
          </div>

          <div className="space-y-3">
             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Referências para Análise ({userState.savedForSermons.length})</label>
             <div className="flex flex-wrap gap-2">
                {userState.savedForSermons.map(ref => (
                  <div key={ref} className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 px-4 py-2 rounded-xl flex items-center gap-2 group">
                    <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter">{ref}</span>
                    <button onClick={() => removeVerse(ref)} className="text-slate-400 hover:text-rose-500 transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <button 
              onClick={handleGenerate}
              className={`w-full ${canUseIA ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-200 text-slate-400 cursor-not-allowed'} text-white font-black py-5 rounded-2xl shadow-xl transition-all flex flex-col items-center justify-center italic uppercase tracking-tighter`}
            >
              <span className="text-sm">{isLoading ? "Processando..." : "Gerar com IA"}</span>
            </button>
            <div className="space-y-2">
              <button 
                onClick={handleGenerateOffline}
                className="w-full bg-slate-900 hover:bg-black text-white font-black py-5 rounded-2xl shadow-xl transition-all flex flex-col items-center justify-center italic uppercase tracking-tighter border border-white/10"
              >
                <span className="text-sm">Estilo + Esboço (Offline TITAN)</span>
                {isPrayerDetected && <span className="text-[7px] opacity-60 text-amber-500 tracking-[0.2em]">Oração Bíblica Reconhecida</span>}
              </button>
              {/* 6) Status visual sempre visível se não vazio */}
              {titanStatus && (
                <div className="text-[9px] font-black text-center uppercase tracking-widest text-indigo-500 animate-pulse">
                  {titanStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {offlineOutline && (
        <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[40px] border-2 border-indigo-500/20 animate-in zoom-in-95">
           <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
              <div>
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full border border-indigo-100">
                  {offlineOutline.style === 'prayer_seminary' ? '🏛️ Seminário de Oração Ativado' : `Sugerido: ${offlineOutline.styleName}`}
                </span>
                <h4 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white mt-6 uppercase italic tracking-tighter leading-tight">Big Idea: {offlineOutline.bigIdea}</h4>
              </div>
              <button 
                onClick={handleInjectOffline} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-2xl font-black uppercase text-xs shadow-2xl transition-all active:scale-95"
              >
                Inserir no Editor
              </button>
           </div>
           
           {offlineOutline.style === 'prayer_seminary' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-indigo-100">
                   <p className="text-[10px] font-black text-indigo-500 uppercase mb-3 tracking-widest">Foco Exegético do Clamor</p>
                   <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 italic bible-text">{offlineOutline.prayerExegesis}</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-indigo-100">
                   <p className="text-[10px] font-black text-indigo-500 uppercase mb-3 tracking-widest">Fundamentação no Trono</p>
                   <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 italic bible-text">{offlineOutline.prayerTheology}</p>
                </div>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {offlineOutline.points.map((p, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                     <span className="text-[9px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Tópico 0{i+1}</span>
                     <p className="font-bold text-slate-800 dark:text-white text-base uppercase italic tracking-tighter leading-tight">{p.title}</p>
                  </div>
                ))}
             </div>
           )}
        </div>
      )}

      {result && (
        <div className="bg-white dark:bg-slate-800 p-12 rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-2xl animate-in slide-in-from-bottom-6">
           <div className="prose prose-indigo dark:prose-invert max-w-none bible-text">
              {result.split('\n').map((line, i) => (
                <p key={i} className="mb-2 text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">{line}</p>
              ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default SermonGenerator;