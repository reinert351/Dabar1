const fs = require('fs');
const data = JSON.parse(fs.readFileSync('strong_pt.json', 'utf8'));
const keys = Object.keys(data);
console.log(`Total keys: ${keys.length}`);
console.log('H keys:', keys.filter(k => k.startsWith('H')).length);
console.log('G keys:', keys.filter(k => k.startsWith('G')).length);
