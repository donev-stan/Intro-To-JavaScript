function solve(array){

    let firstEl = Number(array[0]);
    //let lastEl = array[array.length - 1];
    let lastEl = Number(array.pop()); // Will delete the last element and return its value (lastEl will hold it)

    return firstEl + lastEl;
}

console.log(solve(['5', '10'])); 
console.log(solve(['20', '30', '40']));