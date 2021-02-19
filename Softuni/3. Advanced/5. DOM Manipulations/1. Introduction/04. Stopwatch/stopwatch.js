function stopwatch() {
    
    let minutes = 0;
    let seconds = 0;
    let intervalID;
    const time = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    function formatTimeOutput(timeNumber){
        let text = timeNumber.toString();
        if (timeNumber < 10) { text = '0' + text; }
        return text;
    }

    function setTimeDiv(minutes, seconds){
        time.innerText = `${formatTimeOutput(minutes)}:${formatTimeOutput(seconds)}`;
    }

    function startBtnHandler(e){
        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled');

        intervalID = setInterval(function () {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            setTimeDiv(minutes, seconds);

            console.log(`min: ${minutes} & sec: ${seconds}`);
        }, 1000)
    }

    function stopBtnHandler(e){
        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
        clearInterval(intervalID); 

        // to restart the timer
        minutes = 0;
        seconds = 0;
        setTimeDiv(minutes, seconds);
    }

    startBtn.addEventListener('click', startBtnHandler);
    stopBtn.addEventListener('click', stopBtnHandler);
}