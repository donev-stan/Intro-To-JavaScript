function solve(_budget, _numStat, _priceStat){

    let budget = Number(_budget);
    let numStat = Number(_numStat);
    let pricePerStat = Number(_priceStat);

    let decor = budget * 0.10;
    let clothing = numStat * pricePerStat;

    if(numStat > 150){
        clothing = clothing * 0.90;
    }

    let sum = decor + clothing;

    //One way to find out the difference between the budget and the sum
    let difference  = Math.abs(budget - sum); // math.abs will return positive no matter what

    if(sum < budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left!`);
    }
    else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more!`);
    }
}

solve("9587.88", "222", "55.68");