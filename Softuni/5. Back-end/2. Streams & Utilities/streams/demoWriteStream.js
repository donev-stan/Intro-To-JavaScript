const fs = require('fs');

const writeStream = fs.createWriteStream('./writeDemo.txt', { encoding: 'utf8' });

writeStream.write('Hello World! ');
writeStream.write('Hello World, again!');

writeStream.end();