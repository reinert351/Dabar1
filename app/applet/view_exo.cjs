const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

const exo = arr.filter(p => p.bookId === 'EXO' && p.id.startsWith('exo_'));
console.log(exo.length);
for (let i = 0; i < 2; i++) {
  console.log(JSON.stringify(exo[i], null, 2));
}
