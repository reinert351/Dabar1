const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();
const idx = arr.findIndex(p => p.id === 'gen_41_1_36');
console.log(JSON.stringify(arr.slice(idx + 1, idx + 11).map(p => ({id: p.id, title: p.title})), null, 2));
