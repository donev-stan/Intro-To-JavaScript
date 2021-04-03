(() => {

    const locationsURL = `https://judgetests.firebaseio.com/locations.json`;
    const weatherURL = `https://judgetests.firebaseio.com/forecast/{status}/{code}.json`;

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit'),
        notificationHeading: document.querySelector('h1.notification'),
        currentWeatherDiv: document.querySelector('#current'),
        upcomingWeatherDiv: document.querySelector('#upcoming'),
        forecastWrapper: document.querySelector('#forecast')
    };

    elements.button.addEventListener('click', getLocationValue);

    const errorHandler = (error) => {
        console.dir(error);
        elements.notificationHeading.textContent = error.message;
    };

    const jsonMiddleware = (response) => {
        return response.json();
    };

    const weatherSymbols = {
        s: "☀", 
        p: "⛅", 
        o: "☁", 
        r: "☂", 
        d: "°" 
    };

    function getLocationValue(e){
        
        const location = elements.locationInput.value; // searched location
        
        fetch(locationsURL)
            .then(jsonMiddleware)
            .then(data => {
                // console.log(data);
                const {name, code} = data.find(obj => obj.name === location); // find the object corresponding to that search

                const weatherTodayURL = weatherURL.replace('{status}/{code}', `today/${code}`);
                const weatherUpcomingURL = weatherURL.replace('{status}/{code}', `upcoming/${code}`);

               Promise
                .all([
                    fetch(weatherTodayURL).then(jsonMiddleware), // get todays condition weather for that location
                    fetch(weatherUpcomingURL).then(jsonMiddleware) // get 3 day forecast for that location
                ]) // when both of these requests get fulfilled:
                .then(showWeatherLocation) // run this function
                .catch(errorHandler);
            })
            .catch(errorHandler);
    }

    function showWeatherLocation(responses){
        const [todayData, upcomingData] = responses;
        // console.log(todayData);
        // console.log(upcomingData);

        const {condition, high, low} = todayData.forecast;

        const forecastDiv = createElement('div', ['forecasts']);
        const symbolSpan = createElement('span', ['condition', 'symbol'], weatherSymbols[condition[0].toLowerCase()]);
        const conditionSpanWrapper = createElement('span', ['condition']);

        const forecastLocationSpan = createElement('span', ['forecast-data'], todayData.name);

        const degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;
        const forecastTempSpan = createElement('span', ['forecast-data'], degreesInfo);

        const forecastConditionSpan = createElement('span', ['forecast-data'], condition);

        conditionSpanWrapper.appendChild(forecastLocationSpan);
        conditionSpanWrapper.appendChild(forecastTempSpan);
        conditionSpanWrapper.appendChild(forecastConditionSpan);

        forecastDiv.appendChild(symbolSpan);
        forecastDiv.appendChild(conditionSpanWrapper);

        elements.currentWeatherDiv.appendChild(forecastDiv);
        elements.forecastWrapper.style.display = 'block';

        showUpcomingWeatherInfo(upcomingData);
    }

    function showUpcomingWeatherInfo({forecast, name}){
        const forecastInfoDiv = createElement('div', ['forecast-info']);

        forecast.forEach(({condition, high, low}) => {
            const upcomingSpanWrapper = createElement('span', ['upcoming']);

            const symbolSpan = createElement('span', ['symbol'], weatherSymbols[condition[0].toLowerCase()]);

            const degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;
            const tempSpan = createElement('span', ['forecast-data'], degreesInfo);

            const conditionSpan = createElement('span', ['forecast-data'], condition);

            upcomingSpanWrapper.appendChild(symbolSpan);
            upcomingSpanWrapper.appendChild(tempSpan);
            upcomingSpanWrapper.appendChild(conditionSpan);

            forecastInfoDiv.appendChild(upcomingSpanWrapper);
        });

        elements.upcomingWeatherDiv.appendChild(forecastInfoDiv);
    }

    function createElement(tagName, className, textContent){
        const element = document.createElement(tagName);
        if (className) element.classList.add([...className]);
        if (textContent) element.textContent = textContent;

        return element;
    }

})();