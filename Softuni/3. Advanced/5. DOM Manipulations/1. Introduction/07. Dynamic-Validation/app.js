function validate() {

    const regex = /^[a-z-\.]+@[a-z\.]+\.[a-z]{2,4}/;
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('change', function () {
        emailInput.classList.remove('error');
        const value = emailInput.value;
        if (value.match(regex)) { return; }
        emailInput.classList.add('error');
    });
}