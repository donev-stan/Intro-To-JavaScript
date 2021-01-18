/*
    Write a program that finds a place for the tourist on a lift. 
    Every wagon should have a maximum of 4 people on it. If a wagon is full you should direct the people to the next one with space available.
*/

function solve(array){

    let waiting = Number(array[0]); 

    let wagons = array[1].split(' ').map(Number); 

    while (waiting !== 0) {
        wagons = wagon.map( w => {
            let n = 4 - w; // n = number of available spaces in a wagon
            if (n < waiting) {
                 
            }
            waiting -= n;
            w += n;
            return w;
        })
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