/*
    Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
    The input comes as a single string. The words will be separated by a single space.
*/
// Object - when a key is a number it goes right to the top(beginning)

console.log('\n ----------------------- \n');

function solveMap(input){
    let array = input.split(' ');

    let occurrences = new Map();
    
    for (let word of array) {
        word = word.toLowerCase();

        if (!occurrences.has(word)) {
            occurrences.set(word, 0);
        }
        occurrences.set(word, occurrences.get(word) + 1 );
    }

    Array.from(occurrences.keys())
    .filter( x => occurrences.get(x) % 2 !== 0)
    .join(' ');
}

solveMap('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')