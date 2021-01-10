/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal number 
you have to find the length of the name (whitespace included). 
*/

function solve(array){
    let employees = {};

    for (const line of array) {
        employees[line] = line.length;
    }

    console.log(Object.keys(employees)); // [Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']
    console.log(Object.values(employees)); // [ 12, 14, 13, 18 ]
    console.log(Object.entries(employees)); // Output:
    /*
    [
        [ 'Silas Butler', 12 ],
        [ 'Adnaan Buckley', 14 ],
        [ 'Juan Peterson', 13 ],
        [ 'Brendan Villarreal', 18 ]
    ]
    */

    Object.entries(employees).forEach(element => {
        console.log(`Name: ${element[0]} --- Personal Number: ${element[1]}`);
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