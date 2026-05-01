import fs from 'fs';

async function translate(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json[0].map(x => x[0]).join('');
}

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
    // Check if it's likely English
    if (def.includes('from ') || def.includes('primitive') || def.includes('root') || def.includes('word') || def.includes('the same as') || def.includes('corresponding to') || def.includes('of foreign origin') || def.includes('a ') || def.includes('the ')) {
      let success = false;
      let retries = 0;
      while (!success && retries < 3) {
        try {
          const translatedText = await translate(data[key].definition);
          data[key].definition = translatedText;
          success = true;
          translatedCount++;
          if (translatedCount % 50 === 0) {
            console.log(`Translated ${translatedCount} entries...`);
            // Save progress
            const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(data, null, 2)};\n`;
            fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
          }
          await new Promise(r => setTimeout(r, 100)); // Small delay to avoid rate limiting
        } catch (err) {
          console.error(`Error translating ${key}: ${err.message}`);
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
