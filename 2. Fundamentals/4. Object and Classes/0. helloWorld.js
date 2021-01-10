let pejaka = {
    brand: 'peugot',
    model: '206',
    colour: 'green',
    age: 18,
    topSpeed: 160,
    
    makeBeep: function(){
        console.log('Beep!');
    }

};

function makeSound(){
    console.log('Vroom!');
}
pejaka.makeSound = makeSound;

//console.log(pejaka);
//pejaka.makeBeep();
//pejaka.makeSound();

//-------------------------------------------

function kittyInfo(kittyName, kittyAge){
    let kitty = {
        kittyName,
        kittyAge,
    };
    return kitty;
}

let lilly = kittyInfo('Lilly', '1');
//console.log(lilly);

//-------------------------------------------

console.log(Object.keys(pejaka)); // returns an array of all the properties in the object
console.log(Object.values(pejaka)); // returns an array of all the values of the properties
console.log(Object.entries(pejaka)); // returns an array of all the properties and the values