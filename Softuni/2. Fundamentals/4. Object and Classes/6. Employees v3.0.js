/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number 
you have to find the length of the name (whitespace included). 
*/

function solve(array){

    class Person {
        constructor(name){
            this.name = name,
            this.number = name.length
        }

        print(){
            return `Name: ${this.name} --- Personal number: ${this.number}`;
        }
    }

    array = array.map(x => {
        return new Person(x);
    })
    .forEach(obj => {
        console.log(obj.print());
    });
}

solve(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);