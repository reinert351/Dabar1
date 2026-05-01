const fs = require('fs');

const content = fs.readFileSync('data/pericopes_temp.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// The last 20 pericopes are the ones we just added
for (let i = arr.length - 20; i < arr.length; i++) {
  if (!arr[i].conclusion) {
    arr[i].conclusion = 'Que possamos aplicar estas verdades em nossas vidas, confiando na fidelidade e no poder do Senhor em todas as circunstâncias.';
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log('Added conclusion to the new pericopes.');
