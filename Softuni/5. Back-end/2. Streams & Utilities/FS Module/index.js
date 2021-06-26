const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");
const port = 5000;

// With promise
const utils = require('./utils');

// Easier way
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

const requestHandler = (request, response) => {
    const requestUrlParsed = url.parse(request.url);
    const queryParams = qs.parse(requestUrlParsed.query);
  
    switch (requestUrlParsed.pathname) {
      case "/cats":
        response.writeHead(200, { // writeHead - writing in the head
          "Content-Type": "text/html",
        });
        

        // const data = fs.readFileSync('../streams/cats.html', 'utf8'); // data is a string
        // response.write(data);
        // response.end();

        // fs.readFile('../streams/cats.html', 'utf8', (error, data) => {
        //   if (error) {
        //     return response.end();
        //   }

        //   response.write(data);
        //   response.end();
        // });

        // With promise
        utils
          .readFileAsync('../streams/cats.html')
          .then(data => {
            response.write(data);
            response.end();
          });
        break;
  
      default:
        response.writeHead(404, { 
          "Content-Type": "text/plain",
        });
        response.write("404 Page Not Found..");
        response.end();
        break;
    }
  };
  
  http
    .createServer(requestHandler)
    .listen(port, () => console.log(`Server is listening on port ${port}...`));
  