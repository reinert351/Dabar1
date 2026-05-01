const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

const existingEzeDan = arr.filter(p => p.bookId === 'EZE' || p.bookId === 'DAN');
console.log(JSON.stringify(existingEzeDan.map(p => ({
  id: p.id, 
  title: p.title, 
  introLen: p.introduction ? p.introduction.length : 0
})), null, 2));
