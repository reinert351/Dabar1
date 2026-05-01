const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

try {
  const startIndex = content.indexOf('[\n  {');
  const endIndex = content.lastIndexOf(']');
  const arrayContent = content.substring(startIndex, endIndex + 1);
  const arr = new Function('return ' + arrayContent)();
  
  const uniqueIds = new Set();
  const uniqueArr = [];
  let duplicates = 0;
  
  for (const p of arr) {
    if (uniqueIds.has(p.id)) {
      console.log('Found duplicate ID:', p.id);
      duplicates++;
    } else {
      uniqueIds.add(p.id);
      uniqueArr.push(p);
    }
  }
  
  console.log('Total duplicates removed:', duplicates);
  
  if (duplicates > 0) {
    const newArrayContent = JSON.stringify(uniqueArr, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, "'");
      
    const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
    fs.writeFileSync('data/pericopes.ts', newContent, 'utf8');
    console.log('Updated data/pericopes.ts');
  }
} catch (e) {
  console.error('Parse error:', e.message);
}
