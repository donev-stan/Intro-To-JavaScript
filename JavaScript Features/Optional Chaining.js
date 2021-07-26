class Person {
    constructor (name, address, hobbies) {
        this.name = name;
        this.address = address;
        this. hobbies = hobbies;
    }

    print () {
        console.log(this);
    }
}


function printPersonStreet (person) {
    // console.log(person.address.street); // if undefined i spassed will result in ERROR 
    // console.log(person && person.address && person.address.street); // Will give undefined as a result & wont throw error

    // Optional chaining:
    console.log(person?.address?.street); 
    // Will give undefined as a result & wont throw error
    // Much cleaner 
}

const stan = new Person(
    "Stan",
    { street: 'ul. 256A', city: 'Sometown'},
    ["Running", "Coding"]
);

stan.print();
printPersonStreet(stan);

// e.g undefined 
const undefinedExample = new Person(
    "Undefined Example",
    undefined,
    ["Running", "Coding"]
);

undefinedExample.print();
printPersonStreet(undefinedExample);


// printName doesnt exist
stan.printName?.(); 
// prevents an error
// Checks if 'printName' exists
// Checks if 'printName' is a function


console.log(stan.work[0]); // error
console.log(stan.work?.[0]); // undefined