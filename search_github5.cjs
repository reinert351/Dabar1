const https = require('https');

https.get('https://api.github.com/search/repositories?q=strongs+portugues', { headers: { 'User-Agent': 'Node.js' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    if (json.items) {
      json.items.slice(0, 10).forEach(item => console.log(item.full_name));
    } else {
      console.log(json);
    }
  });
});
