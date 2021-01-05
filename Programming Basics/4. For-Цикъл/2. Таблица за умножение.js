function solve(_num){
    let num = Number(_num);
    let result;

    for(let i = 0; i <= 10; i++){
        result = i * num;
        console.log(`${i} * ${num} = ${result}`);
    }

}

solve("5");