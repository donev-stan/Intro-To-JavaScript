const person = {
    name: "Stan",
    age: 22
};

if (person.name) { 
    console.log('Has truthy name value');
}

if (person.name !== null) {
    console.log('Has some type of value');
}

// Check if there is a name property no matter what it is (e.g undefined)
if ("name" in person) {
    console.log('Has name property');
}