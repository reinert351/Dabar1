const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const lines = content.split('\n');
let brokenLines = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // A line with a string value looks like: key: 'value', or key: 'value'
  const match = line.match(/^(\s*[a-zA-Z0-9_]+:\s*)'(.*)'(,?)$/);
  if (match) {
    const prefix = match[1];
    let strContent = match[2];
    const suffix = match[3];
    
    // If strContent contains unescaped single quotes, it's broken
    // But wait, it might contain \' which is fine.
    // Let's just escape all unescaped single quotes.
    // An unescaped single quote is one not preceded by \
    const fixedStrContent = strContent.replace(/(?<!\\)'/g, "\\'");
    if (strContent !== fixedStrContent) {
      lines[i] = `${prefix}'${fixedStrContent}'${suffix}`;
      brokenLines++;
    }
  }
}
console.log('Fixed lines:', brokenLines);
fs.writeFileSync('data/pericopes_fixed.ts', lines.join('\n'), 'utf8');
