/*
function createCounter(){
    let count = 0;

    return function() {
        count++;
        console.log(`count: ${count}`);
    };
}

const myCounter01 = createCounter();
myCounter01(); // 1
myCounter01(); // 2
myCounter01(); // 3

const myCounter02 = createCounter();
myCounter02(); // 1
myCounter02(); // 2
myCounter02(); // 3
myCounter02(); // 4
*/

//==================================================

/*
function createRectangle(width, height){
    return {
        getWidth,
        setWidth,
        getHeight,
        getArea
    };

    function getWidth() { return width; }
    function setWidth(value) { width = value; }
    function getHeight() { return height; }
    function getArea() { return width * height; }
}

const myRect = createRectangle(5, 3);
console.log(myRect); // {getWidth: ƒ, setWidth: ƒ, getHeight: ƒ}
console.log(myRect.getWidth()); // 5  
console.log(myRect.getArea()); // 15 (5*3)

myRect.setWidth(7); // property width is now 7
console.log((myRect.getArea())); // 21 (7*3)

// even if we try to change the property width e.g:
myRect.width = 8; // this wont do shit
*/