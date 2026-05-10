const fs = require('fs');

const bgFile = './data/biblical_geography.ts';
let bgContent = fs.readFileSync(bgFile, 'utf8');

const mapping = {
  'jerusalem': {
    reconstructionUrl: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200', // Model of Herod's Temple
    imageUrl: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=1200' // Modern Western Wall/Dome
  },
  'babylon': {
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea206f39b1?q=80&w=1200', // Real Ishtar Gate in Museum
    reconstructionUrl: 'https://images.unsplash.com/photo-1621252179027-d44554e9bc37?q=80&w=1200' // Babylon Model
  },
  'capernaum': {
    imageUrl: 'https://www.bibleplaces.com/wp-content/uploads/2015/07/Capernaum-synagogue-and-octagonal-church-from-above-tb020108502-1.jpg',
    reconstructionUrl: 'https://images.unsplash.com/photo-1596464716127-f2a829d4de30?q=80&w=1200'
  }
};

for (const [id, data] of Object.entries(mapping)) {
  const regex = new RegExp(`(id:\\s*'${id}',(?:.|\\n)*?elevation:\\s*\\-?\\d+)(\\n\\s*\\})`, 'g');
  let replacement = `$1`;
  if (data.imageUrl) replacement += `,\n    imageUrl: '${data.imageUrl}'`;
  if (data.reconstructionUrl) replacement += `,\n    reconstructionUrl: '${data.reconstructionUrl}'`;
  replacement += `$2`;
  bgContent = bgContent.replace(regex, replacement);
}

fs.writeFileSync(bgFile, bgContent);
console.log('Updated geography with reconstructions');
