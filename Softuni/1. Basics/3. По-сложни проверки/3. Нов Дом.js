function solve(_flowerType, _flowerNum, _budget){

    let flowerNum = Number(_flowerNum);
    let budget = Number(_budget);
    let price;

    switch(_flowerType){
        case "Roses": 
            price = flowerNum * 5.0;
            if(flowerNum > 80){
                price = price * 0.90;
            }
            break;
        case "Dahilas": 
            price = flowerNum * 3.80;
            if(flowerNum > 90){
                price = price * 0.85;
            }
            break;
        case "Tulips": 
            price = flowerNum * 2.80;
            if(flowerNum > 80){
                price = price * 0.85;
            }
            break;
        case "Narcissus": 
            price = flowerNum * 3.0;
            if(flowerNum < 120){
                price = price + (price * 0.15); // price = price + 15% of price (цената с оскъпява с 15 %)
            }
            break;
        case "Gladiolus": 
            price = flowerNum * 2.50;
            if(flowerNum < 80){
                price = price + (price * 0.20);
            }
            break;
    }

    if(budget > price){
        console.log(` > Hey, you have a great garden with ${flowerNum} ${_flowerType} and ${(budget - price).toFixed(2)} leva left`);
    }
    else{
        console.log(` > Not enough money, you need ${(price - budget).toFixed(2)} leva more`);
    }

    console.log("Price: " + price);
    console.log("Budget: " + budget);
}

solve("Roses", "55", "250");

solve("Tulips", "88", "260");

solve("Narcissus", "119", "360");