
// Optimized way
function addItem() {
    // взимаме референции и четем свойства
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');
    const text = textInput.value;
    const value = valueInput.value;

    // създаваме нов елемент и променяме неговите свойства
    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    // допълнителна логика ---
    if (option.textContent != "" || option.value != "") {
        // добавяме новия елемент към списъка
        document.querySelector('#menu').appendChild(option);
    }

    // зануляваме полетата
    document.value = "";
    document.value = "";
}


/* Original and done 
function addItem() {
    // взимаме референции и четем свойства
    const text = document.querySelector('#newItemText').value;
    const value = document.querySelector('#newItemValue').value;

    // създаваме нов елемент и променяме неговите свойства
    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    // добавяме новия елемент към списъка
    document.querySelector('#menu').appendChild(option);

    // зануляваме полетата
    document.querySelector('#newItemText').value = "";
    document.querySelector('#newItemValue').value = "";
}
*/