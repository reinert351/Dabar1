const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();
console.log('Total pericopes:', arr.length);
console.log('Index of jos_24_1_13:', arr.findIndex(p => p.id === 'jos_24_1_13'));
