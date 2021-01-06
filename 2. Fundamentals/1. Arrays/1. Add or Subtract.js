// https://softuni.bg/trainings/resources/officedocument/52455/arrays-exercise-js-fundamentals-september-2020/3133

function solve(array){ 

    console.log(`Unedited array: ${array}`);

    // Sum of array elements
    let sumUneditedArray = 0; // Sum of original array
    let sumEditedArray = 0; // Sum of edited elements 

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        //Sum of array elements
        sumUneditedArray += array[i];
        sumEditedArray += array[i];

        if (element % 2 === 0) {
            array[i] += i;
            sumEditedArray += i;
        }
        else{
            array[i] -= i;
            sumEditedArray -= i;
        }
    }

    console.log(`Edited array: ${array}`);
    console.log(sumUneditedArray);
    console.log(sumEditedArray);
    console.log("------------------------------------------------");
}
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);