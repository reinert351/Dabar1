const fs = require('fs');
const path = require('path');

const dir = 'data';
const files = fs.readdirSync(dir).filter(f => f.startsWith('strong_tokens'));

const books = new Set();
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const matches = content.match(/"([A-Z0-9]+) \d+:\d+"/g);
  if (matches) {
    matches.forEach(m => {
      const book = m.split(' ')[0].replace('"', '');
      books.add(book);
    });
  }
});

console.log(Array.from(books).join(', '));
