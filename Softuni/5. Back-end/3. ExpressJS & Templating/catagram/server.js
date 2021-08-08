const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send(`Hello world from express`);
});

app.post('/create-cat', (request, response) => {
    console.log('Create a cat request');
    response.status(201);
    response.send(`Cat created!`); 
    // or =>
    // response.status(201).send(`Cat created!`);
});

app.get('/cats/:catID', (request, response) => {
    console.log(request.params);

    if (!/\d+/.test(request.params.catID)) {
        return response.status(404).send('You need to specify cat ID');
    }
    
    response.send(`You are looking for a cat profile: ${request.params.catID}`);
});

app.all('/', (request, response) => {
    console.log(`Handle all requests`);
});

app.listen(5000, () => console.log(` --->>> Server is running on port 5000... <<<--- `)); 