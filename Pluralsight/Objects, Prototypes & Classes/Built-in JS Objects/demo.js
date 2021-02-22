'use strict'; 

display("> Date Object");
(function() {

    let date = new Date(1999, 8, 22); // year, month, day, hour, minute, second, milisecond
        // Only the month parameter is 0 based!!! 
    display(date.toString());

    date.setHours(6);

    // These return values that correspond to the time zone of the computer they're running on
    display(date.getFullYear());
    display(date.getMonth()); // Zero-Based
    display(date.getDate());
    display(date.getHours());
    display(date.getMinutes());
    display(date.getSeconds());
    display(date.getMilliseconds());

    // There are also UTC versions of these
    display(date.getUTCFullYear());

})();


display("> Regex"); //-- / /;
(function() {

    // Demo 1:
    function checkPasswordComplexity(password) {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        return regex.test(password); // return true or false 
    }

    display(checkPasswordComplexity('Password1')); // True
    display(checkPasswordComplexity('weak')); // False

    // Demo 2: (searching strings)
    function findAlerts(logData){
        let regex = /ERROR(.*?):(.*?);/g;
        return regex.exec(logData);
    }

    let logData = 'INFO:Ok;ERROR(HIGH):Something Broke;ERROR(LOW):Something fishy;';
    let result = findAlerts(logData);

    display(result);
    // .exec() return an array and the first element is the string found

    display("----------------");
    // Arrays are like objects
    display(result[0]);
    display(result.index);
    display(result.input);



})();