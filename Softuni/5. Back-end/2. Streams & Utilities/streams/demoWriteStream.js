const fs = require('fs');

const writeStream = fs.createWriteStream('./write.txt', { encoding: 'utf8' });

writeStream.write('Hello World! ');
writeStream.write('Hello World, again!');

writeStream.end();