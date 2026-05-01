const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

// Find all matches of pericopes
const regex = /\{\s*"id":\s*"[^"]+",[\s\S]*?"conclusion":\s*"[^"]+"\s*\}/g;
let match;
const pericopes = [];

while ((match = regex.exec(content)) !== null) {
  try {
    const p = new Function('return ' + match[0])();
    pericopes.push(p);
  } catch (e) {
    console.error('Failed to parse a pericope:', e.message);
  }
}

console.log('Extracted', pericopes.length, 'pericopes from data/pericopes.ts');

// Now add from scripts
const scripts = fs.readdirSync('app/applet').filter(f => f.startsWith('add_batch_') && f.endsWith('.cjs'));
scripts.sort(); // This will sort them alphabetically, which might not be perfect (e.g. 10 before 2)
// Let's sort numerically
scripts.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)[0]);
  const numB = parseInt(b.match(/\d+/)[0]);
  return numA - numB;
});

for (const script of scripts) {
  const scriptContent = fs.readFileSync(`app/applet/${script}`, 'utf8');
  const match = scriptContent.match(/const newPericopes = (\[[\s\S]*?\]);\n\nconst content/);
  if (match) {
    try {
      const newP = new Function('return ' + match[1])();
      let added = 0;
      for (const p of newP) {
        if (!pericopes.find(existing => existing.id === p.id)) {
          pericopes.push(p);
          added++;
        }
      }
      console.log(`Added ${added} pericopes from ${script}`);
    } catch (e) {
      console.error(`Failed to parse pericopes from ${script}:`, e.message);
    }
  }
}

console.log('Total pericopes after recovery:', pericopes.length);

// Split into chunks of 100
const chunkSize = 100;
for (let i = 0; i < pericopes.length; i += chunkSize) {
  const chunk = pericopes.slice(i, i + chunkSize);
  const chunkIndex = Math.floor(i / chunkSize) + 1;
  const fileName = `data/pericopes_part${chunkIndex}.ts`;
  const fileContent = `import { PericopeOutline } from './pericopes_types';\n\nexport const PERICOPES_PART_${chunkIndex}: PericopeOutline[] = ${JSON.stringify(chunk, null, 2)};\n`;
  fs.writeFileSync(fileName, fileContent, 'utf8');
}

// Create pericopes_types.ts
const typesContent = `export interface PericopeOutline {
  id: string;
  bookId: string;
  chapter: number;
  startVerse: number;
  endVerse: number;
  title: string;
  theme: string;
  introduction: string;
  points: { verseRef: string; title: string; description: string }[];
  conclusion: string;
}
`;
fs.writeFileSync('data/pericopes_types.ts', typesContent, 'utf8');

// Create pericopes.ts
let indexContent = `import { PericopeOutline } from './pericopes_types';\n`;
const numChunks = Math.ceil(pericopes.length / chunkSize);
for (let i = 1; i <= numChunks; i++) {
  indexContent += `import { PERICOPES_PART_${i} } from './pericopes_part${i}';\n`;
}
indexContent += `\nexport type { PericopeOutline };\n\nexport const PERICOPES: PericopeOutline[] = [\n`;
for (let i = 1; i <= numChunks; i++) {
  indexContent += `  ...PERICOPES_PART_${i},\n`;
}
indexContent += `];\n`;
fs.writeFileSync('data/pericopes.ts', indexContent, 'utf8');

console.log('Done splitting pericopes.');
