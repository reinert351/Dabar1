import https from 'https';
https.get('https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1920&auto=format&fit=crop', res => {
  console.log(res.statusCode);
});
