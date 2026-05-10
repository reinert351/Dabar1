const fs = require('fs');

const bgFile = './data/biblical_geography.ts';
let bgContent = fs.readFileSync(bgFile, 'utf8');

const elevations = {
  'samaria': 430,
  'hebron': 930,
  'carmel': 546,
  'beersheba': 290,
  'shechem': 500,
  'shiloh': 715,
  'dan': 200,
  'hazor': 230,
  'megiddo': 160,
  'babylon': 35,
  'rome': 21,
  'athens': 150,
  'corinth': 15,
  'ephesus': 5,
  'philippi': 100,
  'damascus': 680,
  'antioch_syria': 67,
  'patmos': 269
};

for (const [id, elev] of Object.entries(elevations)) {
  const regex = new RegExp(`(id:\\s*'${id}',(?:.|\\n)*?importance:\\s*'[^']+')`, 'g');
  if (bgContent.match(regex) && !bgContent.includes(`id: '${id}',` + ".*" + `elevation: ${elev}`)) {
     bgContent = bgContent.replace(regex, `$1,\n    elevation: ${elev}`);
  }
}

fs.writeFileSync(bgFile, bgContent);
console.log('Technical data (elevation) updated for core locations');
