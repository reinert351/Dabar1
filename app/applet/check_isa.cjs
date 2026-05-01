const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

const existingIsa = arr.filter(p => p.bookId === 'ISA');
console.log(JSON.stringify(existingIsa.map(p => ({
  id: p.id, 
  title: p.title, 
  introLen: p.introduction ? p.introduction.length : 0
})), null, 2));
