import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'academy_data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Fix Missiologia correctAnswer
content = content.replace(/correctAnswer: /g, 'correctAnswerIndex: ');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed correctAnswer in academy_data.ts');
