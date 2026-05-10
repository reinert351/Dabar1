
import React, { useState } from 'react';
import { UserState, CaptureTarget } from '../types';
import { ICON_MESSAGES, ICON_SERMON } from '../constants';
import { MANANCIAIS_DATA } from '../data/messages_data';
import InjectButton from './InjectButton';

// Funil Único
import { addTextToStudio } from '../core/studioFunnel';

interface MessagesTabProps {
  userState: UserState;
  captureTarget?: CaptureTarget | null;
}

const MessagesTab: React.FC<MessagesTabProps> = ({ userState, captureTarget }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = MANANCIAIS_DATA.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryTheme = (cat: string) => {
    switch(cat) {
      case 'pastoral': return { border: 'border-l-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/10', text: 'text-blue-600', label: 'Pastoral' };
      case 'expository': return { border: 'border-l-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/10', text: 'text-emerald-600', label: 'Expositivo' };
      case 'comfort': return { border: 'border-l-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/10', text: 'text-amber-600', label: 'Consolo' };
      case 'warfare': return { border: 'border-l-rose-600', bg: 'bg-rose-50 dark:bg-rose-900/10', text: 'text-rose-600', label: 'Batalha' };
      default: return { border: 'border-l-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-900/10', text: 'text-indigo-600', label: 'Mensagem' };
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in pb-40 px-2 font-sans">
      {/* HEADER PREMIUM - FONTES REDUZIDAS */}
      <div className="bg-slate-900 p-8 md:p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden border border-white/5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
           <div className="w-16 h-16 md:w-24 md:h-24 bg-indigo-600 rounded-[28px] flex items-center justify-center text-white shadow-2xl shrink-0 rotate-3 transition-transform hover:rotate-0 duration-500">
              {ICON_MESSAGES('w-8 h-8 md:w-12 h-12')}
           </div>
           <div className="text-center md:text-left flex-1">
              <span className="text-indigo-400 font-black uppercase tracking-[0.5em] text-[8px] mb-3 block italic">Mananciais de Vida • Content Repository</span>
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-4">Reflexões & <br/><span className="text-indigo-500">Meditações</span></h2>
              <p className="text-slate-400 max-w-xl text-xs md:text-base leading-relaxed bible-text italic">
                Acervo curado de histórias e exegeses devocionais para inspiração do coração e do púlpito.
              </p>
           </div>
        </div>
      </div>

      {/* BUSCA - ESTILO TITAN */}
      <div className="max-w-4xl mx-auto w-full group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-[30px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-[25px] flex items-center border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="pl-6 text-indigo-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input 
            type="text" 
            placeholder="Filtrar reflexão..."
            className="w-full bg-transparent border-none px-5 py-6 text-lg font-bold text-slate-800 dark:text-white outline-none placeholder:text-slate-300"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* GRID DE CARDS - FONTES RECALIBRADAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map(msg => {
          const theme = getCategoryTheme(msg.category);
          const isSelected = selectedId === msg.id;
          
          return (
            <div 
              key={msg.id} 
              className={`bg-white dark:bg-slate-800 rounded-[50px] border-l-[18px] transition-all duration-500 overflow-hidden flex flex-col group ${theme.border} ${isSelected ? 'shadow-2xl ring-4 ring-indigo-500/10 scale-[1.01]' : 'shadow-md hover:shadow-xl hover:border-l-[25px]'}`}
            >
              <div className="p-8 md:p-10 relative">
                <div className="flex justify-between items-start mb-6">
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${theme.text} ${theme.bg} border border-transparent`}>{theme.label}</span>
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest italic">{msg.baseRef}</span>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight mb-4 group-hover:text-indigo-600 transition-colors">{msg.title}</h3>
                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic mb-8 line-clamp-3">"{msg.summary}"</p>
                
                <button 
                  onClick={() => setSelectedId(isSelected ? null : msg.id)}
                  className={`w-full py-5 rounded-[25px] font-black uppercase text-[10px] tracking-widest transition-all border-2 ${isSelected ? 'bg-slate-950 text-white border-slate-950 shadow-xl' : 'bg-slate-50 dark:bg-slate-950 text-indigo-600 border-transparent hover:bg-indigo-50'}`}
                >
                  {isSelected ? 'Fechar Reflexão' : 'Abrir Manancial'}
                </button>
              </div>

              {isSelected && (
                <div className="px-8 md:px-10 pb-12 space-y-8 animate-in slide-in-from-top-8 duration-500">
                  <div className="flex justify-center gap-4 mb-10">
                     <button
                       onClick={() => {
                         window.dispatchEvent(new CustomEvent('dabar-play-tts', {
                           detail: { title: msg.title, subtitle: 'Série Mananciais', text: msg.content.join(' ') }
                         }));
                       }}
                       className="bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/20 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
                     >
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                       Ouvir Devocional
                     </button>
                  </div>
                  <div className="h-1 w-24 bg-indigo-500 rounded-full mx-auto mb-10 opacity-20"></div>
                  
                  {msg.content.map((p, idx) => (
                    <div key={idx} className="group/p relative bg-slate-50/50 dark:bg-black/20 p-8 rounded-[40px] border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900 transition-all flex flex-col gap-6">
                      <p className="bible-text text-lg md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed italic text-justify font-light">
                        {p}
                      </p>
                      <div className="flex justify-end">
                        <InjectButton 
                          captureTarget={captureTarget} 
                          title={`REFLEXÃO: ${msg.title}`} 
                          content={p}
                          className="p-3 bg-amber-500 text-white rounded-xl shadow-xl transition-all active:scale-90 hover:bg-amber-600"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-10 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-5">
                     <button 
                       onClick={() => addTextToStudio(`[MANANCIAL COMPLETO: ${msg.title}]\n\n${msg.content.join('\n\n')}`)}
                       className="w-full py-7 bg-indigo-600 text-white rounded-[35px] font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 group/btn"
                     >
                        <div className="group-hover/btn:rotate-12 transition-transform text-white">🎯</div>
                        Capturar para o Estúdio Pro
                     </button>
                     <div className="flex items-center justify-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/30"></div>
                        Protocolo de Edificação Dabar
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/30"></div>
                     </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="py-32 text-center bg-white dark:bg-slate-800 rounded-[60px] border-4 border-dashed border-slate-100 dark:border-slate-700">
           <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full mx-auto mb-8 flex items-center justify-center text-slate-200">
              {ICON_MESSAGES('w-10 h-10')}
           </div>
           <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-sm italic">Nenhum Manancial sob este critério.</p>
        </div>
      )}
    </div>
  );
};

export default MessagesTab;
