function solve(array){

    let n = Number(array[0]);
    let lowest = Number(array[1]);

    for(let i = 2; i <= n; i++){
        if(array[i] < lowest){
            lowest = array[i];
        }
    }
    console.log(lowest);
}

solve(["2", "100", "99"]);
solve(["3", "-10", "20", "-30"]);
solve(["4", "45", "-20", "7", "99"]);
solve(["1", "999",]);
solve(["2", "-1", "-2"]);