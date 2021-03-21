function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = [...formElements].splice(0, formElements - 1);
    const onScreenBtn = [...formElements].splice(formElements - 1)[0];

    
    function createMovie(e){
        e.preventDefault();

    }
    onScreenBtn.addEventListener('click', createMovie);
}