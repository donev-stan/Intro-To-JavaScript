/*
    You are given an array with integers. Write a program to modify the elements after receive the commands “swap”, “multiply” or “decrease”.
        swap {index1} {index2}” take two elements and swap their places.
        “multiply {index1} {index2}” take element at the 1st index and multiply it with element at 2nd index. Save the product at the 1st index.
        “decrease” decreases all elements in the array with 1.
    
    Input:
    On the first input line you will be given the initial array values separated by a single space.
    On the next lines you will receive commands until you receive the command “end”. The commands are as follow: 
        “swap {index1} {index2}”
        “multiply {index1} {index2}”
        “decrease”

    Output:
        The output should be printed on the console and consist element of the modified array – separated by “, “(comma and single space).
*/

function solve(array){
    // pasrse input
    // for each command, until 'end'
    // -- parse command
    // -- determine action based on command
    // -- perform action
    // print result

    /*
        let stringArray = array[0].split(' ');
        let numberArray = stringArray.map(Number);
    */

    let numberArray = array.shift().split(' ').map(Number);
    //--- console.log(numberArray); --- test

    let command = array.shift(); // takes the element at the beginning
    while(command != 'end'){
        let tokens = command.split(' ');
        switch(tokens[0]){
            case 'swap':{
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                let temp = numberArray[index1];
                numberArray[index1] = numberArray[index2];
                numberArray[index2] = temp;
                break;
            }
            case 'multiply':{
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                numberArray[index1] *= numberArray[index2];
                break;
            }
            case 'decrease':
                numberArray = numberArray.map(x => --x);
                
                break;
        }
            command = array.shift();
    }
    console.log(numberArray.join(", "));
    console.log("-----------------------------------");
}

solve(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]
);

solve(
    [
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
    ]
);
