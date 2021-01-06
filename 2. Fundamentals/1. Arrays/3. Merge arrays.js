function solve(firstArray, secondArray){
    let finalArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if(i % 2 == 0){
            let num = Number(firstArray[i]);
            num += Number(secondArray[i]);

            finalArray.push(num);
        }
        else{
            finalArray.push(firstArray[i] + secondArray[i]);
        }
         
    }

    console.log(finalArray.join(" - "));

}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);