/*
    Write a program to read a sequence of integers and find and print the top 5 numbers that are greater than the average value in the sequence, sorted in descending order.
    Input:
        Read from the console a single line holding space separated number.
    Output:
    Print the above described numbers on a single line, space separated. If less than 5 numbers hold the above mentioned property, print less than 5 numbers. 
    Print “No” if no numbers hold the above property.
*/

function solve(array){
    let numberArray = array.split(' ').map(Number); 
    let average = numberArray.reduce((p, c) => p + c, 0) / numberArray.length; // Вземаме елементите и ги редуцираме до 1 (тоест ->  [0] + [1] => [1] + [2] + [2] + [3] и т.н.т) == Сумата на вс елементи
    console.log(numberArray.filter(x => x > average).sort((a, b) => b - a).slice(0, 5).join(' ') || 'No');

    console.log("-------------------------------");
}

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('-1 -2 -3 -4 -5 -6');
solve('1');