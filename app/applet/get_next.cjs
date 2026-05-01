const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

const genExo = arr.filter(p => p.bookId === 'GEN' || p.bookId === 'EXO');
for (let i = 0; i < 15; i++) {
  console.log(genExo[i].id, genExo[i].title);
}
