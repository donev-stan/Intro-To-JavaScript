'use strict'; 

display("> Introduction:");
(function() {

    let myFunction = function() {};
    display(myFunction.prototype); // myFunction {}


    let person = {name: 'Stan'};
    display(person.prototype); // undefined

    display(person.__proto__); // Object {}

})();


display("> What is Prototype: ");
(function() {

    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(Person.prototype); // Person {}

    let stan = new Person('Stan', 'Donev');
    display(stan.__proto__); // Person {}

    display(Person.prototype === stan.__proto__); // true
    // If two objects are equal, they are the exact same object instance in memmory

    Person.prototype.age = 22;
    // Now both have property age set to 22 ---> Person { age: 22 }

    let viktor = new Person('Viktor', 'Metodiev');
    display(viktor.__proto__); // Person { age: 22 }

    viktor.__proto__.age = 19;
    // Now everything is --- Person { age: 19 }

})();


display("> Instance vs Prototype Properties:");
(function() {

    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    let stan = new Person('Stan', 'Donev');
    let viktor = new Person('Viktor', 'Metodiev');

    Person.prototype.age = 22; // This means that every object derived from that func has a property age: 22 

    display(stan.age); // 22
    display(viktor.age); // 22

    // If we change stan's age only stan's age would be changed: (cuz we didn't change the prototype's property)
    display(stan.age = 18); // 18

    display(stan.__proto__.age); // 22

    delete stan.age; // If we were to remove that property 

    display(stan.age); // 22
    // It would search for it in the object and if not then it would take it from the prototype

    display(stan.hasOwnProperty('age')); // false

})();


display("> Changing a function's prototype:");
(function() {

    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    let stan = new Person('Stan', 'Donev');
    let viktor = new Person('Viktor', 'Metodiev');

    Person.prototype.age = 22;
    // They are both inheriting an age: 22
    display(stan.age); // 22
    display(viktor.age); // 22

    // Changing the function's prototype to point to different object (in memory)
    Person.prototype = { age: 18 };
    // stan and viktor's ages are STILL 22 cuz they are pointing to a different object
    // but if we create a new person
    let dobry = new Person('Dobry', 'Dobrev');
    display(dobry.age); // 18

})();


display("> Object Inheritance Introduction:");
(function() {

    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 30;
    
    let stan = new Person('Stan', 'Donev');

    display(stan.__proto__); // Person { age: 30 }
    display(stan.__proto__.__proto__); // Object { }
    display(stan.__proto__.__proto__.__proto__); // null

})();


display("> Object Inheritance Demo:");
(function() {

    // Constructor function
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        Object.defineProperty(this, 'fullName', {
            get: function(){
                return `${this.firstName} ${this.lastName}`;
            },
            enumerable: true
        });
    }

    function Student(firstName, lastName, age){

        Person.call(this, firstName, lastName, age);

        this.enrolledCourses = [];

        this.enroll = function(courseID){
            this.enrolledCourses.push(courseID);
        };

        this.getCourses = function(){
            return `${this.fullName} enrolled courses are: ${this.enrolledCourses.join(', ')} `;
        };
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let stan = new Student('Stan', 'Donev', 22);

    stan.enroll('JS Core Language');
    stan.enroll('OOP Basics');
    stan.enroll('Structures & Algorithms');

    display(stan.getCourses());

    display(stan);
    display(stan.__proto__);
    display(stan.__proto__.__proto__);

})();