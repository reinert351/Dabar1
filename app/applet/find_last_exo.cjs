const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

const match = content.match(/bookId:\s*'EXO'/g);
console.log('Total EXO:', match ? match.length : 0);

// Find the last EXO pericope
const lines = content.split('\n');
let lastExoLine = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].includes("bookId: 'EXO'")) {
    lastExoLine = i;
    break;
  }
}

if (lastExoLine !== -1) {
  for (let i = lastExoLine - 2; i <= lastExoLine + 5; i++) {
    console.log(lines[i]);
  }
}
