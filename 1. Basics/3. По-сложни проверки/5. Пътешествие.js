function solve(_budget, season){
    let budget = Number(_budget);
    let price;
    let place;
    let location;

    if(budget <= 100){
        location = "Bulgaria";

        if(season === "Summer"){
            price = budget * 0.30;
        }
        else{
           price = budget * 0.70;
        }
    }
    else if(budget <= 1000){
        location = "Balkans";

        if(season === "Summer"){
            price = budget * 0.40;
        }
        else{
           price = budget * 0.80;
        }
    }
    else{
        location = "Europe";
        price = budget * 0.90;
    }

    if(season === "Summer"){
        place = "Camp";
    }
    else{
        place = "Hotel";
    }

    console.log(`Somewhere in ${location}`);
    console.log(place + " - " + price.toFixed(2));
    console.log("-------------------------------------------------------------");

}

solve("50", "Summer");
solve("75", "Winter");
solve("312", "Summer");
solve("678.53", "Winter");
solve("1500", "Summer");