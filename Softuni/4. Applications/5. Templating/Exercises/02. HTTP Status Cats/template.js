const elements = {
    allCats: () => document.querySelector('section#allCats')
};

Promise.all(
    [
        getTemplate('./template.hbs'),
        getTemplate('./cat.hbs')
    ]
).then(([templateSrc, catSrc]) => {
    Handlebars.registerPartial('cat', catSrc);
    let template = Handlebars.compile(templateSrc);
    let htmlResult = template({cats});
    elements['allCats']().innerHTML = htmlResult;
    attachEventListener();
})


function getTemplate(templateLocation) {
    return fetch(templateLocation).then(r => r.text());
}


// ------------ btn clicking and not important stuff bellow ----------------

function attachEventListener(){
    elements.allCats().addEventListener('click', (e) => {
        const { target } = e;

        if (target.nodeName === 'BUTTON' && target.className === 'showBtn') {
            let divStatus = target.parentNode.querySelector('div.status');

            if (divStatus.style.display === 'none') {
                divStatus.style.display = 'block';   
                target.textContent = 'Hide status code';            
            } else {
                divStatus.style.display = 'none';               
                target.textContent = 'Show status code';            
            }
        }
    });
}