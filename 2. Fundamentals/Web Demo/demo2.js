let data = require('./myModule');

let myArray = [4, 1, 7, 5];

myArray.sort(data.compareNums); // [7, 5, 4, 1]

console.log(myArray);