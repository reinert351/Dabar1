import https from 'https';

const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Torah_scroll.JPG/1280px-Torah_scroll.JPG";

https.get(url, res => {
  console.log('Torah status:', res.statusCode);
});

const url2 = "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1920&auto=format&fit=crop";
https.get(url2, res => {
  console.log('Unsplash status:', res.statusCode);
});
