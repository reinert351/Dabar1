
import { Verse, Sermon, CommentaryEntry, AICommentCache, LibraryClip, PulpitSession, CoachingReport, TeiaGraph, StrongEntry, DiaryEntry, Hymn, StrongToken } from '../types';
import { STRONGS_DATA, STRONG_TOKENS, integrateStrongs, INITIAL_SEED } from '../data';
import { ACADEMY_DATA } from '../data/academy_data';
import { MEASURES_DATA } from '../data/measures_data';
import { KINGS_DATA } from '../data/kings_data';
import { PROPHECIES_DATA } from '../data/prophecies_data';
import { revivalsData } from '../data/revivals_data';
import { councilsData } from '../data/councils_data';
import { customsData } from '../data/customs_data';
import { archeologyData } from '../data/archeology_data';
import { HERESIES_DATA } from '../data/heresies_data';
import { HISTORICAL_QUOTES } from '../data/quotes_data';
import { MANANCIAIS_DATA } from '../data/messages_data';
import { DITOS_DUROS } from '../data/ditosDuros';
import { HISTORICAL_PERIODS_DATA } from '../data/historical_periods';
import { COURSES_DATA } from '../data/courses_data';
import { TYPOLOGY_DATA } from '../components/TypologyTab';
import { DEEP_MAP_DATA } from '../data/deep_map_data';
import { PARABLES_DATA } from '../data/parables_data';
import { PRAYERS_30 } from '../modules/biblical-prayers/data/prayers_30';
import { MARTYRS_DATA } from '../data/martyrs_data';
import { APOCRYPHA_DATA } from '../data/apocrypha_data';
import { SPECIAL_STUDIES_DATA } from '../data';
import { tabernacleData } from '../components/TabernacleVisualExplorer';
import { ABRAHAM_JOURNEY } from '../components/AbrahamJourney';
import { 
  DABAR_DICTIONARY, HISTORICAL_CONTEXTS, THEOLOGICAL_TOPICS, 
  SERMON_OUTLINES, COMMON_ERRORS, NT_OT_CONNECTIONS, 
  BIBLICAL_PROFILES, INTERTESTAMENTAL_CONTEXT, BIBLE_QUOTES, 
  READING_PLANS, GLOBAL_TIMELINE_EVENTS, DEVOTIONALS, 
  TIMELINE_EVENTS, THEMATIC_PRAYERS, DISPENSATIONS_DETAILED 
} from '../data/dabar_hub';

import { fetchStrongFromGemini, fetchVerseTokensFromGemini } from './geminiStrongService';

const DB_NAME = 'DabarDB';
const DB_VERSION = 48; 

export const STORES = {
  VERSES: 'verses',
  SERMONS: 'sermons',
  ENTRIES: 'commentary_entries',
  AI_CACHE: 'ai_comment_cache',
  LIBRARY: 'library_clips',
  COACHING: 'coaching_reports',
  GRAPH_CACHE: 'graph_cache',
  PENDING_SCANS: 'pending_scans',
  DOCUMENTS: 'ocr_documents',
  PAGES: 'ocr_pages',
  STRONGS: 'strongs',
  STRONG_TOKENS: 'strong_tokens',
  DIARY: 'diary',
  HYMNS: 'hymns'
};

const normalize = (w: any) => (String(w || '')).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");

let dbInstance: IDBDatabase | null = null;

export const initDB = (): Promise<IDBDatabase> => {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (event.oldVersion && event.oldVersion < 48) {
          if (db.objectStoreNames.contains(STORES.STRONGS)) {
            db.deleteObjectStore(STORES.STRONGS);
          }
        }
        
        if (!db.objectStoreNames.contains(STORES.VERSES)) {
          const vStore = db.createObjectStore(STORES.VERSES, { keyPath: 'id' });
          vStore.createIndex('book_chapter', ['bookId', 'chapter'], { unique: false });
        }
        if (!db.objectStoreNames.contains(STORES.ENTRIES)) {
          const eStore = db.createObjectStore(STORES.ENTRIES, { keyPath: 'id' });
          eStore.createIndex('refStart', 'refStart', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORES.SERMONS)) db.createObjectStore(STORES.SERMONS, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(STORES.AI_CACHE)) db.createObjectStore(STORES.AI_CACHE, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(STORES.LIBRARY)) db.createObjectStore(STORES.LIBRARY, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(STORES.COACHING)) db.createObjectStore(STORES.COACHING, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(STORES.GRAPH_CACHE)) db.createObjectStore(STORES.GRAPH_CACHE, { keyPath: 'queryHash' });
        if (!db.objectStoreNames.contains(STORES.STRONGS)) db.createObjectStore(STORES.STRONGS, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(STORES.STRONG_TOKENS)) db.createObjectStore(STORES.STRONG_TOKENS, { keyPath: 'verseId' });
        if (!db.objectStoreNames.contains(STORES.DIARY)) {
           const dStore = db.createObjectStore(STORES.DIARY, { keyPath: 'id' });
           dStore.createIndex('date', 'date', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORES.HYMNS)) {
           const hStore = db.createObjectStore(STORES.HYMNS, { keyPath: 'id' });
           hStore.createIndex('number', 'number', { unique: true });
        }
        if (!db.objectStoreNames.contains(STORES.DOCUMENTS)) db.createObjectStore(STORES.DOCUMENTS, { keyPath: 'id' });
        if (!db.objectStoreNames.contains(STORES.PAGES)) {
          const pStore = db.createObjectStore(STORES.PAGES, { keyPath: 'id' });
          pStore.createIndex('docId', 'docId', { unique: false });
        }
        if (!db.objectStoreNames.contains(STORES.PENDING_SCANS)) {
          db.createObjectStore(STORES.PENDING_SCANS, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => { dbInstance = request.result; resolve(dbInstance); };
      request.onerror = () => reject(request.error);
    } catch (err) { reject(err); }
  });
};

export const getVersesByStrong = async (strongId: string): Promise<string[]> => {
  if (!strongId) return [];
  const normalizedId = strongId.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2');
  
  if (normalizedId === 'H0000' || normalizedId === 'G0000' || normalizedId === 'H0' || normalizedId === 'G0') {
    return [];
  }

  const results: string[] = [];
  
  // 1. Search in static STRONG_TOKENS (local)
  for (const [verseId, tokens] of Object.entries(STRONG_TOKENS)) {
    if ((tokens as any[]).some(t => {
      const s = Array.isArray(t.strong) ? t.strong[0] : t.strong;
      if (!s) return false;
      const normS = s.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2');
      return normS === normalizedId;
    })) {
      results.push(verseId);
    }
  }

  // 2. Search in IndexedDB (STRONG_TOKENS store)
  const db = await initDB();
  const txTokens = db.transaction(STORES.STRONG_TOKENS, 'readonly');
  const storeTokens = txTokens.objectStore(STORES.STRONG_TOKENS);
  const allTokens = await new Promise<any[]>((resolve) => {
    const req = storeTokens.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });

  allTokens.forEach(entry => {
    if (entry.tokens.some((t: any) => {
      const s = Array.isArray(t.strong) ? t.strong[0] : t.strong;
      if (!s) return false;
      const normS = s.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2');
      return normS === normalizedId;
    })) {
      if (!results.includes(entry.verseId)) results.push(entry.verseId);
    }
  });

  // 3. Search in IndexedDB (VERSES store - check for 'words' property)
  const txVerses = db.transaction(STORES.VERSES, 'readonly');
  const storeVerses = txVerses.objectStore(STORES.VERSES);
  const allVerses = await new Promise<Verse[]>((resolve) => {
    const req = storeVerses.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });

  allVerses.forEach(v => {
    if (v.words && v.words.some((w: any) => {
      const s = Array.isArray(w.strong) ? w.strong[0] : w.strong;
      if (!s) return false;
      const normS = s.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2');
      return normS === normalizedId;
    })) {
      if (!results.includes(v.id)) results.push(v.id);
    }
  });

  return results;
};

export const getVerseTokens = async (verseId: string, text: string, skipGemini: boolean = false): Promise<any[]> => {
  // 1. Try IndexedDB (STRONG_TOKENS store)
  const db = await initDB();
  const localTokens = await new Promise<any[] | null>((resolve) => {
    if (!db.objectStoreNames.contains(STORES.STRONG_TOKENS)) return resolve(null);
    const tx = db.transaction(STORES.STRONG_TOKENS, 'readonly');
    const store = tx.objectStore(STORES.STRONG_TOKENS);
    const req = store.get(verseId);
    req.onsuccess = () => resolve(req.result ? req.result.tokens : null);
    req.onerror = () => resolve(null);
  });

  if (localTokens) return localTokens;

  // 2. Try IndexedDB (VERSES store - check for 'words' property)
  const verseData = await getVerseById(verseId);
  if (verseData && verseData.words && verseData.words.length > 0) {
    // Save to STRONG_TOKENS for faster access next time
    saveVerseTokens(verseId, verseData.words).catch(console.error);
    return verseData.words;
  }

  // 3. Try static data (SEED)
  const staticTokens = (STRONG_TOKENS as any)[verseId];
  if (staticTokens) {
    // Save to IndexedDB for faster access next time
    saveVerseTokens(verseId, staticTokens).catch(console.error);
    return staticTokens;
  }

  // 3.5. Parse from verse text if it contains Strong numbers inline (e.g. "Deus <H430>")
  if (/[HG]\d{1,5}/.test(text)) {
    const tokens: any[] = [];
    const words = text.split(/\s+/);
    
    for (let w of words) {
      const strongMatch = w.match(/([HG]\d{1,5})/g);
      const cleanWord = w.replace(/[<\[\(]?[HG]\d{1,5}[>\]\)]?/g, '').replace(/[^\wÀ-ÿ]/g, '');
      
      if (cleanWord || strongMatch) {
        if (cleanWord && strongMatch) {
          tokens.push({ text: cleanWord, strong: strongMatch, lemma: [""], morph: [""] });
        } else if (cleanWord) {
          tokens.push({ text: cleanWord, strong: [], lemma: [""], morph: [""] });
        } else if (strongMatch && tokens.length > 0) {
          const prev = tokens[tokens.length - 1];
          strongMatch.forEach((s: string) => {
            if (!prev.strong.includes(s)) prev.strong.push(s);
          });
        }
      }
    }
    
    if (tokens.length > 0) {
      console.log(`Extraindo tokens localmente do texto para ${verseId}...`);
      saveVerseTokens(verseId, tokens).catch(console.error);
      return tokens;
    }
  }

  // 4. Fallback to Gemini (if not skipped)
  // Desativado por solicitação do usuário para usar apenas dados locais
  /*
  if (skipGemini) return [];

  console.log(`Gerando tokens Strong para ${verseId} via Gemini...`);
  const geminiTokens = await fetchVerseTokensFromGemini(verseId, text);
  if (geminiTokens) {
    saveVerseTokens(verseId, geminiTokens).catch(console.error);
    return geminiTokens;
  }
  */

  return [];
};

export const getWordStrongInfo = async (verseId: string, verseText: string, wordText: string): Promise<StrongToken | null> => {
  const tokens = await getVerseTokens(verseId, verseText);
  if (!tokens || tokens.length === 0) return null;

  const normWord = normalize(wordText);
  // Try exact match first
  let token = tokens.find(t => normalize(t.text || t.t || t.surface || '') === normWord);
  
  // Try partial match if not found
  if (!token) {
    token = tokens.find(t => {
      const normT = normalize(t.text || t.t || t.surface || '');
      return normT.includes(normWord) || normWord.includes(normT);
    });
  }

  return token || null;
};

export const saveVerseTokens = async (verseId: string, tokens: any[]) => {
  const db = await initDB();
  
  // Normalize Strong's numbers in tokens
  const normalizedTokens = tokens.map(t => {
    if (t.strong) {
      if (Array.isArray(t.strong)) {
        return {
          ...t,
          strong: t.strong.map((s: string) => typeof s === 'string' ? s.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2') : s)
        };
      } else if (typeof t.strong === 'string') {
        return {
          ...t,
          strong: t.strong.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2')
        };
      }
    }
    return t;
  });

  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORES.STRONG_TOKENS, 'readwrite');
    const store = tx.objectStore(STORES.STRONG_TOKENS);
    const req = store.put({ verseId, tokens: normalizedTokens, updatedAt: new Date().toISOString() });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
};

export const getVerseById = async (id: string): Promise<Verse | null> => {
  // 1. Check static data
  const staticVerse = INITIAL_SEED.find(v => v.id === id);
  if (staticVerse) return staticVerse;

  // 2. Check IndexedDB
  const db = await initDB();
  return new Promise((resolve) => {
    if (!db.objectStoreNames.contains(STORES.VERSES)) return resolve(null);
    const tx = db.transaction(STORES.VERSES, 'readonly');
    const req = tx.objectStore(STORES.VERSES).get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  });
};

export const saveStrongEntry = async (entry: StrongEntry): Promise<void> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.STRONGS, 'readwrite');
    const store = tx.objectStore(STORES.STRONGS);
    const req = store.put(entry);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
};

export const getStrongEntry = async (id: string): Promise<StrongEntry | null> => {
  if (!id || typeof id !== 'string') return null;
  const db = await initDB();
  
  // Normalize ID: uppercase and remove leading zeros
  const normalizedId = id.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2');
  // Padded ID: uppercase and pad with zeros to 4 digits
  const paddedId = normalizedId.replace(/([HG])([1-9][0-9]*)/, (match, p1, p2) => `${p1}${p2.padStart(4, '0')}`);

  // Handle H0000/G0000 specifically
  if (normalizedId === 'H0000' || normalizedId === 'G0000' || normalizedId === 'H0' || normalizedId === 'G0') {
    return {
      id: normalizedId,
      original: '---',
      transliteration: 'N/A',
      definition: 'Este termo não possui um número de Strong correspondente no léxico padrão ou é uma partícula gramatical sem entrada léxica individual.',
      pronunciation: '',
      occurrences: 0
    };
  }

  const localResult = await new Promise<StrongEntry | null>((resolve) => {
    if (!db.objectStoreNames.contains(STORES.STRONGS)) return resolve(null);
    const tx = db.transaction(STORES.STRONGS, 'readonly');
    const store = tx.objectStore(STORES.STRONGS);
    
    // Try normalized ID first (e.g., H1)
    const req1 = store.get(normalizedId);
    req1.onsuccess = () => {
      if (req1.result) {
        resolve(req1.result);
      } else {
        // Try padded ID (e.g., H0001)
        const req2 = store.get(paddedId);
        req2.onsuccess = () => {
          if (req2.result) {
            resolve(req2.result);
          } else {
            // Fallback to static dataset
            const staticEntry = (STRONGS_DATA as any)[normalizedId] || (STRONGS_DATA as any)[paddedId];
            resolve(staticEntry || null);
          }
        };
        req2.onerror = () => {
          const staticEntry = (STRONGS_DATA as any)[normalizedId] || (STRONGS_DATA as any)[paddedId];
          resolve(staticEntry || null);
        };
      }
    };
    req1.onerror = () => {
      const staticEntry = (STRONGS_DATA as any)[normalizedId] || (STRONGS_DATA as any)[paddedId];
      resolve(staticEntry || null);
    };
  });

  if (localResult) return localResult;

  // If not found locally, try Gemini using the normalized ID
  console.log(`Buscando definição Strong ${normalizedId} via Gemini...`);
  const geminiResult = await fetchStrongFromGemini(normalizedId);
  if (geminiResult) {
    // Save to local DB for future use
    saveStrongEntry(geminiResult).catch(console.error);
    return geminiResult;
  }

  return null;
};

export const refreshStrongEntry = async (id: string): Promise<StrongEntry | null> => {
  if (!id || typeof id !== 'string') return null;
  
  // Normalize ID: uppercase and remove leading zeros
  const normalizedId = id.toUpperCase().replace(/([HG])0+([1-9][0-9]*)/, '$1$2');

  console.log(`Forçando atualização da definição Strong ${normalizedId} via Gemini...`);
  const geminiResult = await fetchStrongFromGemini(normalizedId);
  if (geminiResult) {
    await saveStrongEntry(geminiResult);
    return geminiResult;
  }
  return null;
};

export const searchStrongsByText = async (text: string): Promise<StrongEntry[]> => {
  const db = await initDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORES.STRONGS, 'readonly');
    const req = tx.objectStore(STORES.STRONGS).getAll();
    
    const processResults = (results: StrongEntry[]) => {
      if (results.length === 0) {
        results = Object.values(STRONGS_DATA);
      }
      
      // Stop words to ignore
      const stopWords = new Set(["que", "com", "por", "para", "dos", "das", "aos", "nas", "nos", "uma", "um", "como", "mais", "mas", "foi", "ele", "ela", "sao", "tem", "seu", "sua"]);
      
      const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const words = normalizedText.split(/[\s,.;:!?]+/).filter(w => w.length > 1 && !stopWords.has(w));
      
      const matched = results.map(entry => {
        const def = (entry.definition || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const original = (entry.original || '').toLowerCase();
        const transliteration = (entry.transliteration || '').toLowerCase();
        
        let score = 0;
        words.forEach(w => {
          if (def.includes(w)) score += 1;
          if (def.includes(` ${w} `)) score += 2; // Exact word match in definition
          if (original === w || transliteration === w) score += 5;
        });
        
        return { entry, score };
      }).filter(m => m.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(m => m.entry);
      
      resolve(matched.slice(0, 20));
    };

    req.onsuccess = () => processResults(req.result || []);
    req.onerror = () => processResults(Object.values(STRONGS_DATA));
  });
};

export const saveStrongEntries = async (entries: StrongEntry[], onProgress?: (p: number) => void) => {
  const db = await initDB();
  const chunkSize = 150;
  for (let i = 0; i < entries.length; i += chunkSize) {
    const chunk = entries.slice(i, i + chunkSize);
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORES.STRONGS, 'readwrite');
      const store = tx.objectStore(STORES.STRONGS);
      chunk.forEach(entry => { if (entry && entry.id) store.put(entry); });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    if (onProgress) onProgress(Math.floor(((i + chunk.length) / entries.length) * 100));
    await new Promise(r => setTimeout(r, 0));
  }
};

// Fix: Implemented clearStrongs to resolve import error in Settings.tsx
export const clearStrongs = async () => {
  const db = await initDB();
  const tx = db.transaction(STORES.STRONGS, 'readwrite');
  tx.objectStore(STORES.STRONGS).clear();
  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

export const getStrongStats = async () => {
  const db = await initDB();
  return new Promise<{count: number}>(r => {
    if (!db.objectStoreNames.contains(STORES.STRONGS)) return r({count: 0});
    const tx = db.transaction(STORES.STRONGS, 'readonly');
    tx.objectStore(STORES.STRONGS).count().onsuccess = (e: any) => r({ count: e.target.result });
  });
};

export const searchStrongsInDB = async (term: string): Promise<StrongEntry[]> => {
  const db = await initDB();
  const lowerTerm = term.toLowerCase();
  
  return new Promise((resolve) => {
    const tx = db.transaction(STORES.STRONGS, 'readonly');
    const results: StrongEntry[] = [];
    const req = tx.objectStore(STORES.STRONGS).openCursor();
    
    req.onsuccess = (e: any) => {
      const cursor = e.target.result;
      if (cursor) {
        const val = cursor.value;
        if ((val.id || '').toLowerCase().includes(lowerTerm) || (val.transliteration || '').toLowerCase().includes(lowerTerm) || (val.definition || '').toLowerCase().includes(lowerTerm) || (val.original || '').includes(term)) {
          results.push(val);
        }
        if (results.length < 200) cursor.continue(); 
        else resolve(results);
      } else {
        // Se a busca no DB for vazia e o DB estiver zerado, busca no estático
        if (results.length === 0) {
          const staticResults = Object.values(STRONGS_DATA).filter(item => 
            (item.id || '').toLowerCase().includes(lowerTerm) || 
            (item.transliteration || '').toLowerCase().includes(lowerTerm) || 
            (item.definition || '').toLowerCase().includes(lowerTerm) || 
            (item.original || '').includes(term)
          ).slice(0, 100);
          resolve(staticResults as StrongEntry[]);
        } else {
          resolve(results);
        }
      }
    };
  });
};

export const getChapter = async (bookId: string, chapter: number): Promise<Verse[]> => {
  const db = await initDB();
  return new Promise((resolve) => {
    if (!db.objectStoreNames.contains(STORES.VERSES)) return resolve([]);
    
    const tx = db.transaction(STORES.VERSES, 'readonly');
    const index = tx.objectStore(STORES.VERSES).index('book_chapter');
    const req = index.getAll(IDBKeyRange.only([bookId, chapter]));
    
    req.onsuccess = async () => {
      let res = req.result || [];
      
      // Se não houver versículos no DB, tenta carregar do INITIAL_SEED ou do arquivo estático correspondente
      if (res.length === 0) {
        // 1. Tenta INITIAL_SEED primeiro (já está em memória)
        const seedVerses = INITIAL_SEED.filter(v => v.bookId === bookId && v.chapter === chapter);
        if (seedVerses.length > 0) {
          res = seedVerses;
        } else {
          // 2. Fallback para fetch se não estiver no seed
          try {
            const fileName = `${bookId.toLowerCase()}.json`;
            const response = await fetch(`/bible/${fileName}`);
            if (response.ok) {
              const bookVerses: Verse[] = await response.json();
              res = bookVerses.filter(v => v.chapter === chapter);
              if (res.length > 0) {
                bulkInsertVerses(bookVerses).catch(console.error);
              }
            }
          } catch (error) {
            console.error(`Erro ao carregar livro ${bookId} do servidor:`, error);
          }
        }
      }
      
      resolve(res.sort((a: any, b: any) => a.verse - b.verse));
    };
    
    req.onerror = () => resolve([]);
  });
};
export const saveSermon = async (sermon: Sermon): Promise<void> => { const db = await initDB(); const tx = db.transaction(STORES.SERMONS, 'readwrite'); tx.objectStore(STORES.SERMONS).put(sermon); return new Promise((r) => { tx.oncomplete = () => r(); }); };
export const getSermons = async (): Promise<Sermon[]> => { const db = await initDB(); return new Promise((resolve) => { if (!db.objectStoreNames.contains(STORES.SERMONS)) return resolve([]); const tx = db.transaction(STORES.SERMONS, 'readonly'); const req = tx.objectStore(STORES.SERMONS).getAll(); req.onsuccess = () => resolve(req.result || []); }); };
export const deleteSermon = async (id: string): Promise<void> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.SERMONS, 'readwrite');
    const store = tx.objectStore(STORES.SERMONS);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

export const clearAllSermons = async (): Promise<void> => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.SERMONS, 'readwrite');
    const store = tx.objectStore(STORES.SERMONS);
    store.clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};
export const bulkInsertVerses = async (verses: Verse[], onProgress?: (p: number) => void) => { const db = await initDB(); const chunkSize = 100; for (let i = 0; i < verses.length; i += chunkSize) { const chunk = verses.slice(i, i + chunkSize); await new Promise<void>((res, rej) => { const tx = db.transaction(STORES.VERSES, 'readwrite'); const store = tx.objectStore(STORES.VERSES); chunk.forEach(v => store.put(v)); tx.oncomplete = () => res(); tx.onerror = () => rej(); }); if (onProgress) onProgress(Math.floor(((i + chunk.length) / verses.length) * 100)); await new Promise(r => setTimeout(r, 0)); } };
export const resetDatabase = async () => { const db = await initDB(); const tx = db.transaction(STORES.VERSES, 'readwrite'); tx.objectStore(STORES.VERSES).clear(); };
export const getDBStats = async () => { const db = await initDB(); return new Promise<{count: number}>(r => { if (!db.objectStoreNames.contains(STORES.VERSES)) return r({count: 0}); db.transaction(STORES.VERSES, 'readonly').objectStore(STORES.VERSES).count().onsuccess = (e:any) => r({count: e.target.result}); }); };
export const saveLibraryClip = async (clip: LibraryClip): Promise<void> => { const db = await initDB(); const tx = db.transaction(STORES.LIBRARY, 'readwrite'); tx.objectStore(STORES.LIBRARY).put(clip); };
export const getLibraryClips = async (): Promise<LibraryClip[]> => { const db = await initDB(); return new Promise((resolve) => { if (!db.objectStoreNames.contains(STORES.LIBRARY)) return resolve([]); const tx = db.transaction(STORES.LIBRARY, 'readonly'); const req = tx.objectStore(STORES.LIBRARY).getAll(); req.onsuccess = () => resolve(req.result || []); }); };
export const deleteLibraryClip = async (id: string): Promise<void> => { const db = await initDB(); const tx = db.transaction(STORES.LIBRARY, 'readwrite'); tx.objectStore(STORES.LIBRARY).delete(id); };
export const saveCoachingReport = async (r: CoachingReport): Promise<void> => { const db = await initDB(); const tx = db.transaction(STORES.COACHING, 'readwrite'); tx.objectStore(STORES.COACHING).put(r); };
export const getCoachingReports = async (): Promise<CoachingReport[]> => { const db = await initDB(); return new Promise((resolve) => { if (!db.objectStoreNames.contains(STORES.COACHING)) return resolve([]); const tx = db.transaction(STORES.COACHING, 'readonly'); const req = tx.objectStore(STORES.COACHING).getAll(); req.onsuccess = () => resolve(req.result || []); }); };
export const saveAICache = async (c: AICommentCache): Promise<void> => { const db = await initDB(); const tx = db.transaction(STORES.AI_CACHE, 'readwrite'); tx.objectStore(STORES.AI_CACHE).put(c); };
export const getAICache = async (id: string): Promise<AICommentCache | null> => { const db = await initDB(); return new Promise((resolve) => { if (!db.objectStoreNames.contains(STORES.AI_CACHE)) return resolve(null); const tx = db.transaction(STORES.AI_CACHE, 'readonly'); const req = tx.objectStore(STORES.AI_CACHE).get(id); req.onsuccess = () => resolve(req.result || null); }); };
export const getVerseByRef = async (ref: string): Promise<Verse | null> => { const db = await initDB(); return new Promise((resolve) => { if (!db.objectStoreNames.contains(STORES.VERSES)) return resolve(null); const tx = db.transaction(STORES.VERSES, 'readonly'); const req = tx.objectStore(STORES.VERSES).get(ref); req.onsuccess = () => resolve(req.result || null); }); };
export const searchVersesByKeyword = async (k: string): Promise<Verse[]> => { const db = await initDB(); return new Promise((resolve) => { if (!db.objectStoreNames.contains(STORES.VERSES)) return resolve([]); const tx = db.transaction(STORES.VERSES, 'readonly'); const results: Verse[] = []; const req = tx.objectStore(STORES.VERSES).openCursor(); req.onsuccess = (e: any) => { const c = e.target.result; if (c) { if ((c.value.text || '').toLowerCase().includes((k || '').toLowerCase())) results.push(c.value); if (results.length < 500) c.continue(); else resolve(results); } else resolve(results); }; }); };
export const saveTeiaCache = async (g: TeiaGraph): Promise<void> => { const db = await initDB(); const tx = db.transaction(STORES.GRAPH_CACHE, 'readwrite'); tx.objectStore(STORES.GRAPH_CACHE).put(g); };
export const getTeiaCache = async (h: string): Promise<TeiaGraph | null> => {
  const db = await initDB();
  return new Promise((resolve) => {
    if (!db.objectStoreNames.contains(STORES.GRAPH_CACHE)) return resolve(null);
    const tx = db.transaction(STORES.GRAPH_CACHE, 'readonly');
    const req = tx.objectStore(STORES.GRAPH_CACHE).get(h);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => resolve(null);
  });
};
export const saveCommentaryEntries = async (e: CommentaryEntry[]) => { const db = await initDB(); const tx = db.transaction(STORES.ENTRIES, 'readwrite'); e.forEach(ent => tx.objectStore(STORES.ENTRIES).put(ent)); };
export const getCommentariesForRef = async (r: string): Promise<CommentaryEntry[]> => { 
  const db = await initDB(); 
  return new Promise((resolve) => { 
    if (!db.objectStoreNames.contains(STORES.ENTRIES)) return resolve([]); 
    const tx = db.transaction(STORES.ENTRIES, 'readonly'); 
    const index = tx.objectStore(STORES.ENTRIES).index('refStart'); 
    const req = index.getAll(r); 
    req.onsuccess = () => resolve(req.result || []); 
  }); 
};
export const exportUserData = async () => { const db = await initDB(); const data: any = { sermons: [], clips: [], coaching: [], diary: [] }; const getAll = (s: string): Promise<any[]> => new Promise(res => { if (!db.objectStoreNames.contains(s)) return res([]); const tx = db.transaction(s, 'readonly'); const req = tx.objectStore(s).getAll(); req.onsuccess = (e:any) => res(e.target.result); }); data.sermons = await getAll(STORES.SERMONS); data.clips = await getAll(STORES.LIBRARY); data.coaching = await getAll(STORES.COACHING); data.diary = await getAll(STORES.DIARY); return JSON.stringify(data, null, 2); };
export const importUserData = async (j: string) => { const db = await initDB(); const data = JSON.parse(j); const tx = db.transaction([STORES.SERMONS, STORES.LIBRARY, STORES.COACHING, STORES.DIARY], 'readwrite'); if (data.sermons) data.sermons.forEach((s: any) => tx.objectStore(STORES.SERMONS).put(s)); if (data.clips) data.clips.forEach((c: any) => tx.objectStore(STORES.LIBRARY).put(c)); if (data.diary) data.diary.forEach((d: any) => tx.objectStore(STORES.DIARY).put(d)); return new Promise<void>(res => tx.oncomplete = () => res()); };

export const saveOCRDocument = async (doc: any) => { const db = await initDB(); const tx = db.transaction(STORES.DOCUMENTS, 'readwrite'); tx.objectStore(STORES.DOCUMENTS).put(doc); };
export const getOCRDocuments = async (): Promise<any[]> => { const db = await initDB(); return new Promise(res => { if (!db.objectStoreNames.contains(STORES.DOCUMENTS)) return res([]); const req = db.transaction(STORES.DOCUMENTS, 'readonly').objectStore(STORES.DOCUMENTS).getAll(); req.onsuccess = () => res(req.result || []); }); };
export const deleteOCRDocument = async (id: string) => { const db = await initDB(); const tx = db.transaction([STORES.DOCUMENTS, STORES.PAGES], 'readwrite'); tx.objectStore(STORES.DOCUMENTS).delete(id); const index = tx.objectStore(STORES.PAGES).index('docId'); index.openCursor(IDBKeyRange.only(id)).onsuccess = (e: any) => { const cursor = e.target.result; if (cursor) { cursor.delete(); cursor.continue(); } }; };
export const saveOCRPage = async (page: any) => { const db = await initDB(); const tx = db.transaction(STORES.PAGES, 'readwrite'); tx.objectStore(STORES.PAGES).put(page); };
export const getOCRPages = async (docId: string): Promise<any[]> => { const db = await initDB(); return new Promise(res => { if (!db.objectStoreNames.contains(STORES.PAGES)) return res([]); const index = db.transaction(STORES.PAGES, 'readonly').objectStore(STORES.PAGES).index('docId'); const req = index.getAll(IDBKeyRange.only(docId)); req.onsuccess = () => res(req.result || []); }); };
export const saveDiaryEntry = async (entry: DiaryEntry) => { const db = await initDB(); const tx = db.transaction(STORES.DIARY, 'readwrite'); tx.objectStore(STORES.DIARY).put(entry); };
export const getDiaryEntries = async (): Promise<DiaryEntry[]> => { const db = await initDB(); return new Promise(res => { const req = db.transaction(STORES.DIARY, 'readonly').objectStore(STORES.DIARY).getAll(); req.onsuccess = () => res(req.result || []); }); };
export const globalSearch = async (term: string) => { 
  const db = await initDB();
  const results: any = { 
    verses: [], 
    sermons: [], 
    clips: [], 
    diary: [], 
    hymns: [],
    academy: [],
    metrology: [],
    kings: [],
    prophecies: [],
    revivals: [],
    councils: [],
    customs: [],
    archeology: [],
    heresies: [],
    quotes: [],
    messages: [],
    ditosDuros: [],
    timeline: [],
    courses: [],
    typology: [],
    deepStudies: [],
    prayers: [],
    hub: []
  };
  const lower = term.toLowerCase();
  
  const searchStore = (storeName: string, fields: string[], limit: number = 1000000): Promise<any[]> => new Promise((res) => {
    try {
      if (!db.objectStoreNames.contains(storeName)) return res([]);
      const list: any[] = [];
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.openCursor();
      
      req.onsuccess = (e: any) => {
        const cursor = e.target.result;
        if (cursor && list.length < limit) {
          const val = cursor.value;
          const matches = fields.some(f => String(val[f] || '').toLowerCase().includes(lower));
          if (matches) list.push(val);
          cursor.continue();
        } else {
          res(list);
        }
      };
      req.onerror = () => res([]);
      tx.onerror = () => res([]);
      // Safety timeout for each store search
      setTimeout(() => res(list), 2000);
    } catch (err) {
      console.error(`Search error in store ${storeName}:`, err);
      res([]);
    }
  });

  // IndexedDB Search in parallel
  const [dbVerses, dbSermons, dbClips, dbDiary, dbHymns] = await Promise.all([
    searchStore(STORES.VERSES, ['text', 'id'], 50000),
    searchStore(STORES.SERMONS, ['title'], 10000),
    searchStore(STORES.LIBRARY, ['title', 'content'], 10000),
    searchStore(STORES.DIARY, ['title', 'content'], 10000),
    searchStore(STORES.HYMNS, ['title', 'lyrics'], 10000)
  ]);

  results.verses = dbVerses;

  // Static Seed Search
  const seedMatches: any[] = [];
  for (const v of INITIAL_SEED) {
    if ((v.text || '').toLowerCase().includes(lower) || (v.id || '').toLowerCase().includes(lower)) {
      if (!results.verses.some((rv: any) => rv.id === v.id)) {
        seedMatches.push(v);
      }
    }
  }
  results.verses.push(...seedMatches);

  results.sermons = dbSermons;
  results.clips = dbClips;
  results.diary = dbDiary;
  results.hymns = dbHymns;

  // Static Data Search
  const academyResults: any[] = [];
  for (const m of ACADEMY_DATA) {
    const matches = m.topics.filter(t => 
      (t.title || '').toLowerCase().includes(lower) || 
      (t.content || []).some(c => (c || '').toLowerCase().includes(lower)) ||
      (t.subItems || []).some(s => (s || '').toLowerCase().includes(lower)) ||
      (t.etymology && t.etymology.some(e => (e.term || '').toLowerCase().includes(lower) || (e.meaning || '').toLowerCase().includes(lower))) ||
      (t.thesis && (t.thesis || '').toLowerCase().includes(lower)) ||
      (t.primarySources && t.primarySources.some(ps => (ps.title || '').toLowerCase().includes(lower) || (ps.summary || '').toLowerCase().includes(lower) || (ps.content || '').toLowerCase().includes(lower))) ||
      (t.dilemmas && t.dilemmas.some(d => (d.title || '').toLowerCase().includes(lower) || (d.scenario || '').toLowerCase().includes(lower) || (d.suggestedResolution || '').toLowerCase().includes(lower))) ||
      (t.comparativeMatrix && t.comparativeMatrix.some(cm => (cm.category || '').toLowerCase().includes(lower) || (cm.views || []).some(v => (v.position || '').toLowerCase().includes(lower)))) ||
      (t.timeline && t.timeline.some(tl => (tl.event || '').toLowerCase().includes(lower) || (tl.significance || '').toLowerCase().includes(lower)))
    ).map(t => ({ ...t, moduleTitle: m.title, moduleId: m.id }));
    academyResults.push(...matches);
  }
  results.academy = academyResults;

  results.metrology = MEASURES_DATA.filter(m => 
    (m.label || '').toLowerCase().includes(lower) || 
    (m.val || '').toLowerCase().includes(lower) || 
    (m.theo || '').toLowerCase().includes(lower) ||
    (m.extra && (m.extra || '').toLowerCase().includes(lower))
  );

  results.kings = [
    ...KINGS_DATA.united,
    ...KINGS_DATA.judah,
    ...KINGS_DATA.israel
  ].filter(k => 
    (k.name || '').toLowerCase().includes(lower) || 
    (k.summary || '').toLowerCase().includes(lower) || 
    (k.spiritualProfile && (k.spiritualProfile || '').toLowerCase().includes(lower))
  );

  results.prophecies = PROPHECIES_DATA.filter(p => 
    (p.theme || '').toLowerCase().includes(lower) || 
    (p.prophecyText || '').toLowerCase().includes(lower) || 
    (p.fulfillmentText && (p.fulfillmentText || '').toLowerCase().includes(lower))
  );

  results.revivals = revivalsData.flatMap(cat => cat.events.filter(r => 
    (r.title || '').toLowerCase().includes(lower) || 
    (r.description && (r.description || '').toLowerCase().includes(lower)) || 
    (r.insight && (r.insight || '').toLowerCase().includes(lower))
  ).map(r => ({ ...r, categoryTitle: cat.title })));

  results.councils = councilsData.flatMap(cat => cat.events.filter(c => 
    (c.title || '').toLowerCase().includes(lower) || 
    (c.context && (c.context || '').toLowerCase().includes(lower)) || 
    (c.decision && (c.decision || '').toLowerCase().includes(lower))
  ).map(c => ({ ...c, categoryTitle: cat.title })));

  results.customs = customsData.flatMap(cat => cat.items.filter(c => 
    (c.title || '').toLowerCase().includes(lower) || 
    (c.description && (c.description || '').toLowerCase().includes(lower)) || 
    (c.spiritualMeaning && (c.spiritualMeaning || '').toLowerCase().includes(lower))
  ).map(c => ({ ...c, categoryTitle: cat.title })));

  results.archeology = archeologyData.flatMap(cat => cat.items.filter(a => 
    (a.title || '').toLowerCase().includes(lower) || 
    (a.description && (a.description || '').toLowerCase().includes(lower)) || 
    (a.biblicalRelevance && (a.biblicalRelevance || '').toLowerCase().includes(lower))
  ).map(a => ({ ...a, categoryTitle: cat.title })));

  results.heresies = HERESIES_DATA.flatMap(block => block.items.filter(h => 
    (h.title || '').toLowerCase().includes(lower) || 
    (h.subtitle || '').toLowerCase().includes(lower) || 
    (h.errorNucleus || []).some(e => (e || '').toLowerCase().includes(lower))
  ).map(h => ({ ...h, blockTitle: block.title })));

  results.quotes = HISTORICAL_QUOTES.filter(q => 
    (q.text || '').toLowerCase().includes(lower) || 
    (q.author || '').toLowerCase().includes(lower)
  );

  results.messages = MANANCIAIS_DATA.filter(m => 
    (m.title || '').toLowerCase().includes(lower) || 
    (m.summary || '').toLowerCase().includes(lower) || 
    (m.content || []).some(p => (p || '').toLowerCase().includes(lower))
  );

  const safeFilterLimited = (arr: any[] | undefined | null, fn: (item: any) => boolean, _limit: number = 20) => {
    const list = [];
    const source = arr || [];
    for (const item of source) {
      if (fn(item)) {
        list.push(item);
      }
    }
    return list;
  };

  results.ditosDuros = safeFilterLimited(DITOS_DUROS, d => 
    (d.problem || '').toLowerCase().includes(lower) || 
    (d.exegesis || '').toLowerCase().includes(lower) || 
    (d.harmonization || '').toLowerCase().includes(lower)
  , 20);

  results.timeline = safeFilterLimited(HISTORICAL_PERIODS_DATA, p => 
    (p.title || '').toLowerCase().includes(lower) || 
    (p.summary || '').toLowerCase().includes(lower) || 
    (p.events || []).some((e: any) => (e.title || '').toLowerCase().includes(lower) || (e.year || '').toLowerCase().includes(lower))
  , 20);

  results.courses = safeFilterLimited(COURSES_DATA, c => 
    (c.title || '').toLowerCase().includes(lower) || 
    (c.description || '').toLowerCase().includes(lower) || 
    (c.modules || []).some((m: any) => (m.title || '').toLowerCase().includes(lower) || (m.lessons || []).some((l: any) => (l.title || '').toLowerCase().includes(lower) || (l.content || []).some((p: any) => (p || '').toLowerCase().includes(lower))))
  , 15);

  results.typology = safeFilterLimited(TYPOLOGY_DATA, t => 
    (t.title || '').toLowerCase().includes(lower) || 
    (t.shadow || '').toLowerCase().includes(lower) || 
    (t.reality || '').toLowerCase().includes(lower) || 
    (t.paragraphs || []).some((p: any) => (p || '').toLowerCase().includes(lower))
  , 15);

  results.deepStudies = [
    ...safeFilterLimited(DEEP_MAP_DATA, d => (d.event || '').toLowerCase().includes(lower) || (d.theme || '').toLowerCase().includes(lower) || (d.theology || '').toLowerCase().includes(lower) || (d.application || '').toLowerCase().includes(lower) || (d.connections || []).some((c: any) => (c || '').toLowerCase().includes(lower)), 10).map(d => ({ title: d.event, description: d.theology, originalData: d })),
    ...safeFilterLimited(PARABLES_DATA, p => (p.title || '').toLowerCase().includes(lower) || (p.theologicalMeaning || '').toLowerCase().includes(lower) || (p.context || '').toLowerCase().includes(lower) || (p.practicalApplication || '').toLowerCase().includes(lower), 10).map(p => ({ title: p.title, description: p.theologicalMeaning, originalData: p })),
    ...safeFilterLimited(MARTYRS_DATA, m => (m.name || '').toLowerCase().includes(lower) || (m.method || '').toLowerCase().includes(lower) || (m.location || '').toLowerCase().includes(lower) || (m.description || '').toLowerCase().includes(lower), 10).map(m => ({ title: m.name, description: m.description, originalData: m })),
    ...safeFilterLimited(APOCRYPHA_DATA, a => (a.title || '').toLowerCase().includes(lower) || (a.summary || '').toLowerCase().includes(lower) || (a.category || '').toLowerCase().includes(lower), 10).map(a => ({ title: a.title, description: a.summary, originalData: a })),
    ...safeFilterLimited(SPECIAL_STUDIES_DATA, s => (s.title || '').toLowerCase().includes(lower) || (s.content || '').toLowerCase().includes(lower) || (s.tags || []).some((t: any) => (t || '').toLowerCase().includes(lower)), 10).map(s => ({ title: s.title, description: s.content.substring(0, 100) + '...', originalData: s })),
    ...safeFilterLimited(tabernacleData, t => (t.title || '').toLowerCase().includes(lower) || (t.significance || '').toLowerCase().includes(lower) || (t.description || '').toLowerCase().includes(lower) || (t.theology || '').toLowerCase().includes(lower), 10).map(t => ({ title: t.title, description: t.description, originalData: t })),
    ...safeFilterLimited(ABRAHAM_JOURNEY, a => (a.location || '').toLowerCase().includes(lower) || (a.desc || '').toLowerCase().includes(lower) || (a.verses || '').toLowerCase().includes(lower), 10).map(a => ({ title: a.location, description: a.desc, originalData: a }))
  ];

  results.prayers = safeFilterLimited(PRAYERS_30, p => 
    (p.title || '').toLowerCase().includes(lower) || 
    (p.type || '').toLowerCase().includes(lower) || 
    (p.context || '').toLowerCase().includes(lower) || 
    (p.theology || '').toLowerCase().includes(lower)
  , 20);

  results.hub = [
    ...safeFilterLimited(DABAR_DICTIONARY, d => (d.term || '').toLowerCase().includes(lower) || (d.definition || '').toLowerCase().includes(lower), 15),
    ...safeFilterLimited(HISTORICAL_CONTEXTS, h => (h.title || '').toLowerCase().includes(lower) || (h.content || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(THEOLOGICAL_TOPICS, t => (t.title || '').toLowerCase().includes(lower) || (t.development || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(SERMON_OUTLINES, s => (s.title || '').toLowerCase().includes(lower) || (s.keyVerse || '').toLowerCase().includes(lower) || (s.points || []).some((p: any) => (p.title || '').toLowerCase().includes(lower) || (p.explanation || '').toLowerCase().includes(lower)), 10),
    ...safeFilterLimited(COMMON_ERRORS, c => (c.mistake || '').toLowerCase().includes(lower) || (c.correction || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(NT_OT_CONNECTIONS, n => (n.ot_shadow || '').toLowerCase().includes(lower) || (n.nt_fulfillment || '').toLowerCase().includes(lower) || (n.description || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(BIBLICAL_PROFILES, b => (b.name || '').toLowerCase().includes(lower) || (b.appearances || []).some((a: any) => (a || '').toLowerCase().includes(lower)) || (b.strengths || []).some((s: any) => (s || '').toLowerCase().includes(lower)) || (b.failures || []).some((f: any) => (f || '').toLowerCase().includes(lower)), 10),
    ...safeFilterLimited(INTERTESTAMENTAL_CONTEXT, i => (i.title || '').toLowerCase().includes(lower) || (i.impact || '').toLowerCase().includes(lower) || (i.description || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(BIBLE_QUOTES, b => (b.text || '').toLowerCase().includes(lower) || (b.category || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(READING_PLANS, r => (r.title || '').toLowerCase().includes(lower) || (r.description || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(GLOBAL_TIMELINE_EVENTS, g => (g.title || '').toLowerCase().includes(lower) || (g.description || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(DEVOTIONALS, d => (d.title || '').toLowerCase().includes(lower) || (d.content || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(TIMELINE_EVENTS, t => (t.title || '').toLowerCase().includes(lower) || (t.description || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(THEMATIC_PRAYERS, t => (t.theme || '').toLowerCase().includes(lower) || (t.text || '').toLowerCase().includes(lower), 10),
    ...safeFilterLimited(DISPENSATIONS_DETAILED, d => (d.title || '').toLowerCase().includes(lower) || (d.description || '').toLowerCase().includes(lower), 10)
  ];

  const strongResults = [];
  if (term.length >= 3) {
    for (const key in STRONGS_DATA) {
      const s = (STRONGS_DATA as any)[key];
      if (
        (s.originalWord || '').toLowerCase().includes(lower) || 
        (s.transliteration || '').toLowerCase().includes(lower) || 
        (s.shortDefinition || '').toLowerCase().includes(lower) || 
        (s.definition || '').toLowerCase().includes(lower)
      ) {
        strongResults.push(s);
      }
    }
  }
  results.strongs = strongResults;

  return results;
};
