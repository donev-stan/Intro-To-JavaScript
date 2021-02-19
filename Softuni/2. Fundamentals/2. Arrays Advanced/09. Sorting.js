function sortSolution(array){
    // .sort() function modifies the original array! 

    // ((a, b) => a - b) --> Sorts the array in ascending order (a->A)
    // ((a, b) => b - a) --> Sorts the array in descending order (A->a)
    array.sort((a, b) => a - b);
    let length = array.length;

    console.log(length);

    let result = [];
    for (let i = 0; i < length; i++) {
        let biggestNumber = array.pop(); //Removes the last element and returns it
        let smallestNumber = array.shift(); //Removes the first element and returns it

        result.push(biggestNumber, smallestNumber);
    }
    console.log(result.length);
    console.log(result);
}

sortSolution([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

/*
// Custom Sort

function demoCustomSort(array){
    let array = [1, 21, 3, 52, 69, 63, 31, 2, 18, 94];

    array.sort(customSort);

    function customSort(a, b){
        if(a > b){
            return 1;
        }
        else if(a < b){
            return -1;
        }
        else{
            return 0;
        }
    }

}
*/