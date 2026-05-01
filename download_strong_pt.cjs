const https = require('https');
const fs = require('fs');

https.get('https://raw.githubusercontent.com/voltemosapalavra1-bit/B-blia_Strong/main/data/strong.json', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('strong_pt.json', data);
    console.log('Downloaded strong_pt.json');
  });
});
