function studentGrades(input){
    const students = {};

    input
        .map(x => x.split(' '))
        .forEach(([student, ...grades]) => {
            if (students.hasOwnProperty(student) == false) {
                students[student] = [];
            }
            let studentGrades = [...grades].map(Number);
            students[student].push(...studentGrades);
        });

    const sortedStudents = Object.entries(students).sort(compareAverageGrades);
    // [
    //     [student, [grades]]
    //     [student, [grades]]
    // ]

    for (const [name, grades] of sortedStudents) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function compareAverageGrades([nameA, gradesA], [nameB, gradesB]){
        let averageGradeA = gradesA.reduce((previous, current) => previous + current, 0) / gradesA.length;
        let averageGradeB = gradesB.reduce((previous, current) => previous + current, 0) / gradesB.length;

        return averageGradeA - averageGradeB;
    }
}

studentGrades(
    [
        'Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6'
    ]
);