const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

const gen = arr.filter(p => p.bookId === 'GEN');
for (const p of gen) {
  if (p.id === 'gen_1_1_31' || p.id === 'gen_2_1_25' || p.id === 'gen_3_1_24' || p.id === 'gen_4_1_16' || p.id === 'gen_6_5_22') {
    console.log(p.id, p.title);
  }
}
