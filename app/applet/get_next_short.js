const fs = require('fs');
const ts = fs.readFileSync('data/pericopes.ts', 'utf8');

const regex = /id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*introduction:\s*'([^']+)'/g;
let match;
const results = [];

while ((match = regex.exec(ts)) !== null) {
  results.push({
    id: match[1],
    title: match[2],
    intro: match[3]
  });
  if (results.length >= 10) break;
}

console.log(JSON.stringify(results, null, 2));
