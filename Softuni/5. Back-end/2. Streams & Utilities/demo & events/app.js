require('./init');

// ---
const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");
const pubSub = require('./pubSub');

const port = 5000;

const requestHandler = (request, response) => {
  const requestUrlParsed = url.parse(request.url);
  const queryParams = qs.parse(requestUrlParsed.query);

  switch (requestUrlParsed.pathname) {
    case "/cats":
      response.writeHead(200, { // writeHead - writing in the head
        "Content-Type": "text/html",
      });

      fs.readFile("./views/cats.html", (error, data) => {
        if (error) {
          console.error(error);
          return;
        }

        response.write(data); // write - writing in the body
        response.end();
      });

      pubSub.publish('onCats', queryParams.name);
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
