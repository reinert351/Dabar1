
import React, { useState } from 'react';
import { Verse } from '../types';

interface HermeneuticsLabProps {
  verses: Verse[];
  onClose: () => void;
  onComplete: (analysis: string) => void;
}

const HermeneuticsLab: React.FC<HermeneuticsLabProps> = ({ verses, onClose, onComplete }) => {
  const [steps, setSteps] = useState({
    literary: '',
    lexical: '',
    geography: '',
    covenants: ''
  });

  const generateFinal = () => {
    const text = `ANÁLISE TITAN - MÉTODO GRAMÁTICO-HISTÓRICO\n\n` +
                 `1. CONTEXTO LITERÁRIO: ${steps.literary}\n\n` +
                 `2. ANÁLISE LÉXICA/VERBOS: ${steps.lexical}\n\n` +
                 `3. GEOGRAFIA E AMBIENTE: ${steps.geography}\n\n` +
                 `4. PARALELOS DE ALIANÇA: ${steps.covenants}`;
    onComplete(text);
  };

  return (
    <div className="fixed inset-0 z-[110] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[40px] shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-indigo-600 mb-8">Laboratório Hermenêutico</h2>
        
        <div className="space-y-6">
          <LabStep 
            title="1. Contexto Literário" 
            desc="O que vem antes e depois? Qual o gênero?" 
            value={steps.literary} 
            onChange={v => setSteps({...steps, literary: v})} 
          />
          <LabStep 
            title="2. Análise Léxica" 
            desc="Verbos principais e palavras-chave no original." 
            value={steps.lexical} 
            onChange={v => setSteps({...steps, lexical: v})} 
          />
          <LabStep 
            title="3. Geografia do Evento" 
            desc="Onde ocorre? Qual o impacto do relevo/clima?" 
            value={steps.geography} 
            onChange={v => setSteps({...steps, geography: v})} 
          />
          <LabStep 
            title="4. Malha de Alianças" 
            desc="Como este texto se conecta aos pactos bíblicos?" 
            value={steps.covenants} 
            onChange={v => setSteps({...steps, covenants: v})} 
          />
        </div>

        <div className="flex gap-4 mt-10">
          <button onClick={onClose} className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-black uppercase text-[10px]">Cancelar</button>
          <button onClick={generateFinal} className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] shadow-lg">Finalizar Análise</button>
        </div>
      </div>
    </div>
  );
};

interface LabStepProps {
  title: string;
  desc: string;
  value: string;
  onChange: (v: string) => void;
}

const LabStep = ({ title, desc, value, onChange }: LabStepProps) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">{title}</label>
    <p className="text-[9px] text-slate-400 uppercase mb-2">{desc}</p>
    <textarea 
      className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl p-4 text-sm outline-none focus:border-indigo-500 dark:text-white"
      rows={3}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Escreva suas conclusões..."
    />
  </div>
);

export default HermeneuticsLab;
