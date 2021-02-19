const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

/*
// Bubbling 
// (moves up the tree // e.g: child -> parent -> grandparent -> document)
grandparent.addEventListener('click', e => { // click on grandparent would invoke only its event
    console.log("Grandparent-Red Bubble");
});

// click on parent would result in invoking (parent -> grandparent..)
parent.addEventListener('click', e => {
    console.log("Parent-Blue Bubble");
});

// click on child would result in invoking all events (child -> parent -> grandparent..)
child.addEventListener('click', e => {
    console.log("Child-Gren Bubble");
});
*/

/*
// Capturing 
// (moves down the tree // e.g: document -> grandparent -> parent -> child)
grandparent.addEventListener('click', e => { 
    console.log("Grandparent-Red Capture");
}, {capture: true});

parent.addEventListener('click', e => {
    console.log("Parent-Blue Capture");
}, {capture: true});

child.addEventListener('click', e => {
    console.log("Child-Green Capture");
}, {capture: true});
*/

/*
// Stop event propagation
grandparent.addEventListener('click', e => { 
    console.log("Grandparent-Red Capture");
}, {capture: true});

parent.addEventListener('click', e => {
    
    e.stopPropagation(); 
    // stops event here from propagating up or down through the capture or bubble phase

    console.log("Parent-Blue Capture");
}, {capture: true});

child.addEventListener('click', e => {
    console.log("Child-Green Capture");
}, {capture: true});
*/

/*
// Run events ONLY once
grandparent.addEventListener('click', e => { // click on grandparent would invoke only its event
    console.log("Grandparent-Red Bubble");
}, {once: true});
// now this event will run once and NEVER again

parent.addEventListener('click', e => {
    console.log("Parent-Blue Bubble");
});

child.addEventListener('click', e => {
    console.log("Child-Gren Bubble");
});
*/

/*
// Remove event listener
child.addEventListener('click', printHi);
function printHi() { console.log("Child-Green Bubble says Hi!");}

setTimeout(() => {
    child.removeEventListener('click', printHi);
}, 2000);
// 2 seconds after loading event listener for child would be deleted and gone
*/

// Event delegation
// 1. select elements
// 2. add new element
// now this new element is not part of that selection on step 1 so:

const divs = document.querySelectorAll('div');

addGlobalEventListener('click', 'div', e => {
    console.log('Just saying Hi!');
});

function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) {
            callback(e);
        }
    })
}

const newDiv = document.createElement('div');

newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple';

document.body.append(newDiv);