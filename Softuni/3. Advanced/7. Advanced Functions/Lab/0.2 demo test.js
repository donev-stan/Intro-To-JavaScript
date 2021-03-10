function greeting(){
    return function () {
        console.log("Hi");
    }
}

let sayHi = greeting();
sayHi();

// Closure
let counter = (function(){
    let count = 0;

    function getCurrentValue(){
        return count;
    }

    function getNextValue(){
        return ++count;
    }

    return {
        getCurrentValue,
        getNextValue
    };

})();

console.log(counter.getCurrentValue()); // 0
console.log(counter.getNextValue()); // 1
console.log(counter.getNextValue()); // 2
console.log(counter.getCurrentValue()); // 2