const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const lines = content.split('\n');
for (let i = 6520; i <= 6530; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
