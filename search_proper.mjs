import https from 'https';

const options = {
  hostname: 'en.wikipedia.org',
  path: '/w/api.php?action=query&titles=Dead_Sea_Scrolls&prop=images&format=json',
  headers: {
    'User-Agent': 'Nodejs/1.0'
  }
};

https.get(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      console.log(body);
    } catch(e) { console.log(e.message); }
  });
});
