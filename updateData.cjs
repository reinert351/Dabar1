const fs = require('fs');

const bgFile = './data/biblical_geography.ts';
let bgContent = fs.readFileSync(bgFile, 'utf8');

const mapping = {
  'jerusalem': "['kings', 'exile', 'jesus', 'church']",
  'bethlehem': "['patriarchs', 'judges', 'kings', 'jesus']",
  'nazareth': "['jesus']",
  'capernaum': "['jesus']",
  'galilee': "['jesus']",
  'jericho': "['exodus', 'judges', 'jesus']",
  'samaria': "['kings', 'jesus', 'church']",
  'carmel': "['kings']",
  'hebron': "['patriarchs', 'judges', 'kings']",
  'sinai': "['exodus', 'kings']",
  'damascus': "['kings', 'church']",
  'ur': "['patriarchs']",
  'haran': "['patriarchs']",
  'shechem': "['patriarchs', 'judges', 'kings']",
  'bethel': "['patriarchs', 'judges', 'kings']",
  'beersheba': "['patriarchs', 'judges', 'kings']",
  'egypt_memphis': "['patriarchs', 'exodus', 'jesus']",
  'babylon': "['exile']",
  'antioch_syria': "['church']",
  'athens': "['church']",
  'corinth': "['church']",
  'ephesus': "['church']",
  'philippi': "['church']",
  'rome': "['church']",
  'patmos': "['church']"
};

for (const [id, eras] of Object.entries(mapping)) {
  const regex = new RegExp(`(id:\\s*'${id}',(?:.|\\n)*?importance:\\s*'[^']+')\\n\\s*\\}`, 'g');
  bgContent = bgContent.replace(regex, `$1,\n    era: ${eras}\n  }`);
}

fs.writeFileSync(bgFile, bgContent);
console.log('updated biblical_geography.ts');

const brFile = './data/biblical_routes.ts';
let brContent = fs.readFileSync(brFile, 'utf8');

brContent = brContent.replace(/id: 'paulo-viagem-1',/g, "id: 'paulo-viagem-1',\n    era: 'church',");
brContent = brContent.replace(/id: 'abraao-jornada',/g, "id: 'abraao-jornada',\n    era: 'patriarchs',");
brContent = brContent.replace(/id: 'exodo-egito',/g, "id: 'exodo-egito',\n    era: 'exodus',");

fs.writeFileSync(brFile, brContent);
console.log('updated biblical_routes.ts');
