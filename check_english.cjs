const fs = require('fs');

const content = fs.readFileSync('./data/strongs_expanded.ts', 'utf-8');
const startIdx = content.indexOf('STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = {') + 'STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = '.length;
const jsonStr = content.substring(startIdx, content.lastIndexOf('}') + 1);
const data = JSON.parse(jsonStr);

let englishCount = 0;
for (const key in data) {
  const def = data[key].definition.toLowerCase();
  if (def.includes('from ') || def.includes('primitive') || def.includes('root') || def.includes('word') || def.includes('the same as') || def.includes('corresponding to') || def.includes('of foreign origin') || def.includes('a ') || def.includes('the ')) {
    englishCount++;
  }
}

console.log(`Remaining English entries: ${englishCount}`);
