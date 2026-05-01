const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

try {
  const startIndex = content.indexOf('[\n  {');
  const endIndex = content.lastIndexOf(']');
  const arrayContent = content.substring(startIndex, endIndex + 1);
  const arr = new Function('return ' + arrayContent)();
  
  console.log('Total pericopes:', arr.length);
  const exo = arr.filter(p => p.bookId === 'EXO');
  console.log('Total Exodus pericopes:', exo.length);
} catch (e) {
  console.error('Parse error:', e.message);
}
