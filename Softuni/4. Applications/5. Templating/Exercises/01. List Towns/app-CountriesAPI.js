const baseURL = `https://restcountries.eu/rest/v2/all`;

const elements = {
    input: () => document.querySelector('input#towns'),
    button: () => document.querySelector('button#btnLoadTowns'),
    root: () => document.querySelector('div#root')
};
elements.button().addEventListener('click', fetchCountries);

function fetchCountries(e){
   
    fetch(baseURL)
        .then(r => r.json())
        .then(appendTowns)
}

function appendTowns(towns){
    getTemplate()
        .then(templateSource => {
            const template = Handlebars.compile(templateSource);
            const htmlResult = template({towns});
            elements.root().innerHTML = htmlResult;
         });
}

const getTemplate = () => fetch('./template.hbs').then(res => res.text());