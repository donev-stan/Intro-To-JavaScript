function attachEventsListeners() {

    // обект със съотношение между единиците
    // функция, която конвентира

    // взимаме референции към всички полета
    // закачаме eventHandler

    // определи текста на бутона - стойност и мерна единица
    // извиква ковертираща функция
    // показваме вс стойности

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unitType){
        const inDays = value / ratios[unitType];
        return {
            days: inDays * ratios.days,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }
    
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    document.querySelector('#daysBtn').addEventListener('click', convertDays);
    document.querySelector('#hoursBtn').addEventListener('click', convertHours);
    document.querySelector('#minutesBtn').addEventListener('click', convertMinutes);
    document.querySelector('#secondsBtn').addEventListener('click', convertSeconds);

    function convertDays(e){
        const value = Number(days.value);
        const convertedValues = convert(value, 'days');

        display(convertedValues);
    }

    function convertHours(e){
        const value = Number(hours.value);
        const convertedValues = convert(value, 'hours');

        display(convertedValues);
    }

    function convertMinutes(e){
        const value = Number(minutes.value);
        const convertedValues = convert(value, 'minutes');

        display(convertedValues);
    }

    function convertSeconds(e){
        const value = Number(seconds.value);
        const convertedValues = convert(value, 'seconds');

        display(convertedValues);
    }

    function display(values){
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;
    }

}