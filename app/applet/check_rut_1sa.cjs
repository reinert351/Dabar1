const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

const rutAnd1Sa = arr.filter(p => p.bookId === 'RUT' || p.bookId === '1SA');
console.log(JSON.stringify(rutAnd1Sa.map(p => ({id: p.id, title: p.title})), null, 2));
