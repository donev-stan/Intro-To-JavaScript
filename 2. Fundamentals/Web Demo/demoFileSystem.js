let fs = require('fs');

let dataAsString = fs.readFileSync('data.json', 'utf-8');

let data = JSON.parse(dataAsString);

console.log(data.name); // Stanislav
console.log(data.age); // 21
console.log(data.position); // Junior Developer

// The file is not changed
data.age++;
data.position = 'Developer';

console.log(data.age); // 22
console.log(data.position); // Developer

// To change the file: 
fs.writeFileSync('./dataChanged.json', JSON.stringify(data), 'utf-8');
// file "dataChanged.json" is created with the data that we changed above