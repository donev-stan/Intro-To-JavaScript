function solve() {

    const screen = document.querySelector('#expressionOutput');
    const output = document.querySelector('#resultOutput');
    document.querySelector('.clear').addEventListener('click', () => {
        memory.first = '';
        memory.second = '';
        memory.operator = '';
        screen.textContent = '';
        output.textContent = '';
    });

    // добавяме event listeners
    [...document.querySelector('div.keys').querySelectorAll('button')].forEach(b => {
        b.addEventListener('click', onClick);
    });

    const memory = {
        first: '',
        second: '',
        operator: ''
    }

    const operators = {
        '+': () => Number(memory.first) + Number(memory.second),
        '-': () => Number(memory.first) - Number(memory.second),
        '*': () => Number(memory.first) * Number(memory.second),
        '/': () => Number(memory.first) / Number(memory.second),
        '=': () => {},
    }

    function onClick(e){

        // прочитаме value на натиснатия бутон
        const value = e.target.value;
        if (operators.hasOwnProperty(value)) {
            // натисната е функция (+ - * / =)
            if (value == '=') {
                output.textContent = operators[memory.operator]();
            }
            else{
                memory.operator = value;
            }
        }
        else{
            //натисното е число
            if (memory.operator === '') {
                memory.first += value;
            }
            else{
                memory.second += value;
            }
        }

        // изчистваме екрана
        screen.textContent = `${memory.first} ${memory.operator} ${memory.second}`; 


        // изпълняваме операция според value
    }
}