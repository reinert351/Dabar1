
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
        
        setErrorMsg('Conta criada! No momento você não tem acesso Premium. Realize o pagamento e envie o comprovante.');
        auth.signOut();
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Check Firestore for entitlement
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          // Note: Session sync is now handled by useSessionMonitor hook
          if (userData.isPremium || userData.isAdmin) {
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
         setErrorMsg('Erro de Conexão: O Firebase não conseguiu alcançar os servidores. Se estiver no AI Studio, tente abrir o app em uma NOVA ABA, ou desative seu AdBlock/VPN.');
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
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-sky-50 dark:bg-slate-950">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 py-12 relative">
        {/* Background Decorativo Estilo HP */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-300 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[30px] md:rounded-[50px] shadow-2xl border border-white dark:border-slate-800 text-center animate-in zoom-in-95 duration-500">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 rounded-[25px] md:rounded-[30px] flex items-center justify-center text-white mx-auto mb-6 md:mb-8 shadow-2xl shadow-indigo-200 dark:shadow-none">
           <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
           </svg>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-slate-800 dark:text-white mb-2 leading-none">Dabar</h2>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6">Acesso Premium</p>

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

        <div className="space-y-3">
           <div>
              <input 
                type="email" 
                placeholder="Seu e-mail..."
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                className={`w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[20px] px-6 py-4 text-center font-black tracking-widest text-base md:text-lg outline-none focus:border-indigo-500 dark:text-white transition-all`}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
              />
           </div>
           
           <div>
              <input 
                type="password" 
                placeholder="Sua senha..."
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrorMsg(''); }}
                className={`w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-[20px] px-6 py-4 text-center font-black tracking-widest text-base md:text-lg outline-none focus:border-indigo-500 dark:text-white transition-all`}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
              />
           </div>

           {errorMsg && <p className="text-[10px] font-black text-rose-500 uppercase mt-2 animate-pulse min-h-[30px] flex items-center justify-center">{errorMsg}</p>}

           <button 
             onClick={handleAuth}
             disabled={isVerifying || !email || !password}
             className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 text-white font-black py-4 mt-2 rounded-[20px] shadow-xl transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]"
           >
             {isVerifying ? (
               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
             ) : mode === 'login' ? 'Acessar' : 'Criar Conta'}
           </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center">
           <div className="flex flex-col items-center mb-4">
             <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full mb-2">Pagamento via PIX</span>
             <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">R$ 97,90</span>
           </div>
           
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
             Chave PIX (CPF)
           </p>
           <div className="bg-slate-50 dark:bg-slate-800/50 w-full py-3 rounded-2xl mb-6 shadow-inner border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center">
             <p className="text-xl font-black text-slate-800 dark:text-white tracking-widest select-all">
               79910262991
             </p>
             <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
               Marcelo Reinert
             </p>
           </div>
           
           <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 text-left w-full space-y-2 pl-4 border-l-2 border-emerald-500/50 mb-6">
             <p className="uppercase tracking-widest text-[#25D366] text-[10px] mb-2 font-black">Após o pagamento envie:</p>
             <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Comprovante de pagamento</p>
             <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> E-mail usado no cadastro</p>
           </div>
           
           <a 
             href="https://wa.me/5547999458205?text=Ol%C3%A1,%20gostaria%20de%20enviar%20o%20meu%20comprovante%20de%20pagamento%20para%20libera%C3%A7%C3%A3o%20do%20Dabar." 
             target="_blank" 
             rel="noopener noreferrer"
             className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black py-4 rounded-[25px] shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]"
           >
             Enviar Comprovante
           </a>
        </div>
      </div>
        
      <footer className="mt-8 relative z-10 text-center">
         <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em]">Plataforma Dabar</p>
      </footer>
      </div>
    </div>
  );
};

export default EntitlementGate;
