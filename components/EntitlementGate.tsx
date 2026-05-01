
import React, { useState } from 'react';
import { UserState } from '../types';
import { auth, db } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

interface EntitlementGateProps {
  userState: UserState;
  onActivate: () => void;
  children: React.ReactNode;
}

const EntitlementGate: React.FC<EntitlementGateProps> = ({ userState, onActivate, children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');

  if (userState.isPremium) return <>{children}</>;

  const handleAuth = async () => {
    if (!email.trim() || !password.trim()) return;
    setIsVerifying(true);
    setErrorMsg('');

    try {
      if (mode === 'register') {
        const { createUserWithEmailAndPassword } = await import('firebase/auth');
        const { setDoc } = await import('firebase/firestore');
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          isPremium: false,
          createdAt: new Date().toISOString()
        });
        
        setErrorMsg('Conta criada! No momento você não tem acesso Premium. Adquira na Hotmart e tente novamente se já o fez.');
        auth.signOut();
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Check Firestore for entitlement
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.isPremium) {
             onActivate();
          } else {
             setErrorMsg('Acesso Premium não encontrado para esta conta. Caso tenha comprado recentemente, aguarde a liberação.');
             auth.signOut();
          }
        } else {
           setErrorMsg('Usuário não possui acesso premium ativo.');
           auth.signOut();
        }
      }
    } catch (e: any) {
      console.error("Auth Exception:", e);
      if (e.code === 'auth/invalid-credential' || e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
         setErrorMsg('Email ou senha inválidos.');
      } else if (e.code === 'auth/email-already-in-use') {
         setErrorMsg('Este e-mail já está em uso.');
      } else if (e.code === 'auth/weak-password') {
         setErrorMsg('A senha deve ter pelo menos 6 caracteres.');
      } else if (e.code === 'auth/network-request-failed') {
         setErrorMsg('Erro de Conexão: O Firebase não conseguiu alcançar os servidores. Verifique sua internet ou se há algum bloqueador (Adblock/VPN) impedindo o acesso.');
      } else if (e.code === 'auth/too-many-requests') {
         setErrorMsg('Muitas tentativas. Sua conta foi bloqueada temporariamente. Tente novamente em alguns minutos.');
      } else {
         setErrorMsg('Ocorreu um erro: ' + (e.code || e.message));
      }
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-sky-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Decorativo Estilo HP */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-300 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[60px] shadow-2xl border border-white dark:border-slate-800 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-indigo-600 rounded-[35px] flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-indigo-200 dark:shadow-none">
           <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
           </svg>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-slate-800 dark:text-white mb-3 leading-none">Dabar</h2>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Acesso Premium</p>

        <div className="flex gap-4 mb-8">
           <button 
              onClick={() => { setMode('login'); setErrorMsg(''); }}
              className={`flex-1 pb-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${mode === 'login' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
           >
              Entrar
           </button>
           <button 
              onClick={() => { setMode('register'); setErrorMsg(''); }}
              className={`flex-1 pb-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${mode === 'register' ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
           >
              Cadastrar
           </button>
        </div>

        <div className="space-y-4">
           <div>
              <input 
                type="email" 
                placeholder="Seu e-mail..."
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                className={`w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[25px] px-8 py-5 text-center font-black tracking-widest text-lg outline-none focus:border-indigo-500 dark:text-white transition-all`}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
              />
           </div>
           
           <div>
              <input 
                type="password" 
                placeholder="Sua senha..."
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrorMsg(''); }}
                className={`w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[25px] px-8 py-5 text-center font-black tracking-widest text-lg outline-none focus:border-indigo-500 dark:text-white transition-all`}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
              />
           </div>

           {errorMsg && <p className="text-[10px] font-black text-rose-500 uppercase mt-2 animate-pulse min-h-[30px] flex items-center justify-center">{errorMsg}</p>}

           <button 
             onClick={handleAuth}
             disabled={isVerifying || !email || !password}
             className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white font-black py-5 mt-4 rounded-[25px] shadow-xl transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]"
           >
             {isVerifying ? (
               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
             ) : mode === 'login' ? 'Acessar' : 'Criar Conta'}
           </button>
        </div>

        <div className="mt-12 pt-10 border-t border-slate-50 dark:border-slate-800 flex flex-col gap-4">
           <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-widest">
             Acesso exclusivo para assinantes Hotmart.
           </p>
           <a 
             href="https://hotmart.com/pt-br/marketplace/produtos/dabar/N105641790L?preview=true" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest hover:underline"
           >
             Ainda não possui acesso? Adquira aqui.
           </a>
        </div>
      </div>
      
      <footer className="absolute bottom-10 left-0 right-0 text-center">
         <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">Powered by Hotmart HP Gateway</p>
      </footer>
    </div>
  );
};

export default EntitlementGate;
