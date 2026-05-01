import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { getChapter, saveVerseTokens, initDB, STORES, saveStrongEntry } from '../services/database';
import { BIBLE_METADATA } from '../constants';
import { INITIAL_SEED, STRONG_TOKENS } from '../data';
import { Verse } from '../types';

export const GenerateStrongs: React.FC = () => {
  const [status, setStatus] = useState('Idle');
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [selectedBook, setSelectedBook] = useState('MAT');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);
  const isGeneratingRef = React.useRef(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const addLog = (msg: string) => setLog(prev => [...prev.slice(-10), msg]);

  const run = async () => {
    setIsGenerating(true);
    isGeneratingRef.current = true;
    setStatus('Iniciando Motor Titan...');
    setLog([]);
    
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    try {
      const meta = BIBLE_METADATA[selectedBook as keyof typeof BIBLE_METADATA];
      if (!meta) throw new Error("Livro inválido");

      addLog(`Carregando ${meta.name}...`);
      
      // Carregar todos os capítulos do livro
      let allVerses: any[] = [];
      for (let c = 1; c <= meta.chapters; c++) {
        const chapterVerses = await getChapter(selectedBook, c);
        allVerses = [...allVerses, ...chapterVerses];
      }

      if (allVerses.length === 0) {
        throw new Error("Nenhum versículo encontrado no banco de dados. Sincronize a Bíblia primeiro no menu Configurações.");
      }

      addLog(`Encontrados ${allVerses.length} versículos no banco local.`);
      
      const strongTokens: Record<string, any[]> = {};
      const batchSize = 5; // Processar 5 versículos por vez para economizar cota e evitar corte
      let successCount = 0;

      for (let i = 0; i < allVerses.length; i += batchSize) {
        if (!isGeneratingRef.current) {
          addLog("Geração interrompida pelo usuário.");
          break;
        }

        const batch = allVerses.slice(i, i + batchSize);
        const currentPercent = Math.floor((i / allVerses.length) * 100);
        setProgress(currentPercent);
        setStatus(`Processando ${selectedBook} (${i}/${allVerses.length})...`);
        
        // Verifica se os versículos já possuem tokens (words) no banco
        const hasExistingWords = batch.some(v => v.words && v.words.length > 0);
        if (hasExistingWords) {
          addLog(`Tokens já existem no banco para o lote ${Math.floor(i/batchSize) + 1}. Sincronizando...`);
          for (const verse of batch) {
            if (verse.words && verse.words.length > 0) {
              await saveVerseTokens(verse.id, verse.words);
              successCount++;
            }
          }
          continue; // Pula a chamada do Gemini para este lote
        }

        // Verifica se os versículos já possuem array de strongs
        const hasExistingStrongs = batch.some(v => v.strongs && v.strongs.length > 0);
        if (hasExistingStrongs) {
          addLog(`Array de Strongs já existe no banco para o lote ${Math.floor(i/batchSize) + 1}. Sincronizando...`);
          for (const verse of batch) {
            if (verse.strongs && verse.strongs.length > 0) {
              const words = verse.text.split(/\s+/);
              const tokens = words.map((w: string, idx: number) => ({
                text: w.replace(/[^\wÀ-ÿ]/g, ''),
                strong: verse.strongs![idx] ? [verse.strongs![idx]] : [],
                lemma: [""],
                morph: [""]
              }));
              await saveVerseTokens(verse.id, tokens);
              successCount++;
            }
          }
          continue;
        }

        // Verifica se os versículos já possuem números de Strong no próprio texto (ex: "Deus <H430>" ou "Deus 430" ou "G1")
        const hasInlineStrongs = batch.some(v => /[<\[\(]?[HG]?\d{1,5}[>\]\)]?/i.test(v.text) && /\d{1,5}/.test(v.text));
        
        if (hasInlineStrongs) {
          addLog(`Extraindo tokens localmente do texto para o lote ${Math.floor(i/batchSize) + 1}...`);
          for (const verse of batch) {
            const tokens: any[] = [];
            // Regex para capturar palavras e possíveis números de Strong associados
            const words = verse.text.split(/\s+/);
            const isNT = ['MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'].includes(verse.bookId);
            const prefix = isNT ? 'G' : 'H';
            
            for (let w of words) {
              const strongMatch = w.match(/([<\[\(]?[HG]?\d{1,5}[>\]\)]?)/gi);
              const cleanWord = w.replace(/[<\[\(]?[HG]?\d{1,5}[>\]\)]?/gi, '').replace(/[^\wÀ-ÿ]/g, '');
              
              let formattedStrongs: string[] = [];
              if (strongMatch) {
                formattedStrongs = strongMatch.map((s: string) => {
                  const num = s.replace(/[^\d]/g, '');
                  if (!num) return null;
                  return s.toUpperCase().includes('H') || s.toUpperCase().includes('G') 
                    ? s.toUpperCase().replace(/[<\[\(\)>\]]/g, '') 
                    : `${prefix}${num}`;
                }).filter(Boolean) as string[];
                
                // Filter out placeholder Strongs
                formattedStrongs = formattedStrongs.filter(s => s !== 'H0000' && s !== 'G0000' && s !== 'H0' && s !== 'G0');
              }
              
              if (cleanWord || formattedStrongs.length > 0) {
                if (cleanWord && formattedStrongs.length > 0) {
                  tokens.push({ text: cleanWord, strong: formattedStrongs, lemma: [""], morph: [""] });
                } else if (cleanWord) {
                  tokens.push({ text: cleanWord, strong: [], lemma: [""], morph: [""] });
                } else if (formattedStrongs.length > 0 && tokens.length > 0) {
                  // Se for só o número, anexa à palavra anterior
                  const prev = tokens[tokens.length - 1];
                  formattedStrongs.forEach((s: string) => {
                    if (!prev.strong.includes(s)) prev.strong.push(s);
                  });
                }
              }
            }
            
            if (tokens.length > 0) {
              strongTokens[verse.id] = tokens;
              await saveVerseTokens(verse.id, tokens);
              successCount++;
            }
          }
          continue; // Pula para o próximo lote
        }

        // Verifica se os versículos já possuem tokens no arquivo interno (SEED)
        const hasSeedTokens = batch.some(v => (STRONG_TOKENS as any)[v.id]);
        if (hasSeedTokens) {
          addLog(`Tokens encontrados no arquivo interno para o lote ${Math.floor(i/batchSize) + 1}. Sincronizando...`);
          for (const verse of batch) {
            const staticTokens = (STRONG_TOKENS as any)[verse.id];
            if (staticTokens) {
              await saveVerseTokens(verse.id, staticTokens);
              successCount++;
            }
          }
          continue;
        }

        // Se chegou aqui, não encontrou dados locais, vamos usar a IA
        addLog(`Gerando tokens via Gemini para o lote ${Math.floor(i/batchSize) + 1}...`);
        
        try {
          // 1. Instanciar corretamente o Gemini
          const ai = new GoogleGenAI({
            apiKey: process.env.REACT_APP_GEMINI_API_KEY as string
          });

          const prompt = `Analise os seguintes versículos e forneça os números de Strong, lemma e morfologia para cada palavra.
          Responda estritamente em JSON no formato:
          {
            "verses": [
              {
                "verseId": "MAT 1:1",
                "tokens": [
                  { "text": "Livro", "strong": ["G976"], "lemma": ["biblos"], "morph": ["N-NSF"] }
                ]
              }
            ]
          }
          
          Versículos:
          ${batch.map(v => `[${v.id}] ${v.text}`).join('\n')}`;

          const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
              responseMimeType: "application/json",
            }
          });

          const responseText = response.text;
          if (responseText) {
            const data = JSON.parse(responseText);
            const versesData = data.verses || [];
            
            // 5. Batch no IndexedDB
            const db = await initDB();
            const tx = db.transaction([STORES.VERSES, STORES.STRONG_TOKENS], 'readwrite');
            const verseStore = tx.objectStore(STORES.VERSES);
            const strongTokensStore = tx.objectStore(STORES.STRONG_TOKENS);
            
            for (const vData of versesData) {
              const verseId = vData.verseId;
              const tokens = vData.tokens;
              
              // 2. Validar resposta da IA
              if (!verseId || typeof verseId !== "string") continue;
              if (!Array.isArray(tokens)) continue;
              
              // 3. Normalizar tokens (CRÍTICO)
              const safeTokens = tokens.map((t: any) => {
                let strongs = Array.isArray(t.strong) ? t.strong : (t.strong ? [t.strong] : []);
                strongs = strongs.filter((s: string) => s !== 'H0000' && s !== 'G0000' && s !== 'H0' && s !== 'G0');
                
                return {
                  text: t.text || "",
                  strong: strongs,
                  lemma: Array.isArray(t.lemma) ? t.lemma : (t.lemma ? [t.lemma] : []),
                  morph: Array.isArray(t.morph) ? t.morph : (t.morph ? [t.morph] : [])
                };
              });
              
              const originalVerse = batch.find(v => v.id === verseId);
              if (originalVerse) {
                const originalWords = originalVerse.text.split(/\s+/);
                const alignedTokens = originalWords.map((w: string) => {
                  const cleanW = w.replace(/[^\wÀ-ÿ]/g, '');
                  
                  // 4. Melhor alinhamento (nível avançado)
                  const matchedToken = safeTokens.find((token: any) => 
                    cleanW.toLowerCase() === token.text.toLowerCase()
                  );
                  
                  return matchedToken || { text: cleanW, strong: [], lemma: [], morph: [] };
                });
                
                strongTokensStore.put({ id: verseId, tokens: alignedTokens });
                verseStore.put({ ...originalVerse, words: alignedTokens });
                successCount++;
              }
            }
            
            await new Promise((resolve, reject) => {
              tx.oncomplete = resolve;
              tx.onerror = reject;
            });
          }
          
          await sleep(2000); // Rate limit protection
          
        } catch (err: any) {
          addLog(`Erro na IA para o lote ${Math.floor(i/batchSize) + 1}: ${err.message}`);
        }
      }

      setStatus('Concluído!');
      setProgress(100);
      addLog(`Processamento finalizado. ${successCount} versículos processados.`);
      addLog("Os tokens foram salvos no banco de dados local.");
      
    } catch (error: any) {
      setStatus('Erro');
      addLog(`Falha Crítica: ${error.message}`);
      console.error("Erro crítico na geração:", error);
    } finally {
      setIsGenerating(false);
      isGeneratingRef.current = false;
    }
  };

  const stop = () => {
    setIsGenerating(false);
    isGeneratingRef.current = false;
    addLog("Solicitando interrupção...");
  };

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setStatus('Preparando Importação...');
    addLog(`Lendo arquivo: ${file.name}`);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const content = event.target?.result as string;
        const data = JSON.parse(content);
        
        let count = 0;
        let total = 0;
        let targetData = data;

        // Tenta encontrar a lista de versículos se estiver aninhada
        if (!Array.isArray(data) && typeof data === 'object') {
          if (data.verses && Array.isArray(data.verses)) targetData = data.verses;
          else if (data.data && Array.isArray(data.data)) targetData = data.data;
          else if (data.bible && typeof data.bible === 'object') targetData = data.bible;
        }

        addLog(`Estrutura detectada: ${Array.isArray(targetData) ? 'Array' : 'Objeto'}`);

        // Mapeamento de versículos do banco local para correspondência por texto
        addLog("Mapeando versículos locais...");
        const db = await initDB();
        const dbVerses = await new Promise<any[]>((resolve) => {
          if (!db.objectStoreNames.contains('verses')) return resolve([]);
          const tx = db.transaction('verses', 'readonly');
          const store = tx.objectStore('verses');
          const req = store.getAll();
          req.onsuccess = () => resolve(req.result || []);
          req.onerror = () => resolve([]);
        });

        // Mesclar seed estático com versículos do DB, removendo duplicatas por ID
        const verseMap = new Map<string, any>();
        INITIAL_SEED.forEach(v => verseMap.set(v.id, v));
        dbVerses.forEach(v => verseMap.set(v.id, v));
        const allLocalVerses = Array.from(verseMap.values());

        const fullTextToId = new Map<string, string>();
        const prefixToId = new Map<string, string>();
        const validIds = new Set<string>();
        
        const normalizeText = (t: string) => 
          String(t || "")
           .toLowerCase()
           .normalize("NFD")
           .replace(/[\u0300-\u036f]/g, "")
           .replace(/[^a-z0-9]/g, "");

        const cleanLeadingNumbers = (t: string) => t.replace(/^[0-9]+/, "");

        addLog(`Mapeando ${allLocalVerses.length} versículos locais (Seed + DB)...`);
        allLocalVerses.forEach((v: any) => {
          if (v.id) validIds.add(v.id);
          if (v.text && v.id) {
            const norm = normalizeText(v.text);
            const clean = cleanLeadingNumbers(norm);
            // Prioriza o texto completo
            if (!fullTextToId.has(norm)) fullTextToId.set(norm, v.id);
            if (!fullTextToId.has(clean)) fullTextToId.set(clean, v.id);
            
            // Prefixo como último recurso (apenas se for longo o suficiente para ser único-ish)
            if (clean.length > 25 && !prefixToId.has(clean.substring(0, 25))) {
              prefixToId.set(clean.substring(0, 25), v.id);
            }
          }
        });

        if (Array.isArray(targetData) && targetData.length > 0) {
          addLog("--- Amostra de Comparação ---");
          const localSample = allLocalVerses[0]?.text || "";
          const jsonSample = targetData[0]?.text || "";
          addLog(`Local: "${localSample.substring(0, 40)}..."`);
          addLog(`JSON:  "${jsonSample.substring(0, 40)}..."`);
          addLog(`Local Norm: ${normalizeText(localSample).substring(0, 40)}`);
          addLog(`JSON Norm:  ${normalizeText(jsonSample).substring(0, 40)}`);
          addLog("----------------------------");
        }

        if (Array.isArray(targetData)) {
          total = targetData.length;
          addLog(`Processando ${total} itens...`);
          
          const db = await initDB();
          
          // Processa em lotes de 100 para estabilidade
          const batchSize = 100;
          let failCount = 0;
          const strongsToSave = new Map<string, any>();

          for (let i = 0; i < total; i += batchSize) {
            const batch = targetData.slice(i, i + batchSize);
            const tx = db.transaction([STORES.VERSES, STORES.STRONGS], 'readwrite');
            const verseStore = tx.objectStore(STORES.VERSES);
            const strongStore = tx.objectStore(STORES.STRONGS);
            
            const promises = batch.map(async (item) => {
              let vId = item.verseId || item.id || item.ref || item.reference || item.vId;
              
              // Fallback: Tenta construir ID se tiver book/chapter/verse
              if (!vId && item.chapter && item.verse) {
                const book = item.book || item.bookId || item.b;
                if (book) vId = `${book} ${item.chapter}:${item.verse}`;
              }

              let matchType = "ID Direto";
              
              // Se o ID não for válido no nosso banco, tenta por texto
              if ((!vId || !validIds.has(String(vId))) && typeof item.text === 'string') {
                const norm = normalizeText(item.text);
                const clean = cleanLeadingNumbers(norm);
                const matchedId = fullTextToId.get(norm) || 
                                  fullTextToId.get(clean) || 
                                  prefixToId.get(clean.substring(0, 25)) ||
                                  prefixToId.get(norm.substring(0, 25));
                if (matchedId) {
                  vId = matchedId;
                  matchType = "Texto/Prefixo";
                }
              }

              const vTokens = item.tokens || item.words || item.data;

              if (vId && Array.isArray(vTokens)) {
                return new Promise((resolve) => {
                  // Busca o versículo no nosso mapa local (que já tem Seed + DB)
                  const verse = verseMap.get(String(vId));
                  
                  if (verse) {
                    let updatedWords;
                    if (Array.isArray(verse.words) && verse.words.length > 0) {
                      // Atualiza palavras existentes
                      updatedWords = verse.words.map((w: any, wIdx: number) => {
                        const token = vTokens[wIdx];
                        if (token && typeof token === 'object') {
                          const s = Array.isArray(token.strong) ? token.strong : (token.strong || token.strongs);
                          let sVal = Array.isArray(s) ? s[0] : s;
                          
                          if (sVal === 'H0000' || sVal === 'G0000' || sVal === 'H0' || sVal === 'G0') {
                            sVal = null;
                          }
                          
                          if (sVal) {
                            // Coleta Strong para salvar definição básica
                            if (!strongsToSave.has(sVal)) {
                              strongsToSave.set(sVal, {
                                id: sVal,
                                original: Array.isArray(token.lemma) ? token.lemma[0] : (token.lemma || "?"),
                                transliteration: "?",
                                definition: `Função gramatical: ${Array.isArray(token.morph) ? token.morph[0] : (token.morph || "N/A")}. Importado via JSON.`,
                                pronunciation: "",
                                occurrences: 0
                              });
                            }
                            return { ...w, strong: sVal };
                          }
                        }
                        return w;
                      });
                    } else {
                      // Cria novas palavras a partir dos tokens do JSON
                      updatedWords = vTokens.map((token: any, idx: number) => {
                        if (typeof token === 'object') {
                          const s = Array.isArray(token.strong) ? token.strong : (token.strong || token.strongs);
                          let sVal = Array.isArray(s) ? s[0] : s;
                          
                          if (sVal === 'H0000' || sVal === 'G0000' || sVal === 'H0' || sVal === 'G0') {
                            sVal = null;
                          }
                          
                          if (sVal && !strongsToSave.has(sVal)) {
                            strongsToSave.set(sVal, {
                              id: sVal,
                              original: Array.isArray(token.lemma) ? token.lemma[0] : (token.lemma || "?"),
                              transliteration: "?",
                              definition: `Função gramatical: ${Array.isArray(token.morph) ? token.morph[0] : (token.morph || "N/A")}. Importado via JSON.`,
                              pronunciation: "",
                              occurrences: 0
                            });
                          }
                          return {
                            id: `${vId}-${idx + 1}`,
                            text: token.text || token.t || token.word || "",
                            strong: sVal || undefined,
                            lemma: Array.isArray(token.lemma) ? token.lemma[0] : token.lemma,
                            morph: Array.isArray(token.morph) ? token.morph[0] : token.morph
                          };
                        }
                        return { id: `${vId}-${idx + 1}`, text: String(token) };
                      });
                    }
                    
                    // Salva no IndexedDB
                    const putReq = verseStore.put({ ...verse, words: updatedWords });
                    putReq.onsuccess = () => {
                      count++;
                      if (count <= 3) {
                        addLog(`[${matchType}] Matched: ${vId}`);
                      }
                      resolve(true);
                    };
                    putReq.onerror = () => resolve(false);
                  } else {
                    failCount++;
                    if (failCount <= 3) addLog(`Aviso: Versículo não encontrado no DB: ${vId}`);
                    resolve(false);
                  }
                });
              }
              return Promise.resolve(false);
            });

            await Promise.all(promises);

            // Salva Strongs coletados neste lote
            for (const [sId, entry] of strongsToSave.entries()) {
              strongStore.put(entry);
            }
            strongsToSave.clear();
            
            setProgress(Math.floor((Math.min(i + batchSize, total) / total) * 100));
            setStatus(`Importando (${count}/${total})...`);
            
            // Pequena pausa para não travar a UI
            if (i % 1000 === 0) await new Promise(r => setTimeout(r, 10));
          }
        } else if (typeof targetData === 'object' && targetData !== null) {
          const entries = Object.entries(targetData);
          total = entries.length;
          addLog(`Processando ${total} chaves...`);
          for (const [verseId, tokens] of entries) {
            if (Array.isArray(tokens)) {
              await saveVerseTokens(verseId, tokens);
              count++;
            }
            
            if (count % 100 === 0 || count === total) {
              setProgress(Math.floor((count / total) * 100));
              setStatus(`Importando (${count}/${total})...`);
            }
          }
        } else {
          addLog("ERRO: Formato JSON não reconhecido.");
        }

        setProgress(100);
        setStatus(count > 0 ? 'Importação Concluída!' : 'Falha na Importação');
        addLog(`Resultado: ${count} versículos importados.`);
        if (count === 0) {
          addLog("Dica: Verifique se o JSON segue o padrão esperado.");
          addLog("Certifique-se de que a Bíblia está sincronizada nas Configurações.");
        }
      } catch (err: any) {
        addLog(`Erro na importação: ${err.message}`);
        console.error("Erro no import:", err);
      } finally {
        setIsImporting(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  if (!showGenerator) {
    return (
      <button 
        onClick={() => setShowGenerator(true)}
        className="fixed bottom-4 right-4 z-50 bg-slate-900/50 hover:bg-slate-900 text-white/50 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all text-[8px] font-black uppercase tracking-widest"
      >
        Titan Lexical Lab
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[40px] p-10 shadow-2xl space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black text-white italic tracking-tighter">Titan Lexical Lab</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Gerador de Tokens Strong via IA</p>
          </div>
          <button onClick={() => setShowGenerator(false)} className="text-slate-500 hover:text-white">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select 
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
            className="bg-slate-800 text-white p-4 rounded-2xl font-bold border border-slate-700 outline-none focus:border-indigo-500"
            disabled={isGenerating || isImporting}
          >
            {Object.values(BIBLE_METADATA).map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
          <button 
            onClick={isGenerating ? stop : run}
            disabled={isImporting}
            className={`p-4 rounded-2xl font-black uppercase tracking-widest transition-all ${isGenerating ? 'bg-rose-600 text-white hover:bg-rose-500' : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20'} ${isImporting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isGenerating ? 'Interromper' : 'Iniciar Geração'}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileImport} 
            accept=".json" 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isGenerating || isImporting}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Importar Bíblia com Strong (JSON)
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-widest">
            <span className="text-indigo-400">{status}</span>
            <span className="text-slate-500">{progress}%</span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="bg-black/40 rounded-3xl p-6 h-40 overflow-y-auto font-mono text-[10px] text-emerald-500/80 space-y-1">
          {log.map((m, i) => <div key={i}>{`> ${m}`}</div>)}
          {isGenerating && <div className="animate-pulse">_</div>}
        </div>

        <p className="text-[9px] text-slate-500 font-bold text-center uppercase tracking-tighter">
          Atenção: Este processo consome tokens da API Gemini. Use com moderação para evitar limites de cota.
        </p>
      </div>
    </div>
  );
};
