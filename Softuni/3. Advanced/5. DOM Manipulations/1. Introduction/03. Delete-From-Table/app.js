function deleteByEmail() {

    const emailTDs = Array.from(document.querySelectorAll('#customers td:last-child'));
    const input = document.querySelector('input[name=email]');
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = '';

    const inputValue = input.value;
    if (!inputValue) { return; }
    
    const td = emailTDs.find( function (td) { return td.innerText === inputValue; });
    if (!td) { resultDiv.innerText = 'Not Found!'; return; }
    td.parentElement.remove();

    resultDiv.innerText = 'Deleted!';
    setTimeout(() => {resultDiv.innerText = ''}, 2000);

    input.value = '';
}

