function solve(_groupBudget, _season, _numFishers){

    let groupBudget = Number(_groupBudget);
    let season = _season;
    let numFishers = Number(_numFishers);

    let price;
    switch(season){
        case "Spring": price = 3000;
            break;
        case "Summer":
        case "Autumn": price = 4200;
            break;
        case "Winter": price = 2600;
            break;
    }

    if(numFishers <= 6){
        price = price * 0.90;
    }
    else if(numFishers <= 11){
        price = price * 0.85; // price = price * 0.85 (85% от цялата цена) --- (ние искаме отстъпка 15 %)
    }
    else if(numFishers >= 12){
        price = price * 0.75;
    }

    if(numFishers % 2 === 0 && season !== "Autumn"){
        price = price * 0.05;
    }

    if(groupBudget > price){
        console.log(`Yes you have ${(groupBudget - price).toFixed(2)} leva left`);
    }
    else{
        console.log(`Not enough money! You need ${(price - groupBudget).toFixed(2)} leva more`);
    }

    console.log("Price: " + price);
}

solve("3600", "Autumn", "6");

solve("3000", "Summer", "11");

solve("2000", "Winter", "13");

