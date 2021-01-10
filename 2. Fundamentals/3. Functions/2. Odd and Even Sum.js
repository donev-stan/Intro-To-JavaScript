/*
    You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. 
*/

function solve(number){

    // this will pass 'number' as string to the 'getAllOddDigits' functions --- getAllOddDigits(`${number}`);

    let oddDigitsArray = getAllOddDigits(number);
    let evenDigitsArray = getAllEvenDigits(number);

    // output the sum of these numbers in each array
    console.log(`Sum of odd digits: ${getSum(oddDigitsArray)}`);
    console.log(`Sum of even digits: ${getSum(evenDigitsArray)}`);
    
    function getSum(array){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    function getAllOddDigits(number){
        let oddDigits = [];

        // checking if theres still elements in the number
        while (number > 0) {
            // this will take the last digit
            let lastDigit = number % 10; 

            if (lastDigit % 2 != 0) {
                oddDigits.push(lastDigit);
            }

            // this will remove the last digit --- number = parseInt(number/10);
            number = Math.trunc(number/10);
        }

        //console.log(`Odd Digits: ${oddDigits}`);
        return oddDigits;
    }

    function getAllEvenDigits(number){
        let evenDigits = [];

        // checking if theres still elements in the number
        while (number > 0) {
            // this will take the last digit
            let lastDigit = number % 10; 

            if (lastDigit % 2 == 0) {
                evenDigits.push(lastDigit);
            }

            // this will remove the last digit --- number = parseInt(number/10);
            number = Math.trunc(number/10);
        }

        //console.log(`Even Digits: ${evenDigits}`);
        return evenDigits;
    }

    console.log(`---------------`);
}

solve(1000435);
solve(3495892137259234);