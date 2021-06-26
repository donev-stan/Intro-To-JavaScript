const fs = require('fs');
const server = require('http').createServer();

server.on('request', (request, response) => {
    const src = fs.createReadStream('../demo & events/views/cats.html');
    src.on('data', data => response.write(data));
    src.on('end', () => response.end());
});

server.listen(5000);