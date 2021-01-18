/*
    Write a program that finds a place for the tourist on a lift. 
    Every wagon should have a maximum of 4 people on it. If a wagon is full you should direct the people to the next one with space available.
*/

function solve(array){

    let waiting = Number(array[0]); // People waiting

    let wagons = array[1].split(' ').map(Number); // wagons with available spaces (max: 4)

    for (let i = 0; i < wagons.length; i++) {
        while (wagons[i] < 4) {
            if(waiting == 0){
                break;
            }

            waiting -= 1;
            wagons[i] += 1;

            //console.log(`Waiting: ${waiting} --- Wagons ${wagons[i]}`);
        }
        console.log();
    }

    if(waiting != 0){
        console.log(`There isn't enough space! ${waiting} people in the queue.`);
        console.log(wagons.join(" "));
    }
    else if(wagons.includes(0)){
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(" "));
    }

    console.log('---------------------------');
}

solve(
    [
        "15",
        "0 0 0 0 0"
    ]
)

solve(
    [
        "20",
        "0 2 0"
    ]
)