function solve( _secToBeat, _distanceM, _secPerM){
    
    let secToBeat = Number(_secToBeat);
    let distanceMeters = Number(_distanceM);
    let secPerMeter = Number(_secPerM);

    let timeToSwimInSec = distanceMeters * secPerMeter;
    let waterResistance = Math.floor(distanceMeters / 15); // Закръглям го до цяло число / все едно да изрежа вс след десетичната запетая
    waterResistance *= 12.5;

    let sumTime = timeToSwimInSec + waterResistance;

    if(sumTime > secToBeat){
        console.log(`No, he failed! He was ${(sumTime - secToBeat).toFixed(2)} slower.`);
    }
    else{
        console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds`);
    }



}

solve("10464", "1500", "20");