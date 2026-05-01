const fs = require('fs');
const data = JSON.parse(fs.readFileSync('strong_pt.json', 'utf8'));
const keys = Object.keys(data);
console.log(`Total keys: ${keys.length}`);
console.log('Sample key:', keys[0]);
console.log('Sample value:', data[keys[0]]);
