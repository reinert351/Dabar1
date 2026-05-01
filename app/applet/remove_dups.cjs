const fs = require('fs');

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// Remove duplicates
const idsToRemove = ['lev_16_1_22', 'lev_10_1_3', 'lev_16_1_10'];
const filteredArr = arr.filter(p => !idsToRemove.includes(p.id));

const newArrayContent = JSON.stringify(filteredArr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log('Removed duplicate pericopes. Total now:', filteredArr.length);
