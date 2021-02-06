function addItem() {
    const inputElement = document.getElementById('newItemText');

    if (inputElement.value.trim() != '') {
        const ul = document.getElementById('items');
        const li = document.createElement('li');
        li.textContent = inputElement.value;
        ul.append(li);
        inputElement.value = '';
    }
}

document.addEventListener('keypress', function(e){
    if (e.keyCode == 13) addItem();
});