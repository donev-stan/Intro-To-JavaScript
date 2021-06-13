// Creating web server

const http = require('http');
const url = require('url');
const qs = require('querystring');

const port = 5000;

const requestHandler = (request, response) => {
    console.log(` - request made`);
    console.log(` - request medthod: ${request.method}`);
    console.log(` - request url: ${request.url}`);

    const requestUrlParsed = url.parse(request.url);
    const queryParams = qs.parse(requestUrlParsed.query);
    console.log(` - request pathname: ${requestUrlParsed.pathname}`);
    console.log(queryParams);


    response.write('Hello World!')
    response.end();
};

http.createServer(requestHandler).listen(port, () => console.log(`Server is listening on port ${port}...`));