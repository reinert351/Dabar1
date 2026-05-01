const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const matches = content.match(/id: '[^']+'/g);
console.log('Total:', matches.length);
const unique = new Set(matches);
console.log('Unique:', unique.size);
const duplicates = [];
const seen = new Set();
for (const match of matches) {
  if (seen.has(match)) {
    duplicates.push(match);
  }
  seen.add(match);
}
console.log('Duplicates:', duplicates);
