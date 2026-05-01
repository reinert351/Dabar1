const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

try {
  const startIndex = content.indexOf('[\n  {');
  const endIndex = content.lastIndexOf(']');
  const arrayContent = content.substring(startIndex, endIndex + 1);
  const arr = new Function('return ' + arrayContent)();
  
  const last40 = arr.slice(-40);
  for (const p of last40) {
    console.log(p.id, p.bookId, p.title);
  }
} catch (e) {
  console.error('Parse error:', e.message);
}
