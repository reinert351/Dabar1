import { useEffect, useRef } from 'react';
import { auth, db } from '../services/firebase';
import { doc, onSnapshot, updateDoc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Hook para monitorar se a conta está sendo usada em outro dispositivo ou aba.
 */
export const useSessionMonitor = () => {
  const isSetup = useRef<string | null>(null);

  useEffect(() => {
    // ID único desta aba - Gerado NOVO toda vez que a página carrega
    const instanceId = "v3_aba_" + Math.random().toString(36).substring(2, 10) + "_" + Date.now();
    let unsubscribe: (() => void) | null = null;
    
    console.log(`[SESSION MONITOR V3] Iniciado. ID Local: ${instanceId}`);

    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      // 1. Limpeza se deslogar ou mudar usuário
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }

      if (!user) {
        isSetup.current = null;
        return;
      }

      // Evita duplicar setup para o mesmo usuário nesta aba
      if (isSetup.current === user.uid) return;
      isSetup.current = user.uid;

      console.log(`[Monitor] Configurando monitor para: ${user.email} (UID: ${user.uid})`);

      const userRef = doc(db, 'users', user.uid);

      // 2. Assumir o controle da sessão (Quem abre a aba por último "manda")
      try {
        await updateDoc(userRef, {
          lastSessionId: instanceId,
          lastLoginAt: new Date().toISOString()
        });
        console.log(`[Monitor] Sessão assumida localmente: ${instanceId}`);
      } catch (err: any) {
        console.error("[Monitor] Erro ao assumir sessão no Firestore:", err);
        // Se houver erro de permissão ou cota, o monitor pode não ser confiável
        if (err.code === 'permission-denied') {
          console.warn("[Monitor] Sem permissão para atualizar status. Verifique as REGRAS.");
        }
      }

      // 3. Ouvir mudanças em TEMPO REAL
      // Quando QUALQUER aba/dispositivo mudar o documento, todas as outras abas recebem este evento
      unsubscribe = onSnapshot(userRef, (snapshot) => {
        if (!snapshot.exists()) {
          console.warn("[Monitor] Documento do usuário não existe no Firestore.");
          return;
        }

        const data = snapshot.data();
        const serverSid = data.lastSessionId;

        console.log(`[SESSION MONITOR V3] Update: Local=${instanceId} | DB=${serverSid}`);

        // Se o ID no servidor for diferente do ID desta aba, significa que outra aba assumiu a sessão
        if (serverSid && serverSid !== instanceId) {
          console.error(`[Monitor] CONFLITO DETECTADO! Outro dispositivo assumiu a sessão (${serverSid}).`);
          
          alert("Sessão Encerrada: Sua conta foi aberta em outra aba ou navegador. Você será desconectado para garantir a segurança.");
          
          auth.signOut().then(() => {
            // Recarrega para limpar estados residuais e redirecionar para a landing/login
            window.location.reload();
          });
        }
      }, (error) => {
        console.error("[Monitor] Erro no listener onSnapshot:", error);
      });
    });

    return () => {
      unsubAuth();
      if (unsubscribe) unsubscribe();
    };
  }, []);
};
