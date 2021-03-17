function solve(input){

    const result = {};

    input
        .map(x => x.split(' -> '))
        .forEach(([company, employeeID]) => {
            if (result.hasOwnProperty(company) == false) {
                result[company] = [];
            }

            if (result[company].includes(employeeID) == false) {
                result[company].push(employeeID);
            }
        });;

        const sortedResult = 
            Object
                .entries(result)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .forEach(([company, ...employees]) => {
                    console.log(company);
                    employees.forEach(e => e.forEach(e => console.log(`-- ${e}`)));
                });
}

// solve(
//     [
//         'SoftUni -> AA12345',
//         'SoftUni -> BB12345',
//         'Microsoft -> CC12345',
//         'HP -> BB12345'
//     ]
// );

solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
    ]
);