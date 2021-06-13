const pubSub = require("./pubSub");

const cats = [];
const onCatRequest = (name) => {
  if (cats.includes(name)) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`We have a new cat: ${name}`);
    cats.push(name);
  }
};

pubSub.subscribe('onCats', onCatRequest);