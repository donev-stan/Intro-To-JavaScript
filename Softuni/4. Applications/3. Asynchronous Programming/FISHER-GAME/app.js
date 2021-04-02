function attachEvents() {
    const baseURL = `https://fisher-game.firebaseio.com/catches`;

    const addBtn = document.querySelector('.add');
    const loadBtn = document.querySelector('.load');
    const catchesDiv = document.querySelector('#catches');

    addBtn.addEventListener('click', pushCatch);
    loadBtn.addEventListener('click', getAllCatches);

    function pushCatch(e){
        const angler = document.querySelector('#addForm > .angler');
        const weight = document.querySelector('#addForm > .weight');
        const species = document.querySelector('#addForm > .species');
        const location = document.querySelector('#addForm > .location');
        const bait = document.querySelector('#addForm > .bait');
        const captureTime = document.querySelector('#addForm > .captureTime');

        const catchObj = JSON.stringify({
            angler: angler.value,
            weight: weight.value,
            species: species.value,
            location: location.value,
            bait: bait.value,
            captureTime: captureTime.value
        });

        fetch(`${baseURL}.json`, {
            method: 'POST',
            body: catchObj
        })
        .then(response => response.json())
        .then(data => {
            console.log(`New Catch added to server:`);
            console.log(data);
        })
    }

    function getAllCatches(e){
        fetch(`${baseURL}.json`)
            .then(response => response.json())
            .then(data => {
                console.log(data); // {"KeyID": {angler: '', bait: ''}, "KeyID": {}}

                Object
                    .entries(data)
                    .forEach(([keyID, {angler, weight, species, location, bait, captureTime}]) => {
                        const containerDiv = createElement('div', 'catch', '', '', keyID);

                        const anglerLabel = createElement('label', '', 'Angler');
                        const anglerInput = createElement('input', 'angler', angler, 'text');

                        const weightLabel = createElement('label', '', 'Weight');
                        const weightInput = createElement('input', 'weight', weight, 'number');

                        const speciesLabel = createElement('label', '', 'Species');
                        const speciesInput = createElement('input', 'species', species, 'text');

                        const locationLabel = createElement('label', '', 'Location');
                        const locationInput = createElement('input', 'location', location, 'text');

                        const baitLabel = createElement('label', '', 'Bait');
                        const baitInput = createElement('input', 'bait', bait, 'text');
                        
                        const captureTimeLabel = createElement('label', '', 'Capture Time');
                        const captureTimeInput = createElement('input', 'captureTime', captureTime, 'number');
                        
                        const updateBtn = createElement('button', 'update', 'Update');
                        const deleteBtn = createElement('button', 'delete', 'Delete');
                        
                        const inputs = {
                            angler: anglerInput.value,
                            weight: weightInput.value,
                            species: speciesInput.value,
                            location: locationInput.value,
                            bait: baitInput.value,
                            captureTime: captureTimeInput.value
                        }

                        updateBtn.addEventListener('click', () => {
                            fetch(`${baseURL}/${keyID}.json`, { method: 'PUT', body: JSON.stringify(inputs)})
                        });
                        deleteBtn.addEventListener('click', () => deleteCatch(keyID));
                        
                        containerDiv.appendChild(anglerLabel);
                        containerDiv.appendChild(anglerInput);
                        containerDiv.appendChild(document.createElement('hr'));
                        containerDiv.appendChild(weightLabel);
                        containerDiv.appendChild(weightInput);
                        containerDiv.appendChild(document.createElement('hr'));
                        containerDiv.appendChild(speciesLabel);
                        containerDiv.appendChild(speciesInput);
                        containerDiv.appendChild(document.createElement('hr'));
                        containerDiv.appendChild(locationLabel);
                        containerDiv.appendChild(locationInput);
                        containerDiv.appendChild(document.createElement('hr'));
                        containerDiv.appendChild(baitLabel);
                        containerDiv.appendChild(baitInput);
                        containerDiv.appendChild(document.createElement('hr'));
                        containerDiv.appendChild(captureTimeLabel);
                        containerDiv.appendChild(captureTimeInput);
                        containerDiv.appendChild(document.createElement('hr'));
                        containerDiv.appendChild(updateBtn);
                        containerDiv.appendChild(deleteBtn);

                        catchesDiv.appendChild(containerDiv);
                });
            })
    }

    function updateBtnCatch(e, catchID, obj){
        // const catchDiv = e.target.parentElement;

        fetch(`${baseURL}/${catchID}.json`, { method: 'PUT', body: JSON.stringify(obj)})
            // .then(response => response.json())
            // .catch(error => console.error(error));
    }

    function deleteCatch(catchID){
        fetch(`${baseURL}/${catchID}.json`, {
            method: 'DELETE'
        }).catch(error => console.error(error));
    }

    function createElement(element, classes, content, type, catchID){
        let newElement = document.createElement(element);
        
        if (element == 'div') {
            newElement.setAttribute('data-id', catchID);
        }

        if (element == 'input') {
            newElement.type = type;
            newElement.value = content;
        } else {
            newElement.innerHTML = content;
        }
        newElement.className = classes;

        return newElement;
    }
}

attachEvents();