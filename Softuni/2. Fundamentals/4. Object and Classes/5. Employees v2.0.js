/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number 
you have to find the length of the name (whitespace included). 
*/

function solve(array){
    let employees = [];

    array.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }    
        employees.push(person);
    });

    console.log(employees); // (4) [{…}, {…}, {…}, {…}]

    employees.forEach(obj => {
        console.log(`Name: ${obj.name} --- Personal number: ${obj.number}`);
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