const { request } = require('express');
let express = require('express');

let app = express();
let port = 3000;

app.get('/', function(request, response){
    response.send('Hello World!');
});

app.get('/catalog', (request, response) =>{
    response.send(`Catalog Page`);
});


app.get('/catalog/:serial_number', (request, response) =>{
    
    let products = [
        '123',
        '456',
        '789'
    ];
    
    let sn = request.params.serial_number;

    if (products.find(x => x == sn)) {
        response.send(`
            <h1> Catalog Page </h1>
            <p> Product S/N: ${sn} </p>
        `);
    } else {
        response.status(404);
        response.send(`<p> Error 404: Product with S/N ${sn} not found </p>`);
    }

   
});

app.listen(port, () => {
    console.log(`Server listenign on port ${port}`);
});