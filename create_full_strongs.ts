import fs from 'fs';

function run() {
  const ptData = JSON.parse(fs.readFileSync('strong_pt.json', 'utf8'));
  
  const data = {};
  const keys = Object.keys(ptData);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    data[key] = {
      id: key,
      original: ptData[key].l,
      transliteration: ptData[key].x,
      pronunciation: ptData[key].p,
      definition: ptData[key].d,
      occurrences: 0
    };
  }
  
  const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
  console.log(`Created strongs_expanded.ts with ${keys.length} entries.`);
}

run();
