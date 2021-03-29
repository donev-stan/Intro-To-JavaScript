const url = 'https://swapi.dev/api/people/';

const httpRequest = new XMLHttpRequest(); // as said in the documentation

// Add Listener
httpRequest.addEventListener('loadend', function(){ // we may or may not use the event - (e)
    let response = JSON.parse(this.responseText);
    let characters = response.results;

    console.log(response);

    const charactersElement = document.querySelector('.characters');
    charactersElement.innerHTML = characters.map(x => `<li>${x.name}</li>`).join('\n');
});

httpRequest.open('GET', url);
httpRequest.send();