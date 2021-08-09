module.exports = (request, response, next) => {
    console.log(request.protocol);
    console.log(request.hostname);
    console.log(request.originalUrl);

    return next();
};