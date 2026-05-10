const fs = require('fs');

const brFile = './data/biblical_routes.ts';
let brContent = fs.readFileSync(brFile, 'utf8');

const routeImages = {
  'Antioquia da Síria': 'https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=1200',
  'Trôade': 'https://images.unsplash.com/photo-1599427303058-f06cbdf4bb20?q=80&w=1200',
  'Filipos': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200',
  'Atenas': 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=1200',
  'Corinto': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200',
  'Éfeso': 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200',
  'Monte Sinai': 'https://images.unsplash.com/photo-1544955378-01968800ba86?q=80&w=1200',
  'Monte Nebo': 'https://images.unsplash.com/photo-1574944490159-f703db5d5641?q=80&w=1200'
};

for (const [name, url] of Object.entries(routeImages)) {
  const regex = new RegExp(`(name:\\s*'${name}',(?:.|\\n)*?verses:\\s*\\[[^\\]]+\\])`, 'g');
  brContent = brContent.replace(regex, `$1, imageUrl: '${url}'`);
}

fs.writeFileSync(brFile, brContent);
console.log('Updated routes with images');
