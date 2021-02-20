'use strict';   // basically enforces cleaner JavaScript

display(">>>Object Literals:");
(function() {   // IIFE

    let person = {
        firstName: 'Stan',
        lastName: 'Donev',
        //age: 22,

        //isAdult: function() { return this.age >= 18; }
    };
    display(person.firstName); // Stan

    // we can dinamically add properties
    person.age = 22;
    display(person.age); // 22

    // add functions to an object // When its inside an obj its called a method not a function
    person.isAdult = function() { return this.age >= 18; }; // return true or false
    display(person.isAdult()); // true

})();


display(">>>Shorthand Syntax:");
(function() {

    function registerUser(firstName, lastName){
        let person = {
            firstName,
            lastName,
            age: 22,

            isAdult() { return this.age >= 18; }
        };
        display(person);
        display(person.isAdult());
    }
    registerUser('Stan', 'Donev');

})();


display(">>>Inspecting Object Properties:");
(function() {

    let person = {
        firstName: 'Stan',
        lastName: 'Donev',
        age: 22,

        isAdult: function() { return this.age >= 18; }
    };
    display(Object.keys(person)); // [firstName,lastName,age,isAdult]

    // key == property name
    // person[key] == data stored in that property
    for (const key in person) {
        display(`${key}: ${person[key]}`);
    }

})();


// // Checking object equality
// (function() {
//     //Object.is(person2, person1);
// })();


display(">>>Copy Object:");
(function() {
    let person = {
        firstName: 'Stan',
        lastName: 'Donev',
        age: 22,

        isAdult: function() { return this.age >= 18; }
    };

    let copyOfPerson = {};

    Object.assign(copyOfPerson, person);
    display(copyOfPerson === person); // false because they are 2 different but identical objects
})();


display(">>>Merge Two Objects:");
(function() {
    let person = {
        firstName: 'Stan',
        lastName: 'Donev'
    };

    let healthStats = {
        height: 175,
        weight: 80
    };

    // This will mutate person obj
    Object.assign(person, healthStats);
    display(person);

    // This won't mutate person obj
    Object.assign({}, person, healthStats);
    // Could be used in a function and the initial object won't be affected after that
})();


display(">>>Constructor function:");
(function() {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        this.isAdult = function() { return this.age > 18; };
    }

    let stan = new Person('Stan', 'Donev', 18);
    let viktor = new Person('Viktor', 'Metodiev', 26);
    display(stan);
    display(viktor);
})();


display(">>>Constructor function:");
(function() {
    // This is basically what happens behind the scenes
    let person = Object.create(
        Object.prototype,
        {
            firstName: {value: 'Stan', enumerable: true, writable: true, configurable: true},
            lastName: {value: 'Donev', enumerable: true, writable: true, configurable: true},
            age: {value: 22, enumerable: true, writable: true, configurable: true},
        }
    );

    display(person);
})();