function subtract() {

    // Simplest way
    document.getElementById('result').textContent = 
        Number(document.getElementById('firstNumber').value) - 
        Number(document.getElementById('secondNumber').value);

    // Using object
    let elements = {
        firstNumber: document.querySelector('#firstNumber'),
        secondNumber: document.querySelector('#secondNumber'),
        resultBox: document.querySelector('result')
    };

    elements.resultBox.textContent = Number(elements.firstNumber.value) - Number(elements.secondNumber.value);

    /*
        // eval(); is not good at all (evil) - we could get injected with <script>
        let firstNum = document.querySelector('#firstNumber').value;
        let secondNum = document.querySelector('#secondNumber').value;
        document.querySelector('#result').textContent = eval(`${firstNum} - ${secondNum}`);
    */
}