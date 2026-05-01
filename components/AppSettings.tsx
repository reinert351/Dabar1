
import React, { useState } from 'react';
import { UserState, TheologicalLens } from '../types';
import { auth, db } from '../services/firebase';
import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface AppSettingsProps {
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  firebaseUser: any;
}

const AppSettings: React.FC<AppSettingsProps> = ({ userState, setUserState, firebaseUser }) => {
  const [showSaveToast, setShowSaveToast] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  // Auth Modal State
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const updateState = (key: keyof UserState, value: any) => {
    setUserState(prev => ({ ...prev, [key]: value }));
  };

  const toggleLayer = (layer: TheologicalLens) => {
    const current = userState.activeLayers || [];
    const next = current.includes(layer)
      ? current.filter(l => l !== layer)
      : [...current, layer];
    updateState('activeLayers', next);
  };

  const handleAuthAction = async () => {
    if (!authEmail || !authPassword) return;
    setAuthLoading(true);
    setAuthError('');
    try {
      if (authMode === 'login') {
        await signInWithEmailAndPassword(auth, authEmail, authPassword);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, authEmail, authPassword);
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: authEmail,
          isPremium: false,
          createdAt: new Date().toISOString()
        });
      }
      setShowAuthModal(false);
      setAuthEmail('');
      setAuthPassword('');
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setAuthError('Email ou senha inválidos.');
      } else if (err.code === 'auth/email-already-in-use') {
        setAuthError('Este e-mail já está em uso.');
      } else if (err.code === 'auth/weak-password') {
        setAuthError('A senha deve ter pelo menos 6 caracteres.');
      } else {
        setAuthError('Ocorreu um erro: ' + err.message);
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSave = () => {
    localStorage.setItem('dabar_user_state', JSON.stringify(userState));
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  const getFontSizePx = (size: string) => {
    switch (size) {
      case 'small': return '16px';
      case 'medium': return '20px';
      case 'large': return '24px';
      case 'xl': return '32px';
      default: return '20px';
    }
  };

  const LENSES: { id: TheologicalLens; label: string; icon: string; desc: string }[] = [
    { id: 'expository', label: 'Expositiva', icon: '📖', desc: 'Foco no sentido literal e gramatical do texto.' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 pb-32 relative">
      {/* Feedback de Salvamento */}
      {showSaveToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl font-black uppercase text-xs tracking-widest animate-in slide-in-from-top-10">
          ✓ Configurações Sincronizadas com Sucesso
        </div>
      )}

      {/* CABEÇALHO DE AÇÃO */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-6 rounded-[30px] border border-slate-100 dark:border-slate-700 shadow-sm sticky top-2 z-30 backdrop-blur-md bg-opacity-90">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-500/20">⚙️</div>
            <div>
               <h2 className="text-xl font-black uppercase tracking-tighter dark:text-white italic">Ajustes do Santuário</h2>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Personalize sua experiência de estudo</p>
            </div>
         </div>
         <button 
           onClick={handleSave}
           className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-indigo-600/20 transition-all active:scale-95 flex items-center gap-2"
         >
           <span>Salvar Alterações</span>
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
         </button>
      </div>

      {/* SEÇÃO VISUAL */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
           <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
           <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white">Interface & Leitura</h3>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Temas Expandidos */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
            <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6 text-center">Esquema de Cores do Santuário</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
               <ThemeButton 
                 active={userState.theme === 'light'} 
                 onClick={() => updateState('theme', 'light')} 
                 label="Light" 
                 colors="bg-white border-slate-200"
               />
               <ThemeButton 
                 active={userState.theme === 'dark'} 
                 onClick={() => updateState('theme', 'dark')} 
                 label="Dark" 
                 colors="bg-slate-900 border-slate-700"
               />
               <ThemeButton 
                 active={userState.theme === 'sepia'} 
                 onClick={() => updateState('theme', 'sepia')} 
                 label="Sepia" 
                 colors="bg-[#f4ecd8] border-[#eee8d5]"
               />
               <ThemeButton 
                 active={userState.theme === 'midnight'} 
                 onClick={() => updateState('theme', 'midnight')} 
                 label="Midnight" 
                 colors="bg-black border-slate-800"
               />
               <ThemeButton 
                 active={userState.theme === 'ocean'} 
                 onClick={() => updateState('theme', 'ocean')} 
                 label="Ocean" 
                 colors="bg-sky-100 border-sky-300"
               />
               <ThemeButton 
                 active={userState.theme === 'forest'} 
                 onClick={() => updateState('theme', 'forest')} 
                 label="Forest" 
                 colors="bg-emerald-100 border-emerald-300"
               />
               <ThemeButton 
                 active={userState.theme === 'gold'} 
                 onClick={() => updateState('theme', 'gold')} 
                 label="Gold" 
                 colors="bg-black border-[#d4af37]"
               />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tipografia */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">Família de Fonte</h4>
              <div className="flex gap-3">
                 <button 
                   onClick={() => updateState('fontFamily', 'serif')}
                   className={`flex-1 py-4 rounded-2xl font-serif text-lg transition-all border ${userState.fontFamily === 'serif' ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400'}`}
                 >
                   Abc (Serif)
                 </button>
                 <button 
                   onClick={() => updateState('fontFamily', 'sans')}
                   className={`flex-1 py-4 rounded-2xl font-sans text-lg transition-all border ${userState.fontFamily === 'sans' ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400'}`}
                 >
                   Abc (Sans)
                 </button>
              </div>
            </div>

            {/* Escala de Texto */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tamanho da Fonte</h4>
                  <span className="text-indigo-600 font-bold text-xs uppercase">{userState.fontSize}</span>
               </div>
               <div className="flex items-center gap-4">
                  <span className="text-xs text-slate-400">A</span>
                  <input 
                    type="range" 
                    min="0" max="3" step="1"
                    className="flex-1 accent-indigo-600 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    value={['small', 'medium', 'large', 'xl'].indexOf(userState.fontSize)}
                    onChange={(e) => updateState('fontSize', ['small', 'medium', 'large', 'xl'][parseInt(e.target.value)])}
                  />
                  <span className="text-2xl text-slate-400">A</span>
               </div>
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className="bg-white dark:bg-slate-800 p-10 rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-sm">
           <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[30px] border border-slate-100 dark:border-slate-800">
              <p className={`text-slate-400 text-[9px] font-black uppercase tracking-widest mb-4`}>Preview de Leitura</p>
              <p 
                className={`${userState.fontFamily === 'serif' ? 'bible-text' : 'font-sans'} leading-relaxed text-slate-800 dark:text-slate-200 italic`}
                style={{ fontSize: getFontSizePx(userState.fontSize) }}
              >
                "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." — João 1:1
              </p>
           </div>
        </div>
      </section>

      {/* SEÇÃO CAMADAS TEOLÓGICAS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-1.5 h-8 bg-violet-600 rounded-full"></div>
           <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white">Camadas de Exegese</h3>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
           <p className="text-xs text-slate-500 mb-8 leading-relaxed">
             Ative as camadas de profundidade que deseja ver ao analisar versículos. 
             Estas lentes filtram o conteúdo gerado pela IA e as referências cruzadas.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LENSES.map(lens => (
                <button
                  key={lens.id}
                  onClick={() => toggleLayer(lens.id)}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all text-left ${(userState.activeLayers || []).includes(lens.id as any) ? 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800' : 'bg-slate-50 dark:bg-slate-900 border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <span className="text-2xl">{lens.icon}</span>
                  <div>
                    <h5 className={`font-black text-xs uppercase tracking-tighter mb-1 ${(userState.activeLayers || []).includes(lens.id as any) ? 'text-violet-600' : 'text-slate-700 dark:text-slate-300'}`}>{lens.label}</h5>
                    <p className="text-[10px] text-slate-500 leading-snug">{lens.desc}</p>
                  </div>
                  {(userState.activeLayers || []).includes(lens.id as any) && (
                    <div className="ml-auto text-violet-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    </div>
                  )}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* SEÇÃO GESTÃO DE ACESSO */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-1.5 h-8 bg-rose-500 rounded-full"></div>
           <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white">Conta & Segurança</h3>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                 <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Status da Sessão</h4>
                 <p className="text-slate-800 dark:text-white font-black uppercase tracking-tighter italic">Conectado como: {firebaseUser?.email || 'Visitante'}</p>
                 <p className="text-[9px] text-slate-400 uppercase mt-1">Sua conta sincroniza seu status premium em múltiplos dispositivos.</p>
              </div>
              {firebaseUser ? (
                <button 
                  onClick={() => signOut(auth)}
                  className="w-full md:w-auto bg-rose-50 text-rose-600 hover:bg-rose-100 px-10 py-4 rounded-2xl font-black uppercase text-[10px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Sair da Conta
                </button>
              ) : (
                <div className="flex gap-4 w-full md:w-auto">
                  <button 
                    onClick={() => { setAuthMode('login'); setShowAuthModal(true); setAuthError(''); }}
                    className="flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] transition-all shadow-xl shadow-indigo-600/20 active:scale-95 text-center"
                  >
                    Entrar
                  </button>
                  <button 
                    onClick={() => { setAuthMode('register'); setShowAuthModal(true); setAuthError(''); }}
                    className="flex-1 md:flex-none bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 px-10 py-4 rounded-2xl font-black uppercase text-[10px] transition-all shadow-sm active:scale-95 text-center"
                  >
                    Cadastrar
                  </button>
                </div>
              )}
           </div>
        </div>
      </section>

      {/* Auth Modal Overlay */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-950 p-10 rounded-[50px] shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-sm text-center transform animate-in zoom-in-95">
             <div className="w-20 h-20 bg-indigo-600 rounded-[30px] flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
             </div>
             <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-800 dark:text-white mb-6 italic">{authMode === 'login' ? 'Acessar Conta' : 'Criar Nova Conta'}</h3>
             
             <div className="space-y-4 mb-8">
                <input 
                  type="email"
                  placeholder="Seu e-mail"
                  value={authEmail}
                  onChange={e => setAuthEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none text-center font-bold text-sm dark:text-white transition-all"
                />
                <input 
                  type="password"
                  placeholder="Sua senha"
                  value={authPassword}
                  onChange={e => setAuthPassword(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none text-center font-bold text-sm dark:text-white transition-all"
                />
             </div>

             {authError && <p className="text-[10px] font-black text-rose-500 uppercase mb-6 leading-tight">{authError}</p>}

             <div className="flex flex-col gap-3">
                <button 
                  onClick={handleAuthAction}
                  disabled={authLoading || !authEmail || !authPassword}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {authLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                  {authMode === 'login' ? 'Entrar Agora' : 'Finalizar Cadastro'}
                </button>
                <button 
                  onClick={() => setShowAuthModal(false)}
                  className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 mt-2"
                >
                  Cancelar Procedimento
                </button>
             </div>
          </div>
        </div>
      )}

      {/* SEÇÃO MOTOR TEOLÓGICO */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-1.5 h-8 bg-emerald-500 rounded-full"></div>
           <h3 className="text-xl font-black uppercase tracking-widest text-slate-800 dark:text-white">Engine & Inteligência</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">Motor Dabar AI</h4>
              <div className="space-y-3">
                 <ConfigOption 
                   active={userState.aiPreference === 'lite'} 
                   onClick={() => updateState('aiPreference', 'lite')}
                   title="Lite (Offline-First)" 
                   desc="Usa dados locais e modelos estáticos. Ideal para economia de bateria e uso sem rede."
                 />
                 <ConfigOption 
                   active={userState.aiPreference === 'deep'} 
                   onClick={() => updateState('aiPreference', 'deep')}
                   title="Deep (Gemini Cloud)" 
                   desc="Conecta-se ao Gemini 3 Pro para análises exegéticas avançadas e sínteses complexas."
                 />
              </div>
           </div>

           <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">Véspera Teológica</h4>
              <div className="space-y-3">
                 <ConfigOption 
                   active={userState.theologicalMode === 'christian'} 
                   onClick={() => updateState('theologicalMode', 'christian')}
                   title="Cristocêntrico" 
                   desc="As análises e sermões assumem a divindade de Cristo e a infalibilidade bíblica."
                 />
                 <ConfigOption 
                   active={userState.theologicalMode === 'neutral'} 
                   onClick={() => updateState('theologicalMode', 'neutral')}
                   title="Acadêmico Neutro" 
                   desc="Foco em exegese histórica, gramática e crítica textual sem viés denominacional."
                 />
              </div>
           </div>
        </div>
      </section>

      {/* FOOTER DE MANUTENÇÃO */}
      <footer className="pt-10 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="text-center md:text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dabar Infinity • App Version 2.4.0</p>
            <p className="text-[9px] text-slate-300 uppercase mt-1">Todos os dados são armazenados localmente no seu dispositivo.</p>
         </div>
         <div className="flex gap-3">
            {showResetConfirm ? (
              <>
                <button 
                  onClick={() => { localStorage.clear(); window.location.reload(); }}
                  className="px-8 py-3 bg-rose-600 text-white rounded-2xl font-black text-[10px] uppercase shadow-lg animate-pulse"
                >
                  Confirmar Reset
                </button>
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl font-black text-[10px] uppercase"
                >
                  Cancelar
                </button>
              </>
            ) : (
              <button 
                onClick={() => setShowResetConfirm(true)}
                className="px-8 py-3 bg-rose-50 text-rose-500 rounded-2xl font-black text-[10px] uppercase hover:bg-rose-500 hover:text-white transition-all shadow-lg shadow-rose-500/5"
              >
                Resetar Fábrica
              </button>
            )}
         </div>
      </footer>
    </div>
  );
};

const ThemeButton = ({ active, onClick, label, colors }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${active ? 'border-indigo-600 shadow-md scale-105 bg-indigo-50/50 dark:bg-indigo-900/10' : 'border-transparent opacity-70 hover:opacity-100'}`}
  >
    <div className={`w-12 h-12 rounded-full border ${colors} shadow-inner`}></div>
    <span className={`text-[10px] font-black uppercase ${active ? 'text-indigo-600' : 'text-slate-400'}`}>{label}</span>
  </button>
);

const ConfigOption = ({ active, onClick, title, desc }: any) => (
  <button 
    onClick={onClick}
    className={`w-full text-left p-5 rounded-2xl border transition-all ${active ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800' : 'bg-slate-50 dark:bg-slate-900 border-transparent hover:border-slate-200'}`}
  >
    <h5 className={`font-black text-xs uppercase tracking-tighter mb-1 ${active ? 'text-indigo-600' : 'text-slate-700 dark:text-slate-300'}`}>{title}</h5>
    <p className="text-[10px] text-slate-500 leading-snug">{desc}</p>
  </button>
);

export default AppSettings;

