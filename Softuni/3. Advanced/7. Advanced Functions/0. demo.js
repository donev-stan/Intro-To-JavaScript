// Higher order functions

// Curring
console.log("> Curring");
//-- Always produces nested unary func (that take only one arg)
let sum = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

let sumB = sum(1);
let sumC = sumB(2);
let result = sumC(3);
console.log(result); // 6

console.log(sum(1)(2)(3)); // 6



// Partial Application
console.log("> Partial Application");
//-- Converting a func with a given num of args into a func with smaller num of args.
//-- Pass the remaining params when a result is needed.
//-- The partially applied func can be used multiple times.
//-- Produces funcs of arbitrary number of args.

let pow = (x, y) => x ** y;
console.log(pow(4, 2)); // 16

let sqrt = pow.bind(null, 2);
console.log(sqrt(4)); // 16



// Immediately-Invoked Func Expressions
console.log("> IIFE");
//-- Func that is executed immediately.
(function () {
    console.log("This is an IIFE");
})();

let resultIIFE = ((something) => {
    return `Another ${something}`;
})("IIFE");
console.log(resultIIFE);



// Closure
console.log("> Closure");
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
console.log("> Error Handling");
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