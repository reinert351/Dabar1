const fs = require('fs');
const content = fs.readFileSync('data/academy_data.ts', 'utf8');

const startIdx = content.indexOf("id: 'missiologia'");
if (startIdx === -1) {
  console.log("missiologia not found");
  process.exit(1);
}

const contentStartIdx = content.indexOf("content: [", startIdx);
if (contentStartIdx === -1) {
  console.log("content array not found");
  process.exit(1);
}

const contentEndIdx = content.indexOf("    ]\n  }\n]", contentStartIdx);
const arrayStr = content.substring(contentStartIdx, contentEndIdx + 5);

const matches = arrayStr.match(/".*?"/g);
console.log("Number of strings found:", matches ? matches.length : 0);
