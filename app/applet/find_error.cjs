const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');

// Find double commas or empty elements
const match = content.match(/,\s*,/g);
if (match) {
  console.log('Found empty elements:', match.length);
}

// Find trailing comma before closing bracket
const match2 = content.match(/,\s*\];/g);
if (match2) {
  console.log('Found trailing comma before closing bracket');
}

// Find undefined keyword
const match3 = content.match(/undefined/g);
if (match3) {
  console.log('Found undefined keyword');
}

// Try to parse the array
try {
  const arrayContent = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
  // This is not valid JSON, it's JS object literal. We can use eval or Function
  const arr = new Function('return ' + arrayContent)();
  const undefinedIndices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      undefinedIndices.push(i);
    } else if (!arr[i].bookId) {
      console.log('Missing bookId at index', i, arr[i].id);
    }
  }
  console.log('Undefined indices:', undefinedIndices);
} catch (e) {
  console.error('Parse error:', e.message);
}
