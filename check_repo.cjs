const https = require('https');

https.get('https://api.github.com/repos/thiagobodruk/biblia', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(res.statusCode);
    console.log(data);
  });
});
