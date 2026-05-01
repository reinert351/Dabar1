const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

console.log(JSON.stringify(arr.slice(120, 125).map(p => ({id: p.id, intro: p.introduction.substring(0, 50)})), null, 2));
