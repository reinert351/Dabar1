const fs = require('fs');
const ts = fs.readFileSync('data/pericopes.ts', 'utf8');
const regex = /(id: 'ps_51_1_17',[\s\S]*?introduction: )'[^']*'(,[\s\S]*?points: \[[\s\S]*?description: )'[^']*'([\s\S]*?description: )'[^']*'([\s\S]*?description: )'[^']*'([\s\S]*?conclusion: )'[^']*'/g;
const match = regex.exec(ts);
if (match) {
  console.log("MATCHED!");
} else {
  console.log("NOT MATCHED!");
}
