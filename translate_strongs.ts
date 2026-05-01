import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';

async function run() {
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
  
  const keys = Object.keys(data);
  console.log(`Total entries: ${keys.length}`);
  
  let translatedCount = 0;
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (data[key].definition === '---') continue;
    
    const def = data[key].definition.toLowerCase();
    if (def.includes('from ') || def.includes('primitive') || def.includes('root') || def.includes('word') || def.includes('the same as') || def.includes('corresponding to') || def.includes('of foreign origin') || def.includes('a ') || def.includes('the ')) {
      let success = false;
      let retries = 0;
      while (!success && retries < 3) {
        try {
          const res = await translate(data[key].definition, { to: 'pt' });
          data[key].definition = res.text;
          success = true;
          translatedCount++;
          if (translatedCount % 10 === 0) {
            console.log(`Translated ${translatedCount} entries...`);
            // Save progress
            const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(data, null, 2)};\n`;
            fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
          }
        } catch (err) {
          retries++;
          await new Promise(r => setTimeout(r, 2000));
        }
      }
    }
  }
  
  const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
  console.log('Translation complete!');
}

run().catch(console.error);
