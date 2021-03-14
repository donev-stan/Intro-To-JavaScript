//----- Aggregation (.reduce())
// Create a collection ordered by some property in common


//----- Concatenation
const objA = {
    propA: 5,
    propB: 'myString'
};

const objB = {
    someFunc: function() { console.log('Hi, ' + this.propB) }
};

/*
Object.assign(objA, objB); // All the properties of objB are assigned to objA
// Take objA and put all the properties of objB to it (objA)

objA.someFunc(); // Hi, myString


//----- Create a new third object from these 2
const objC = Object.assign({}, objA, objB);

console.log(objC); // {propA: 5, propB: 'myString', someFunc: ƒ}
*/

//----- Object.create()-- uses prototype to create a new obj -- Inheritance
const objChildC = Object.create(objB); // objB - Parent
console.log(objChildC); // {} --- this shows properties hooked only to the instance (NOT the prototype)
objChildC.someFunc(); // Hi, undefined
// objChildC has NO someFunc but it s prototype DOES -- Shares the same prototype as objB 
console.log(objChildC.__proto__); // {someFunc: ƒ} --- this shows prototype properties


//This will make a copy with different prototype
const objChildD = Object.create(Object.assign(objB));


// for-in loops through the prototype as well
// UNLIKE Object.entries()