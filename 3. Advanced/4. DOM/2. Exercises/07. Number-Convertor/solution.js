function solve() {
    // input
    const input = document.getElementById('input');
    // result
    let result = document.querySelector('#result');

    // convert click
    document.querySelector('button').addEventListener('click', calculate);

    // select menu dropdown 
    const menu = document.querySelector('#selectMenuTo');
    // add option to dropdown
    const optionHex = document.createElement('option');
    optionHex.value = 'hexadecimal';
    optionHex.innerHTML = 'Hexadecimal';
    menu.append(optionHex);

    // change first blank option to binary dropdown opt
    let optionBinary = menu.children[0];
    optionBinary.value = 'binary';
    optionBinary.innerHTML = 'Binary';

    function calculate(e){
        // getting number from input
        const inputNumber = input.value;

        if (menu.value == 'hexadecimal') {
            calculateHex(inputNumber);
        } else if (menu.value == 'binary') {
            calculateBinary(inputNumber);
        }
    }


    function calculateHex(number){
        result.value = number;
    }

    function calculateBinary(number){
        result.value = number;
    }

}