const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const matches = content.match(/bookId:\s*'([A-Z0-9]{3})'/g);
const otBooks = ['GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB', 'PSA', 'PRO', 'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN', 'HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAH', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL'];
const ntBooks = ['MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'];
let otCount = 0; let ntCount = 0; let unknownCount = 0;
if (matches) {
  matches.forEach(match => {
    const bookId = match.match(/'([A-Z0-9]{3})'/)[1];
    if (otBooks.includes(bookId)) otCount++;
    else if (ntBooks.includes(bookId)) ntCount++;
    else unknownCount++;
  });
}
console.log('Total: ' + (matches ? matches.length : 0));
console.log('OT: ' + otCount);
console.log('NT: ' + ntCount);
