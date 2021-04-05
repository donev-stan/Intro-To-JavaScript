import monkeys from './monkeys.js';
// console.log(monkeys);

const elements = {
    allMonkeys: () => document.querySelector('div.monkeys')
};

fetch('./monkeys.hbs')
    .then(r => r.text())
    .then(monkeysTemplateSRC => { // getting the template
        const template = Handlebars.compile(monkeysTemplateSRC);
        const resultHTML = template({monkeys});

        elements.allMonkeys().innerHTML = resultHTML; 
        attachEventListener(); 
    });


//--------------------

function attachEventListener(){
    elements.allMonkeys().addEventListener('click', (e) => {
        const { target } = e;

        if (target.nodeName !== 'BUTTON' || target.textContent !== 'Info') return;

        const p = target.parentNode.querySelector('p');

        if (p.style.display === 'none') {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
}