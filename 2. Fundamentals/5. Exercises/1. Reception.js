/*
    Every day thousands of students pass by the reception at SoftUni with different questions to ask and the employees have to help everyone by 
    providing all the information and to answer all of the questions. 
    There are 3 employees working on the reception all day. Each of them can handle different number of students per hour.
    Your task is to calculate how much time it will take to answer all the questions of given number of students.
    First you will receive 3 lines with integers, representing count of students that each of the employee can help per hour.
    On the next line you will receive students count as a single integer. 
    Every forth hour all of the employees have a break, so they don’t work for a hour. This is the only break for the employees, 
    because they don`t need rest, nor have a personal life. 
    Calculate the time needed to answer all the student's questions and print it in the following format: "Time needed: {time}h."
*/

 // function solve([eff1, eff2, eff3, students]){ }

 function solve(inputArr){
    // start the initial count

    // turn every element into number --- inputArr = inputArr.map(Number);
    // ..or we know the size so:
    let [eff1, eff2, eff3, students] = inputArr.map(Number);
    
    // calculate total efficiency
    let efficiency = eff1 + eff2 + eff3;

    let hour = 0;
    while (students > 0) {
        hour++;
        // +skip every 4th hour
        if (hour % 4 !== 0) {
            // each hour subtract answered questions
            students -= efficiency;
        }
    }
    console.log(hour); 
    console.log("-------------------------------");
 } 

 solve(['5','6','4','20']);
 solve(['1','2','3','45']);
 solve(['3','2','5','40']);