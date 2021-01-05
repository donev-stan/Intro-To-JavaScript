function solve( m1, m2, operator){
    let n1 = Number(m1);
    let n2 = Number(m2);
    let result;

    if(operator === "+" || operator === "-" || operator === "*"){
        switch(operator){
            case "+": result = n1 + n2; break;
            case "-": result = n1 - n2; break;
            case "*":  result = n1 * n2; break;
        }
        if(result % 2 === 0){
            console.log(`${n1} ${operator} ${n2} = ${result} - Even`);
        }
        else{
            console.log(`${n1} ${operator} ${n2} = ${result} - Odd`);
        }
    }
    else if(operator === "/"){
        if(n1 === 0){
            console.log(`Cannot devide ${n2} by zero`);
        }
        else if(n2 === 0){
            console.log(`Cannot devide ${n1} by zero`);
        }
        else{
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }
    }
    else if(operator === "%"){
        if(n1 === 0){
            console.log(`Cannot devide ${n2} by zero`);
        }
        else if(n2 === 0){
            console.log(`Cannot devide ${n1} by zero`);
        }
        else{
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }

    console.log("-------------------------------------------");
}

solve("10", "12", "+");
solve("10", "1", "-");
solve("7", "3", "*");
solve("123", "12", "/");
solve("10", "3", "%");
solve("112", "0", "/");
solve("10", "0", "%");