'use strict'; 

display("");
(function() {

  class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    isAdult() {
        return this.age > 18;
    }
  }

  let stan = new Person('Stan', 'Donev', 22);
  display(stan.fullName);
  display(stan.isAdult());

  // By default getters and setters are not enumerable. We can change that by:
  Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});
  display(stan); // Now we can see fullName

})();


display("> Inheritance:");
(function() {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    
        set fullName(value) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    
        isAdult() {
            return this.age > 18;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age) {

        super(firstName, lastName, age);

        this.enrolledCourses = [];
        }

        enroll(courseID) {
        this.enrolledCourses.push(courseID);
        }

        getCourses() {
            return `${this.fullName} enrolled in courses: ${this.enrolledCourses.join(', ')}`;
        }
    }

    let stan = new Student('Stan', 'Donev', 29);
    stan.enroll('JS Core Language');
    display(stan.getCourses());

})();


display("> Static Functions:");
(function() {
    // Static properties and methods are items that can be accessed on a class without having to create an instance of that class
    // e.g the built-in Math object. It has static properties like Math.PI and static functions like Math.abs(value)
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        static adultAge = 18;
    
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    
        set fullName(value) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    
        isAdult() {
            return this.age > 18;
        }
    }

    display(Person.adultAge); // 18

    class Student extends Person {
        constructor(firstName, lastName, age) {

        super(firstName, lastName, age);

        this.enrolledCourses = [];
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age);
        }

        enroll(courseID) {
        this.enrolledCourses.push(courseID);
        }

        getCourses() {
            return `${this.fullName} enrolled in courses: ${this.enrolledCourses.join(', ')}`;
        }
    }

    let stan = new Person('Stan', 'Donev', 29);
    let stanStudent = Student.fromPerson(stan);
    display(stanStudent);
    
})();