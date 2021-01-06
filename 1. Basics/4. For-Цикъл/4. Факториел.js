function solve(arg1){
    let num = Number(arg1);
    let result = 1; 

    for(let i = 1; i <= num; i++){
        result = result * i;
    }

    console.log(result);
}

solve("8");