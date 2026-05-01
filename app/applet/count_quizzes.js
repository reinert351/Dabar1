import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data/academy_data.ts');
const content = fs.readFileSync(dataPath, 'utf-8');

const topicsRegex = /title:\s*'([^']+)'[\s\S]*?quiz:\s*\[([\s\S]*?)\]\s*,\s*primarySources:/g;

let match;
while ((match = topicsRegex.exec(content)) !== null) {
  const title = match[1];
  const quizContent = match[2];
  const questions = quizContent.match(/question:/g);
  const count = questions ? questions.length : 0;
  if (count < 10) {
    console.log(`${title}: ${count} questions`);
  }
}
