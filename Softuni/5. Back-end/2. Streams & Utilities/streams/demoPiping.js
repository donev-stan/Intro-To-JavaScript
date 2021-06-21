const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./cats.html', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./pipingDemo.txt');

const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);
// to view in therminal - cat demoPiping.js