const fs = require('fs');
const ts = fs.readFileSync('data/pericopes.ts', 'utf8');

const blocks = ts.split("id: '");
const results = [];

for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const id = block.split("'")[0];
  
  // Check if it has introduction: '
  if (block.includes("introduction: '")) {
    results.push(id);
  }
}

console.log(JSON.stringify(results, null, 2));
