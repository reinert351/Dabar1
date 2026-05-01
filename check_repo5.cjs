const https = require('https');

https.get('https://raw.githubusercontent.com/voltemosapalavra1-bit/B-blia_Strong/main/strong/G1.html', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data);
  });
});
