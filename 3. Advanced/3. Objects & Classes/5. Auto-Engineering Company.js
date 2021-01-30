function solve(array){

    let cars = {};

    array.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(' | ');

        if (cars.hasOwnProperty(carBrand) === false) {
            cars[carBrand] = {};
        } 
        if (cars[carBrand].hasOwnProperty(carModel) === false){
            cars[carBrand][carModel] = 0;
        }

        cars[carBrand][carModel] += Number(producedCars);
    });

    for (const brand of Object.keys(cars)) {
        console.log(`${brand}`);
        for (const model of Object.keys(cars[brand])) {
            console.log(`   ${model}: ${cars[brand][model]}`);
        }
    }
}

solve(
    ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
