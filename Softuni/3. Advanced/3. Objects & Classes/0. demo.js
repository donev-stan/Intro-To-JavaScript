let person = {
    name: 'Stan',
    age: 21
}

//let person2 = person; // This will make a copy of the reference to the same object and wont make a copy
let copyOfPersonObj = Object.assign({}, person);
// now this on the other hand will clone the original object and therefore make a new copy

// delete ONLY works on properties
//delete person.age;
console.log(person.age); // undefined

// Object.entries/keys/values
const objEntries = Object.entries(person);         
// [
//     [key, value],   // ['name', 'Stan']
//     [key, value],   // ['age', 21]
// ]
console.log(objEntries); // Terminal: [ [ 'name', 'Stan' ], [ 'age', 21 ] ]

let objKeys = Object.keys(person);           
console.log(objKeys); // Terminal: [ 'name', 'age' ]

let objValues = Object.values(person);
console.log(objValues); // Terminal: [ 'Stan', 21 ]

// JSON = JS Object Notation