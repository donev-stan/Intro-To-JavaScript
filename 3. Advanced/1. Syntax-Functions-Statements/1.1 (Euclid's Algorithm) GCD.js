// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

function solve(a, b){
    // determine the lower value number
    // loop: get the remainder of the devision between the bigger and the lower number
    // -- if(remainder) then the new lower = remainder and the old lower is the bigger
    // -- if(!remainder) -> result

    let small = Math.min(a, b);
    let large = Math.max(a, b);
    let remainde = 1;

    do {
        remainder = large % small;
        console.log(large);
        large = small;
        small = remainder;
        
    } while (remainder != 0);

    console.log(large);
}

solve(48, 18)