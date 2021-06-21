const fs = require('fs');

const readStream = fs.createReadStream('./cats.html');

readStream.on('data', (data) => {
    console.log(data);
    // <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 20 6c 61 6e 67 3d 22 65 6e 22 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 20 20 3c 6d 65 ... 225 more bytes>
    
    console.log('new chunk');
});

readStream.on('end', () => {
    console.log('reading ended');
});