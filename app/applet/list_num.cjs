const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

const num = arr.filter(p => p.bookId === 'NUM');
console.log('Total Numbers pericopes:', num.length);
for (const p of num) {
  console.log(p.id, p.title);
}
