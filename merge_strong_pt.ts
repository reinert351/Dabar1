import fs from 'fs';

function run() {
  const content = fs.readFileSync('./data/strongs_expanded.ts', 'utf-8');
  const startIdx = content.indexOf('STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = {') + 'STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = '.length;
  const jsonStr = content.substring(startIdx, content.lastIndexOf('}') + 1);
  let data;
  try {
    data = JSON.parse(jsonStr);
  } catch (e) {
    console.error("JSON parse error:", e.message);
    return;
  }
  
  const ptData = JSON.parse(fs.readFileSync('strong_pt.json', 'utf8'));
  
  const keys = Object.keys(data);
  let updatedCount = 0;
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (ptData[key] && ptData[key].d) {
      data[key].definition = ptData[key].d;
      updatedCount++;
    }
  }
  
  console.log(`Updated ${updatedCount} entries with Portuguese definitions.`);
  
  const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
}

run();
