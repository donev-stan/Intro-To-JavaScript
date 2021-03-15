// Create a func which returns an object that can modify the DOM. The returned object should support the following functionality:
// init(selector1, selector2, resultSelector) - Initializes the object to work with the elements corresponding to the supplied selectors.
// add() - adds the numerical value of the element corresponging to selector1 to the numerial value of the element corresponding to selector2
//-- and then writes the result in the element corresponding to resultSelector
// subtract() - subtracts the numerical value of the element corresponding to selector2 from the numerical value of the element corresponding to selector1
//-- and then writes the result in the element corresponding to resultSelector

function sumFactory() {
    let firstElement;
    let secondElement;
    let resultElement;

    return {
        init: (selector1, selector2, resultSelector) => {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add: () => {
            resultElement.value = Number(firstElement.value) + Number(secondElement.value);
        },
        subract: () => {
            resultElement.value = Number(firstElement.value) - Number(secondElement.value);
        },
    };
}

let sum = sumFactory();
sum.init("#num1", "#num2", "#result");

document
    .getElementById("sumButton")
    .addEventListener("click", sum.add);

document
    .getElementById("subtractButton")
    .addEventListener("click", sum.subract);