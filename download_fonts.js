const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@400;500;600;700&display=swap';
const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' };

https.get(url, { headers }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.mkdirSync('public/fonts', { recursive: true });
    fs.writeFileSync('public/fonts/anek-tamil.css', data);
    
    // Replace URL in CSS to point to local files
    let localCss = data;
    
    const urls = [...data.matchAll(/url\((https:\/\/[^)]+)\)/g)].map(m => m[1]);
    let count = 0;
    
    urls.forEach((u, i) => {
      const fileName = `anek-tamil-${i}.woff2`;
      localCss = localCss.replace(u, `/fonts/${fileName}`);
      
      https.get(u, (res2) => {
        const file = fs.createWriteStream(path.join('public', 'fonts', fileName));
        res2.pipe(file);
        file.on('finish', () => {
          count++;
          if (count === urls.length) {
            fs.writeFileSync('public/fonts/anek-tamil.css', localCss);
            console.log('Successfully downloaded ' + count + ' woff2 files and updated CSS.');
          }
        });
      });
    });
  });
});
