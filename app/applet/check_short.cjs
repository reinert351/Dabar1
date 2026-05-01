const fs = require('fs');
const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arr = new Function('return ' + content.substring(startIndex, endIndex + 1))();

const shortIntro = arr.filter(p => p.introduction.length < 100);
console.log('Short intros:', shortIntro.length);

const shortPoints = arr.filter(p => p.points.some(pt => pt.description.length < 50));
console.log('Short points:', shortPoints.length);
