const https = require('https');

https.get('https://cdn.jsdelivr.net/gh/mormon-documentation-project/strongs@master/strongs.json', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
    if (data.length > 1000) {
      console.log(data.substring(0, 1000));
      res.destroy();
    }
  });
});
