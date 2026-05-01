const https = require('https');

function checkUrl(url) {
  const req = https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
    console.log(url, res.statusCode);
    res.resume();
  }).on('error', (e) => {
    console.error(url, e.message);
  });
}

checkUrl('https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/strongs.json');
checkUrl('https://raw.githubusercontent.com/thiagobodruk/bible/master/json/strong.json');
checkUrl('https://raw.githubusercontent.com/thiagobodruk/bible/master/json/strongs.json');
checkUrl('https://raw.githubusercontent.com/thiagobodruk/biblia/main/json/strong.json');
checkUrl('https://raw.githubusercontent.com/thiagobodruk/biblia/main/json/strongs.json');
