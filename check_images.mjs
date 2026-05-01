import https from 'https';

function checkImage(id) {
  const url = `https://images.unsplash.com/photo-${id}?w=200`;
  https.get(url, res => {
    console.log(id, res.statusCode, res.headers['content-length']);
  });
}

checkImage('1532153975070-2e9ab71f1b14');
checkImage('1580130281320-0ef0754f2bf7');
checkImage('1603953504193-4e4b5dfd4681'); // The one I tried earlier
checkImage('1455390582262-044cdead27d8'); 
