// Selecting children
const grandparent = document.querySelector('#grandparentID');
const parents = Array.from(grandparent.children);
    //parents.forEach(changeColor);
const parentOne = parents[0];
const childrenFromParentOne = [...parentOne.children];
    //childrenFromParentOne.forEach(changeColor);

// Getting children from grandparent (descendants)
const childOne = grandparent.querySelector('.child');
    //changeColor(childOne);


// Getting parent from child
const parent = childOne.parentElement;
    //changeColor(parent);

// skipping parent (from child - get the grandparent)
const grandparentToThisChild = childOne.closest('.grandparent');
    //changeColor(grandparentToThisChild);

// Selecting siblings
const childTwo = childOne.nextElementSibling;
    changeColor(childTwo);


function changeColor(element){
    element.style.backgroundColor = "#333";
}  