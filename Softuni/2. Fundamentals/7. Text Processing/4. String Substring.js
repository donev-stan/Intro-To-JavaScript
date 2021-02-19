/*
    The input will be given as two separated strings.
    Write a function that checks given text for containing a given word. The comparison should be case insensitive. 
    Once you find match, print the word and stop the program. 
    If you don't find the word print "{word} not found!"
*/

function solve(word, str){

    str = str.toLowerCase().split(' ');
    
    if (str.includes(word.toLowerCase())) {
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language'	)