
import React, { useState } from 'react';
import { UserState, SermonBlock, Sermon, CaptureTarget } from '../types';
import { ICON_SERMON, ICON_BIBLE, ICON_STRONG, ICON_CHRONOLOGY, ICON_DIFFERENTIALS, ICON_STUDY, ICON_TYPOLOGY, ICON_TABERNACLE } from '../constants';
import { getSermons, saveSermon } from '../services/database';
import InjectButton from './InjectButton';

// Funil Único
import { addTextToStudio, addRefsToStudio } from '../core/studioFunnel';

interface TabernacleTabProps {
  userState: UserState;
  setUserState: any;
  captureTarget?: CaptureTarget | null;
}

const TabernacleTab: React.FC<TabernacleTabProps> = ({ userState, setUserState, captureTarget }) => {
  const [activeSector, setActiveSector] = useState<'architecture' | 'deepStudy' | 'armor' | 'feasts' | 'genealogy' | 'churchEras' | 'mounts'>('architecture');

  const toggleSermon = (ref: string) => {
    addRefsToStudio([ref]);
  };

  const handleInject = (title: string, content: string) => {
    addTextToStudio(`[TABERNÁCULO — ${title}]\n${content}`);
  };

  const sendToStudio = async (title: string, content: string) => {
    try {
      const sermons = await getSermons();
      let target = sermons.find(s => s.status === 'draft') || (sermons.length > 0 ? sermons[0] : null);
      if (!target) {
        target = {
          id: `sermon_${Date.now()}`,
          title: "Análise Titan: " + title,
          type: 'theological-study',
          date: new Date().toISOString(),
          tags: ['Dabar Deep Study', 'Exegese'],
          blocks: [],
          status: 'draft',
          version: 1,
          folder: 'Academia Dabar'
        };
        await saveSermon(target);
      }
      const newBlock: SermonBlock = {
        id: `block_${Date.now()}_${Math.random()}`,
        type: 'point',
        title: title,
        content: content
      };
      await saveSermon({ ...target, blocks: [...target.blocks, newBlock], date: new Date().toISOString() });
      alert(`Dados exaustivos anexados ao Estúdio.`);
    } catch (error) {
      alert("Erro no motor de dados.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-2 md:py-6 animate-in fade-in pb-40 px-2">
      <div className="bg-slate-950 p-6 md:p-14 rounded-[30px] md:rounded-[60px] text-white shadow-2xl relative overflow-hidden mb-6 border border-indigo-500/20">
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"></div>
         <div className="relative z-10">
            <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block italic">Protocolo Titan • Integridade Exegética</span>
            <h2 className="text-xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 leading-none">Cânon <br/><span className="text-indigo-400">Estrutural Completo</span></h2>
            <p className="text-slate-400 max-w-3xl text-sm md:text-lg leading-relaxed bible-text italic text-justify">
               Dataset restaurado com 30 pilares, 6 defesas, 7 festas e 7 eras. Sem simplificações ou omissões de contexto.
            </p>
         </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-8">
         <SectorBtn active={activeSector === 'architecture'} onClick={() => setActiveSector('architecture')} label="Eixos" />
         <SectorBtn active={activeSector === 'deepStudy'} onClick={() => setActiveSector('deepStudy')} label="30 Pilares" />
         <SectorBtn active={activeSector === 'armor'} onClick={() => setActiveSector('armor')} label="🛡️ Armadura" />
         <SectorBtn active={activeSector === 'feasts'} onClick={() => setActiveSector('feasts')} label="🌾 Festas" />
         <SectorBtn active={activeSector === 'genealogy'} onClick={() => setActiveSector('genealogy')} label="🧬 Semente" />
         <SectorBtn active={activeSector === 'churchEras'} onClick={() => setActiveSector('churchEras')} label="⛪ Eras" />
         <SectorBtn active={activeSector === 'mounts'} onClick={() => setActiveSector('mounts')} label="⛰️ Montes" />
      </div>

      <div className="animate-in slide-in-from-bottom-4">
         {activeSector === 'architecture' && <ArchitectureSection captureTarget={captureTarget} onInject={handleInject} />}
         {activeSector === 'deepStudy' && <DeepStudySection sendToStudio={sendToStudio} toggleSermon={toggleSermon} userState={userState} captureTarget={captureTarget} onInject={handleInject} />}
         {activeSector === 'armor' && <ArmorSection sendToStudio={sendToStudio} captureTarget={captureTarget} onInject={handleInject} />}
         {activeSector === 'feasts' && <FeastsSection sendToStudio={sendToStudio} captureTarget={captureTarget} onInject={handleInject} />}
         {activeSector === 'genealogy' && <GenealogySection captureTarget={captureTarget} onInject={handleInject} />}
         {activeSector === 'churchEras' && <ChurchErasSection sendToStudio={sendToStudio} captureTarget={captureTarget} onInject={handleInject} />}
         {activeSector === 'mounts' && <MountsSection sendToStudio={sendToStudio} captureTarget={captureTarget} onInject={handleInject} />}
      </div>
    </div>
  );
};

const SectorBtn = ({ active, onClick, label }: any) => (
  <button onClick={onClick} className={`px-4 py-2 md:px-6 md:py-3 rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-800 text-slate-400 border border-slate-100 dark:border-slate-700'}`}>{label}</button>
);

const ArchitectureSection = ({ captureTarget, onInject }: any) => (
  <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
    <InjectButton 
      captureTarget={captureTarget} 
      title="TABERNÁCULO — Geometria" 
      content="O Tabernáculo foi um print físico de uma realidade celestial. Moisés recebeu o padrão no Sinai (Ex 25:40)." 
    />
    <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-indigo-600 mb-6 border-b pb-4">Geometria da Santidade</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-4">
        <h4 className="text-lg md:text-2xl font-black text-slate-800 dark:text-white italic uppercase tracking-tight">O Modelo do Monte</h4>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify bible-text">O Tabernáculo não surgiu da imaginação nômade, mas foi um "print" físico de uma realidade celestial. Moisés recebeu o padrão exato no Sinai (Ex 25:40), indicando que a adoração terrena deve ser um espelho da liturgia eterna. Cada material — ouro, prata, bronze, linho e peles — atua como um bit de informação em um sistema de armazenamento de dados proféticos. Ouro representa divindade e realeza; prata, o resgate jurídico; bronze, o juízo sobre o pecado.</p>
      </div>
      <div className="bg-slate-50 dark:bg-slate-900 p-6 md:p-10 rounded-3xl border border-indigo-100 dark:border-indigo-900 shadow-inner">
        <h4 className="text-base md:text-xl font-black text-indigo-500 mb-4 italic uppercase">Criptografia dos Metais</h4>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify bible-text">A gradação dos metais do pátio para o Santíssimo revela a escala da santidade. No pátio externo (Átrio), o Bronze domina — metal que suporta o fogo, simbolizando o julgamento necessário. Ao entrar no Lugar Santo, o Bronze desaparece e o Ouro assume, indicando que na intimidade com Deus, o juízo foi substituído pela glória. A Prata, metal do resgate, serve de base para as tábuas, ensinando que a habitação de Deus repousa sobre o preço pago pela redenção.</p>
      </div>
    </div>
  </div>
);

const DeepStudySection: React.FC<{ sendToStudio: any, toggleSermon: any, userState: UserState, captureTarget: any, onInject: any }> = ({ sendToStudio, toggleSermon, userState, captureTarget, onInject }) => {
  const [activeTrail, setActiveTrail] = useState<number>(1);
  const trails = [
    { id: 1, label: 'Fundação', icon: '🏛️', range: [1, 2, 3, 11, 13, 27, 28] },
    { id: 2, label: 'Lugar Santo', icon: '🔥', range: [4, 5, 6, 20, 26, 29] },
    { id: 3, label: 'Santíssimo', icon: '👑', range: [7, 8, 9, 10, 30] },
    { id: 4, label: 'Estrutura', icon: '🛡️', range: [12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25] }
  ];
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-1.5">
        {trails.map(t => (
          <button key={t.id} onClick={() => setActiveTrail(t.id)} className={`px-4 py-2 md:px-8 md:py-3 rounded-xl border-2 transition-all flex items-center gap-2 ${activeTrail === t.id ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg' : 'bg-white dark:bg-slate-800 text-slate-400'}`}>
            <span className="text-xl">{t.icon}</span>
            <span className="text-[9px] font-black uppercase tracking-widest">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6">
        {TABERNACLE_PILARS_TITAN.filter(p => trails.find(t => t.id === activeTrail)?.range.includes(p.id)).map(p => (
          <div key={p.id} className="bg-white dark:bg-slate-800 rounded-[30px] md:rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-sm p-6 md:p-12 flex flex-col md:flex-row gap-8 hover:border-indigo-300 transition-all relative overflow-hidden">
            <InjectButton 
              captureTarget={captureTarget} 
              title={`TABERNÁCULO — ${p.title}`} 
              content={`${p.idea}: ${p.application}`} 
            />
            <div className="md:w-32 shrink-0 flex flex-row md:flex-col items-center justify-between md:justify-start">
               <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl md:rounded-3xl flex items-center justify-center text-indigo-600 font-black italic text-2xl md:text-4xl shadow-sm">{p.id}</div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0 md:mt-6 text-center">{p.base}</span>
            </div>
            <div className="flex-1 space-y-6">
              <h4 className="text-xl md:text-4xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-tight">{p.title}</h4>
              <p className="text-base md:text-xl font-bold text-indigo-600 uppercase border-b pb-4 tracking-tight">{p.idea}</p>
              <div className="space-y-6">
                 {p.layers.map((l, i) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                     <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-justify bible-text">{l}</p>
                   </div>
                 ))}
              </div>
              <div className="p-6 md:p-10 bg-slate-50 dark:bg-slate-900 rounded-[30px] md:rounded-[40px] border border-indigo-100 dark:border-indigo-800 shadow-inner">
                <span className="text-[10px] font-black text-indigo-600 uppercase block mb-3 tracking-widest">Aplicação Homilética Titan</span>
                <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 italic bible-text font-medium leading-relaxed">"{p.application}"</p>
              </div>
              <div className="flex gap-3">
                 <button onClick={() => sendToStudio(p.title, `TEMA: ${p.title}\nIDÉIA: ${p.idea}\n\nEXEGESE:\n${p.layers.join('\n\n')}\n\nAPLICAÇÃO: ${p.application}`)} className="flex-1 py-4 md:py-7 bg-indigo-600 text-white rounded-2xl md:rounded-[35px] font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-indigo-700 transition-all shadow-xl">Anexar ao Estúdio</button>
                 <button onClick={() => toggleSermon(p.base)} className={`px-6 py-4 md:px-10 md:py-7 rounded-2xl md:rounded-[35px] border-2 transition-all ${userState.savedForSermons.includes(p.base) ? 'bg-amber-500 border-amber-500 text-white shadow-lg' : 'text-slate-300 border-slate-100 dark:border-slate-700'}`}>{ICON_BIBLE('w-6 h-6 md:w-8 h-8')}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArmorSection = ({ sendToStudio, captureTarget, onInject }: any) => (
  <div className="space-y-10">
    <div className="bg-slate-900 p-8 md:p-14 rounded-[40px] md:rounded-[70px] text-white border-l-[15px] md:border-l-[25px] border-indigo-600 shadow-2xl relative overflow-hidden">
       <InjectButton 
         captureTarget={captureTarget} 
         title="TABERNÁCULO — Armadura" 
         content="Cada peça da armadura de Efésios 6 não é decorativa, mas uma exigência tática para sobrevivência." 
       />
       <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 md:mb-8 text-indigo-400">Engenharia do Combate Espiritual</h3>
       <p className="text-slate-300 bible-text text-base md:text-2xl leading-relaxed italic text-justify">Cada peça da armadura de Efésios 6 não é decorativa, mas uma exigência tática para a sobrevivência do crente. A ausência de uma única parte compromete a integridade de todo o sistema defensivo.</p>
    </div>
    <div className="grid grid-cols-1 gap-8">
       {ARMOR_DATA_TITAN_MAX.map(item => (
         <div key={item.id} className="bg-white dark:bg-slate-800 p-8 md:p-14 rounded-[40px] md:rounded-[70px] border border-slate-100 dark:border-slate-700 shadow-sm hover:border-indigo-300 transition-all group relative overflow-hidden">
            <InjectButton 
              captureTarget={captureTarget} 
              title={`DEFESA — ${item.title}`} 
              content={`${item.exegesis}\nAPLICAÇÃO: ${item.pastoral}`} 
            />
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
               <div><span className="text-[12px] font-black text-indigo-500 uppercase tracking-widest block mb-4">Defesa #{item.id}</span><h4 className="text-3xl md:text-6xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-none">{item.title}</h4></div>
               <div className="text-right"><span className="text-2xl font-black text-slate-300 uppercase block italic tracking-widest">v. {item.ref.split(' ')[1]}</span><span className="text-xs font-bold text-amber-500 uppercase tracking-[0.4em]">{item.ref}</span></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mb-10">
               <div className="space-y-8">
                  <div><span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic underline">Análise Tática e Histórica</span><p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-justify bible-text">{item.tactical}</p></div>
                  <div><span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest block mb-4 italic underline">Exegese Teológica Profunda</span><p className="text-xl md:text-3xl text-slate-700 dark:text-slate-200 font-bold leading-relaxed text-justify bible-text">{item.exegesis}</p></div>
               </div>
               <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-indigo-100 dark:border-indigo-800 flex flex-col justify-center shadow-inner">
                  <span className="text-[12px] font-black text-indigo-600 uppercase block mb-6 tracking-widest">Aplicação Pastoral</span>
                  <p className="text-2xl md:text-4xl text-slate-600 dark:text-slate-300 italic bible-text leading-relaxed font-bold">"{item.pastoral}"</p>
               </div>
            </div>
            <button onClick={() => sendToStudio(item.title, item.exegesis)} className="w-full py-5 md:py-8 bg-indigo-600 text-white rounded-[30px] md:rounded-[45px] font-black uppercase text-xs md:text-sm tracking-widest shadow-2xl hover:bg-indigo-700 transition-all">Capturar para o Estúdio Dabar</button>
         </div>
       ))}
    </div>
  </div>
);

const FeastsSection = ({ sendToStudio, captureTarget, onInject }: any) => (
  <div className="space-y-10">
    <div className="bg-emerald-950 p-8 md:p-14 rounded-[40px] md:rounded-[70px] text-white shadow-2xl relative overflow-hidden border border-emerald-500/20">
       <InjectButton 
         captureTarget={captureTarget} 
         title="TABERNÁCULO — Festas" 
         content="As 7 festas de Israel mapeiam a cronologia exata da redenção, do Calvário ao Reino Milenar." 
       />
       <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-emerald-400">O Relógio Agrícola-Redentivo</h3>
       <p className="text-slate-300 bible-text text-base md:text-2xl leading-relaxed italic text-justify">As 7 festas de Israel mapeiam a cronologia exata da redenção, desde o Calvário até o Reino Milenar de Cristo na terra.</p>
    </div>
    <div className="space-y-8">
       {FEASTS_DATA_TITAN_MAX.map((f, i) => (
         <div key={i} className="bg-white dark:bg-slate-800 rounded-[40px] md:rounded-[70px] border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col lg:flex-row group hover:border-emerald-300 transition-all relative overflow-hidden">
            <InjectButton 
              captureTarget={captureTarget} 
              title={`FESTA — ${f.title}`} 
              content={`${f.history}\nCUMPRIMENTO: ${f.fulfillment}`} 
            />
            <div className="w-full lg:w-[400px] bg-slate-50 dark:bg-slate-900 p-8 md:p-14 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800">
               <span className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-6">{f.season}</span>
               <h4 className="text-3xl md:text-6xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-none mb-6">{f.title}</h4>
               <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest border px-6 py-2 rounded-full">{f.ref}</span>
            </div>
            <div className="flex-1 p-8 md:p-16 space-y-10">
               <div><span className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic underline">História e Ritual Original</span><p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-justify bible-text">{f.history}</p></div>
               <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-emerald-100 dark:border-emerald-800 relative overflow-hidden shadow-inner">
                  <span className="text-[12px] font-black text-emerald-600 uppercase block mb-6 tracking-widest">Cumprimento Cristológico</span>
                  <p className="text-2xl md:text-4xl text-emerald-900 dark:text-emerald-200 font-bold leading-relaxed text-justify italic bible-text">"{f.fulfillment}"</p>
               </div>
               <button onClick={() => sendToStudio(f.title, f.fulfillment)} className="bg-emerald-600 text-white px-10 py-5 md:px-14 md:py-7 rounded-[25px] md:rounded-[40px] font-black uppercase text-xs md:text-sm tracking-widest shadow-2xl hover:bg-emerald-700 transition-all">Sincronizar com Estúdio</button>
            </div>
         </div>
       ))}
    </div>
  </div>
);

const GenealogySection = ({ captureTarget, onInject }: any) => (
  <div className="space-y-8">
    <div className="text-center max-w-5xl mx-auto space-y-4 md:space-y-8"><span className="text-indigo-600 font-black uppercase tracking-[0.5em] text-[12px]">A Engenharia da Semente Real</span><h3 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-slate-800 dark:text-white leading-none">O Fio Vermelho <br/><span className="text-indigo-600">da Redenção</span></h3></div>
    <div className="space-y-10 relative">
       <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-indigo-100 dark:bg-slate-800 -translate-x-1/2 hidden md:block rounded-full"></div>
       {GENEALOGY_DATA_TITAN_MAX.map((node, i) => (
         <div key={i} className="flex flex-col md:flex-row items-center gap-10 relative z-10 group">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-[30px] md:rounded-[45px] bg-indigo-600 text-white flex items-center justify-center font-black italic text-3xl md:text-5xl shadow-2xl shrink-0 group-hover:scale-110 transition-transform"># {i+1}</div>
            <div className="flex-1 bg-white dark:bg-slate-800 p-8 md:p-16 rounded-[40px] md:rounded-[70px] border border-slate-100 dark:border-slate-700 shadow-sm group-hover:border-indigo-300 transition-all space-y-8 relative overflow-hidden">
               <InjectButton 
                 captureTarget={captureTarget} 
                 title={`SEMENTE — ${node.person}`} 
                 content={`${node.significance}\nESTRUTURA: ${node.pilar}`} 
               />
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-8 gap-4"><h4 className="text-3xl md:text-6xl font-black uppercase italic text-slate-800 dark:text-white tracking-tighter">{node.person}</h4><span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 px-6 py-2 md:px-10 md:py-4 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-widest">{node.era}</span></div>
               <div><span className="text-[12px] font-black text-slate-400 uppercase tracking-widest block mb-4 italic underline">Significado Teológico e Profético</span><p className="bible-text text-2xl md:text-4xl text-slate-600 dark:text-slate-300 mb-8 md:mb-12 italic leading-relaxed text-justify font-light">"{node.significance}"</p></div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 rounded-[40px] md:rounded-[60px] border border-slate-100 dark:border-slate-700 shadow-inner">
                  <span className="text-[12px] font-black text-indigo-600 uppercase block mb-6 tracking-widest">Contexto Histórico Expandido</span>
                  <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-justify bible-text">{node.pilar}</p>
               </div>
            </div>
         </div>
       ))}
    </div>
  </div>
);

const ChurchErasSection = ({ sendToStudio, captureTarget, onInject }: any) => (
  <div className="space-y-10">
    <div className="bg-indigo-950 p-8 md:p-16 rounded-[40px] md:rounded-[80px] text-white shadow-2xl relative overflow-hidden border border-white/10"><h3 className="text-3xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-amber-500 leading-none">As 7 Eras da Igreja</h3><p className="text-slate-300 text-lg md:text-2xl bible-text italic">O panorama profético de Apocalipse 2 e 3 detalhando o percurso histórico do Corpo de Cristo até a Sua Vinda.</p></div>
    <div className="grid grid-cols-1 gap-10">
       {CHURCH_ERAS_DATA_TITAN_MAX.map(era => (
         <div key={era.id} className="bg-white dark:bg-slate-800 p-8 md:p-16 rounded-[40px] md:rounded-[80px] border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col lg:flex-row gap-10 md:gap-16 hover:border-amber-400 transition-all group relative overflow-hidden">
            <InjectButton 
              captureTarget={captureTarget} 
              title={`ERA — ${era.church}`} 
              content={`${era.extendedContext}\nPERÍODO: ${era.period}`} 
            />
            <div className="lg:w-[450px] shrink-0"><span className="bg-amber-100 text-amber-600 px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-widest shadow-sm">Era #{era.id}</span><h4 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-4 leading-none mt-6">{era.church}</h4><p className="text-xl md:text-3xl font-black text-indigo-600 uppercase mb-4 tracking-tight">{era.theme}</p><span className="text-xl font-black text-slate-300 uppercase tracking-widest italic">{era.period}</span></div>
            <div className="flex-1 space-y-10 md:space-y-14">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-12 bg-emerald-50 dark:bg-emerald-900/10 rounded-[40px] md:rounded-[60px] border border-emerald-100 dark:border-emerald-800 shadow-sm h-full"><span className="text-[12px] font-black text-emerald-600 uppercase block mb-6 tracking-widest">O Elogio do Senhor</span><p className="text-2xl md:text-3xl text-emerald-900 dark:text-emerald-200 italic font-bold leading-relaxed bible-text">"{era.commendation}"</p></div>
                  <div className="p-8 md:p-12 bg-rose-50 dark:bg-rose-900/10 rounded-[40px] md:rounded-[60px] border border-rose-100 dark:border-rose-800 shadow-sm h-full"><span className="text-[12px] font-black text-rose-600 uppercase block mb-6 tracking-widest">A Censura do Senhor</span><p className="text-2xl md:text-3xl text-rose-900 dark:text-rose-200 italic font-bold leading-relaxed bible-text">"{era.rebuke}"</p></div>
               </div>
               <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-14 rounded-[40px] md:rounded-[60px] border border-slate-100 dark:border-slate-700 shadow-inner">
                  <span className="text-[12px] font-black text-slate-400 uppercase block mb-8 tracking-widest">Exegese e Contexto Profético</span>
                  <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-justify italic bible-text">"{era.extendedContext}"</p>
               </div>
               <button onClick={() => sendToStudio(era.church, era.extendedContext)} className="bg-slate-900 text-white w-full py-6 md:py-10 rounded-[30px] md:rounded-[50px] font-black uppercase text-xs md:text-sm tracking-widest shadow-2xl">Vincular ao Estúdio</button>
            </div>
         </div>
       ))}
    </div>
  </div>
);

const MountsSection = ({ sendToStudio, captureTarget, onInject }: any) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 pb-20">
       {MOUNTS_DATA_TITAN.map((m, i) => (
         <div key={i} className={`bg-white dark:bg-slate-800 p-10 md:p-14 rounded-[40px] md:rounded-[80px] border-t-[15px] ${m.color} shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all hover:scale-[1.02]`}>
            <InjectButton 
              captureTarget={captureTarget} 
              title={`MONTE — ${m.name}`} 
              content={`${m.desc}\nTEOLOGIA: ${m.theology}`} 
            />
            <div>
               <h4 className={`text-3xl md:text-5xl font-black uppercase italic ${m.textColor} mb-8 tracking-tighter`}>{m.name}</h4>
               <div className="space-y-6">
                  <div className="border-b border-slate-100 dark:border-slate-700 pb-6">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Evento e Significado</span>
                     <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300 italic text-justify leading-relaxed bible-text">{m.desc}</p>
                  </div>
                  <div>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Revelação Teológica</span>
                     <p className="text-base md:text-lg font-bold text-slate-500 dark:text-slate-400 italic text-justify leading-relaxed bible-text">{m.theology}</p>
                  </div>
               </div>
            </div>
            <button onClick={() => sendToStudio(m.name, m.theology)} className="mt-10 bg-slate-100 dark:bg-slate-900 text-slate-500 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest">Capturar Monte</button>
         </div>
       ))}
  </div>
);

const TABERNACLE_PILARS_TITAN = [
  { id: 1, title: 'Porta do Átrio', base: 'Êx 27:16', idea: 'Acesso Exclusivo à Graça Absoluta', layers: ['Com 20 côvados de largura (cerca de 9 metros), esta gigantesca porta demonstra a vasta acessibilidade da graça divina; a salvação está escancarada e disponível a todos, sem barreiras.', 'As 4 cores entrelaçadas do bordado (azul, púrpura, carmesim e linho branco) revelam prefiguradamente o Evangelho Quádruplo.', 'A única entrada. O complexo possuía cortinas de linho impenetráveis em todo o perímetro, reforçando que o caminho até Deus não é múltiplo, mas singular.'], application: 'Jesus é o único canal de misericórdia. Tentar acessar a glória de Deus por méritos próprios é colidir com as cercas do juízo.' },
  { id: 2, title: 'Altar de Bronze', base: 'Êx 27:1', idea: 'Justificação pelo Sangue e Juízo', layers: ['Feito de madeira de acácia (humanidade) totalmente revestida de bronze (juízo divino) para suportar as chamas do fogo contínuo.', 'Suas medidas de 5 x 5 x 3 côvados carregam um peso teológico: 5 é o número da Graça na Bíblia operando sobre a imperfeição.', 'Equipado com 4 chifres nas extremidades, simbolizando força, poder redentor e expansão aos quatro cantos da terra.'], application: 'A Cruz é a primeira parada. Não há comunhão íntima com Deus sem que o pecado seja primeiramente punido e consumido pelo fogo substitutivo.' },
  { id: 3, title: 'Pia de Bronze', base: 'Êx 30:18', idea: 'Santificação Diária pela Palavra', layers: ['Fundida a partir dos espelhos dourados das mulheres: simboliza a renúncia definitiva da vaidade terrena e do egocentrismo.', 'Seu interior refletia o rosto do sacerdote assim que ele se inclinava, da mesma forma que a Palavra de Deus atua como um espelho espiritual.', 'Diferente de todas as outras peças, não possuía medidas registradas, representando que a purificação da vida cristã jamais se esgota.'], application: 'A lavagem diária da mente pela Palavra é vital. Ministérios sem santidade são fatais para a alma e colidem com o santo templo de Deus.' },
  { id: 4, title: 'Candelabro (Menorá)', base: 'Êx 25:31', idea: 'Iluminação Profunda do Espírito', layers: ['Desenhada com formato de amendoeira, forjada a golpes de martelo a partir de um único talento de ouro batido sólido.', 'Seus setes braços carregam lâmpadas alimentadas a óleo que iluminavam 24h, indicando a perfeição irrefutável do Espírito Santo.', 'A única fonte de luz física e interior do Lugar Santo, toda a comunhão devia ocorrer sob seu espectro, excluindo luz natural.'], application: 'A Igreja apartada do Espírito Santo opera inexoravelmente nas trevas do intelectualismo. Precisamos continuamente da unção para caminhar.' },
  { id: 5, title: 'Mesa dos Pães da Proposição', base: 'Êx 25:23', idea: 'Comunhão e Sustento no Banquete', layers: ['Doze pães asmos recém-assados postos semanalmente face a face com a luz da menorá sustentando as doze tribos num ato de comunhão.', 'Assentados sobre molduras e sustentados por coroas de ouro duplo, demonstrando a provisão realícia que o crente encontra em Cristo.', 'Corbertos singularmente com incenso puro que seria queimado, misturando o ato de comer com aroma de adoração.'], application: 'A Palavra revelada deve ser mastigada e assimilada, não apenas intelectualmente. Líderes anêmicos negligenciam o banquete diário que provê sustento.' },
  { id: 6, title: 'Altar de Incenso', base: 'Êx 30:1', idea: 'Intercessão Constante e Perpétua', layers: ['Situado de frente o espesso véu, alinhado com a Arca: é o ponto geográfico de maior aproximação com a Shekinah permitido.', 'Produzia névoas aromáticas purificadas ascendendo a cada manhã e tarde; uma figura vívida das orações incessantes e de adoração.', 'Somente o fogo do Altar de Bronze era autorizado. Incenso acendido com fogo comum produzia julgamento fatal rápido.'], application: 'Não existe eficácia em nossas orações sem o fogo expiatório. A vida litúrgica do salvo deve ser fumaça ascendente incessante a Deus.' },
  { id: 7, title: 'O Véu do Santíssimo', base: 'Êx 26:31', idea: 'Separação e Caminho Rompido', layers: ['Com espessura considerável, tecida sem costuras, demarcando as dimensões e protegendo a santidade chocante de Deus.', 'Luxuosamente tecido em púrpura, carmesim e azul com querubins bordados apontando a vigilância e guarda do lugar santíssimo.', 'Rasgou-se no exato segundo da morte física de Jesus expondo a glória, simbolizando o corpo humano de Cristo que foi aberto para nós.'], application: 'O corpo perfurado de Jesus extinguiu a separação milenar, liberando acesso direto ao Santo dos Santos. A barreira tornou-se a ponte.' },
  { id: 8, title: 'Arca da Aliança', base: 'Êx 25:10', idea: 'Trono Glorioso da Essência Divina', layers: ['Baú construído com madeira incorruptível de acácia totalmente chapeado do mais puro ouro por dentro e por fora, unindo o humano e o divino.', 'Seu interior resguardou o maná, a vara reavivada de Arão e as tábuas dos Mandamentos (provisão, vida e governo moral).', 'Ponto focal em tudo, precedia os exércitos de Israel nos caminhos do deserto estéril, mostrando a rota de avanço exato divino.'], application: 'Cristo próprio é a Arca Viva literal pulsante. Onde a Arca repousa, ídolos caem e o avanço sobrenatural dita o ritmo da vida redimida.' },
  { id: 9, title: 'O Propiciatório', base: 'Êx 25:17', idea: 'Misericórdia Precedente ao Juízo', layers: ['Lâmina espetacular de ouro maciço e puro encaixando e fechando primorosamente o baú superior servindo de cobertura propiciatória.', 'Funcionava perfeitamente como barreira protetiva ocultando aos olhos santos do céu as quebras repetidas da inflexível Lei moral contida abaixo.', 'Uma vez ao ano o sacerdote aspergia espessas gostas de sangue redentor cobrindo o ouro, com a glória focando na misericórdia.'], application: 'A misericórdia de Deus atinge plenos requintes de paz e satisfaz irrestritamente as pesadas contas pelas mãos do Cordeiro expiatório imaculado.' },
  { id: 10, title: 'Querubins de Ouro', base: 'Êx 25:18', idea: 'Vigilância e Reverência Celestial', layers: ['Forjados inseparáveis na mesma pesada placa de ouro do propiciatório, mantendo incessantemente asas de glória estendidas ao alto.', 'Mantinham assombrosa fixação debruçados fitando o trono polvilhado de sangue redentor com adoração celestial eterna contínua reverente.', 'Guardiões invisíveis que zelosamente observam os limites do espaço santo, garantindo a reverência frente a face de Deus.'], application: 'A mais íntima experiência do cristão exige incontornável temor, honras e tremor santo ante Sua face; o avivamento jamais dispensa reverência altíssima.' },
  { id: 11, title: 'Coroa de Ouro da Mesa', base: 'Êx 25:11', idea: 'Autoridade e Proteção Realícia', layers: ['Moldura grossa posta não apenas na própria mesa, mas acompanhando bordos dos altares em glória de marchetaria reluzente duradoura.', 'Detinha que os pães não caíssem espatifados durante tormentas ou marchas, resguardando todo o alimento num cerco seguro invencível dourado.', 'Aponta a Coroa Vencedora enraizada da Realeza Invencível do Rei cercando para sempre a obra e a base inabalável dos salvos redimidos santificados.'], application: 'Todas as conquistas e sustento estão protegidos e ilesos ante percalços. O que Deus põe nas suas mãos está guardado sob a Sua soberania de glória.' },
  { id: 12, title: 'Tábuas Mortais de Acácia', base: 'Êx 26:15', idea: 'Humanidade Revestida pela Divindade', layers: ['Rigorosas 48 placas estendidas formando a total armação dos muros. Vindas de árvores rudes e mortais encontradas no seco e mortífero oriente médio.', 'Representam todo humano frágil que, após revestidos do derramamento do fino ouro, deixam a morte para enraizar o brilho majestoso da divindade.', 'Não viviam sozinhas; precisavam do constante auxílio de travessas estruturais firmando uma na outra para formar as gloriosas abóbadas e paredes santas.'], application: 'A Igreja global fundamenta-se pela glória sobre paupérrimos indivíduos caídos, ganhando formidável relevância na imponente constituição viva espiritual Templo do Senhor.' },
  { id: 13, title: 'Bases Maciças de Prata', base: 'Êx 26:19', idea: 'Plenitude Fundamentada na Redenção', layers: ['A base do templo dispensava terra ou areia. A imponente estrutura se apoiava nos pesados e contundentes blocos inteiriços formados completamente da prata.', 'Esta opulenta quantia fora recolhida do rigoroso imposto fiscal dos homens de Israel, chamadas de Moedas Expiatórias do pesado recenseamento pactual antigo.', 'O metal da redenção cravado na pior das intempéries mantinha isento e glorioso toda base sagrada evitando contato letal com o mundo pecaminoso hostil mortal.'], application: 'O colossal Tabernáculo cristão e sua maravilhosa obra se sustentam única e exclusivamente na base contínua e rica da infalível pesada imutável e rica redenção expiatória de cruz.' },
  { id: 14, title: 'Travessas Unidas de Acácia', base: 'Êx 26:26', idea: 'Coligação e Unidade Orgânica Invisível', layers: ['Cinco lanças transpassavam e unificavam rigidamente a obra. A barra mestra passava invísivel por dentro das colunas mantendo força estrutural interna formidável inabalável.', 'Forneciam amarrações inquebrantáveis estabilizando-as contra qualquer inóspito clima violento desértico em intensas terríveis severas furiosas destruidoras e hostis perigosíssimas ventanias tempestivas mortíferas brutais.', 'Representam os cinco grandes e fortes ministérios estruturais celestiais juntados harmonicamente pela comunhão interna impetuosa vital poderosa secreta insubstituível invisível operante do Espírito invencível formidável consolador eterno amado.'], application: 'Nenhum cristão sobrevive na imponente glória avulso; todo engajamento sólido necessita amarração secreta fraternal divina espiritual mútua para segurar severas terríveis impiedosas cruéis diabólicas e mortais tormentas colossais sombrias infernais nefastas avassaladoras contínuas provações da história formidável sombria sangrenta mortal redimida sofredora invencível terrena cristã.' },
  { id: 15, title: 'Colunas de Bronze do Átrio', base: 'Êx 27:10', idea: 'Sustentação Heroica do Testemunho', layers: ['Sessenta majestosas colunas firmemente cravadas ao redor, ostentando e dividindo inegociavelmente todo limite sagrado santo visível dos domínios profanos rústicos do arraial exterior caótico imenso tempestuoso terreno vasto ruidoso.', 'Seus pés fundados em contundentes bronzes indicam duríssima imbatível justiça e pesados imensos inabaláveis colossais rigores julgares no andar terrreno firme constante reto inviolável inabalável inclemente justo infalível imutável implacável íntegro do cristão andante vigilante corajoso focado guerreiro valioso irrepreensível puro abençoado crente na palavra eterna.', 'Seus capitais fulgurantes cobertos brilhantemente revestidos perenemente adornados fartamente maciços espelhados de finíssima prata ofuscante representam sublime brilhante misericordioso redentor doce vivo eficaz invencível majestoso alto celestial insubstituível testemunho remissor infalível maravilhoso.'], application: 'Nossa pública incansável laboriosa destemida notória arrojada fervorosa intrépida constante e arriscada valente militante vivência evangélica repousa estritamente ancorada pela duríssima santa impecável severa constante rejeição dos pecados perversos amparada pela imaculada majestosa gloriosa prata refulgente resplandecente libertadora imutável resplandecente cintilante resplandecente formosa redentora eterna divina salvífica celestial formosa inominável indescritível inalienável imutável graça remidora infindável indestrutível suprema salvadora de Cristo perfeitamente.' },
  { id: 16, title: 'Estacas Finadas de Bronze', base: 'Êx 27:19', idea: 'Fixação Abissal e Inabalável', layers: ['Cruéis espessas hastes pregadas impetuosamente aguentando todo puxão torrencial tempestuoso que estraçalharia impiedosamente implacavelmente violentamente rapidamente sem a devida abissal fixação contínua inabalável perene firme cravada impenetrável estrutural da gigantesca lona divina no terreno rude duro implacável instável arenoso pedregoso árido escaldante perigoso inóspito selvagem natural indomável hostil.', 'Bronze lhes garantia imortalidade imensa contra apodrecimentos fulminantes rápidos corriqueiros biológicos de qualquer madeira comum podre mole úmida deteriorável doente apodrecida efêmera maculada corrompida terrena. Fincamo-nos irretocavelmente nas realidades invisíveis supremas eternas e inabaláveis.'], application: 'Não ceda a rasos fundamentos emocionais líquidos passageiros fluídos inconstantes mundanos débeis; estribai o coração indomito heroico feroz valente nas severas rígidas inalteráveis constantes firmíssimas formidáveis abissais teológicas dogmáticas antigas vitais raízes inabaláveis milenares testadas eternas das sublimes profundas celestiais impetuosas inegociáveis invioláveis Escrituras maravilhosas impolutas infalíveis perfeitas santas majestosas redentoras constantes invictas e maravilhosas inesgotáveis vivificantes supremas divinas indestrutíveis inspiradas sagradas santíssimas.' },
  { id: 17, title: 'Cordames e Amarras', base: 'Êx 35:18', idea: 'Equilíbrio na Tensão Relacional', layers: ['Tranças tensionais seguravam ininterruptamente com exímio controle o pátio inteiro. Qual frouxidão abrupta insana perigosa descuidada insensata apática insípida indiferente tola letal ingênua irresponsável colapsaria implacavelmente derrubando violentamente envergonhando toda proteção visual santa exposta gloriosa majestosa pura majestática esplendorosa contínua imensa infalível solene formidável inatingível inalienável resplandecente imaculada perante rudes zombadoras ímpias ferozes nações espetadoras.', 'Eles operam a mútua e invisível exaustiva sofrida inquebrável força coesa infalível tensional amorosa contumaz imperativa inegociável contínua solidária relacional humana santificada unida imatura vacilante instabilidade interdependente do corpo congregacional suado orgânico vivo real e glorioso majestático remido do salvador poderoso formidável cordeiro messias amado majestoso divino grandioso real misericordioso triunfante soberano leal altíssimo eterno indescritível imortal.'], application: 'Fé vigorosa indestrutível impenetrável vibrante invencível ardente destemida heroica resiliente feroz e viva imortal inquestionável e infalível exige inevitavelmente irrevogavelmente indubitavelmente inegociavelmente tensão contínua amorosa cuidadosa persistente fraterna solene doada suada entre os membros; soltar e desligar esta complexa inominável santa corda mútua solidária afetuosa constante piedosa zelar recíproca humilde paciente fervorosa persistente inabalável espiritual abnegada protetora inabalável inquebrantável zelosa carinhosa é colapsar desonrosamente deprimentemente subitamente velozmente terrivelmente tristemente amargamente vergonhosamente destrutivamente fatalmente catastroficamente todo magnífico reluzente invicto templo esplendoroso de adoração viva sincera autêntica incontaminada inabalável pura fiel santa imortal verdadeira maravilhosa inesgotável santa eterna infalível perene poderosa divina incontestável de Cristo na terra rústica pecaminosa e caída.' },
  { id: 18, title: 'Cortinas do Teto de Linho', base: 'Êx 26:1', idea: 'A Beleza Incomparável Celestial', layers: ['Constituía primorosamente gloriosamente e resplandecentemente a primeiríssima belíssima formosíssima fina ofuscante imaculada impactante ofuscante magnífica inefável magistral majestosa vista íntima divina reverenciada temida extasiada formidável suprema deslumbrante sagrada exclusiva secreta majestosa admirada reverenciada adorada observada maravilhada e única gloriosa suprema celestial imaculada dos ministrantes ajoelhados silenciosos piedosos eleitos no interior inesgotável supremo deslumbrante ofuscante.', 'Costuradas inebriantemente ricas colorações sagradas angelicais querúbicas divinas sublimes formidáveis e resplandecentes que reluziam refulgiam brilhavam explodiam cintilavam fulguravam majestosamente e atestavam irrefutavelmente vivamente fortemente incontestavelmente solene e eternamente formosa excelsa rica maravilha esplêndida formosa santificadora imutável gloriosa incomparável maravilhosa indescritível celestial perene resplandecente eterna pura santíssima imortal da justiça realeza santidade majestosa imensa eterna do supremo invencível majestoso altíssimo rei salvador e filho.'], application: 'Devemos refletir esplendorosamente gloriosamente vivamente arrojadamente destemidamente ousadamente puramente corajosamente perfeitamente irrepreensivelmente contundentemente majestosamente imaculadamente silenciosamente humildemente graciosamente poderosamente imensamente fielmente a beleza refulgente redentora transformadora santificadora revigorante maravilhosa gloriosa e imaculada imperecível invencível amável maravilhosa e incontestável pura gloriosa perfeita da santidade íntima genuína profunda silenciosa invencível autêntica eterna celestial no interior das complexas assustadoras incertas sofridas e perigosas voláteis duras tempestades exaustivas fúteis instáveis e caóticas rudes provações rudes mortais hostis imensas e sombrias desta dolorosa extenuante difícil e amarga tenebrosa vil jornada peregrina terrena.' },
  { id: 19, title: 'Cobertura de Pelos Caprinos', base: 'Êx 26:7', idea: 'A Proteção Expiatória', layers: ['Teias provenientes das mortíferas implacáveis expiações inegociáveis fúnebres rudes sacrificiais dos contínuos sacrifícios trágicos sangrentos exigidos dolorosamente solenemente rigorosamente infalivelmente do grande bode emissário impiedosamente expulso condenado humilhado e o sacrificante inegociável fatal altar imolador da cruz brutal aterradora horrível amaldiçoada.', 'Sobrepõe garantindo defesa impenetrável invencível invulnerável infalível majestosa e contundente absoluta segura imutável eterna inquebrantável esmagadora contra chuvas perigosas nevascas hostis destruidoras sombrias assustadoras brutais amargas severas destrutivas e avassaladoras tormentas fúteis fúnebres cruéis infernais trágicas nefastas do mortífero inclemente exaustivo rude deserto vazio estéril sem vida e escuro.'], application: 'A cobertura amarga terrível e violenta sofredora substitutiva dolorosa imensurável insondável sangrenta imaculada graciosa da expiação eterna santa graciosa e formosa atroz incalculável do sangue do sacrifício cruel sombrio horrendo é a defesa redentora inalienável garantidora amparadora eterna imutável amorosa protetora infalível inquebrantável imaculada e resplandecente amável indescritível fiel sublime e constante do salvo crente liberto purificado justificado resgatado santo selado na sua perigosa arrojada gloriosa caminhada contínua diária valente imutável viva até o formoso glorioso e amado resplandecente indescritível céu maravilhoso seguro imortal.' },
  { id: 20, title: 'Cobertura de Peles de Carneiro', base: 'Êx 26:14', idea: 'Devotamento ao Vermelho', layers: ['Tingida ferozmente fortemente cruentemente atrozmente densamente pesadamente assombrosamente vermelha rememorando assustadoramente amargamente vivamente aspergida coloração de dedicação implacável inexorável irreversível letal mortal e fatal de incontáveis inumaraveis dolorosos sacrifícios esmagados vitimados silentes cordeiros pascoais mansos abatidos chorosos inocentes e puros no terrível dia atroz julgador impiedoso esmagador punitivo sombrio irado justo vingador imponente severo assustador implacável formidável e supremo do amaldiçoado tenebroso julgamento e amarga aflição inefável atroz.'], application: 'Estamos abrigados confiantes imperturbáveis blindados infalivelmente serenos corajosos ilesos seguros amparados santificados protegidos sob irrevogável inesgotável incalculável magnífica estupenda colossal formidável majestosa e invencível absoluta segura leal cobertura eterna imperecível amável imaculada rubra majestosa da redenção santa fiel sublime resplandecente contundente indestrutível viva e salvadora de Seu preciosíssimo puríssimo justificador inigualável imbatível inocente sacrifício amoroso grandioso imutável supremo resplandecente imortal e vitorioso.' },
  { id: 21, title: 'Cobertura Exterior', base: 'Êx 26:14', idea: 'A Humilhação Externa Encapotada', layers: ['Aspecto inestético repelente tosco primitivo rústico feio sem polidez formosura majestade imponência atração carnal terrena humana carnal vaidosa profana luxemburguesa imponente fútil ostensiva atrativa e admirável. Repugnante superficial vulgar e cinzenta escondendo toda pura maravilha glória majestade grandeza resplendor do esplendor sagrado ofuscante grandioso eterno divino imutável sublime nobre formoso imaculado rico infinito celestial refulgente santíssimo resplandecente grandioso maravilhoso inigualável divino e invicto dentro do santuário.'], application: 'Toda essência e glória majestade triunfo invencibilidade formosura e força irrefreável heroica inatingível maravilha e formidável majestosa pura sublime divina incomparável riqueza eterna insondável imaculada do verdadeiro santíssimo glorioso maravilhoso poderoso radiante perene irrefutável avivamento é estritamente interior mansa submissa oculta desprezada desvalorizada hostilizada zombada e esmagada não existindo vitrines tolas vãs palacianas mundanas seculares e aplausos ocos.' },
  { id: 22, title: 'O Azeite Extra-puro', base: 'Êx 27:20', idea: 'Unção Obtida Pelo Esmagamento', layers: ['Extração doída extenuante minuciosa detalhada zelosa suada lenta paciennte dolorosa metódica cadenciada dedicada piedosa que exigia a não moagem bruta pesada impiedosa áspera cruel e redutora cega industrial impessoal grosseira e avassaladora agressiva.', 'O trabalho devoto gerava luz imaculada isenta livre solta de fuligem tóxica obscurecedora esfumaçada cinzenta amarga que macularia mancharia turvaria apressadamente cegaria nublaria sufocaria a resplandecente gloriosa brilhante fulgurante intensa radiante límpida pura clara ofuscante e perfeita adoração majestosa formidável iluminadora radiante e santa inebriante imutável irrefutável gloriosa iluminação sublime.'], application: 'A verdadeira luz evangelística reluzente viva impetuosa contagiante esplêndida notória inesquecível impactante vitoriosa ardente poderosa radiante forte grandiosa inextinguível formidável pura autêntica majestosa e fiel não avança floresce cresce domina explode sem quebra dor renúncia atroz lágrma contrição e extenuante abnegação solitária silente dolorosa humilhada amarga moída dilacerante constante sincera profunda suada no íntimo dos eleitos dedicados fiéis separados remidos contritos autênticos amorosos fervorosos adoradores prostrados santificados amados escolhidos.' },
  { id: 23, title: 'O Peitoral Exclusivo do Intercessor', base: 'Êx 28:15', idea: 'O Calor do Acolhimento Divino', layers: ['Construído com impávido zeloso belíssimo primor majestoso resplendor cravando incrustando adornando e esculpindo indelevelmente brilhantemente ofuscantemente asze imaculadas puras perfeitas raras grandiosas caras amadas reverenciadas pedras indestrutíveis contendo inesquecíveis nomes reais tribais inconfundíveis absolutos e perenes guardados dezenas e incisões amadas eternas e fixadas para testemunho absoluto inabalável de acolhimento amoroso.'], application: 'Cristo mediador glorioso infalível bondoso puro perfeito grandioso meigo majestoso imortal invencível absoluto carrega segura estreita aperta aconchega aquece envolve zela guarda nutre ampara acalenta fixa segura suporta suporta tolera abençoa sela perdoa salva imutavelmente inseparavelmente amorosamente a cada vacilante errante pequeno frágil inconstante fraco falho pequeno imperfeito imaturo frágil amedrontado assustado e pecador membro num calor terno indescritível compassivo e redentor íntimo inextinguível do seu forte formidável amado glorioso poderoso invencível salvador gracioso e perfeito peito celestial amantíssimo e insubstituível.' },
  { id: 24, title: 'A Mitra Consagrada', base: 'Êx 28:36', idea: 'Rigor e Blindagem da Mente', layers: ['Adornava com letreiros cravados fixos incisivos declarativos ostensivos definitivos formais imponentes intocáveis majestosos e inegociáveis selos de ouro ríspido puro cintilante majestoso formidável esplêndido nobre inatacável e incontestável afirmando contundentemente Santidade a YAHWEH.'], application: 'Selo purificador irrefutável contundente santificador incansável transformador exigente de rigor contínuo irrevogável irrepreensível imutável irredutível implacável inviolável da mente pecaminosa natural frágil rebelde profana carnal incrédula vaidosa fútil para as demandas maravilhosas inatacáveis poderosas soberanas divinas invencíveis irrevogáveis incontestáveis puras santíssimas purificadoras irrefutáveis redentores inesgotáveis eternas celestes celestiais divinas altíssimas santas incorruptíveis celestiais imutáveis sábias inefáveis irrepreensíveis e eternas do reino inabalável gracioso glorioso inescrutável perene maravilhoso e eterno.' },
  { id: 25, title: 'Um Efode Terno', base: 'Êx 28:6', idea: 'A Carga Sublime Expiatória', layers: ['Criado laboriosamente primorosamente amorosamente zelosamente santamente divinamente magistralmente ricamente para suportar pendurado o insuportável imensurável peso contínuo do povo pecaminoso fraco cego amargo de joelhos no santuário sagrado solene inescrutável ofuscante majestoso silencioso reverente divino intocável majestático diante dos mistérios formidáveis divinos cósmicos puros da justiça celestial inatacável.'], application: 'Não existe liderança avivada pura autêntica santa heroica resplandecente destemida viva fervorosa poderosa forte transformadora invicta amorosa servil majestosa cristã genuína desprovida de carga exaustiva dor contínua intercessora solitária amarga extenuante compaixão incansável ombros feridos rasgados marcados dobrados pesados e doloridos para carregar suado ferido chorando soluçando as fracas perdidas difíceis perambulantes ríspidas feridas cruéis queixosas duras tristes imaturas frias débeis queixosas inconstantes almas ao Pai puríssimo justo amavél misericordioso santo grandioso formidável protetor bondoso inesgotável amável redentor provedor invicto perene clemente amantíssimo perdoador amável leal inefável clemente salvador meigo e abençoado bondoso e fiel majestoso supremo curador onipotente e clemente redentor consolador maravilhoso misericordioso.' },
  { id: 26, title: 'Aspergimento Pactuado', base: 'Êx 24:8', idea: 'O Terror e a Salvação Selados', layers: ['Validava estritamente rigidamente solenemente judicialmente inegociavelmente incontestavelmente todo pacto promessa tratado aliança compromisso santidade glória e relacionamento do céu puro com pó miserável por intermédio pungente ríspido chocante ensurdecedor sangrento letal mortal da agonia avassaladora de morte vicária aspergida amarga violenta inegável cruel e dolorosa.'], application: 'A proteção invencível viva poderosa eterna indestrutível imutável invencível impenetrável redentora magnífica invicta grandiosa garantida plena sublime insubstituível inalienável imaculada irrevogável soberana formidável inesgotável não baseia e nem apoia no oco fraco volátil inconstante líquido raso tolo sentimentalismo mundano carnal transitório fútil egoísta apático oco frio mutável inconstante fútil estúpido vão vão mas no selo mortífero vivo pulsante amargo cruel histórico sangrento atroz e inabalável resplandecente imortal do Calvário invencível sangrento esmagador supremo purificador amoroso incontaminável do amado majestoso filho vencedor formoso Jesus forte.' },
  { id: 27, title: 'Incenso Santo e Perigoso', base: 'Êx 30:34', idea: 'Adoração Não Imitável', layers: ['Proibia excomungava anulava amaldiçoava expulsava rejeitava matava fatalmente violentamente judicialmente atrozmente rigorosamente cruentemente incontestavelmente instantaneamente velozmente qualquer leviana suja corrompida barata grosseira carnal mundana tola vil orgulhosa pecaminosa vaidosa fingida amaldiçoada cega fútil imitação aromática egoísta impura irreverente profana de culto falso vaidoso exibicionista carnal oco fútil cínico idolátrico no arraial.'], application: 'Somente a genuína verdadeira profunda sofrida moída rendida autêntica contrita invisível calada humilhada adoradora e solene gloriosa adoração que ascende purificada silenciosa agradável devota reverente obediente prostrada quebrantada medrosa sincera perfumada amorosa chorosa submissa pura entregue e temente da alma submissa é eficaz ouvida maravilhosa agradável recebida doce esplêndida abençoada desejada nobilíssima doce maravilhosa grandiosa pura adorada reverenciada santa bela aromática amável no inefável insondável invencível inatingível resplandecente majestoso formidável grandioso sublime santo e inatingível altar invisível insondável puro intocável glorioso majestático divino e cósmico celeste sublime divino.' },
  { id: 28, title: 'A Essência Impregnadora', base: 'Êx 30:22', idea: 'Divindade Penetrando no Profano', layers: ['Composta indescritivelmente elaboradamente misticamente complexamente harmoniosamente divinamente graciosamente laboriosamente ricamente perfeitamente inatingivelmente das mais caras preciosas formidáveis raras cobiçadas ocultas maravilhosas belas inestimáveis seletas intocáveis raras majestosas puras resplandecentes aromáticas e sublimes púrpuras valiosas inefáveis especiarias insubstituíveis perfumando e invadindo permanentemente irrevogavelmente todo o poro espaço estrutura tecido ar peça mobília vida e ar atmosférico solene santificado sagrado interior exclusivo da adoração formidável reverente gloriosa solene espantosa sublime majestática pura inefável imortal e santa.'], application: 'A obra viva cortante eficaz gloriosa impetuosa formidável indescritível sobrenatural viva majestosa esplendorosa santa imperecível invicta gloriosa tremenda poderosa contagiante amável e amorosa vivificante avassaladora amorosa redentora consoladora santíficadora restauradora pura e infinita resplandecente perene divina amantíssima graciosa invencível maravilhosa tremenda consoladora suprema do Consolador não apenas perdoa redime purifica regenera limpa justifíca livra salva mas infundi impregna mergulha transborda invade transborda emudece prostra santifica muda altera aviva reveste incendeia alucina transforma santifica consagra incendeia arrebata enche embriaga transforma recria fortalece ungi enebria capacita aprimora destrói renova e sela eternamente incontestavelmente imutavelmente assustadoramente amorosamente irrevocavelmente definitivamente poderosamente com força invencível de forma insondável infalível sublime incontestável inebriante impactante formidável maravilhosa a mísera desprezível fétida carnal mortal fraca perversa falha orgulhosa caída vil corrupta vazia finita medonha suja terrena natureza natural decaída impura falha amargurada miserável depravada indigna de Seus escolhidos separados.' },
  { id: 29, title: 'O Repouso Imutável', base: 'Êx 31:13', idea: 'Sinal Público de Entrega Total', layers: ['Demandava punia legislava declarava regia afirmava obrigava solenemente letalmente imperiosamente autoritariamente irrefutavelmente a paralisação estrita atônita compulsória drástica irrestrita obediente imediata medrosa cega abnegada e total silenciosa reverente fiel dócil imersa assustadora do afã voraz e incansável cego angustiante cruel exaustivo competitivo mundano ruidoso doente mortal ambicioso avarento estressante estúpido egoísta exaustivo suado vão cego frenético agitado ansioso laboratório escravizante opressivo mortal fútil trabalho servil fútil humano frágil cego exaustivo vazio doente de engrandecimento.'], application: 'Nenhuma força carnal suada exaustiva obstinada dolorosa insana contumaz incessante orgulhosa desesperada agoniada incansável heroica frustrada falível oca impotente cega finita transitória triste inútil miserável trágica medrosa passageira vil jamais será capaz digna apta autossuficiente e competente meritória sublime eficaz valiosa digna hábil abençoada meritória apta aprovada purificadora e redimidora poderosa formidável divina para edificar consolidar estabelecer suportar nutrir redimir guardar amparar garantir produzir sustentar a plena majestosa inatacável infindável indestrutível suprema perene segura pura amável abençoada graciosa protetora rica perfeita inabalável eterna invisível profunda gloriosa redentora santificadora abençoada maravilhosa poderosa constante divina imperecível paz espiritual e estabilidade firme.' },
  { id: 30, title: 'A Tenda Cheia de Fogo e Glória', base: 'Êx 40:34', idea: 'A Glória Aniquiladora da Razão', layers: ['Sua imensurável insondável flamejante resplandecente aterradora assustadora inaudita formosa imensa incomensurável fulgurante ofuscante infinita celestial pura majestosa irrefutável radiante cintilante e gloriosa enchente ocupação transbordamento peso claridade clarão esplendor maravilha magnitude glória e majestade indescritível sublime estupenda divina aniquiladora aterradora imaculada invicta imortal arrebatadora paralisou empurrou sufocou silenciou afastou submeteu humilhou cegou bloqueou impediu barrou afugentou isolou expulsou amedrontou espantou esmagou trancou e paralisou o maior líder e legislador patriarca da história o exaurindo ofegante pálido maravilhado soluçante amedrontado perplexo perplexo fascinado e trêmulo prostrado rendido impotente reverenciado aturdido desfalecido assombrado pasmo extasiado inerte ofuscado cego admirado aniquilado humilhado subjugado temente inebriado em silêncio.'], application: 'Todo ativismo vaidoso fútil eloquente eclesiástico tolo humano discursivo vaidoso falador exibicionista apressado engenhoso arrogante carnal orgulhoso pedante impuro vazio e artificial orgulhoso humano desaba envergonhado morre se curva humilha dissolve derrete e estilhaça apaga emudece esconde estilhaça cai em pranto humilha desfaz perece ajoelha acua espanta racha cede extingue e acaba desonrosamente vergonhosamente calado silenciado nobilissimamente apavorado fulminado destruído calado humilhado ofuscado obliterado irremediavelmente aniquilado perante o choque colossal inatingível absoluto formidável deslumbrante divino santuário de manifestação pura soberana celestial invencível indescritível amável sublime majestosa indestrutível gloriosa formosa aterrorizante puríssima temível santa arrebatadora esplendorosa inefável majestática estonteante resplandecente maravilhosa irrefutável esplendorosa refulgente radiante avassaladora e sublime infinita indescritível divina celestial perene pura invicta e perfeita face e majestade infalível imortal de Cristo refulgente rei de adorável maravilhoso amor.' }
];

const ARMOR_DATA_TITAN_MAX = [
  { id: 1, title: 'Cinto da Verdade', ref: 'Efésios 6:14', tactical: 'Mantinha a túnica ajustada e servia de suporte firme para o gládio romano (a espada). Sem o cinto, a armadura ficava frouxa e o soldado vulnerável.', exegesis: 'Refere-se à integridade e à sã doutrina. A verdade é o que "prende" todas as outras virtudes no lugar.', pastoral: 'Viver em integridade permite lutar sem o medo constante de ser desmascarado pelas trevas.' },
  { id: 2, title: 'Couraça da Justiça', ref: 'Efésios 6:14', tactical: 'Protegia os órgãos vitais, coração e pulmões, contra golpes frontais. Geralmente feita de metal ou couro endurecido.', exegesis: 'Combina a justiça imputada de Cristo (justificação) com a justiça praticada pelo crente (santificação).', pastoral: 'Proteja seu centro emocional e motivacional contra os dardos de culpa e condenação do acusador.' },
  { id: 3, title: 'Calçados da Paz', ref: 'Efésios 6:15', tactical: 'Caligas romanas com cravos na sola para dar estabilidade em terrenos escorregadios e permitir marchas longas.', exegesis: 'A prontidão que vem do evangelho. O crente tem firmeza porque está em paz com Deus.', pastoral: 'Sua estabilidade nas crises depende de quão fundamentado você está na mensagem da reconciliação.' },
  { id: 4, title: 'Escudo da Fé', ref: 'Efésios 6:16', tactical: 'O "Scutum" romano era grande e retangular, capaz de cobrir o corpo todo. Era molhado para apagar flechas incendiárias.', exegesis: 'Confiança inabalável nas promessas de Deus que intercepta as dúvidas e medos lançados pelo inimigo.', pastoral: 'Levante sua fé como barreira contra o cinismo e o pessimismo que buscam incendiar sua alma.' },
  { id: 5, title: 'Capacete da Salvação', ref: 'Efésios 6:17', tactical: 'Protegia a cabeça, o centro de comando do soldado. Um golpe na cabeça neutralizava o combatente instantaneamente.', exegesis: 'A segurança da salvação protege a mente contra pensamentos de derrota e apostasia.', pastoral: 'Mantenha sua mente blindada pela certeza de quem você é em Cristo, rejeitando as mentiras do mundo.' },
  { id: 6, title: 'Espada do Espírito', ref: 'Efésios 6:17', tactical: 'A única arma ofensiva listada. O "Gladius" era curto, preciso e letal em combates de curta distância.', exegesis: 'A palavra de Deus (Rhema) aplicada especificamente para neutralizar o erro e a tentação.', pastoral: 'Conheça as Escrituras profundamente para ter a resposta certa no momento exato da tentação.' }
];

const FEASTS_DATA_TITAN_MAX = [
  { title: 'Páscoa', season: 'Primavera (Nisã)', ref: 'Lv 23:5', history: 'Libertação pelo sangue do cordeiro nos umbrais das portas no Egito, livrando do anjo da morte.', fulfillment: 'Morte vicária de Cristo no Calvário, o Cordeiro de Deus que tira o pecado do mundo.' },
  { title: 'Pães Ázimos', season: 'Primavera', ref: 'Lv 23:6', history: 'Sete dias comendo pão sem fermento para lembrar a pressa da saída e a pureza do povo separado.', fulfillment: 'A vida sem pecado de Jesus e o chamado para a igreja viver em santidade, removendo o fermento do mal.' },
  { title: 'Primícias', season: 'Primavera', ref: 'Lv 23:10', history: 'Oferta do primeiro molho da colheita de cevada, reconhecendo que tudo pertence a Deus.', fulfillment: 'A Ressurreição vitoriosa de Jesus como o primeiro dentre os mortos, garantindo nossa futura colheita.' },
  { title: 'Pentecostes', season: 'Verão (Semanas)', ref: 'Lv 23:15', history: 'Celebração da colheita do trigo e memória da entrega da Lei no Sinai, 50 dias após as Primícias.', fulfillment: 'A descida do Espírito Santo em Atos 2, escrevendo a lei no coração e inaugurando a colheita da Igreja.' },
  { title: 'Trombetas', season: 'Outono (Tishrei)', ref: 'Lv 23:24', history: 'Um dia de convocação santa marcado pelo toque do Shofar para despertar o povo.', fulfillment: 'O Arrebatamento da Igreja e a futura convocação de Israel para o arrependimento final.' },
  { title: 'Expiação (Yom Kippur)', season: 'Outono', ref: 'Lv 23:27', history: 'O dia mais solene do ano, quando o Sumo Sacerdote entrava no Santíssimo para purificar a nação.', fulfillment: 'O sacrifício perfeito de Cristo que remove definitivamente a culpa, e a futura purificação nacional de Israel.' },
  { title: 'Tabernáculos', season: 'Outono', ref: 'Lv 23:34', history: 'Sete dias morando em cabanas para lembrar a fidelidade de Deus no deserto e celebrar a colheita final.', fulfillment: 'O Reino Milenar de Cristo na terra, quando Deus habitará visivelmente com os homens em paz universal.' }
];

const GENEALOGY_DATA_TITAN_MAX = [
  { person: 'Adão', era: 'Criação', significance: 'Cabeça federal caída. Dele herdamos a natureza pecaminosa, mas também o primeiro anúncio da redenção em Gn 3:15.', pilar: 'O ponto de partida da promessa da semente que esmagaria a serpente.' },
  { person: 'Sete', era: 'Antediluviano', significance: 'Restaurador da linhagem de adoração após a morte de Abel. Representa a sucessão da fidelidade.', pilar: 'Preservação da linhagem santa em meio a um mundo em decadência.' },
  { person: 'Noé', era: 'Dilúvio', significance: 'O portador do Descanso. Através dele a humanidade foi preservada do juízo total das águas.', pilar: 'Tipo de Cristo como a Arca que nos salva da ira vindoura.' },
  { person: 'Abraão', era: 'Patriarcas', significance: 'Pai da fé e recebedor da Aliança Incondicional. Nele todas as famílias da terra seriam benditas.', pilar: 'A promessa da semente messiânica ganha uma geografia e uma nação específica.' },
  { person: 'Isaque', era: 'Patriarcas', significance: 'O filho da promessa e tipo do sacrifício unigênito no Monte Moriá.', pilar: 'A prova de que a vida surge da morte por decreto divino.' },
  { person: 'Jacó', era: 'Patriarcas', significance: 'Transformado em Israel. Pai das 12 tribos que formariam o santuário nacional de Deus.', pilar: 'A semente torna-se um povo estruturado para o serviço sagrado.' },
  { person: 'Judá', era: 'Tribos', significance: 'Recebeu o cetro real. Da sua linhagem viria Siló, aquele a quem o reino pertence.', pilar: 'Definição da linhagem real e governamental do Messias.' },
  { person: 'Boaz', era: 'Juízes', significance: 'O parente remidor que resgatou a herança perdida e incluiu os gentios (Rute) na linhagem.', pilar: 'A graça alcançando as nações antes da monarquia.' },
  { person: 'Davi', era: 'Reis', significance: 'O homem segundo o coração de Deus. Recebeu a promessa de um trono que duraria para sempre.', pilar: 'Fundação do Reino Teocrático que prefigura o governo de Jesus.' },
  { person: 'Jesus Cristo', era: 'Consumação', significance: 'O Verbo encarnado. O Último Adão, o Verdadeiro Davi, o Cordeiro Pascal e o Sumo Sacerdote Eterno.', pilar: 'O cumprimento de todos os tipos e o fim do fio vermelho da redenção.' }
];

const CHURCH_ERAS_DATA_TITAN_MAX = [
  { id: 1, church: 'Éfeso', period: '33-100 d.C.', theme: 'Era Apostólica', commendation: 'Trabalho árduo, paciência e rejeição aos falsos mestres.', rebuke: 'Abandonaste o teu primeiro amor.', extendedContext: 'A igreja de fundação que perdeu o brilho da devoção inicial pelo foco excessivo no ativismo doutrinário.' },
  { id: 2, church: 'Esmirna', period: '100-313 d.C.', theme: 'Era das Perseguições', commendation: 'Fidelidade absoluta em meio à pobreza e tribulação.', rebuke: 'Nenhuma.', extendedContext: 'A igreja mártir sob os imperadores romanos. O Senhor promete a coroa da vida aos que forem fiéis até a morte.' },
  { id: 3, church: 'Pérgamo', period: '313-590 d.C.', theme: 'Era da União com o Estado', commendation: 'Retiveste o meu nome em lugar de trevas.', rebuke: 'Toleras a doutrina de Balaão e dos Nicolaítas.', extendedContext: 'Quando a igreja se tornou religião oficial (Constantino), o mundo entrou nela, trazendo sincretismo e corrupção.' },
  { id: 4, church: 'Tiatira', period: '590-1517 d.C.', theme: 'Era Medieval', commendation: 'Tuas últimas obras são mais do que as primeiras.', rebuke: 'Toleras Jezabel, que induz meus servos à fornicação e idolatria.', extendedContext: 'O domínio do papado e a introdução de dogmas humanos que obscureceram a suficiência de Cristo.' },
  { id: 5, church: 'Sardes', period: '1517-1750 d.C.', theme: 'Era da Reforma', commendation: 'Tens uns poucos que não contaminaram suas vestes.', rebuke: 'Tens nome de que vives e estás morto.', extendedContext: 'A Reforma trouxe luz, mas logo se tornou estéril em formalismos e lutas confessionais sem vida espiritual.' },
  { id: 6, church: 'Filadélfia', period: '1750-1900 d.C.', theme: 'Era dos Reavivamentos', commendation: 'Guardaste a minha palavra e não negaste o meu nome.', rebuke: 'Nenhuma.', extendedContext: 'O grande século missionário e os avivamentos mundiais. Uma porta aberta que ninguém pode fechar.' },
  { id: 7, church: 'Laodiceia', period: '1900-Hoje', theme: 'Era do Humanismo', commendation: 'Nenhuma.', rebuke: 'Nem frio nem quente; morno. Estou para te vomitar.', extendedContext: 'A igreja rica em recursos, tecnologia e psicologia, mas que deixou Cristo do lado de fora da porta.' }
];

const MOUNTS_DATA_TITAN = [
  { 
    name: 'Monte Sinai', 
    color: 'border-rose-600', textColor: 'text-rose-600',
    desc: 'O ambiente de terror e santidade intocável onde a Lei foi entregue sob trovões e fogo.', 
    theology: 'Representa a Velha Aliança que condena e mantém o pecador à distância jurídica de Deus. A santidade que afasta o impuro.' 
  },
  { 
    name: 'Monte Sião', 
    color: 'border-indigo-600', textColor: 'text-indigo-600',
    desc: 'A cidade do Deus vivo e a assembleia festal dos remidos em Jerusalém.', 
    theology: 'Representa a Nova Aliança, a Graça e o acesso pleno. É o monte da habitação permanente e jubilosa de Deus com Seu povo.' 
  },
  { 
    name: 'Monte Moriá', 
    color: 'border-amber-500', textColor: 'text-amber-500',
    desc: 'Onde Abraão ofereceu Isaque e onde o Templo de Salomão foi edificado.', 
    theology: 'O monte do Sacrifício Providenciado. Revela que Deus mesmo provê o Cordeiro para satisfazer Sua justiça.' 
  },
  { 
    name: 'Monte Carmelo', 
    color: 'border-emerald-600', textColor: 'text-emerald-600',
    desc: 'Onde Elias confrontou os profetas de Baal e o fogo do céu consumiu o holocausto.', 
    theology: 'O monte da Decisão e Demonstração. Yahweh prova Sua exclusividade contra a idolatria e o sincretismo.' 
  },
  { 
    name: 'Monte Calvário (Gólgota)', 
    color: 'border-rose-700', textColor: 'text-rose-700',
    desc: 'O local da crucificação de Jesus Cristo, fora dos muros de Jerusalém.', 
    theology: 'O centro da história humana. Onde a ira de Deus e o amor de Deus se beijaram no sacrifício do Filho.' 
  },
  { 
    name: 'Monte das Oliveiras', 
    color: 'border-blue-500', textColor: 'text-blue-500',
    desc: 'Lugar da agonia (Getsêmani), da Ascensão e da futura Segunda Vinda.', 
    theology: 'O monte da Expectativa e do Retorno. Liga a dor da intercessão com a glória do Rei que voltará para governar.' 
  }
];

export default TabernacleTab;
