const https = require('https');
const fs = require('fs');

https.get('https://cdn.jsdelivr.net/gh/mormon-documentation-project/strongs@master/strongs.json', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const parsed = JSON.parse(data);
    const entries = {};
    let count = 0;
    
    // Take 1000 Hebrew and 1000 Greek
    let hCount = 0;
    let gCount = 0;
    
    for (const item of parsed) {
      const id = item.number || item.id || item.strong_id;
      if (!id) continue;
      
      if (id.startsWith('H') && hCount < 1000) {
        entries[id] = {
          id: id,
          original: item.lemma || item.original || item.word || '---',
          transliteration: item.xlit || item.transliteration || item.translit || '---',
          definition: item.description || item.definition || item.meaning || '---',
          occurrences: item.occurrences || 0
        };
        hCount++;
        count++;
      } else if (id.startsWith('G') && gCount < 1000) {
        entries[id] = {
          id: id,
          original: item.lemma || item.original || item.word || '---',
          transliteration: item.xlit || item.transliteration || item.translit || '---',
          definition: item.description || item.definition || item.meaning || '---',
          occurrences: item.occurrences || 0
        };
        gCount++;
        count++;
      }
      
      if (count >= 2000) break;
    }
    
    const fileContent = `import { StrongEntry } from '../types';\n\nexport const STRONGS_DATA_EXPANDED: Record<string, StrongEntry> = ${JSON.stringify(entries, null, 2)};\n`;
    fs.writeFileSync('./data/strongs_expanded.ts', fileContent);
    console.log('Done writing 2000 entries');
  });
});
