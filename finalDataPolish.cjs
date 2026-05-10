const fs = require('fs');

const bgFile = './data/biblical_geography.ts';
let bgContent = fs.readFileSync(bgFile, 'utf8');

const locationImages = {
  'samaria': 'https://images.unsplash.com/photo-1549419163-b1d6e191980a?q=80&w=1200',
  'carmel': 'https://images.unsplash.com/photo-1596464716127-f2a829d4de30?q=80&w=1200',
  'hebron': 'https://images.unsplash.com/photo-1596464716127-f2a829d4de30?q=80&w=1200',
  'sinai': 'https://images.unsplash.com/photo-1544955378-01968800ba86?q=80&w=1200',
  'damascus': 'https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=1200',
  'antioch_syria': 'https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=1200',
  'athens': 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=1200',
  'corinth': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200',
  'ephesus': 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200',
  'philippi': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200',
  'rome': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200',
  'patmos': 'https://images.unsplash.com/photo-1599427303058-f06cbdf4bb20?q=80&w=1200'
};

for (const [id, url] of Object.entries(locationImages)) {
  const regex = new RegExp(`(id:\\s*'${id}',(?:.|\\n)*?era:\\s*\\[[^\\]]+\\])`, 'g');
  if (bgContent.match(regex) && !bgContent.includes(`id: '${id}',` + "\n" + `    imageUrl: '${url}'`)) {
     bgContent = bgContent.replace(regex, `$1,\n    imageUrl: '${url}'`);
  }
}

// Clean up double imageUrl in Jerusalem if present
bgContent = bgContent.replace(/imageUrl: 'https:\/\/images\.unsplash\.com\/photo-1542332213-9b5a5a3fab35\?q=80&w=1200',\n\s*elevation: 754,\n\s*imageUrl: 'https:\/\/images\.unsplash\.com\/photo-1542332213-9b5a5a3fab35\?q=80&w=1200'/, "imageUrl: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=1200',\n    elevation: 754");

fs.writeFileSync(bgFile, bgContent);
console.log('Final polish of geography data completed');
