function solve(array){
    
    let result = [];
    let isBigger = true;

    for (let i = 0; i < array.length; i++) {
        isBigger = true;
        for (let j = i+1; j < array.length; j++) {
            if(array[i] <= array[j]){
                isBigger = false;
                break;
            }
        }
        if(isBigger){
            result.push(array[i]);
        }
    }
    
    console.log(result.join(' '));
    console.log("-----------------------");
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);