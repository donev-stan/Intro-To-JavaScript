const fs = require('fs');

const readStream = fs.createReadStream('./cats.html', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./readAndWriteDemo.txt', { encoding: 'utf8' });

readStream.on('data', (data) => {
    console.log('new chunk');

    writeStream.write(data);
});

readStream.on('end', () => {
    console.log('reading ended');
    writeStream.end();
});

writeStream.on('finish', () => { 
    console.log('finished writing');
});