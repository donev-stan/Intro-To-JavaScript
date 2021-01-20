/*
    Create a program that calculates bonus points for each student, for a certain course. On the first line, you are going to receive the count of the students for this course. 
    On the second line, you will receive the count of the lectures in the course. Every course has an additional bonus. You are going to receive it on the third line. 
    On the next lines, you will be receiving the count of attendances for each student. 
*/

function solve(array){
    
    let numberArray = array.map(Number);

    let studentsCount = numberArray.shift(); // receive the count of the students 
    let lecturesCount = numberArray.shift(); // recieve the count of the lectures 
    let courseAdditionalBonus = numberArray.shift(); // an additional bonus - on the third line
    let totalBonus = 0;
    let maxBonus = 0;
    let studentAttendances = 0;

    for (let i = 0; i < numberArray.length; i++) { // or I can use the student count
        totalBonus = numberArray[i] / lecturesCount * (5 + courseAdditionalBonus);
        if(totalBonus > maxBonus){
            maxBonus = totalBonus;
            studentAttendances = numberArray[i];
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}`);
    console.log(`The student has attended ${studentAttendances} lectures`);

}

solve(
    [
        '5',  '25', '30',
        '12', '19', '24',
        '16', '20'
    ]
)

solve(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
    ]
)