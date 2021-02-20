'use strict'; 

display("> Writable attribute: ");
(function() {

  let person = {
    name: {
      first: 'Stan',
      last: 'Donev'
    },
    age: 22
  };

  // Check 
  display(Object.getOwnPropertyDescriptor(person.name, 'first'));
  /* output:
  Object {
    value: Jim
    writable: true
    enumerable: true
    configurable: true
    }
  */

  // Stop from changing
  Object.defineProperty(person, 'name', {writable: false}); 
  // we can't change the name anymore
    // BUT we CAN change it's property values (e.g 'first' & 'last')

  // Obj person can't be changed anymore
  Object.freeze(person);
})();


display("> Enumerable attribute: ");
(function() {
  let person = {

    firstName: 'Stan',
    lastLast: 'Donev',
    age: 22
  };

  Object.defineProperty(person, 'firstName', {enumerable: false}); 
  // now property 'firstName' is not enumerable therefore won't show

  for (const propertyName in person) {
    display(`${propertyName}: ${person[propertyName]}`);
  }

  display(Object.keys(person)); // won't show 'firstName'
  display(JSON.stringify(person)); // -||-

  display(person.firstName); // This WILL SHOW it
})();


display("> Configurable property: ");
(function() {
  let person = {

    firstName: 'Stan',
    lastLast: 'Donev',
    age: 22
  };

  Object.defineProperty(person, 'firstName', {configurable: false});
  // now we can't change or delete this propery 
})();


display("> Getters and Setters: ");
(function() {
  let person = {
    name: {
      first: 'Stan',
      last: 'Donev'
    },
    age: 22
  };

  Object.defineProperty(person, 'fullName',
    {
      get: function () {
        return `${this.name.first} ${this.name.last}`;
      },
      set: function (value) {
        let [firstName, lastName] = value.split(' ');

        this.name.first = firstName;
        this.name.last = lastName;
      }
    }
  );

  display(person.fullName); // Stan Donev

  display(person.fullName = 'Viktor Metodiev'); // Viktor Metodiev

})();