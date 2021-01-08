/*
    Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.
    Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors
    from left and right. Detonations are performed from left to right and all detonated numbers disappear.
    The input contains two arrays of numbers. The first contains the initial sequence and the second contains the
    special bomb number and it's power.
    The output is the sum of the remaining elements in the sequence.
*/

function defuseBomb(arrayField, bombInfo){
    let bomb = bombInfo[0]; // value 4 is the bomb
    let bombRange = bombInfo[1]; // explosion is 2 elements away

    let index = arrayField.indexOf(bomb); // get the index where the value of the bomb is in the array

    while (index > -1) {
        arrayField.splice((index - bombRange), bombRange); // left detonation --- splice cuts from left to right
       
        index = arrayField.indexOf(bomb);
        
        arrayField.splice(index, (bombRange + 1)) // right detonation

        index = arrayField.indexOf(bomb);

    }

    console.log(arrayField);

}

defuseBomb(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)

defuseBomb(
    [1, 2, 2, 4, 2, 2, 2, 4, 9],
    [4, 2]
)