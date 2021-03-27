// Error Handling
function subSum(array, start, end){
    
    // If the first element is not an array, return NaN
    if (Array.isArray(array) == false) return NaN;
    
    // If the start index is less than zero, consider its value to be a zero
    // if (start < 0) start = 0;
    
    // If the end index is outside the bounds of the array, assume it points to the last index of the array (slice)
    if (end > array.length - 1) end = array.length - 1;

    return array.slice(start, end + 1).reduce((a, c) => a + Number(c), 0);
}

function test(id, actual, expected){
    if (actual == expected) console.log(`Test ${id} Passed`);
    else console.error(`Test ${id} Failed`);
}

test(1, subSum([10, 20, 30, 40, 50, 60], 3, 300), 150);
test(2, subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1), 3.3);
// test(3, );
test(4, subSum([], 1, 2), 0);
// test(5, );

console.log('Case 1:' + (subSum([10, 20, 30, 40, 50, 60], 3, 300) == 150));
console.log('Case 2:' + (subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1) == 3.3));
console.log('Case 3:' + Number.isNaN(subSum([10, 'twenty', 30, 40], 0, 2)));
console.log('Case 4:' + (subSum([], 1, 2) == 0));
console.log('Case 5:' + Number.isNaN(subSum('text', 0, 2)));