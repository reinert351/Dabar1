import fs from 'fs';
import path from 'path';

/**
 * DABAR LOGOS - BUILD SYSTEM v1.0
 * Gerador de Concordância Suprema Offline
 */

const INPUT_BIBLE_PATH = './public/bible/acf.json';
const OUTPUT_DIR = './public/index';
const WORDS_DIR = path.join(OUTPUT_DIR, 'concordance.words');
const SUGGEST_DIR = path.join(OUTPUT_DIR, 'concordance.suggest');

// Stopwords enxutas para PT-BR (Mantendo termos teológicos vitais)
const STOPWORDS = new Set([
  'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'do', 'da', 'dos', 'das',
  'em', 'no', 'na', 'nos', 'nas', 'por', 'pelo', 'pela', 'pelos', 'pelas', 'com',
  'se', 'que', 'como', 'para', 'ou', 'mas', 'nem', 'tambem', 'entao', 'esta', 'este'
]);

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, ' ')
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(/[\s-]+/)
    .filter(t => t.length > 1 && !STOPWORDS.has(t));
}

async function build() {
  console.log('🚀 Dabar Titan Build: Iniciando geração de índices...');

  if (!fs.existsSync(INPUT_BIBLE_PATH)) {
    console.error('❌ Erro: Bíblia ACF não encontrada em public/bible/acf.json');
    return;
  }

  const raw = JSON.parse(fs.readFileSync(INPUT_BIBLE_PATH, 'utf8'));
  const books = raw.books || raw.biblia || raw;
  
  const refs = [];
  const wordsMap = new Map();
  /** @type {Set<string>} */
  const suggestionSet = new Set();

  let verseId = 0;

  books.forEach(book => {
    const bookName = book.osis || book.name;
    const chapters = book.chapters || book.capitulos || [];
    
    chapters.forEach((chapter, cIdx) => {
      const verses = Array.isArray(chapter) ? chapter : Object.values(chapter);
      verses.forEach((text, vIdx) => {
        refs.push(`${bookName} ${cIdx + 1}:${vIdx + 1}`);

        const tokens = tokenize(text);
        tokens.forEach(token => {
          if (!wordsMap.has(token)) wordsMap.set(token, []);
          const list = wordsMap.get(token);
          if (list[list.length - 1] !== verseId) list.push(verseId);
          suggestionSet.add(token);
        });

        verseId++;
      });
    });
  });

  if (fs.existsSync(OUTPUT_DIR)) fs.rmSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(WORDS_DIR);
  fs.mkdirSync(SUGGEST_DIR);

  fs.writeFileSync(path.join(OUTPUT_DIR, 'concordance.meta.json'), JSON.stringify({
    schemaVersion: "1.0",
    version: "Titan-ACF-2.4",
    generatedAt: Date.now(),
    verseCount: refs.length,
    wordsCount: wordsMap.size,
  }));

  fs.writeFileSync(path.join(OUTPUT_DIR, 'concordance.refs.json'), JSON.stringify(refs));

  const shards = {};
  wordsMap.forEach((ids, word) => {
    const prefix = word.substring(0, 2);
    if (!shards[prefix]) shards[prefix] = {};
    shards[prefix][word] = ids;
  });

  Object.entries(shards).forEach(([prefix, data]) => {
    fs.writeFileSync(path.join(WORDS_DIR, `${prefix}.json`), JSON.stringify(data));
  });

  // Geração de Sugestões: Apenas prefixos de 1 e 2 letras
  /** @type {Map<string, Set<string>>} */
  const suggestShards = new Map();
  suggestionSet.forEach(word => {
    const sWord = String(word);
    const p1 = sWord.substring(0, 1);
    const p2 = sWord.substring(0, 2);
    
    if (p1) {
      if (!suggestShards.has(p1)) suggestShards.set(p1, new Set());
      suggestShards.get(p1).add(sWord);
    }
    if (p2 && p2.length === 2) {
      if (!suggestShards.has(p2)) suggestShards.set(p2, new Set());
      suggestShards.get(p2).add(sWord);
    }
  });

  suggestShards.forEach((set, prefix) => {
    const sortedList = Array.from(set).sort();
    fs.writeFileSync(path.join(SUGGEST_DIR, `${prefix}.json`), JSON.stringify(sortedList));
  });

  console.log(`✅ Build Finalizado: ${refs.length} versos indexados.`);
}

build();