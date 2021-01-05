function solve(num, type, toType){
    let number = Number(num);

    if(type === "m"){
        if(toType === "mm"){
            number *= 1000;
        }
        else if(toType === "cm"){
            number *= 100;
        }
    }
    else if(type === "cm"){
        if(toType === "m"){
            number /= 100;
        }
        else if(toType === "mm"){
            number *= 10;
        }
    }
    else{ //mm
        if(toType === "cm"){
            number /= 10;
        }
        else if (toType === "m"){
            number /= 1000;
        }
    }

    console.log(number.toFixed(3));
}

solve("12", "mm", "m");