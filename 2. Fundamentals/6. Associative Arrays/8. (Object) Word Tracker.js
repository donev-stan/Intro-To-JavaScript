/*
    Write a function that receives an array of words and finds occurrences of given words in that sentence. 
    The input will come as array of strings. The first string will contain the words you will be looking for separated by a space.
    All strings after that will be the words you will be looking for. 
    Print for each word how many times it occurs. The words should be sorted by count in descending.
*/

function solve(input){
    let initialWords = input.shift().split(' ');
    let wordsObject = {};

    for (const word of initialWords) {
        wordsObject[word] = 0;
    }

    for (const word of input) {
        if(wordsObject.hasOwnProperty(word)){
           wordsObject[word]++; 
        }
    }

    Object.keys(wordsObject)
    .sort((a, b) => wordsObject[b] - wordsObject[a])
    .forEach(el => {
        console.log(`${el} - ${wordsObject[el]}`);
    });
}

solve(
    [
        'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence','because','this','is','your','task'
    ]
)