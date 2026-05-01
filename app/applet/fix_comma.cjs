const fs = require('fs');
let content = fs.readFileSync('data/pericopes.ts', 'utf8');

// Replace double commas with a single comma
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync('data/pericopes.ts', content, 'utf8');
console.log('Fixed double commas in data/pericopes.ts');
