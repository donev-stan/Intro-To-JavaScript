/*  
    Write a function to store students with all of their grades. If a student appears more than once, add the new grades. 
    At the end print the students sorted by average grade. The input comes as array of strings.
*/

function solve(input){
    // declare collection to store result
    // repeat for each request 
    // - parse input
    // -- extraxt name
    // -- parse grades as number
    // - store data
    // -- add new grades to existing data
    // -- update collection
    
    // sort data 
    // - convert to array
    // - apply compate function, calculation average grade
    // print result


    let students = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift(); // takes the first el, stores it's value to a variable and then deletes it'self from the array
        let grades = tokens.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }

        let existing = students[name];
        for (const grade of grades) {
            existing.push(grade);
        }
    }

    let sorted = Object.entries(students); // turns students into array --- [...students]
    sorted.sort(compareAverage);

    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

}

function compareAverage([nameA, gradesA], [nameB, gradesB]){
    let avgA = 0;
    gradesA.forEach(grade => avgA += grade);
    avgA /= gradesA.length;
    // or in one line:
        // --- avgA = gradesA.reduce((p, c) => p + c, 0) / gradesA.length;

    let avgB = 0;
    gradesB.forEach(grade => avgB += grade);
    avgB /= gradesB.length;
    // or in one line:
        // --- avgB = gradesB.reduce((p, c) => p + c, 0) / gradesB.length;
    
    return avgA - avgB;
}

solve(
    ['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);