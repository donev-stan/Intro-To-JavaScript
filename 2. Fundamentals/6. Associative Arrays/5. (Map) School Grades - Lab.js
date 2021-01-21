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


    let students = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift(); // takes the first el, stores it's value to a variable and then deletes it'self from the array
        let grades = tokens.map(Number);

        if (!students.has(name)) {
            students.set(name, []);
        }

        let existing = students.get(name);
        for (const grade of grades) {
            existing.push(grade);
        }
    }
    //console.log(students);

    let sorted = Array.from(students); // turns students into array --- [...students]
    sorted.sort(compareAverage);

    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

}

function compareAverage([nameA, gradesA], [nameB, gradesB]){
    // a => ['Lilly', '4,6,5,3']
    // calculate average for student A
    let avgA = 0;
    gradesA.forEach(grade => avgA += grade);
    avgA /= gradesA.length;

    let avgB = 0;
    gradesB.forEach(grade => avgB += grade);
    avgB /= gradesB.length;
    
    return avgA - avgB;
}

solve(
    ['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);