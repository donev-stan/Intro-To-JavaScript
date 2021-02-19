/*
    A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
    Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.
*/

function solve(originalArray){
    let result = [];

    for (const element of originalArray) {
        let reversed = reverseElement(element);
        if(element == reversed){
            result.push(element);
        }
    }

    console.log(result);

    function reverseElement(number){
        let reversedValue = '';
        
        while (number > 0) {
            let lastDigit = number % 10;        // take the last digit
            reversedValue += lastDigit;         // add it to the new variable
            number = Math.trunc(number / 10);   // remove the last digit
        }

        reversedNum = Number(reversedValue); // turn it into a number as up to now it was a string
        return reversedNum;
    }


}

solve([123,323,421,121]);
solve([32,2,232,1010]);