const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

const regex = /id: '([^']+)',[\s\S]*?introduction: \`([^\`]*)\`/g;
let match;
const toExpand = [];

while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const intro = match[2];
  if (intro.length < 250) { // Short intros are usually < 250 chars
    toExpand.push(id);
  }
}

const uniqueToExpand = [...new Set(toExpand)];
console.log(uniqueToExpand.slice(0, 10));
