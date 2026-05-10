
import fs from 'fs';
import path from 'path';

// This script generates the acf.json file that build-concordance.mjs expects.
// It extracts data from the .ts files in data/ directory.

async function run() {
  const dataDir = './data';
  const files = [
    'bible_pentateuco.ts',
    'bible_historicos.ts',
    'bible_poeticos.ts',
    'bible_profetas_maiores.ts',
    'bible_profetas_menores.ts',
    'bible_evangelhos.ts',
    'bible_historico_nt.ts',
    'bible_epistolas.ts',
    'bible_apocalipse.ts'
  ];

  const bible = { books: [] };
  const booksMap = new Map();

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    // We regex match the verse objects. Structure: { id: "...", bookId: "...", book: "...", chapter: 1, verse: 1, text: "..." }
    const verseMatches = content.matchAll(/\{ id: "([^"]+)", bookId: "([^"]+)", book: "([^"]+)", chapter: (\d+), verse: (\d+), text: "([^"]+)"/g);

    for (const match of verseMatches) {
      const [_, id, bookId, bookName, chapter, verse, text] = match;
      
      if (!booksMap.has(bookId)) {
        booksMap.set(bookId, {
          osis: bookId,
          name: bookName,
          chapters: []
        });
        bible.books.push(booksMap.get(bookId));
      }

      const book = booksMap.get(bookId);
      const cIdx = parseInt(chapter) - 1;
      const vIdx = parseInt(verse) - 1;

      if (!book.chapters[cIdx]) {
        book.chapters[cIdx] = [];
      }
      book.chapters[cIdx][vIdx] = text;
    }
  }

  // Ensure directories exist
  if (!fs.existsSync('./public')) fs.mkdirSync('./public');
  if (!fs.existsSync('./public/bible')) fs.mkdirSync('./public/bible');

  fs.writeFileSync('./public/bible/acf.json', JSON.stringify(bible, null, 2));
  console.log('✅ Generated public/bible/acf.json');
}

run();
