const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const pericopes = content.split('id: \'').length - 1;
console.log('Total pericopes:', pericopes);

const expanded = content.split('introduction: `').length - 1;
console.log('Expanded pericopes:', expanded);

const unexpanded = content.split('introduction: \'').length - 1;
console.log('Unexpanded pericopes:', unexpanded);
