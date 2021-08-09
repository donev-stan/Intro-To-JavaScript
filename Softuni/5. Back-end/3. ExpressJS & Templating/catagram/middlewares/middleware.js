function middleware(request, response, next) {
    console.log(`Hello from middleware!`);
    console.log(request.params);

    if (request.params.catID) {
        return next();
    }

    response.status(403).send(`You need to specify cat ID`);
}

module.exports = middleware;