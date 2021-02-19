/*
    Write a function that receives an array of words and finds occurrences of given words in that sentence. 
    The input will come as array of strings. The first string will contain the words you will be looking for separated by a space.
    All strings after that will be the words you will be looking for. 
    Print for each word how many times it occurs. The words should be sorted by count in descending.
*/

function solve(input){

    let obj = getWantedWords(input);

    function getWantedWords(array){
        let obj = {};
        array[0].split(' ').forEach(word => {
            obj[word] = 0;
        });
        return obj;
    }

    for (const word of input.slice(1)) {
        if (Object.keys(obj).includes(word)) {
            obj[word]++;
        }
    }

    for (const key of Object.keys(obj).sort((a, b) => obj[b] - obj[a])) {
        console.log(`${key}: ${obj[key]}`);
    }
}

solve(
    [
        'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
        ,'words','this','and','sentence', 'because','this','is','your','task'
    ]
)