// First-Class Functions
console.log("> First Class Functions:");
//-- Treated like any other variable:
//  --- Passed as an argument
//  --- Returned by another func
//  --- Assigned as a value to a variable
let sayHello = () => "Hello, ";
let greeting = (helloMessage, name) => helloMessage() + name;
console.log(greeting(sayHello, "Stan!")); // Hello, Stan!
//-- Can be returned by another function


// Higher-Order Functions
//-- Take other functions as an argument or return a function as a result 


// Predicates
console.log("> Predicates:");
//-- Any func that returns a bool based on evaluation of the truth of an assertion
//-- Predicates are often found in the form of callbacks
let array = [1, 2, 10, 12];
let isFound = (element) => element > 10; // True or false
let found = array.find(isFound);
console.log(found); // 12


// Built-in Higher Order Functions
//-- Array.prototype.map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//-- Array.prototype.filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//-- Array.prototype.reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.


// Pure functions
//-- Returns the same result given same parameters
//-- Its exception doesnt depend on the sate of the system


// Referental Transparency
//-- An expression that can be replaced with its corresponding value without changing the programs behavior.



// Curring
console.log("> Curring:");
//-- Always produces nested unary func (that take only one arg)
let sum = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

let sumB = sum(1); // A func will ALWAYS return something (theres no void funcs). In this case = 1
let sumC = sumB(2); // saves the result of that func = 3
let result = sumC(3); // и референция към нея
console.log(result); // 6

console.log(sum(1)(2)(3)); // 6



// Partial Application
console.log("> Partial Application:");
//-- Converting a func with a given num of args into a func with smaller num of args.
//-- Pass the remaining params when a result is needed.
//-- The partially applied func can be used multiple times.
//-- Produces funcs of arbitrary number of args.
let pow = (number, power) => number ** power;
console.log(pow(4, 2)); // 16

let square = pow.bind(null, 2);
console.log(square(4)); // 16

let square1 = (num) => { return pow(num, 2)};
console.log(square1(4)); // 16



// Immediately-Invoked Func Expressions
console.log("> IIFE:");
//-- Func that is executed immediately.
(function () {
    console.log("This is an IIFE");
})();

let resultIIFE = ((something) => {
    return `Another ${something}`;
})("IIFE");
console.log(resultIIFE);



// Closure
console.log("> Closure:");
//-- The scope of an inner func includes the scope of the outer func.
//-- An inner func retains variables being used from the outer function scope even after the parent function has returned.
//-- A state is preserved in the outer func (closure)
function outerFunc() {
    let outerVariable = 'I am an outer variable!';

    return function innerFunc() {
        let innerVariable = 'I am an inner variable!';
        console.log(outerVariable); // I am an outer variable!
        return innerVariable;
    }
}

let returnedInnerFunction = outerFunc();
console.log(returnedInnerFunction());  // I am an inner variable!



// Error Handling
console.log("> Error Handling:");
//-- The findamental principle of error handling says that a func (method) should either:
//  --- Do what its name suggest
//  --- Indicate a problem
//  --- Any other behavior is incorrect

//-- A func failed to do what its name suggests should:
//  --- Return a special value (e.g undefined / false / -1)
//  --- Throw an exception / error
//  --- Exceptions are the object-oriented way for errors

//-example:
let str = "Hello World";
console.log(str.indexOf("smth")); // -1


// Types of Errors:
//- Syntax Errors - during parsing
//- Runtime Errors - occur during exception -- after compilations, when the app is running
//- Logical Errors - occur when a mistake has been made in the logic of the script and the expected result is incorrect -- also known as bugs

//- Exception - a func is unable to do it's work (fatal error)
//- Special Values

function somethingBroken() {
    if (Math.random() < 0.3) {
        throw new Error('Something is broken!');
    }
    return 'Yay, not broken!';
}

try {
    let isBroken = somethingBroken();
    console.log(isBroken);
} catch (error) {
    console.log("Something went wrong :(");    
}