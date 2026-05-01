const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

const existing2Sa = arr.filter(p => p.bookId === '2SA');
console.log(JSON.stringify(existing2Sa.map(p => ({id: p.id, title: p.title})), null, 2));
