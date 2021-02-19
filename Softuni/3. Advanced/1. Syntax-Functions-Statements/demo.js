// Function Expression
let multiply = function(a, b){
    return a * b;
}

let product = multiply(2, 5);
console.log(`Function expression (assigned to variable) result from multiply: ${product}`);

// Arrow Function
let subtract = (a, b) => {
    return a - b;
};

let result = subtract(10, 4);
console.log(`Normal arrow func result from subtraction: ${result}`);


let double = (a) => a * 2;
console.log(`Short arrow func result form double: ${double(6)}`);

 // Default function parameter values
 function printStars(count = 5){
    console.log("*".repeat(count));
 }

 printStars(); // ***** 
 printStars(2); //**

// ...params
function findMaxNumber(...numbers){
    let maxNumber = Math.max(...numbers);
}
console.log(findMaxNumber(5, -3, 16));

// pow operator
function pow(a, b){
    return a ** b;
}
console.log(`pow func using ** operator:  ${pow(5, 2)}`);


// Strange JS stuff -- passing function as a param

let sumAB = (a, b) => a + b;

function calculate(operation, firstArgumnet, secondArgument){
    let operationresult = operation(firstArgumnet, secondArgument);
    return operationresult;
}

let resultTwo = calculate(sumAB, 5, 15);
console.log(`Passing func as a param/arg result: ${result}`);