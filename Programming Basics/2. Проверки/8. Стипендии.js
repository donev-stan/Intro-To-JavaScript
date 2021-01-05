function solve(_income, _avgScore, _minSalary){

    let income = Number(_income);
    let avgScore = Number(_avgScore);
    let minSalary = Number(_minSalary);
    let scholarship = 0;

    if(avgScore >= 5.5){
        scholarshipEx = Math.floor(avgScore * 25);
    }
    if(income < minSalary && avgScore > 4.5){
        scholarshipP = Math.floor(minSalary * 0.35);
    }
    else{
        console.log("You cannot get a scholarship!");
    }
    
    if(scholarshipEx > scholarshipP){
        console.log(`You get a scholarship ${scholarshipEx} BGN`);
    }
    else{
        console.log(`You get a scholarship ${scholarshipP} BGN`);
    }
}

solve("300.00", "6.65", "420.00");