const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();
console.log(JSON.stringify(arr.slice(0, 10).map(p => ({id: p.id, bookId: p.bookId, title: p.title})), null, 2));
