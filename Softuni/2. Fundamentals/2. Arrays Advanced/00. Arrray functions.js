function arrayFunctions(){

    // .push() - ADD to the END
    // .pop() - remove from the END
    // .unshift() - ADD to the beginning
    // .shift() - remove from the beginning

    // .slice() - remove a range of elements and returns them --- doesn't affect the original array
    // .splice() - insert at position/delete from position --- alters the original array
    
    
    let demoArray = [0, 1, 2, 3, 4, 5]; 

    /*
    // .slice()
    console.log(`--- .splice() ---`);

    let slicedArray = demoArray.slice(0, 3); // (3) [0, 1, 2] --- does not take the last el 
    console.log(slicedArray);
    */

    /*
    // .splice()
    console.log(`--- .splice() ---`);
    let demoArrayCopy = demoArray.slice();
    
    splicedArray = demoArrayCopy.splice(1, demoArray.length - 2); // (4) [1, 2, 3, 4] --- removes and returns elements starting at pos 1 to the second last
    console.log(splicedArray); // (4) [1, 2, 3, 4]
    console.log(demoArrayCopy); // (2) [0, 5]

    */
   
   /*
   // .filter() --- returns True or False based on boolean expresion
   demoArrayCopy = demoArray.slice();
   
   let filteredDemoArray = demoArrayCopy.filter((number) => number % 2 !== 0); // 'number' is every el of the array, check and returns if the el is odd
   console.log(filteredDemoArray); // (3) [1, 3, 5]
   */

    /*    
    // .map() --- returns new array
    let mapArray = demoArray.map((number) => number+2); // Adds 2 to every el of the array
    console.log(mapArray);
    */

  
}
arrayFunctions();