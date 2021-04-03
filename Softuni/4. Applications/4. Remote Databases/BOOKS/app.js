const htmlSelectors = {
    loadBtn: () => document.querySelector('#loadBooks'),
    createBtn: () => document.querySelector('#create-form > button'),
    createTitleInput: () =>  document.querySelector('#create-title'),
    createAuthorInput: () =>  document.querySelector('#create-author'),
    createIsbnInput: () =>  document.querySelector('#create-isbn'),

    booksContainer: () => document.querySelector('table > tbody'),
    errorContainer: () => document.querySelector('#error-notification'),

    editForm: () => document.querySelector('#edit-form'),
    editBtn: () => document.querySelector('#edit-form > button'),
    editTitleInput: () =>  document.querySelector('#edit-title'),
    editAuthorInput: () =>  document.querySelector('#edit-author'),
    editIsbnInput: () =>  document.querySelector('#edit-isbn'),

    deleteForm: () => document.querySelector('#delete-form'),
    deleteBtn: () => document.querySelector('#delete-form > button'),
    deleteTitleInput: () =>  document.querySelector('#delete-title'),
    deleteAuthorInput: () =>  document.querySelector('#delete-author'),
    deleteIsbnInput: () =>  document.querySelector('#delete-isbn')
};

const baseURL = `https://credible-market-296711-default-rtdb.europe-west1.firebasedatabase.app/Books`;

htmlSelectors['loadBtn']().addEventListener('click', fetchAllBooks);
htmlSelectors['createBtn']().addEventListener('click', createBook);
htmlSelectors['editBtn']().addEventListener('click', editBook);
htmlSelectors['deleteBtn']().addEventListener('click', deleteBook);

function fetchAllBooks(){
    fetch(`${baseURL}/.json`)
        .then(jsonMiddleware)
        .then(renderBooks)
        .catch(errorHandler);
}

function createBook(e){
    e.preventDefault(); // stop the page from refreshing

    const titleInput = htmlSelectors['createTitleInput']();
    const authorInput = htmlSelectors['createAuthorInput']();
    const isbnInput = htmlSelectors['createIsbnInput']();

    if (titleInput.value !== '' && authorInput.value !== '' && isbnInput.value !== '') {

        const initObj = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/jsno'
            },
            body: JSON.stringify({
                title: titleInput.value,
                author: authorInput.value,
                isbn: isbnInput.value
            })
        };

        fetch(`${baseURL}/.json`, initObj)
            .then(fetchAllBooks)
            .catch(errorHandler);

        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    } else {
        const error = { message: 'Missing information!'};
        errorHandler(error);
    }
}

 function renderBooks(booksData){
    const booksContainer = htmlSelectors['booksContainer'](); 

    if (booksContainer.innerHTML) booksContainer.innerHTML = '';

    Object
        .keys(booksData)
        .forEach(bookID => {
            const {title, author, isbn} = booksData[bookID];

            const tableRow = 
                createDOMElement('tr', '', {}, {}, 
                    createDOMElement('td', title, {}, {}),
                    createDOMElement('td', author, {}, {}),
                    createDOMElement('td', isbn, {}, {}),
                    createDOMElement('td', '', {}, {}, 
                        createDOMElement('button', 'Edit', {'data-key': bookID}, {click: loadEditForm}),
                        createDOMElement('button', 'Delete', {'data-key': bookID}, {click: loadDeleteForm})));
                        // createDOMElement('button', 'Delete', {'data-key': bookID}, {click: deleteBook})));
               
            booksContainer.appendChild(tableRow);
        })
}

function deleteBook(e){
    e.preventDefault();
    const id = this.getAttribute('data-key');

    fetch(`${baseURL}/${id}.json`, {method: 'DELETE'})
        .then(fetchAllBooks)
        .then(() => htmlSelectors['deleteForm']().style.display = 'none')
        .catch(errorHandler);
}

function loadEditForm(){
    const id = this.getAttribute('data-key');

    fetch(`${baseURL}/${id}.json`)
        .then(jsonMiddleware)
        .then(({title, author, isbn}) => {
            htmlSelectors['editTitleInput']().value = title;
            htmlSelectors['editAuthorInput']().value = author;
            htmlSelectors['editIsbnInput']().value = isbn;
            htmlSelectors['editForm']().style.display = 'block';
            htmlSelectors['editBtn']().setAttribute('data-key', id);
        })
        .catch(errorHandler);
}

function loadDeleteForm(){
    const id = this.getAttribute('data-key');

    fetch(`${baseURL}/${id}.json`)
        .then(jsonMiddleware)
        .then(({title, author, isbn}) => {
            htmlSelectors['deleteTitleInput']().value = title;
            htmlSelectors['deleteAuthorInput']().value = author;
            htmlSelectors['deleteIsbnInput']().value = isbn;
            htmlSelectors['deleteForm']().style.display = 'block';
            htmlSelectors['deleteBtn']().setAttribute('data-key', id);
        })
        .catch(errorHandler);
}

function editBook(e){
    e.preventDefault();

    const titleInput = htmlSelectors['editTitleInput']();
    const authorInput = htmlSelectors['editAuthorInput']();
    const isbnInput = htmlSelectors['editIsbnInput']();

    if (titleInput.value !== '' && authorInput.value !== '' && isbnInput.value !== '') {
        
        const id = this.getAttribute('data-key');

        const initObj = {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/jsno'
            },
            body: JSON.stringify({
                title: titleInput.value,
                author: authorInput.value,
                isbn: isbnInput.value
            })
        };

        fetch(`${baseURL}/${id}.json`, initObj)
            .then(fetchAllBooks)
            .then(() => htmlSelectors['editForm']().style.display = 'none')
            .catch(errorHandler);

    } else {
        const error = { message: 'Missing information!'};
        errorHandler(error);
    }
}

function errorHandler(error){
    const errorContainer = htmlSelectors['errorContainer']();
    errorContainer.textContent = error.message;
    errorContainer.style.display = 'block';

    console.dir(error);

    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 5000);
}

function jsonMiddleware(response){
    return response.json();
}

function createDOMElement(type, text, attributes, events, ...children){
    const domElement = document.createElement(type);

    if (text !== '') domElement.textContent = text;

    Object
        .entries(attributes)
        .forEach(([attributeKey, attributeValue]) => {
            domElement.setAttribute(attributeKey, attributeValue);
    });

    Object
        .entries(events)
        .forEach(([eventName, eventHandler]) => {
            domElement.addEventListener(eventName, eventHandler);
    });

    domElement.append(...children);

    return domElement;
}