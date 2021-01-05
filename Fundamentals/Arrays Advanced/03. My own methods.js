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


