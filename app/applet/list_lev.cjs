const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

try {
  const startIndex = content.indexOf('[\n  {');
  const endIndex = content.lastIndexOf(']');
  const arrayContent = content.substring(startIndex, endIndex + 1);
  const arr = new Function('return ' + arrayContent)();
  
  const lev = arr.filter(p => p.bookId === 'LEV');
  console.log('Total Leviticus pericopes:', lev.length);
  for (const p of lev) {
    console.log(p.id, p.title);
  }
} catch (e) {
  console.error('Parse error:', e.message);
}
