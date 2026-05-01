const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();
const idx = arr.findIndex(p => p.id === 'jos_7_1_26');
console.log('Index of jos_7_1_26:', idx);
console.log('Items after idx:', arr.length - idx - 1);
