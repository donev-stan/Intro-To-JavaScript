function attachEvents() {
    const locationsURL = `https://judgetests.firebaseio.com/locations.json`;
    const baseURL = `https://judgetests.firebaseio.com/forecast`;

    // DOM References
    const getWeatherBtn = document.querySelector("#submit");
    getWeatherBtn.addEventListener("click", getWeather);

    const locationNameInput = document.querySelector("#location");
    const currentDiv = document.querySelector("#current");
    const forecastParentDiv = document.querySelector("#forecast");
    const upcomingDiv = document.querySelector("#upcoming");

    const symbols = {
        Sunny: "☀", // ☀ // &#x2600
        "Partly sunny": "⛅", // ⛅ // &#x26C5
        Overcast: "☁", // ☁ // &#x2601
        Rain: "☂", // ☂ // &#x2614
        Degrees: "°" // ° // &#176
    };

    async function getWeather(e) {
        fetch(locationsURL)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data); // [{code: "ads", name: "asd"}, {...}, {...}]
                const { code, name } = data.find((city) => city.name === locationNameInput.value.trim());

                // fetch today
                const current = await fetch(`${baseURL}/today/${code}.json`).then((response) => response.json());

                // fetch upcoming
                const upcoming = await fetch(`${baseURL}/upcoming/${code}.json`).then((response) => response.json());

                // When both of them are ready
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

                Promise.all([current, upcoming])
                    .then(([currentData, upcomingData]) => {
                        // console.log(currentData);
                        // console.log(upcomingData);

                        // DOM Manipulations
                        renderCurrentData(currentData);
                        renderUpcomingData(upcomingData);
                
                        forecastParentDiv.style.display = "block";
                    })
                    .catch((error) => console.error(error.message));
            });
    }

    function renderCurrentData(currentData){
        let forecastDiv = createElement("div", "forecasts-info");

        let currentSymbol = symbols[currentData.forecast.condition];
        let conditionSymbolSpan = createElement("span", "condition symbol", currentSymbol);
        let conditionInfoSpan = createElement("span", "condition");

        let forecastCitySpan = createElement("span", "forecast-data", currentData.name);

        const low_high_temp = `${currentData.forecast.low}°/${currentData.forecast.high}°`;
        let forecastInfoSpan = createElement("span", "forecast-data", low_high_temp);

        let forecastCondititonSpan = createElement("span", "forecast-data", currentData.forecast.condition);

        forecastDiv.appendChild(conditionSymbolSpan);
        currentDiv.appendChild(forecastDiv);
        conditionInfoSpan.appendChild(forecastCitySpan);
        conditionInfoSpan.appendChild(forecastInfoSpan);
        conditionInfoSpan.appendChild(forecastCondititonSpan);
        forecastDiv.appendChild(conditionInfoSpan);
    }

    function renderUpcomingData(upcomingData){
        let forecastInfo = createElement("div", "forecast-info");

        upcomingData.forecast.forEach(element => {
            let upcomingSpan = createElement("span", "upcoming");
            let conditionSymbolSpan = createElement("span", "symbol", symbols[element.condition]);
            forecastInfo.appendChild(conditionSymbolSpan);

            const low_high_temp = `${element.low}°/${element.high}°`;
            let forecastInfoSpan = createElement("span", "forecast-data", low_high_temp);
            let forecastCondititonSpan = createElement("span", "forecast-data", element.condition);
            
            forecastInfo.appendChild(conditionSymbolSpan);
            forecastInfo.appendChild(forecastInfoSpan);
            forecastInfo.appendChild(forecastCondititonSpan);
            upcomingSpan.appendChild(forecastInfo);
        });

        upcomingDiv.appendChild(forecastInfo);
    }

    function createElement(element, classes, content) {
        let newElement = document.createElement(element);
        newElement.className = classes;
        newElement.textContent = content; // .innerHtml wasn't working with codes(&#x2600) for some reason

        return newElement;
    }
}

attachEvents();