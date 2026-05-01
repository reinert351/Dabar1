const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();
const jdg2 = arr.find(p => p.id === 'jdg_2_1_5');
console.log(jdg2 ? jdg2.title : 'Not found');
