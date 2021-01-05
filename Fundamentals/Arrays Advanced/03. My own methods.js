let myArray = ['20', '30', '40'];
console.log(myArray);

//-----------------------------
function myPush(array, element){
   
    array[array.length] = element;
}
console.log(myPush(myArray, '50'));
console.log(myArray);

//-----------------------------
function myPop(array){
    let element = array[array.length - 1]; 
    array.length--;

    return element;
}
//myPop(myArray);
console.log(myArray);

//-----------------------------
function myIndexOf(array, value){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(myArray, '30')); // 1

//Map function
/*
 function doubleSum(num){
    return num * 2;
 }

 let testArr = [7, -2, 8, 9, 11, -3, 14];
 let doubled = testArr.map(doubleSum);
 console.log(testArr);
 console.log(doubled);
 */

function myMap(_array, _function){
    let result = [];

    for (const element of _array) {
        let mapped = _function(element);
        result.push(mapped);
    }
    return result;
}

let numsAsStrings = ['5', '3', '14', '-2', '8'];
console.log(numsAsStrings);
let nums = myMap(numsAsStrings, Number);
console.log(nums);
let increm = myMap(nums, x => x+1);
console.log(increm);