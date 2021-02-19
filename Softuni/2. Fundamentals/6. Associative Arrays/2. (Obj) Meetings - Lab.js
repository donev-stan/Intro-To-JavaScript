/*
    Write a function that manages meeting appointments. The input comes as an array of strings. Each string contains a weekday and person’s name. 
    For each successful meeting, print a message. If you receive the same weekday twice, the meeting cannot be scheduled so print a conflict message. 
    At the end print a list of all successful meetings. See example for message format and details.

*/

function solve(input){
    let calendar = {};


    for (const line of input) {
        // parse input
        let [day, name] = line.split(' ');

        // check conflicts
        if (calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else{
            // schedule meeting
            console.log(`Scheduled for ${day}.`);
            calendar[day] = name;
        }
    }
    // print result
    for (const day in calendar) {
        console.log(`${day} -> ${calendar[day]}`);
    }
    // or ...
    console.log("\n ----------------------- \n");
    for (const [day, name] of Object.entries(calendar)) {
        console.log(`${day} -> ${name}`);
    }

}

solve(
    [
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
    ]
)
