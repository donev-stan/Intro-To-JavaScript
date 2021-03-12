function sort(array, sortType){
    
    let sorting = sortingFunc();
    return sorting[sortType](array);

    function sortingFunc(){
        return {
            asc: (array) => array.sort((a, b) => a - b),
            desc: (array) => array.sort((a, b) => b - a)
        };
    }
}

// console.log(sort([14, 7, 17, 6, 8], 'asc'));
// console.log(sort([14, 7, 17, 6, 8], 'desc'));


function sort2(array, sortType){
    
    let sortingObj = {
        asc: (array) => array.sort((a, b) => a - b),
        desc: (array) => array.sort((a, b) => b - a)
    }

    return sortingObj[sortType](array);
}

console.log(sort2([14, 7, 17, 6, 8], 'asc'));
console.log(sort2([14, 7, 17, 6, 8], 'desc'));