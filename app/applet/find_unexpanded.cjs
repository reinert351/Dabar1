const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

const unexpanded = arr.filter(p => !p.introduction || p.introduction.trim() === '' || !p.points || p.points.length === 0);

console.log('Total unexpanded:', unexpanded.length);
console.log(JSON.stringify(unexpanded.slice(0, 10).map(p => ({id: p.id, bookId: p.bookId, title: p.title})), null, 2));
