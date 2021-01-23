/*
    Write a function, which receives two parameters. 
    The first parameter will be a string with some words separated by ', '.
    The second parameter will be a string which contains templates containing '*'.
    Find the word with the exact same length as the template and replace it.
*/

function solve(words, str){
    words = words.split(', ');

    for (const word of words) {
        let starsStr = '*'.repeat( word.length);
        str = str.replace(starsStr, word);
    }
    console.log(str);
}

solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')