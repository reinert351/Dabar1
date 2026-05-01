const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

try {
  const startIndex = content.indexOf('[\n  {');
  const endIndex = content.lastIndexOf(']');
  const arrayContent = content.substring(startIndex, endIndex + 1);
  const arr = new Function('return ' + arrayContent)();
  
  const exo = arr.filter(p => p.bookId === 'EXO');
  for (const p of exo) {
    console.log(p.id, p.chapter, p.startVerse, p.endVerse, p.title);
  }
} catch (e) {
  console.error('Parse error:', e.message);
}
