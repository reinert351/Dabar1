const fs = require('fs');

const path = 'data/strongs_expanded.ts';
let content = fs.readFileSync(path, 'utf8');

// Find the last valid }
const lastIndex = content.lastIndexOf('}');
if (lastIndex !== -1) {
  content = content.substring(0, lastIndex + 1);
  content += '\n};\n';
  fs.writeFileSync(path, content, 'utf8');
  console.log('Fixed file');
} else {
  console.log('Could not find }');
}
