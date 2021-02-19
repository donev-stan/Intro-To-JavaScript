/*
    Write a program, which receives a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, 
    he will receive strings with two integers separated by space, which represent the indexes of elements in the sequence.  
    If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence you should add two matching elements in the following format 
    "-{number of moves until now}a" at the middle of the sequence and print this message on the console: "Invalid input! Adding additional elements to the board"
*/

function solve(array){
    
    let sequence = array.shift().split(' ');

    let i = 0;
    let moves = 0;
    let isEnd = array[i];
    while (isEnd !== 'end') {
        if (sequence.length == 0) break;
        moves++;
        let [index1, index2] = array[i].split(' ');
        if(index1 < 0 || index2 < 0 || index1 == index2 || index1 > array.length - 1 || index2 > array.length - 1){
            // add two matching elements in the following format "-{number of moves until now}a" at the middle of the sequence
            sequence.splice(sequence.length / 2, 0, `-${moves}a`);
            sequence.splice(sequence.length / 2, 0, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        }
        else{
            if(sequence[index1] == sequence[index2]){
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                // remove those elements from the seq
                sequence.splice(index1, 1); // removes el with index1
                sequence.unshift(0); // adds el to the beginning
                sequence.splice(index2, 1); // removes el with index2
                sequence.shift(); // removes added el to the beginning
            }
            else{
                console.log('Try Again!');
            }
        }

        // console.log(sequence);
        // console.log(index1, index2);
        i++;
        isEnd = array[i];
    }

    if(sequence.length !== 0){
        console.log(`Sorry you lose :(`);
        console.log(sequence.join(' '));
    }
    else{
        console.log(`You have won in ${moves} turns!`);
    }
    

}


solve(
    [
        "1 1 2 2 3 3 4 4 5 5", 
        "1 0",
        "-1 0",
        "1 0", 
        "1 0", 
        "1 0", 
        "end"
    ]
)


// solve(
//     [
//         "a 2 4 a 2 4", 
//         "4 0", 
//         "0 2",
//         "0 1",
//         "0 1", 
//         "end"
//     ]
// )

// solve(
//     [
//         "a 2 4 a 2 4", 
//         "0 3", 
//         "0 2",
//         "0 1",
//         "0 1", 
//         "end"
//     ]
// )