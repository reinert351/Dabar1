const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

const oldGen = arr.filter(p => p.bookId === 'GEN' && !p.id.startsWith('gen_'));
console.log(oldGen.length);
for (let i = 0; i < 2; i++) {
  console.log(JSON.stringify(oldGen[i], null, 2));
}
