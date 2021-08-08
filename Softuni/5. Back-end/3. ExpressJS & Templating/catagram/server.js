const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send(`Hello world from express`);
});

app.post('/create-cat', (request, response) => {
    console.log('Create a cat request');
    response.status(201).send(`Cat created!`);
});

app.get('/cats/:catID', (request, response) => { // '/cats/:catID(\\d+)' istead of the if check below
    console.log(request.params);

    if (!/\d+/.test(request.params.catID)) {
        return response.status(404).send('You need to specify cat ID');
    }

    response.send(`You are looking for a cat profile: ${request.params.catID}`);
});

app.all('/', (request, response) => {
    console.log(`Handle all requests`);
});

app.get('/download', (request, response) => {
    response.download('./views/home.html');
});

app.get('/pdf', (request, response) => {
    response.sendFile('./views/some.pdf', { root: __dirname });
});

app.listen(5000, () => console.log(` --->>> Server is running on port 5000... <<<--- `)); 