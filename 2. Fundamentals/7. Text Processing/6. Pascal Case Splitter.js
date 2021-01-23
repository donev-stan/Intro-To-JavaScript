/*
    You will receive a single string. This string is written in PascalCase format. 
    Your task here is to split this string by every word in it. Print them joined by comma and space.
*/

function solve(str){

    let result = [];
    let capIndex = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            let word = str.substring(capIndex, i);
            result.push(word);
            capIndex = i;
        }
    }
    result.push(str.substring(capIndex));

    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')