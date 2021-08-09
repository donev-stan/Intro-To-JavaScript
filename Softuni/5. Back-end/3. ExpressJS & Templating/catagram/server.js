const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const cats = require('./cats');

const app = express();

const checkCatIdMiddleware = require('./middlewares/middleware');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

// app.use(checkCatIdMiddleware); -> whatever request we get has to go through the middleware
app.use(loggerMiddleware);

app.use('/static', express.static('public'))


app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    // response.send(`Hello world from express`);

    let name = 'Stan';
    response.render('home', { name: name });
});

// https://www.npmjs.com/package/express-handlebars
app.get('/cats',  (request, response) => {
    response.render('cats', {cats: cats.getAll()});
});

app.post('/cats', (request, response) => {
    console.log('Create a cat request');
    console.log(request.body);

    let catName = request.body.cat;
    cats.add(catName);

    response.redirect('/cats');

    // response.status(201).send(`Cat created!`);
});

// '/cats/:catID(\\d+)' istead of the if check below
// '/cats/:catID?' => ? means catID param is optional
app.get('/cats/:catID?', checkCatIdMiddleware, (request, response) => { 
    console.log(request.params);

    // if (!/\d+/.test(request.params.catID)) {
    //     return response.status(404).send('You need to specify cat ID');
    // }

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