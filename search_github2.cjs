const https = require('https');

https.get('https://api.github.com/search/repositories?q=strongs+portuguese', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    json.items.slice(0, 5).forEach(item => console.log(item.full_name));
  });
});
