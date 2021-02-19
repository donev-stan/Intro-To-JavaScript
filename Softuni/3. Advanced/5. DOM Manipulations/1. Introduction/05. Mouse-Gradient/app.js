function attachGradientEvents() {

    const boxDiv = document.getElementById('gradient');
    const resultDiv = document.getElementById('result');

    boxDiv.addEventListener('mousemove', function (e) {
        mouseX = e.pageX - boxDiv.offsetLeft;

        resultDiv.textContent = ((mouseX / 300) * 100).toFixed(2) + '%';
    });

}