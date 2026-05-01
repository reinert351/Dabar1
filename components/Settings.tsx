import React, { useState, useEffect, useRef } from 'react';
import { bulkInsertVerses, resetDatabase, getDBStats, exportUserData, importUserData, getStrongStats, saveStrongEntries, clearStrongs } from '../services/database';
import { UserState, Verse, StrongEntry } from '../types';
import { BIBLE_METADATA } from '../constants';
import { INITIAL_SEED, integrateStrongs } from '../data';
import { auth } from '../services/firebase';
import { signOut } from 'firebase/auth';

interface SettingsProps {
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
  firebaseUser: any;
}

const Settings: React.FC<SettingsProps> = ({ userState, setUserState, firebaseUser }) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [progress, setProgress] = useState({ percent: 0, label: 'Omni-Shield em Espera' });
  const [verseCount, setVerseCount] = useState(0);
  const [strongCount, setStrongCount] = useState(0);
  const [errorLog, setErrorLog] = useState<string | null>(null);
  const [debugLog, setDebugLog] = useState<string[]>([]);
  const [showManual, setShowManual] = useState(false);
  const [manualText, setManualText] = useState('');
  const [systemStatus, setSystemStatus] = useState({
    db: 'verificando',
    storage: 'verificando',
    sw: 'verificando'
  });
  const fileInputRef = useRef<HTMLInputElement>(0 as any);

  useEffect(() => {
    checkStats();
    checkIntegrity();
  }, []);

  const checkIntegrity = async () => {
    const status = { db: 'ok', storage: 'ok', sw: 'blocked' };
    
    // Check IndexedDB
    if (!window.indexedDB) {
      status.db = 'não suportado';
    } else {
      try {
        const stats = await getDBStats();
        if (stats.count === 0) status.db = 'vazio';
      } catch(e) { 
        status.db = 'erro-acesso'; 
        addLog(`Erro de Banco: ${e instanceof Error ? e.message : 'Desconhecido'}`);
      }
    }
    
    if (navigator.storage && typeof navigator.storage.persist === 'function') {
      try {
        const isPersisted = await navigator.storage.persisted();
        status.storage = isPersisted ? 'persistido' : 'sessão';
      } catch (e) {
        status.storage = 'sessão';
      }
    }

    try {
      if ('serviceWorker' in navigator) {
        const isRestricted = window.location.hostname.includes('usercontent.goog') || 
                             window.location.hostname.includes('webcontainer') ||
                             window.location.protocol === 'file:';
        
        if (isRestricted) {
          status.sw = 'sandbox-restrito';
        } else {
          const reg = await Promise.race([
            navigator.serviceWorker.getRegistration().catch(() => null),
            new Promise(res => setTimeout(() => res(null), 500))
          ]);
          status.sw = reg ? 'ativo' : 'disponível';
        }
      }
    } catch (err) {
      status.sw = 'origem-bloqueada';
    }
    setSystemStatus(status as any);
  };

  const handleExport = async () => {
    const data = await exportUserData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dabar-logos-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = event.target?.result as string;
        await importUserData(json);
        alert("Santuário Restaurado com Sucesso!");
        window.location.reload();
      } catch (err) {
        alert("Erro ao importar backup.");
      }
    };
    reader.readAsText(file);
  };

  const addLog = (msg: string) => setDebugLog(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 30));

  const checkStats = async () => {
    const stats = await getDBStats();
    const sStats = await getStrongStats();
    setVerseCount(stats.count);
    setStrongCount(sStats.count);
  };

  // MOTOR DE SINCRONIA TITAN v10.0 - RANGE-BASED FALLBACK
  const syncStrongsAuto = async () => {
    setIsSyncing(true);
    setErrorLog(null);
    setProgress({ percent: 0, label: 'Iniciando Protocolo de Sincronia Léxica...' });
    
    const cacheBuster = `?v=${Date.now()}`;
    // Fontes exaustivas em português (com fallbacks e CDNs)
    const sources = [
      `https://raw.githubusercontent.com/voltemosapalavra1-bit/Biblia_Strong/main/data/strong.json${cacheBuster}`,
      `https://cdn.jsdelivr.net/gh/voltemosapalavra1-bit/Biblia_Strong@main/data/strong.json${cacheBuster}`,
      `https://raw.githubusercontent.com/voltemosapalavra1-bit/B-blia_Strong/main/data/strong.json${cacheBuster}`
    ];

    let rawData = null;
    let lastError = '';

    for (const url of sources) {
      try {
        addLog(`Sondando Rota: ${url.includes('jsdelivr') ? 'JSDelivr' : 'GitHub'}`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

        const response = await fetch(url, { 
          method: 'GET', 
          signal: controller.signal,
          mode: 'cors',
          credentials: 'omit',
          headers: { 'Accept': 'application/json' }
        });
        
        clearTimeout(timeoutId);

        if (response.ok) {
          rawData = await response.json();
          addLog("Conexão Estabelecida. Processando base exaustiva...");
          break;
        } else {
          lastError = `HTTP ${response.status}`;
        }
      } catch (e: any) {
        lastError = e.message;
        addLog(`Falha na Rota: ${lastError}. Redirecionando...`);
      }
    }

    if (!rawData) {
      setIsSyncing(false);
      const criticalError = `ERRO CRÍTICO: Não foi possível baixar a base exaustiva (${lastError}). Use o 'Titan Bypass' para importar manualmente o arquivo JSON.`;
      setErrorLog(criticalError);
      alert(criticalError);
      return;
    }

    await processStrongData(rawData);
  };

  const processStrongData = async (rawData: any) => {
    try {
      setIsSyncing(true);
      setProgress({ percent: 2, label: 'Mapeando Chaves Léxicas v10.0...' });
      await new Promise(r => setTimeout(r, 0));
      
      const entries: StrongEntry[] = [];
      
      if (Array.isArray(rawData)) {
        for (let i = 0; i < rawData.length; i++) {
          const item = rawData[i];
          const id = item.number || item.id || item.strong_id;
          if (!id) continue;
          entries.push({
            id: id,
            original: item.lemma || item.original || item.word || '---',
            transliteration: item.xlit || item.transliteration || item.translit || '---',
            definition: item.description || item.definition || item.meaning || 'Aguardando sincronia integral...',
            occurrences: item.occurrences || 0
          });
          
          if (i % 2500 === 0) {
            setProgress({ percent: 2, label: `Extração: ${i.toLocaleString()} registros` });
            await new Promise(r => setTimeout(r, 0));
          }
        }
      } else {
        const keys = Object.keys(rawData);
        for (let k = 0; k < keys.length; k++) {
          const key = keys[k];
          const item = rawData[key];
          entries.push({
            id: key,
            original: item.l || item.lemma || item.original || item.word || '---',
            transliteration: item.x || item.xlit || item.transliteration || item.translit || '---',
            definition: item.d || item.strongs_def || item.definition || item.meaning || 'Aguardando sincronia integral...',
            occurrences: item.occurrences || 0
          });
          
          if (k % 2500 === 0) {
            setProgress({ percent: 2, label: `Extração: ${k.toLocaleString()} registros` });
            await new Promise(r => setTimeout(r, 0));
          }
        }
      }

      if (entries.length === 0) throw new Error("Dataset Nulo.");

      addLog(`${entries.length.toLocaleString()} termos validados.`);
      setProgress({ percent: 5, label: 'Limpando Santuário Local...' });
      
      // Merge Strategy: Só limpa se for carga integral, senão faz merge
      const isFragment = entries.length < 5000;
      if (!isFragment) {
        await clearStrongs();
      }

      // INJEÇÃO TITAN v10.0 - MOTOR FRAGMENTADO
      await saveStrongEntries(entries, (p) => {
        const total = entries.length;
        const current = Math.floor((p * total) / 100);
        setProgress({ 
          percent: p, 
          label: `Injeção Atômica: ${current.toLocaleString()} de ${total.toLocaleString()}` 
        });
      });
      
      const finalStats = await getStrongStats();
      setStrongCount(finalStats.count);
      
      addLog(`Carga Sincronizada: ${finalStats.count} registros.`);
      alert(`SINCRONIZAÇÃO TITAN CONCLUÍDA!\n${finalStats.count.toLocaleString()} termos estão agora protegidos localmente.`);
    } catch (e: any) {
      addLog(`Falha no Motor Titan: ${e.message}`);
      alert("Erro ao processar base de dados.");
    } finally {
      setIsSyncing(false);
      setProgress({ percent: 0, label: 'Omni-Shield em Espera' });
      checkStats();
    }
  };

  const parseAndStoreBible = async (rawData: any) => {
    addLog("Iniciando Deep-Parsing Titan v1.8...");
    setIsSyncing(true);
    
    const abbrevMap: Record<string, string> = {
      'gn': 'GEN', 'ex': 'EXO', 'lv': 'LEV', 'nm': 'NUM', 'dt': 'DEU', 'js': 'JOS', 'jz': 'JDG', 'rt': 'RUT',
      '1sm': '1SA', '2sm': '2SA', '1rs': '1KI', '2rs': '2KI', '1cr': '1CH', '2cr': '2CH', 'ed': 'EZR', 'ne': 'NEH',
      'et': 'EST', 'sl': 'PSA', 'pv': 'PRO', 'ec': 'ECC', 'ct': 'SNG', 'is': 'ISA', 'jr': 'JER',
      'lm': 'LAM', 'dn': 'DAN', 'os': 'HOS', 'jl': 'JOE', 'am': 'AMO', 'ob': 'OBA', 'jn': 'JON',
      'mq': 'MIC', 'na': 'NAH', 'hc': 'HAB', 'sf': 'ZEP', 'ag': 'HAG', 'zc': 'ZEC', 'ml': 'MAL',
      'mt': 'MAT', 'mc': 'MRK', 'lc': 'LUK', 'at': 'ACT', 'rm': 'ROM', '1co': '1CO', '2co': '2CO',
      'gl': 'GAL', 'ef': 'EPH', 'fp': 'PHI', 'cl': 'COL', '1ts': '1TH', '2ts': '2TH', '1tm': '1TI', '2tm': '2TI',
      'tt': 'TIT', 'fm': 'PHM', 'hb': 'HEB', 'tg': 'JAM', '1pe': '1PE', '2pe': '2PE', '1jo': '1JN', '2jo': '2JN',
      '3jo': '3JN', 'jd': 'JUD', 'ap': 'REV'
    };

    const getBookId = (bookObj: any): string | null => {
      const name = (bookObj.name || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const abbrev = (bookObj.abbrev || '').toLowerCase();
      if (abbrev === 'jo' || name === 'jo' || name === 'joao') {
        if (name.includes('joao')) return 'JHN';
        return 'JOB';
      }
      if (abbrev === 'ez' || abbrev === 'ed') {
        if (name.includes('ezequiel')) return 'EZE';
        if (name.includes('esdras') || abbrev === 'ed') return 'EZR';
      }
      if (abbrevMap[abbrev]) return abbrevMap[abbrev];
      if (name.includes('genesis')) return 'GEN';
      if (name.includes('exodo')) return 'EXO';
      if (name.includes('levitico')) return 'LEV';
      if (name.includes('numeros')) return 'NUM';
      if (name.includes('deuteronomio')) return 'DEU';
      if (name.includes('josue')) return 'JOS';
      if (name.includes('juizes')) return 'JDG';
      if (name.includes('rute')) return 'RUT';
      if (name.includes('samuel')) return name.includes('1') ? '1SA' : '2SA';
      if (name.includes('reis')) return name.includes('1') ? '1KI' : '2KI';
      if (name.includes('cronicas')) return name.includes('1') ? '1CH' : '2CH';
      if (name.includes('neemias')) return 'NEH';
      if (name.includes('ester')) return 'EST';
      if (name.includes('salmos')) return 'PSA';
      if (name.includes('proverbios')) return 'PRO';
      if (name.includes('eclesiastes')) return 'ECC';
      if (name.includes('cantares') || name.includes('cantico')) return 'SNG';
      if (name.includes('isaias')) return 'ISA';
      if (name.includes('jeremias')) return 'JER';
      if (name.includes('lamentacoes')) return 'LAM';
      if (name.includes('ezequiel')) return 'EZE';
      if (name.includes('daniel')) return 'DAN';
      if (name.includes('oseias')) return 'HOS';
      if (name.includes('joel')) return 'JOE';
      if (name.includes('amos')) return 'AMO';
      if (name.includes('obadias')) return 'OBA';
      if (name.includes('jonas')) return 'JON';
      if (name.includes('miqueias')) return 'MIC';
      if (name.includes('naum')) return 'NAH';
      if (name.includes('habacuque')) return 'HAB';
      if (name.includes('sofonia')) return 'ZEP';
      if (name.includes('ageu')) return 'HAG';
      if (name.includes('zacarias')) return 'ZEC';
      if (name.includes('malaquias')) return 'MAL';
      if (name.includes('mateus')) return 'MAT';
      if (name.includes('marcos')) return 'MRK';
      if (name.includes('lucas')) return 'LUK';
      if (name.includes('atos')) return 'ACT';
      if (name.includes('romanos')) return 'ROM';
      if (name.includes('corintios')) return name.includes('1') ? '1CO' : '2CO';
      if (name.includes('galatas')) return 'GAL';
      if (name.includes('efesios')) return 'EPH';
      if (name.includes('filipenses')) return 'PHI';
      if (name.includes('colossenses')) return 'COL';
      if (name.includes('tessalonicenses')) return name.includes('1') ? '1TH' : '2TH';
      if (name.includes('timoteo')) return name.includes('1') ? '1TI' : '2TI';
      if (name.includes('tito')) return 'TIT';
      if (name.includes('filemom')) return 'PHM';
      if (name.includes('hebreus')) return 'HEB';
      if (name.includes('tiago')) return 'JAM';
      if (name.includes('pedro')) return name.includes('1') ? '1PE' : '2PE';
      if (name.includes('joao')) {
        if (name.includes('1')) return '1JN';
        if (name.includes('2')) return '2JN';
        if (name.includes('3')) return '3JN';
        return 'JHN';
      }
      if (name.includes('judas')) return 'JUD';
      if (name.includes('apocalipse')) return 'REV';
      return null;
    };

    let booksArray = Array.isArray(rawData) ? rawData : (rawData.books || rawData.biblia || []);
    if (booksArray.length === 0) {
       setIsSyncing(false);
       throw new Error("Dataset Vazio.");
    }

    const versesToInsert: Verse[] = [];
    const mappedBooks = new Set<string>();
    
    booksArray.forEach((bookObj: any) => {
      const bookId = getBookId(bookObj);
      const meta = bookId ? BIBLE_METADATA[bookId] : null;
      const chapters = bookObj.chapters || bookObj.capitulos || [];

      if (meta && Array.isArray(chapters)) {
        mappedBooks.add(meta.id);
        chapters.forEach((chapterVerses: any, cIdx: number) => {
          const versesArray = Array.isArray(chapterVerses) ? chapterVerses : Object.values(chapterVerses);
          versesArray.forEach((vData: any, vIdx: number) => {
            if (vData) {
              const chapter = cIdx + 1;
              const verseNum = vIdx + 1;
              const id = `${meta.id} ${chapter}:${verseNum}`;

              if (typeof vData === 'string') {
                versesToInsert.push({
                  id,
                  bookId: meta.id,
                  book: meta.name,
                  chapter,
                  verse: verseNum,
                  text: vData.trim()
                });
              } else if (typeof vData === 'object') {
                versesToInsert.push({
                  id,
                  bookId: meta.id,
                  book: meta.name,
                  chapter,
                  verse: verseNum,
                  text: vData.text || '',
                  words: vData.words || []
                });
              }
            }
          });
        });
      }
    });

    if (versesToInsert.length === 0) {
       setIsSyncing(false);
       throw new Error("Falha Crítica no Parsing.");
    }

    setProgress({ percent: 30, label: `Consolidando ${versesToInsert.length.toLocaleString()} versículos...` });
    
    // Integrar Strongs antes de salvar no DB
    const enrichedVerses = integrateStrongs(versesToInsert);
    
    await resetDatabase();
    
    await bulkInsertVerses(enrichedVerses, (p) => {
      setProgress({ 
        percent: 30 + Math.floor(p * 0.7), 
        label: `Escrita Titan DB: ${Math.floor((p * versesToInsert.length) / 100).toLocaleString()} registros` 
      });
    });
    
    await checkStats();
    await checkIntegrity();
    setIsSyncing(false);
    alert(`SINCRONIA COMPLETA!\n${mappedBooks.size} livros mapeados.\n${versesToInsert.length.toLocaleString()} versículos salvos.`);
  };

  const syncBibleAuto = async () => {
    setErrorLog(null);
    setDebugLog([]);
    setIsSyncing(true);
    const cacheBuster = `?v=${Date.now()}`;
    const sources = [
      `https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/acf.json${cacheBuster}`,
      `https://cdn.jsdelivr.net/gh/thiagobodruk/biblia@master/json/acf.json${cacheBuster}`
    ];

    let rawData = null;
    let lastError = '';

    for (const url of sources) {
      try {
        addLog(`Sondando Repositório Bíblico (${url.includes('jsdelivr') ? 'JSDelivr' : 'GitHub'})...`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s para Bíblia (arquivo maior)

        const response = await fetch(url, { 
          method: 'GET',
          signal: controller.signal,
          mode: 'cors',
          credentials: 'omit',
          headers: { 'Accept': 'application/json' }
        });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        rawData = await response.json();
        addLog("Bíblia baixada com sucesso. Iniciando indexação...");
        break;
      } catch (e: any) {
        lastError = e.message;
        addLog(`Falha na Rota Bíblica (${url.includes('jsdelivr') ? 'JSDelivr' : 'GitHub'}): ${lastError}`);
      }
    }

    if (rawData) {
      await parseAndStoreBible(rawData);
    } else {
      setIsSyncing(false);
      setErrorLog(`ERRO CRÍTICO: Falha na conexão com o repositório bíblico (${lastError}). Verifique seu DNS ou use o Titan Bypass.`);
      alert("Falha na sincronização remota.");
    }
  };

  const activateLocalSeed = async () => {
    setIsSyncing(true);
    await resetDatabase();
    await bulkInsertVerses(INITIAL_SEED, (p) => {
      setProgress({ percent: p, label: 'Injetando Seed de Emergência...' });
    });
    await checkStats();
    await checkIntegrity();
    setIsSyncing(false);
    alert("Seed Local Ativado.");
  };

  const handleManualImport = async () => {
    if (!manualText) return;
    setIsSyncing(true);
    try {
      const json = JSON.parse(manualText);
      
      // Heurística de Detecção Automática Titan v10 (Suporta fragmentos H/G ou Integral)
      // Checa chaves comuns em fragmentos como H0001, G0500 ou o array de StrongEntry
      const keys = Object.keys(json);
      const isStrong = keys.some(k => k.startsWith('H') || k.startsWith('G')) || (Object.values(json)[0] as any)?.transliteration;
      
      if (isStrong) {
        addLog("Detectado: Dataset Strong (Fragmento ou Integral). Iniciando Injeção...");
        await processStrongData(json);
      } else {
        addLog("Detectado: Dataset Bíblico. Iniciando Deep-Parsing...");
        await parseAndStoreBible(json);
      }
      
      setManualText('');
      setShowManual(false);
    } catch (e) {
      alert("ERRO DE SINTAXE: O conteúdo colado não é um JSON válido. Verifique se copiou o fragmento integralmente.");
      setIsSyncing(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in pb-40">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <IntegrityCard 
          label="Cérebro Titan (DB)" 
          status={systemStatus.db === 'ok' ? 'Online' : systemStatus.db === 'vazio' ? 'Vazio' : 'Falha'}
          color={systemStatus.db === 'ok' ? 'bg-emerald-500' : 'bg-rose-500'}
          sub={`${verseCount.toLocaleString()} registros`}
        />
        <IntegrityCard 
          label="Léxico Strong" 
          status={strongCount > 0 ? 'Disponível' : 'Vazio'}
          color={strongCount > 0 ? 'bg-indigo-500' : 'bg-amber-500'}
          sub={`${strongCount.toLocaleString()} definições`}
        />
        <IntegrityCard 
          label="Modo Offline" 
          status={systemStatus.sw === 'ativo' ? 'Ativado' : systemStatus.sw.includes('restrito') ? 'Sandbox' : 'Indisponível'}
          color={systemStatus.sw === 'ativo' ? 'bg-emerald-500' : 'bg-slate-400'}
          sub={systemStatus.sw.includes('restrito') ? 'Restrição de Origem' : 'Status do PWA'}
        />
      </div>

      <div className="bg-white dark:bg-slate-900 p-10 rounded-[60px] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
           <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Cofre de Dados</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Gestão de Resiliência e Backup</p>
           </div>
           <div className="flex gap-2 w-full md:w-auto">
              <button onClick={handleExport} className="flex-1 md:flex-none bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] shadow-lg">Exportar Tudo</button>
              <button onClick={() => fileInputRef.current?.click()} className="flex-1 md:flex-none bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-8 py-4 rounded-2xl font-black uppercase text-[10px]">Restaurar Backup</button>
              <input ref={fileInputRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
           </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
          O Dabar salva seus dados localmente. Para garantir que seus sermões e notas nunca sejam perdidos, exporte regularmente seu santuário digital para um local seguro.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-10 rounded-[60px] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
           <div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Gestão de Acesso</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Conectado como: {firebaseUser?.email || 'Visitante'}</p>
           </div>
           {firebaseUser && (
             <button 
               onClick={() => signOut(auth)}
               className="w-full md:w-auto bg-rose-50 text-rose-600 hover:bg-rose-100 px-10 py-4 rounded-2xl font-black uppercase text-[10px] transition-colors"
             >
               Sair da Conta
             </button>
           )}
        </div>
      </div>

      <div className="bg-slate-950 p-12 rounded-[60px] text-white shadow-2xl border border-indigo-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-600/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex justify-between items-center">
             <div>
                <h3 className="text-6xl font-black italic tracking-tighter uppercase mb-2">Titan v10.0</h3>
                <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.6em] mb-10">Sincronização Fragmentada Exaustiva</p>
             </div>
             <div className="hidden md:flex gap-4">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                   <span className="text-[8px] font-black text-slate-500 uppercase block mb-1">Integridade Atômica</span>
                   <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Verificado</span>
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[45px] backdrop-blur-3xl shadow-inner group">
              <span className="text-[10px] font-black uppercase opacity-40 block mb-4 tracking-widest flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${verseCount > 31000 ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-rose-500 animate-pulse shadow-[0_0_10px_#f43f5e]'}`}></div>
                Cânon Bíblico (ACF)
              </span>
              <div className="flex items-baseline gap-4">
                <div className={`text-7xl font-black font-mono tracking-tighter transition-colors ${verseCount > 31000 ? 'text-indigo-400' : 'text-rose-400'}`}>
                  {verseCount.toLocaleString()}
                </div>
                <span className="text-slate-500 font-black text-xl italic uppercase tracking-tighter">registros</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-[45px] backdrop-blur-3xl shadow-inner group">
              <span className="text-[10px] font-black uppercase opacity-40 block mb-4 tracking-widest flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${strongCount > 14000 ? 'bg-amber-500 shadow-[0_0_10px_#f59e0b]' : 'bg-slate-600 shadow-[0_0_10px_#475569]'}`}></div>
                Dicionário Strong
              </span>
              <div className="flex items-baseline gap-4">
                <div className={`text-7xl font-black font-mono tracking-tighter transition-colors ${strongCount > 14000 ? 'text-amber-400' : 'text-slate-500'}`}>
                  {strongCount.toLocaleString()}
                </div>
                <span className="text-slate-500 font-black text-xl italic uppercase tracking-tighter">termos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-12 rounded-[60px] border border-slate-100 dark:border-slate-800 shadow-sm relative">
        {errorLog && (
          <div className="mb-12 p-10 bg-rose-50 dark:bg-rose-950/20 border-l-[16px] border-rose-600 rounded-3xl animate-in slide-in-from-top-6">
             <h5 className="font-black uppercase text-[11px] text-rose-600 tracking-widest mb-4">Falha Crítica de Sincronia</h5>
             <p className="font-bold text-2xl text-rose-900 dark:text-rose-100 leading-tight mb-10">{errorLog}</p>
             <div className="flex gap-4">
                <button onClick={activateLocalSeed} className="bg-rose-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] shadow-xl">Ativar Seed Offline</button>
                <button onClick={() => setShowManual(true)} className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px]">Titan Bypass v10.0</button>
             </div>
          </div>
        )}

        {isSyncing ? (
          <div className="space-y-12 py-10">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.5em] mb-6 animate-pulse">{progress.label}</span>
                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter italic">Escrita Atômica...</span>
              </div>
              <span className="text-8xl font-black text-indigo-600 italic tracking-tighter">{progress.percent}%</span>
            </div>
            <div className="h-10 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border-4 border-white dark:border-slate-950 shadow-inner">
              <div className="h-full bg-indigo-600 rounded-full transition-all duration-300" style={{ width: `${progress.percent}%` }} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <button onClick={syncBibleAuto} className="bg-indigo-600 hover:bg-indigo-700 text-white p-12 md:p-24 rounded-[60px] transition-all shadow-2xl flex flex-col items-center justify-center gap-8 group">
              <svg className="w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter block">Bíblia (ACF)</span>
                <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">66 Livros / Sincronia Remota</span>
              </div>
            </button>
            <button 
              onClick={syncStrongsAuto} 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 p-12 md:p-24 rounded-[60px] transition-all shadow-2xl flex flex-col items-center justify-center gap-8 group"
            >
              <svg className="w-16 h-16 md:w-20 md:h-20 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <div className="text-center">
                <span className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter block">Dicionário Strong</span>
                <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">Sincronia Exaustiva (14k+)</span>
              </div>
            </button>
          </div>
        )}

        {showManual && (
          <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in zoom-in-95">
             <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[70px] shadow-2xl flex flex-col p-16 relative">
                <button onClick={() => setShowManual(false)} className="absolute top-12 right-12 text-slate-400 hover:text-rose-600 transition-colors">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-2 italic uppercase tracking-tighter">Injeção Manual Titan</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-10">O motor v10.0 detectará automaticamente se o conteúdo é um fragmento (ex: H0001, G0500) ou a base integral.</p>
                <textarea 
                  className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-[40px] p-10 font-mono text-[10px] mb-10 min-h-[400px] outline-none dark:text-white"
                  placeholder="Cole o JSON (integral ou fragmento de faixa) aqui..."
                  value={manualText}
                  onChange={e => setManualText(e.target.value)}
                />
                <button onClick={handleManualImport} className="w-full bg-indigo-600 text-white font-black py-10 rounded-[40px] text-2xl uppercase tracking-tighter italic shadow-3xl">Validar & Processar Offline</button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const IntegrityCard = ({ label, status, color, sub }: any) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-[35px] border border-slate-100 dark:border-slate-700 shadow-sm">
    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3">{label}</span>
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color} shadow-[0_0_8px_rgba(0,0,0,0.1)]`}></div>
      <span className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">{status}</span>
    </div>
    <p className="text-[9px] font-bold text-slate-400 uppercase mt-2">{sub}</p>
  </div>
);

export default Settings;