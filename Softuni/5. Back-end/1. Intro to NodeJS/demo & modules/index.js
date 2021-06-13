const logger = require('./logger');
logger('Message from index.js');

const _ = require('lodash'); // _.
// Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

const fs = require('fs');
// The Node.js file system module allows you to work with the file system on your computer.
// - Cannot be run in the browser


const url = require('url');
const parsedUrl = url.parse(`https://github.com/donev-stan/eDay?react-project=yes&crud=yes`);
console.log(parsedUrl); console.log();

const queryString = require('querystring');
const queryParams = queryString.parse(parsedUrl.query); 
console.log(queryParams); console.log();
console.log(`CRUD operations: ${queryParams.crud} \n`);

// Commonly used modules:
// - http -> used to create Node.js server
// - url, querystring, path, fs