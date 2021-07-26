const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send(`Hello world from express`);
});

app.post('/create-cat', (request, response) => {
    console.log('Create a cat request');

    res.status(201);
    response.send(`Cat created!`); // or =>
    // res.status(201).send(`Cat created!`);
});

app.all('/', (request, response) => {
    console.log(`Handle all requests`);
});

app.listen(5000, () => console.log(` --->>> Server is running on port 5000... <<<--- `));