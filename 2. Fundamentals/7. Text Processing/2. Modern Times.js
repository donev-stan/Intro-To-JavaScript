/*
    The input will be a single string.
    Find all special words starting with #. Word is invalid if it has anything other than letters. 
    Print the words you found without the tag each on a new line.
*/

function solve(str){
    let words = str.split(' ');

    words.forEach(word => {
        if(word[0] == '#' && word.length > 1){
            let isOnlyLetters = true;
            word = word.slice(1);
            for (const char of word) {
                let code = char.charCodeAt(); // Ascii Table
                if (code < 65 || code > 90  && code < 97 || code > 122) {
                    isOnlyLetters = false;
                    break; 
                }
            }
            if (isOnlyLetters) {
                console.log(word);
            }
        }
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')