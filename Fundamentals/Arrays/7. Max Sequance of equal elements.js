function solve(array){
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let currentSequance = [array[i]];
        for (let j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentSequance.push(array[j]);
            }
            else{ break; }
        }
        
        if(result.length < currentSequance.length){
            result = currentSequance;
        }
    }
    console.log(result.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);