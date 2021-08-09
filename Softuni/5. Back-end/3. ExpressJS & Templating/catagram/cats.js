const fs = require('fs');
const catsData = require('./cats.json');
const cats = catsData.slice();

function add(name) {
    cats.push(name);
    fs.writeFile('./cats.json', JSON.stringify(cats), (error) => {
        if(error) return console.error(error);

        console.log(`Successful write`);
    });
}

function getAll() {
    return cats.slice();
}

module.exports = {
    add,
    getAll,
    // getByID
}