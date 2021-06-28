const express = require('express');

const app = express();

app.get('/', (request, response) => {
    console.log(`Hello Server`);
    response.send(`Hello World from express`);
});

app.listen(5000, () => console.log(` --->>> Server is running on port 5000... <<<--- `));