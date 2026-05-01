import https from 'https';
https.get('https://unsplash.com/napi/search/photos?query=torah+scroll+wood&per_page=5', res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(body);
      console.log(data.results.map((r) => r.id + ' | ' + r.description).join('\n'));
    } catch(e) { console.log(e.message); }
  });
});
