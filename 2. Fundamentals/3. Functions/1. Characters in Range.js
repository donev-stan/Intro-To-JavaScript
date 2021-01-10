/*
    Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
    Keep in mind that the second character code might be before the first one inside the ASCII table.
*/

// There's a number behind every symbol
// https://www.asciitable.com/

function solve(firstChar, lastChar){

    // turn char into num
    let first = getNumberValue(firstChar); 
    let last = getNumberValue(lastChar); 

    // Because the input can be: second character code might be before the first one inside the ASCII table
    let min = Math.min(first, last); // so we set min to be the one thats lower
    let max = Math.max(first, last); // and the opposite for max

    // then we pass those arguments 
    let charArray = getCharsInRange(min, max);

    console.log(joinSymbols(charArray, ", "));
    console.log(`---------------------`);

    // We get the number representation of that char
    function getNumberValue(char){
        return char.charCodeAt(0);
    }
     // We get the char representation of that number
     function getCharValue(number){
        return String.fromCharCode(number);
    }

    // We get the range in between the 2 chars given
    function getCharsInRange(start, end){
        let characters = [];

        for (let i = (start + 1); i < end; i++) { // (start + 1) because we don't need the first el (only el in between)
            let symbol = getCharValue(i);
            characters.push(symbol);
        }
        return characters;
    }

    // We join elements of an array 
    function joinSymbols(array, separator){
        let result = "";

        for (let i = 0; i < array.length; i++) {
            if(i < (array.length - 1))  result += `${array[i]}${separator}`;
            else  result += `${array[i]}`;
        }
        return result;
        
        /* other way thats not working now
        for (let index of array) {
            let character = array[index];

            if (index <= (array.length - 1)) {
                result += `${character}${separator}`;
            }
            else{
                result += character;
            }
        }*/
    }
}

solve(
    'a','d'
)

solve(
    '#',':'
)

solve(
    'C','#'
)