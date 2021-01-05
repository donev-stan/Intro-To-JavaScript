 function solve(firstArray, secondArray){

    // One way
    for (const element of firstArray) {
        for (const element2 of secondArray) {
            if (element === element2) {
                console.log(element);
            }
        }
    }

    // Or another
    for (const element of firstArray) {
        if(secondArray.includes(element)){
            console.log(element);
        }
    }
 }

 solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
 solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);