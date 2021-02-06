function addItem() {
    const inputElement = document.getElementById('newText');

    if (inputElement.value.trim() != '') {
        const ul = document.getElementById('items');
        const li = document.createElement('li');
        li.textContent = inputElement.value;
        const spanDelete = document.createElement('span');
        spanDelete.textContent = '[delete]';
        spanDelete.style.float = 'right';
        spanDelete.style.cursor = 'pointer';
        spanDelete.style.color = 'red';
        ul.append(li);
        li.append(spanDelete);
        inputElement.value = '';

        spanDelete.addEventListener('click', function(e){
            e.target.parentElement.remove();
        });
    }
}

document.addEventListener('keypress', function(e){
    if (e.keyCode == 13) addItem();
});

