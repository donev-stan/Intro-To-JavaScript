function solve(_temp, _time){
    let temp = Number(_temp);

    console.log(`It's ${temp} degrees`);

    if(temp >= 10 && temp <= 18){
        switch(_time){
            case "Morning": console.log("Outfit: Sweatshirt; Shoes: Sneakers"); break;
            case "Afternoon": console.log("Outfit: Shirt; Shoes: Moccasins"); break;
            case "Evening": console.log("Outfit: Shirt; Shoes: Moccasins"); break;
        }
    }
    else if(temp > 18 && temp <= 24){
        switch(_time){
            case "Morning": console.log("Outfit: Shirt; Shoes: Moccasins"); break;
            case "Afternoon": console.log("Outfit: T-Shirt; Shoes: Sandals"); break;
            case "Evening": console.log("Outfit: Shirt; Shoes: Moccasins"); break;
        }
    }
    else if(temp >= 25){
        switch(_time){
            case "Morning": console.log("Outfit: T-Shirt; Shoes: Sandals"); break;
            case "Afternoon": console.log("Outfit: Swim Suit; Shoes: Barefoot"); break;
            case "Evening": console.log("Outfit: Shirt; Shoes: Moccasins"); break;
        }
    }
}

solve("16", "Morning");