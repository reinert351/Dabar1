const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

console.log(JSON.stringify(arr[0], null, 2));
console.log(JSON.stringify(arr[1], null, 2));
