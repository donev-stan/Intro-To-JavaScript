/*
    Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.
*/

function solve(input){
    let words = {};

    input.forEach(word => {
        if(!words.hasOwnProperty(word)){
            words[word] = 0;
        }
        words[word]++;
    });

    Object.keys(words).sort((a, b) => words[b] - words[a]).forEach(word => {
        console.log(`${word}: ${words[word]}`);
    })

}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])