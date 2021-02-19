 function arrTest(){
    let arrayNumbers = [5, 6, 8, 10, 20];

    //array.push(arg) - Добави към масива
    arrayNumbers.push(30);
    console.log(arrayNumbers);

    //array.pop(); - Removes the last element of the array
 
    //Check element 
    arrayNumbers.includes(10); // returns True or False

    //This will print all the elements with the argument given in between
    console.log(arrayNumbers.join(' -> '));
    //join turns the array into string and foer example the second ([1]) element would be "->"

    //Declaration of an empty array
    let emptyArray = [];

    //Loop through an array 
    for (const item of array) { 
        console.log(item);
    }



}

 arrTest();