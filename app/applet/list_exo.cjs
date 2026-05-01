const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

const lines = content.split('\n');
const exoPericopes = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("bookId: 'EXO'")) {
    const idLine = lines[i-1];
    const match = idLine.match(/id:\s*'([^']+)'/);
    if (match) {
      exoPericopes.push(match[1]);
    }
  }
}
console.log(exoPericopes);
