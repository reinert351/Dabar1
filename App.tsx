
import React, { useState, useEffect } from 'react';
import { 
  APP_NAME, ICON_BIBLE, ICON_LIBRARY, ICON_ASSISTANT, ICON_COACH, 
  ICON_STRONG, ICON_CHRONOLOGY, ICON_SERMON, ICON_STUDY, 
  ICON_DIFFERENTIALS, ICON_SETTINGS, ICON_NOTE, ICON_QUOTES, 
  ICON_TABERNACLE, ICON_TYPOLOGY, ICON_MEASURES, ICON_DEEP_MAP,
  ICON_MESSAGES, ICON_HERESIES, ICON_DIARY, ICON_HYMNAL, ICON_DNA,
  ICON_REVIVAL, ICON_COUNCIL, ICON_CUSTOMS, ICON_ARCHEOLOGY, ICON_MAPS
} from './constants';

import BibleReader from './components/BibleReader';
import LibraryExplorer from './components/LibraryExplorer';
import DabarHub from './components/DabarHub';
import DabarDifferentials from './components/DabarDifferentials';
import TimelineTab from './components/TimelineTab';
import KingsTab from './components/KingsTab';
import PropheciesTab from './components/PropheciesTab';
import AIConsole from './components/AIConsole';
import PreachingCoach from './components/PreachingCoach';
import SermonStudio from './components/SermonStudio';
import TeiaTab from './components/TeiaTab';
import QuotesExplorer from './components/QuotesExplorer';
import TabernacleTab from './components/TabernacleTab';
import DeepStudiesTab from './components/DeepStudiesTab';
import TypologyTab from './components/TypologyTab';
import MeasuresTab from './components/MeasuresTab';
import MessagesTab from './components/MessagesTab';
import Psalm119Hub from './components/Psalm119Hub';
import DeepBibleMap from './components/DeepBibleMap';
import HeresiesTab from './components/HeresiesTab';
import RevivalsTab from './components/RevivalsTab';
import CouncilsTab from './components/CouncilsTab';
import CustomsTab from './components/CustomsTab';
import ArcheologyTab from './components/ArcheologyTab';
import AcademyTab from './components/AcademyTab';
import CoursesTab from './components/CoursesTab';
import LandingPage from './components/LandingPage';
import ManualTab from './components/ManualTab';
import AppSettings from './components/AppSettings';
import Settings from './components/Settings';
import EntitlementGate from './components/EntitlementGate';
import GlobalSearch from './components/GlobalSearch';
import DiaryTab from './components/DiaryTab';
import PastorDNATab from './components/PastorDNATab';
import StrongDictionaryTab from './components/StrongDictionaryTab';
import ExegesisLab from './components/ExegesisLab';
import BibleTravelSimulator from './components/BibleTravelSimulator';

// Importação do Novo Módulo (Plugin-Only)
import { BiblicalPrayersModule } from './modules/biblical-prayers';

import { entitlementService } from './services/entitlementService';
import { getSermons, saveSermon } from './services/database';
import { UserState, CaptureTarget, SermonType, SermonBlockType } from './types';

// Funil Único
import { registerStudioBridge } from './core/studioFunnel';
import { auth, db } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const NavItem: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string; color?: string }> = ({ active, onClick, icon, label, color }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 p-3 lg:px-4 rounded-xl transition-all ${active ? (color || 'bg-indigo-600') + ' text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
  >
    <div className="shrink-0">{icon}</div>
    <span className="text-[9px] font-black uppercase tracking-widest truncate">{label}</span>
  </button>
);

const DEFAULT_STATE: UserState = {
  isPremium: false,
  theme: 'ocean',
  fontFamily: 'serif',
  fontSize: 'medium',
  savedForSermons: [],
  devotionalEntries: [],
  installedPacks: ['base_logos'],
  aiPreference: 'deep',
  theologicalMode: 'christian',
  activeLayers: ['expository', 'lexical']
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('landing');
  const [navMetadata, setNavMetadata] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  
  const [captureTarget, setCaptureTarget] = useState<CaptureTarget | null>(() => {
    const saved = localStorage.getItem('dabar_capture_target');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeSermonId, setActiveSermonId] = useState<string | null>(() => {
    return localStorage.getItem('dabar_active_sermon_id');
  });

  const [studioFilter, setStudioFilter] = useState<SermonType | 'all'>('all');
  const [firebaseUser, setFirebaseUser] = useState<any>(null);

  const [userState, setUserState] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem('dabar_user_state');
      const parsed = saved ? JSON.parse(saved) : DEFAULT_STATE;
      const entitlement = entitlementService.getStoredEntitlement();
      return { 
        ...DEFAULT_STATE, 
        ...parsed, 
        activeLayers: parsed.activeLayers || DEFAULT_STATE.activeLayers,
        isPremium: parsed.isPremium || entitlementService.isPremiumActive(entitlement)      };
    } catch { return DEFAULT_STATE; }
  });

  // Observador de Autenticação Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        // Buscar status premium no Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            if (data.isPremium) {
              setUserState(prev => ({ ...prev, isPremium: true }));
            } else {
              setUserState(prev => ({ ...prev, isPremium: false }));
            }
          }
        } catch (error) {
          console.error("Erro ao verificar status premium:", error);
        }
      } else {
        // Se deslogar, remove o premium (a menos que seja vitalício local - opcional)
        setUserState(prev => ({ ...prev, isPremium: false }));
      }
    });

    return () => unsubscribe();
  }, []);

  // Verificação periódica de licença (a cada hora)
  useEffect(() => {
    if (userState.isPremium) return; // Vitalício

    const checkEntitlement = () => {
      const entitlement = entitlementService.getStoredEntitlement();
      if (entitlementService.isPremiumActive(entitlement)) {
        setUserState(prev => ({ ...prev, isPremium: true }));
      }
    };

    const interval = setInterval(checkEntitlement, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [userState.isPremium]);

  // Funções de Persistência Core
  const handleSaveRefsToStudio = (refs: string[]) => {
    setUserState(prev => {
      if (refs.length === 1) {
        const ref = refs[0];
        const isPresent = prev.savedForSermons.includes(ref);
        const nextList = isPresent 
          ? prev.savedForSermons.filter(r => r !== ref)
          : [...prev.savedForSermons, ref];
        return { ...prev, savedForSermons: nextList };
      }
      const uniqueRefs = Array.from(new Set([...prev.savedForSermons, ...refs]));
      return { ...prev, savedForSermons: uniqueRefs };
    });
  };

  const handleInjectContent = async (title: string, content: string, type: SermonBlockType = 'library-clip') => {
    const sId = captureTarget?.sermonId || activeSermonId;
    if (!sId) { 
      alert("🎯 Abra um projeto no Estúdio ou trave um alvo antes de capturar."); 
      return; 
    }
    
    try {
      const sermons = await getSermons();
      const sermon = sermons.find(s => s.id === sId);
      if (!sermon) return;
      
      const blocks = Array.isArray(sermon.blocks) ? [...sermon.blocks] : [];
      
      // Sempre adiciona como novo bloco (conforme pedido do usuário)
      blocks.push({ 
        id: `inject_${Date.now()}`, 
        type: type, 
        title: title || captureTarget?.blockTitle || "Captura Academy", 
        content: content 
      });
      
      await saveSermon({ ...sermon, blocks, date: new Date().toISOString() });
      window.dispatchEvent(new CustomEvent("dabar-sync", { detail: { sermonId: sermon.id } }));
      alert(`Conteúdo "${title || 'Captura'}" anexado como novo componente! 🎯`);
    } catch (e) { 
      console.error(e); 
      alert("Erro ao injetar conteúdo.");
    }
  };

  const handleInjectBlocks = async (blocksToAdd: any[]) => {
    // Tenta injetar no sermão ativo
    const sId = activeSermonId || captureTarget?.sermonId;
    if (!sId) { alert("Abra um projeto no Estúdio para injetar esta estrutura."); return; }
    const sermons = await getSermons();
    const sermon = sermons.find(s => s.id === sId);
    if (!sermon) return;
    const updated = { ...sermon, blocks: [...sermon.blocks, ...blocksToAdd], date: new Date().toISOString() };
    await saveSermon(updated);
    window.dispatchEvent(new CustomEvent("dabar-sync", { detail: { sermonId: updated.id } }));
    alert("Estrutura injetada com sucesso!");
  };

  // REGISTRO DO FUNIL ÚNICO
  useEffect(() => {
    registerStudioBridge({
      addRefs: handleSaveRefsToStudio,
      addBlocks: handleInjectBlocks,
      addText: (p) => handleInjectContent(p.title || 'Captura', p.text, p.type)
    });
  }, [captureTarget, activeSermonId, userState.savedForSermons]);

  useEffect(() => { localStorage.setItem('dabar_user_state', JSON.stringify(userState)); }, [userState]);
  
  useEffect(() => {
    if (activeSermonId) localStorage.setItem('dabar_active_sermon_id', activeSermonId);
    else localStorage.removeItem('dabar_active_sermon_id');
  }, [activeSermonId]);

  useEffect(() => {
    if (captureTarget) localStorage.setItem('dabar_capture_target', JSON.stringify(captureTarget));
    else localStorage.removeItem('dabar_capture_target');
  }, [captureTarget]);

  const handleNavigate = (tab: string, metadata?: any) => {
    setActiveTab(tab);
    setNavMetadata(metadata || null);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const getTabTitle = (tab: string) => {
    const titles: Record<string, string> = {
      landing: 'Portal de Formação',
      bible: 'Bíblia Interligada', teia: 'Teia', sermons: 'Estúdio Pro',
      timeline: 'Cronologia Titan', kings: 'Galeria de Reis', measures: 'Metrologia Bíblica',
      prophecies: 'Cânon Profético', heresies: 'Guarda da Fé', diary: 'Diário da Jornada',
      revivals: 'Chamas da História', councils: 'A Batalha pela Verdade',
      customs: 'Costumes Judaicos', archeology: 'Arqueologia Bíblica',
      dna: 'DNA Ministerial', tabernacle: 'Tabernáculo',
      deep_studies: 'Estudos Profundos',
      typology: 'Tipologia', hub: 'Hub', library: 'Biblioteca OCR',
      quotes: 'Vozes da História', messages: 'Manancial de Vida',
      prayers: BiblicalPrayersModule.name, strong: 'Dicionário Strong',
      academy: 'Dabar Academy', courses: 'Idiomas Bíblicos',
      manual: 'Guia do Usuário'
    };
    return titles[tab] || 'Santuário';
  };

  const isTabFree = ['landing', 'manual', 'bible', 'strong', 'messages', 'ajustes', 'settings'].includes(activeTab);

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row ${userState.theme} ${['dark', 'midnight', 'gold'].includes(userState.theme) ? 'dark bg-black' : 'bg-slate-50'}`}>
      {!userState.isPremium && !isTabFree && (
        <EntitlementGate userState={userState} onActivate={() => setUserState(p => ({...p, isPremium: true}))}><div /></EntitlementGate>
      )}
      <>
        {isMenuOpen && <div className="fixed inset-0 bg-black/60 z-[60] lg:hidden" onClick={() => setIsMenuOpen(false)} />}
          {isSearchOpen && <GlobalSearch 
            onClose={() => setIsSearchOpen(false)} 
            onNavigate={handleNavigate} 
            savedForSermons={userState.savedForSermons}
          />}

          <nav className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-[70] transform transition-transform lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto no-scrollbar`}>
            <div className="flex flex-col h-full p-4">
              <div className="flex items-center gap-3 mb-8 px-2">
                 <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black">D</div>
                 <span className="font-black text-xs uppercase tracking-widest dark:text-white">{APP_NAME}</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4 mb-2 block">Navegação</span>
                  <div className="space-y-1">
                    <NavItem active={activeTab === 'landing'} onClick={() => handleNavigate('landing')} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} label="Início" color="bg-slate-900" />
                    <NavItem active={activeTab === 'manual'} onClick={() => handleNavigate('manual')} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} label="Manual" color="bg-indigo-600" />
                  </div>
                </div>

                <div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4 mb-2 block">Estudo & Púlpito</span>
                  <div className="space-y-1">
                    <NavItem active={activeTab === 'bible'} onClick={() => handleNavigate('bible')} icon={ICON_BIBLE('w-5 h-5')} label="Bíblia" />
                    <NavItem active={activeTab === 'strong'} onClick={() => handleNavigate('strong')} icon={ICON_STUDY('w-5 h-5')} label="Dicionário Strong" color="bg-indigo-600" />
                    <NavItem active={activeTab === 'hub'} onClick={() => handleNavigate('hub')} icon={ICON_STUDY('w-5 h-5')} label="Hub" color="bg-blue-600" />
                    <NavItem active={activeTab === 'teia'} onClick={() => handleNavigate('teia')} icon={ICON_NOTE('w-5 h-5')} label="Teia" color="bg-violet-600" />
                    <NavItem active={activeTab === 'sermons'} onClick={() => handleNavigate('sermons')} icon={ICON_SERMON('w-5 h-5')} label="Estúdio Pro" color="bg-emerald-600" />
                    <NavItem active={activeTab === 'dna'} onClick={() => handleNavigate('dna')} icon={ICON_DNA('w-5 h-5')} label="Pastor DNA" color="bg-indigo-700" />
                    <NavItem active={activeTab === 'library'} onClick={() => handleNavigate('library')} icon={ICON_LIBRARY('w-5 h-5')} label="Biblioteca OCR" color="bg-rose-600" />
                  </div>
                </div>

                <div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4 mb-2 block">Cânon & História</span>
                  <div className="space-y-1">
                    <NavItem active={activeTab === 'timeline'} onClick={() => handleNavigate('timeline')} icon={ICON_CHRONOLOGY('w-5 h-5')} label="Cronologia" color="bg-amber-500" />
                    <NavItem active={activeTab === 'councils'} onClick={() => handleNavigate('councils')} icon={ICON_COUNCIL('w-5 h-5')} label="Concílios" color="bg-indigo-600" />
                    <NavItem active={activeTab === 'revivals'} onClick={() => handleNavigate('revivals')} icon={ICON_REVIVAL('w-5 h-5')} label="Avivamentos" color="bg-orange-500" />
                    <NavItem active={activeTab === 'customs'} onClick={() => handleNavigate('customs')} icon={ICON_CUSTOMS('w-5 h-5')} label="Costumes" color="bg-amber-600" />
                    <NavItem active={activeTab === 'archeology'} onClick={() => handleNavigate('archeology')} icon={ICON_ARCHEOLOGY('w-5 h-5')} label="Arqueologia" color="bg-stone-600" />
                    <NavItem active={activeTab === 'kings'} onClick={() => handleNavigate('kings')} icon={ICON_STUDY('w-5 h-5')} label="Reis" color="bg-orange-600" />
                    <NavItem active={activeTab === 'prophecies'} onClick={() => handleNavigate('prophecies')} icon={ICON_BIBLE('w-5 h-5')} label="Profecias" color="bg-rose-600" />
                    <NavItem active={activeTab === 'heresies'} onClick={() => handleNavigate('heresies')} icon={ICON_HERESIES('w-5 h-5')} label="Heresias" color="bg-slate-800" />
                    <NavItem active={activeTab === 'measures'} onClick={() => handleNavigate('measures')} icon={ICON_MEASURES('w-5 h-5')} label="Metrologia" color="bg-cyan-600" />
                  </div>
                </div>

                <div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4 mb-2 block">Vida Espiritual</span>
                  <div className="space-y-1">
                    <NavItem active={activeTab === 'messages'} onClick={() => handleNavigate('messages')} icon={ICON_MESSAGES('w-5 h-5')} label="Manancial" color="bg-blue-600" />
                    <NavItem active={activeTab === 'prayers'} onClick={() => handleNavigate('prayers')} icon={<span className="text-xl">{BiblicalPrayersModule.icon}</span>} label={BiblicalPrayersModule.name} color="bg-indigo-500" />
                    <NavItem active={activeTab === 'diary'} onClick={() => handleNavigate('diary')} icon={ICON_DIARY('w-5 h-5')} label="Diário" color="bg-pink-600" />
                    <NavItem active={activeTab === 'quotes'} onClick={() => handleNavigate('quotes')} icon={ICON_QUOTES('w-5 h-5')} label="Vozes" color="bg-indigo-500" />
                    <NavItem active={activeTab === 'tabernacle'} onClick={() => handleNavigate('tabernacle')} icon={ICON_TABERNACLE('w-5 h-5')} label="Tabernáculo" />
                    <NavItem active={activeTab === 'deep_studies'} onClick={() => handleNavigate('deep_studies')} icon={<span className="text-xl">👑</span>} label="Estudos Profundos" color="bg-indigo-900" />
                    <NavItem active={activeTab === 'typology'} onClick={() => handleNavigate('typology')} icon={ICON_TYPOLOGY('w-5 h-5')} label="Tipologia" />
                  </div>
                </div>

                <div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest px-4 mb-2 block">Dabar Academy</span>
                  <div className="space-y-1">
                    <NavItem active={activeTab === 'academy'} onClick={() => handleNavigate('academy')} icon={<span className="text-xl">🎓</span>} label="Academy" color="bg-slate-900" />
                    <NavItem active={activeTab === 'courses'} onClick={() => handleNavigate('courses')} icon={<span className="text-xl">🌍</span>} label="Idiomas" color="bg-indigo-600" />
                  </div>
                </div>

                <div className="pt-4 border-t dark:border-slate-800">
                  <NavItem active={activeTab === 'ajustes'} onClick={() => handleNavigate('ajustes')} icon={ICON_SETTINGS('w-5 h-5')} label="Ajustes" color="bg-amber-600" />
                  <NavItem active={activeTab === 'settings'} onClick={() => handleNavigate('settings')} icon={ICON_SETTINGS('w-5 h-5')} label="Sistema" color="bg-slate-700" />
                </div>
              </div>
            </div>
          </nav>

          <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
            <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-slate-500 rounded-lg"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                <h1 className="text-xl font-black dark:text-white uppercase tracking-tighter italic truncate pr-2">{getTabTitle(activeTab)}</h1>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={toggleFullscreen} className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl transition-all" title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}>
                  {isFullscreen ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21H5a2 2 0 01-2-2v-4m18 4a2 2 0 01-2 2h-4m4-18a2 2 0 00-2-2h-4m-6-2a2 2 0 00-2 2v4" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  )}
                </button>
                <button onClick={() => setIsSearchOpen(true)} className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-xl transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </header>

            <main className="flex-1 p-4 md:p-8 overflow-y-auto no-scrollbar">
                {activeTab === 'landing' && <LandingPage onNavigate={handleNavigate} />}
                {activeTab === 'manual' && <ManualTab />}
                {activeTab === 'bible' && <BibleReader userState={userState} setUserState={setUserState} captureTarget={captureTarget} metadata={navMetadata} />}
               {activeTab === 'hub' && <DabarHub captureTarget={captureTarget} onInject={handleInjectContent} onNavigate={handleNavigate} />}
               {activeTab === 'teia' && <TeiaTab userState={userState} onNavigate={handleNavigate} />}
               {activeTab === 'sermons' && (
                 <SermonStudio 
                   userState={userState} 
                   captureTarget={captureTarget} 
                   setCaptureTarget={setCaptureTarget} 
                   activeSermonId={activeSermonId} 
                   setActiveSermonId={setActiveSermonId} 
                   filter={studioFilter} 
                   setFilter={setStudioFilter} 
                   setUserState={setUserState}
                 />
               )}
               {activeTab === 'library' && <LibraryExplorer />}
               {activeTab === 'quotes' && <QuotesExplorer userState={userState} captureTarget={captureTarget} />}
               {activeTab === 'timeline' && <TimelineTab userState={userState} setUserState={setUserState} captureTarget={captureTarget} />}
               {activeTab === 'kings' && <KingsTab userState={userState} setUserState={setUserState} />}
               {activeTab === 'measures' && <MeasuresTab userState={userState} setUserState={setUserState} captureTarget={captureTarget} />}
               {activeTab === 'prophecies' && <PropheciesTab userState={userState} setUserState={setUserState} captureTarget={captureTarget} />}
               {activeTab === 'heresies' && <HeresiesTab userState={userState} captureTarget={captureTarget} />}
               {activeTab === 'councils' && <CouncilsTab captureTarget={captureTarget} />}
               {activeTab === 'revivals' && <RevivalsTab captureTarget={captureTarget} />}
               {activeTab === 'customs' && <CustomsTab captureTarget={captureTarget} />}
               {activeTab === 'archeology' && <ArcheologyTab captureTarget={captureTarget} />}
               {activeTab === 'messages' && <MessagesTab userState={userState} captureTarget={captureTarget} />}
               {activeTab === 'prayers' && <BiblicalPrayersModule.component />}
               {activeTab === 'diary' && <DiaryTab />}
               {activeTab === 'dna' && <PastorDNATab />}
               {activeTab === 'tabernacle' && <TabernacleTab userState={userState} setUserState={setUserState} captureTarget={captureTarget} />}
               {activeTab === 'deep_studies' && <DeepStudiesTab userState={userState} captureTarget={captureTarget} />}
               {activeTab === 'typology' && <TypologyTab userState={userState} setUserState={setUserState} captureTarget={captureTarget} />}
               {activeTab === 'strong' && <StrongDictionaryTab onNavigate={handleNavigate} />}
               {activeTab === 'academy' && <AcademyTab userState={userState} setUserState={setUserState} metadata={navMetadata} />}
               {activeTab === 'courses' && <CoursesTab userState={userState} setUserState={setUserState} onNavigate={handleNavigate} />}
               {activeTab === 'ajustes' && <AppSettings userState={userState} setUserState={setUserState} firebaseUser={firebaseUser} />}
               {activeTab === 'settings' && <Settings userState={userState} setUserState={setUserState} firebaseUser={firebaseUser} />}
            </main>
          </div>
        </>
    </div>
  );
};

export default App;
