import https from 'https';
const url = 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
https.get(url, res => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
});
