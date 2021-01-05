function solve(arg1, arg2){

    let year1 = Number(arg1);
    let year2 = Number(arg2);
    
    // One way
    while(year1 <= year2){
        console.log(year1);
        year1+=4;
    }

    // Or another
    for(let i = year1; i <= year2; i+=4){
        console.log(i);
    }
}

solve("1908", "1919");