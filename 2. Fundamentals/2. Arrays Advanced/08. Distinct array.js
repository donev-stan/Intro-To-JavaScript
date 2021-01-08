function solve(array){

    /*
    // This will remove only the first instance of the found element
    for (let i = 0; i < array.length; i++) {
        let index = array.indexOf(array[i], i+1);

        if (index != -1) {
            array.splice(index, 1);
        }
    }
    console.log(array);
    */

   let result = []; 

   // We are looping through the original array
   for (let element of array) { // and
       if (!result.includes(element)) { // We are checking if the element is not already in the new array and
           result.push(element); // We are using .push(element) to add one (or more elements) to the end of result[] (and returns the new length of the array)
       }
   }
    console.log(result.join(' '));
}

solve([1, 2, 3, 2, 4, 1, 5, 15, 10, 5]);