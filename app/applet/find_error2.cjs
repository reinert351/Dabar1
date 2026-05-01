const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].match(/,\s*,/)) {
    console.log('Found empty element at line', i + 1);
    console.log(lines[i-1]);
    console.log(lines[i]);
    console.log(lines[i+1]);
  }
}

// Also check across lines
const match = content.match(/,\s*,/);
if (match) {
  const index = match.index;
  const lineNum = content.substring(0, index).split('\n').length;
  console.log('Found empty element at line', lineNum);
  console.log(content.substring(index - 50, index + 50));
}
