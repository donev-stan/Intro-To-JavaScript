(() => {
    const baseURL = `https://fisher-game.firebaseio.com/catches.json`;

    const elements = {
        anglerInput: document.querySelector('#addForm input.angler'),
        weightInput: document.querySelector('#addForm input.weight'),
        speciesInput: document.querySelector('#addForm input.species'),
        locationInput: document.querySelector('#addForm input.location'),
        baitInput: document.querySelector('#addForm input.bait'),
        captureTimeInput: document.querySelector('#addForm input.captureTime'),
        addBtn: document.querySelector('.add')
    };

    elements.addBtn.addEventListener('click', addCatch);

    async function addCatch(){

        const myCatch = {
            angler: elements.anglerInput.value,
            weight: elements.weightInput.value,
            species: elements.speciesInput.value,
            location: elements.locationInput.value,
            bait: elements.baitInput.value,
            captureTime: elements.captureTimeInput.value
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const options = {
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(myCatch),
            method: 'POST',
        };

        try {
            const response = await fetch(baseURL, options);
            const data = await response.json();
        } catch (error) {
            console.error(error);            
        }

        console.log(data);
    }

})();