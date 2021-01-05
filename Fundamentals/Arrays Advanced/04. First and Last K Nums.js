function solve(array){

    // extract first element (k)
    let k = array.shift();
    console.log(array);
    console.log(`k = `, k);

    // slice fist k elements
    let firstK = array.slice(0, k);
    console.log(firstK.join(' '));

    // slice last k elements
    let lastK = array.slice(array.length - k);
    console.log(lastK.join(' '));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);