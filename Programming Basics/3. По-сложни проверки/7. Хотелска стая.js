function solve( month, _nights){
    let nights = Number(_nights);

    let apartmentPrice, studioPrice;


    switch(month){
        case "May":
        case "October":
            apartmentPrice = 65 * nights;
            studioPrice = 50 * nights;

            if(nights > 14) {
                studioPrice = studioPrice * 0.70;
                apartmentPrice = apartmentPrice * 0.90;
            }
            else if(nights > 7) studioPrice = studioPrice * 0.95;

            break;
        case "June":
        case "September":
            apartmentPrice = 68.70 * nights;
            studioPrice = 75.20 * nights;

            if(nights > 14) {
                studioPrice = studioPrice * 0.80;
                apartmentPrice = apartmentPrice * 0.90;
            }

            break;
        case "July":
        case "August":
            apartmentPrice = 77 * nights;
            studioPrice = 76 * nights;

            if(nights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }

            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv`);

    console.log("------------------------");
}

solve("May", "15");
solve("June", "14");
solve("August", "20");
