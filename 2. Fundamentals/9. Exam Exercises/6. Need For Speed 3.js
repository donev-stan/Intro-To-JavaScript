function solve(input){

    let numberOfCars = input.shift();

    let cars = {};

    let actions = {
        Drive(car, distance, fuel){
            [distance, fuel] = [Number(distance), Number(fuel)];

            let isEnough = (cars[car].fuel - fuel) > 0;

            if (isEnough) {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed."`);
            }
            else {  console.log(`Not enough fuel to make that ride`);   }

            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}`);
                delete cars[car];
            }
        },

        Refuel(car, fuel){
            fuel = Number(fuel);
            
            let currentFuel = cars[car].fuel;
            cars[car].fuel += fuel;

            if (cars[car].fuel > 75) {
                cars[car].fuel = 75;

                let diff = 75 - currentFuel;
                console.log(`${car} refueled with ${diff} liters`);
            }
            else{
                console.log(`${car} refueled with ${fuel} liters`);
            }
        },

        Revert(car, kilometers){

            kilometers = Number(kilometers);
            cars[car].mileage -= kilometers;
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            }
            else{   console.log(`${car} mileage decreased by ${kilometers} kilometers`);    }
        }
    };

    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        
        if (cars.hasOwnProperty(car) == false) {
            cars[car] = {mileage: 0, fuel: 0};
        }

        cars[car].mileage += Number(mileage);
        cars[car].fuel += Number(fuel);
    }

    let cmd;
    while ((cmd = input.shift()) != 'Stop') {
        let [action, car, ...params] = cmd.split(' : ');

        actions[action](car, ...params);
    }

    // sort by their mileage in decscending order, then by their name in ascending order
    // in the following format: "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

    let sorted = Object.entries(cars).sort(compareCars);

    function compareCars([nameA, carA], [nameB, carB]){
        return carB.mileage - carA.mileage || nameA.localeCompare(nameB);
    }

    for (const car of sorted) {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    }
}

solve(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
)
console.log(`------------------------------------`);
solve(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]
)