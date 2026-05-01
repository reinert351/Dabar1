const fs = require('fs');

let pericopes = [];
for (let i = 1; i <= 7; i++) {
  const fileContent = fs.readFileSync(`data/pericopes_part${i}.ts`, 'utf8');
  const match = fileContent.match(/export const PERICOPES_PART_\d+: PericopeOutline\[\] = (\[[\s\S]*\]);/);
  if (match) {
    const chunk = new Function('return ' + match[1])();
    pericopes = pericopes.concat(chunk);
  }
}

const minorProphets = ['HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL'];

const existing = pericopes.filter(p => minorProphets.includes(p.bookId));
console.log(JSON.stringify(existing.map(p => ({
  id: p.id, 
  title: p.title, 
  introLen: p.introduction ? p.introduction.length : 0
})), null, 2));
