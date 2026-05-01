const fs = require('fs');

function run() {
  const ptData = JSON.parse(fs.readFileSync('strong_pt.json', 'utf8'));
  
  const data = {};
  const keys = Object.keys(ptData);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    data[key] = {
      id: key,
      original: ptData[key].l || ptData[key].original || '',
      transliteration: ptData[key].x || ptData[key].transliteration || '',
      pronunciation: ptData[key].p || ptData[key].pronunciation || '',
      definition: ptData[key].d || ptData[key].definition || '',
      occurrences: ptData[key].occurrences ? ptData[key].occurrences : 0
    };
  }
  
  const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
  console.log(`Created strongs_expanded.ts with ${keys.length} entries.`);
}

try {
  run();
} catch (e) {
  console.error(e);
}
