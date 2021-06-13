// Creating web server

const http = require("http");
const url = require("url");
const qs = require("querystring");

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
      response.write("Welcome to /phones section");
      break;

    case "/pc":
      response.write("Welcome to /pc section");
      break;
    default:
      response.write("Hello to home page");
      break;
  }

  response.end();
};

http
  .createServer(requestHandler)
  .listen(port, () => console.log(`Server is listening on port ${port}...`));
