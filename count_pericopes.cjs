const fs = require('fs');
const path = require('path');

const otBooks = new Set([
  "GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "JDG", "RUT", "1SA", "2SA", 
  "1KI", "2KI", "1CH", "2CH", "EZR", "NEH", "EST", "JOB", "PSA", "PRO", 
  "ECC", "SNG", "ISA", "JER", "LAM", "EZE", "EZK", "DAN", "HOS", "JOL", "AMO", 
  "OBA", "JON", "MIC", "NAH", "HAB", "ZEP", "HAG", "ZEC", "MAL"
]);

const ntBooks = new Set([
  "MAT", "MRK", "MAR", "LUK", "JHN", "JOH", "ACT", "ROM", "1CO", "2CO", "GAL", "EPH", 
  "PHP", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS", "JAM",
  "1PE", "2PE", "1JN", "1JO", "2JN", "2JO", "3JN", "3JO", "JUD", "REV"
]);

let otCount = 0;
let ntCount = 0;
let unknownCount = 0;
let totalCount = 0;

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('pericopes_part') && f.endsWith('.ts'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const regex = /"bookId"\s*:\s*["']([A-Z0-9]+)["']|bookId\s*:\s*["']([A-Z0-9]+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    totalCount++;
    const bookId = match[1] || match[2];
    if (otBooks.has(bookId)) {
      otCount++;
    } else if (ntBooks.has(bookId)) {
      ntCount++;
    } else {
      unknownCount++;
      console.log("Unknown bookId:", bookId);
    }
  }
});

console.log(`Total: ${totalCount}`);
console.log(`Antigo Testamento: ${otCount}`);
console.log(`Novo Testamento: ${ntCount}`);
if (unknownCount > 0) console.log(`Desconhecido: ${unknownCount}`);
