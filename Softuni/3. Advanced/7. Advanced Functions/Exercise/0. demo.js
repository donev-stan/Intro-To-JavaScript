function renderTable(employees, offices, otherData){
    // do something with DOM
    console.log(employees, offices, otherData);
}

function collectEmployees(employees){
    // ...parsing
    return function(offices, otherData){
        return () => renderTable(employees, offices, otherData);
    }
}

const employeeData = ['stan', 'jhon', 'martin'];
const collectOtherData = collectEmployees(employeeData);

// в друга част на приложението 
const offices = ['Main', 'South', 'West'];
const otherData = [5, 10, 7, 2];
const finalRender = collectOtherData(offices, otherData);

//... later
finalRender();*/