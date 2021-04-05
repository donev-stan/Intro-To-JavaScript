const elements = {
    input: () => document.querySelector('input#towns'),
    button: () => document.querySelector('button#btnLoadTowns'),
    root: () => document.querySelector('div#root')
};

elements.button().addEventListener('click', getInputInformation);

function getInputInformation(e){
    e.preventDefault();

    const { value } = elements.input();

    const towns = value.split(/[, ]+/g).map((t) => {return { name: t}}); // [{}, {}, {}]

    appendTowns(towns);
}

// function appendTowns(towns){
//     getTemplate()
//         .then(templateSource => {
//             const template = Handlebars.compile(templateSource);
//             const htmlResult = template({towns});
//             elements.root().innerHTML = htmlResult;
//         });
// }

// const getTemplate = () => fetch('./template.hbs').then(res => res.text());

// Simpler way:
function appendTowns(towns){
    fetch('./template.hbs')
        .then(r => r.text())
        .then(templateSource => {
            const template = Handlebars.compile(templateSource); // make me a template
            const htmlResult = template({towns}); // pass obj to that template
            elements.root().innerHTML = htmlResult; // render template with obj data
        })
}