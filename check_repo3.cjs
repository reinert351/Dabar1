const https = require('https');

https.get('https://api.github.com/repos/voltemosapalavra1-bit/B-blia_Strong/contents', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    if (Array.isArray(json)) {
      json.forEach(f => console.log(f.name));
    } else {
      console.log(json);
    }
  });
});
