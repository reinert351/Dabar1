import https from 'https';

https.get('https://en.wikipedia.org/w/api.php?action=query&titles=Scroll&prop=pageimages&pithumbsize=1280&format=json', res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(body);
      console.log(JSON.stringify(data, null, 2));
    } catch(e) { console.log(e.message); }
  });
});
