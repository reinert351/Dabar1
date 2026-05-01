const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']', content.lastIndexOf('2ki_25_1_12'));
const validContent = content.substring(startIndex, endIndex + 1);

let pericopes = [];
try {
  pericopes = new Function('return ' + validContent)();
  console.log('Successfully parsed', pericopes.length, 'pericopes.');
} catch (e) {
  console.error('Error parsing:', e);
}

// Now let's read the scripts from batch 18 to 28 and extract the new pericopes
const batches = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
for (const batch of batches) {
  const scriptContent = fs.readFileSync(`app/applet/add_batch_${batch}.cjs`, 'utf8');
  const match = scriptContent.match(/const newPericopes = (\[[\s\S]*?\]);\n\nconst content/);
  if (match) {
    const newP = new Function('return ' + match[1])();
    for (const p of newP) {
      if (!pericopes.find(existing => existing.id === p.id)) {
        pericopes.push(p);
      }
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
