// Creating web server

const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");

const port = 5000;

const requestHandler = (request, response) => {
  console.log(` - request made`);
  console.log(` - request medthod: ${request.method}`);
  console.log(` - request url: ${request.url}`);

  const requestUrlParsed = url.parse(request.url);
  const queryParams = qs.parse(requestUrlParsed.query);
  console.log(` - request pathname: ${requestUrlParsed.pathname}`);
  console.log(queryParams);

  switch (requestUrlParsed.pathname) {
    case "/phones":
      response.writeHead(200, {
        "Content-Type": "text/html",
      });

      fs.readFile("./views/phones.html", (error, data) => {
        if (error) {
          console.error(error);
          return;
        }

        response.write(data);
        response.end();
      });
      break;

    case "/pc":
      response.writeHead(200, {
        "Content-Type": "text/plain",
      });
      response.write("Hello to /pc section page");
      response.end();
      break;

    default:
      response.writeHead(404, {
        "Content-Type": "text/plain",
      });
      response.write("Hello to home page");
      response.end();
      break;
  }
};

http
  .createServer(requestHandler)
  .listen(port, () => console.log(`Server is listening on port ${port}...`));
