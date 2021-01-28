const { request } = require('express');
let express = require('express');
let handlebars = require('express-handlebars');
let fs = require('fs');


let app = express();
let port = 3000;

app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

app.get('/', function(request, response){
    response.render('home', {layout: false});
});

app.get('/catalog', (request, response) =>{
    response.render(`catalog`, {layout: false, products});
});

app.get('/catalog/:serial_number', (request, response) =>{
    
    let products = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'));
    
    let sn = request.params.serial_number;
    
    if (products.find(x => x == sn)) {
        response.render('details', { layout: false, sn});
    } else {
        response.status(404);
        response.render('404', {layout: false});
    }
});

app.listen(port, () => {
    console.log(`Server listenign on port ${port}`);
});