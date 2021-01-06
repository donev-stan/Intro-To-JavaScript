function campaign(_days, _chefs, _cakes, _waffles, _pancakes){
    let days = Number(_days);
    let chefs = Number(_chefs);
    let cakes = Number(_cakes);
    let waffles = Number(_waffles);
    let pancakes = Number(_pancakes);

    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;

    let cakeSum = cakes * cakePrice;
    let waffleSum = waffles * wafflePrice;
    let pancakeSum = pancakes * pancakePrice;

    let sumInADay = (cakeSum + waffleSum + pancakeSum) * chefs;
    let sum = sumInADay * days;
    let charitySum = sum - sum / 8;
    
    console.log(charitySum);

}

campaign("23", "8", "14", "30", "16");