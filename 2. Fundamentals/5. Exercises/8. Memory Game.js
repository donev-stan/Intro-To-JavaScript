/*
    Write a program, which receives a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, 
    he will receive strings with two integers separated by space, which represent the indexes of elements in the sequence.  
    If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence you should add two matching elements in the following format 
    "-{number of moves until now}a" at the middle of the sequence and print this message on the console: "Invalid input! Adding additional elements to the board"
*/

function solve(array){



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

solve(
    [
        "a 2 4 a 2 4", 
        "0 3", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
    ]
)

solve(
    [
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
    ]
)