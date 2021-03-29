const url = 'https://swapi.dev/api/people/';

fetch(url) // by default fetch maked GET request
    .then(response => response.json()) // we say the response need to be turned into JSON file
    .then(function(data) { // data => 
            console.log(data);
        let characters = data.results; // array of objects
        const charactersElement = document.querySelector('.characters'); // ul element
        charactersElement.innerHTML = characters.map(x => `<li>${x.name}</li>`).join('\n');
    })
    .catch(error => { // if error is thrown
        charactersElement.innerHTML =`<li> Characters not found </li>`;
    });