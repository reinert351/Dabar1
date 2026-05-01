const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

// Parse the file roughly to find 10 short pericopes
const regex = /id: '([^']+)',\s*bookId: '[^']+',\s*chapter: \d+,\s*startVerse: \d+,\s*endVerse: \d+,\s*title: '([^']+)',\s*theme: '([^']+)',\s*introduction: '([^']{1,250})'/g;

let match;
const results = [];
const seen = new Set();

while ((match = regex.exec(content)) !== null && results.length < 10) {
  const id = match[1];
  if (!seen.has(id)) {
    seen.add(id);
    results.push({
      id: id,
      title: match[2],
      intro: match[4]
    });
  }
}

console.log(JSON.stringify(results, null, 2));
