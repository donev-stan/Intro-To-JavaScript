/*
    Write a function that receives a single string and replaces any sequence of the same letters with a single corresponding letter.
*/

function solve(str){

    let result = ' '; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i+1]) {
            result += str[i];
        }
    }

    console.log(result);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');