
import fs from 'fs';
import path from 'path';

interface VerseWord {
  text: string;
  strong: string[];
  lemma: string[];
  morph: string[];
}

interface Verse {
  id: string;
  bookId: string;
  chapter: number;
  verse: number;
  text: string;
  words?: VerseWord[];
}

const INPUT_FILE = 'bible_strong_full.json';
const OUTPUT_DIR = './public/bible';

async function splitBible() {
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Erro: Arquivo ${INPUT_FILE} não encontrado.`);
    return;
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log('Lendo arquivo bíblico...');
  const rawData = fs.readFileSync(INPUT_FILE, 'utf8');
  const bibleData: Verse[] = JSON.parse(rawData);

  const books: Record<string, Verse[]> = {};
  const index: Record<string, { chapters: number, name: string }> = {};

  console.log('Processando versículos...');
  bibleData.forEach(verse => {
    if (!books[verse.bookId]) {
      books[verse.bookId] = [];
    }
    books[verse.bookId].push(verse);
  });

  console.log('Salvando arquivos por livro...');
  for (const [bookId, verses] of Object.entries(books)) {
    const fileName = `${bookId.toLowerCase()}.json`;
    const filePath = path.join(OUTPUT_DIR, fileName);
    
    // Ordenar versículos
    verses.sort((a, b) => {
      if (a.chapter !== b.chapter) return a.chapter - b.chapter;
      return a.verse - b.verse;
    });

    fs.writeFileSync(filePath, JSON.stringify(verses, null, 2));
    
    const maxChapter = Math.max(...verses.map(v => v.chapter));
    index[bookId] = {
      chapters: maxChapter,
      name: bookId // Você pode mapear para nomes amigáveis aqui se desejar
    };
  }

  console.log('Gerando bible_index.json...');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'bible_index.json'), JSON.stringify(index, null, 2));

  console.log('Sucesso! Bíblia dividida com sucesso.');
}

splitBible().catch(console.error);
