/*
    Write a program that finds a place for the tourist on a lift. 
    Every wagon should have a maximum of 4 people on it. If a wagon is full you should direct the people to the next one with space available.
*/

function solve(array){

    let waiting = Number(array[0]); 

    let wagons = array.pop().split(' ').map(Number); 

    while (waiting !== 0 && isFree(wagons)) {
        wagons = wagons.map( w => {
            let n = 4 - w; // n = number of available spaces in a wagon
            // Shorter way ---> let n = 4 - w > waiting ? waiting : 4 - w;
            if (n < waiting) {
                n = waiting;
            }
            waiting -= n;
            w += n;
            return w;
        })
    }

    function isFree(array){
        return array.filter( x => x < 4).length > 0;
    }

    // .. or (more explicit way)

    function isThereFree(array){
        let filtered = array.filter(x => x < 4);
        return filtered.length > 0;
    }

    console.log(wagons);
    console.log('---------------------------');
}

// solve(
//     [
//         "15",
//         "0 0 0 0 0"
//     ]
//)

solve(
    [
        "20",
        "0 2 0"
    ]
)