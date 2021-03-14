// Concatenation
function solve(descriptor){

    // дефинираме шаблони на двигатели
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    // създаваме кола със съответния модел, шаси и цвят
    const car = {
        model: descriptor.model,
        carriage: {
            type: descriptor.carriage,
            color: descriptor.color
        }
    };

    // определяме двигателя според подадената минимална мощност
    //-- обхождаме масива с шаблни и спираме в моемнта, в който имаме достатъчно мощен двигател
    for (const engine of engines) {
        if (engine.power >= descriptor.power) {
            car.engine = Object.assign(engine); // слагаме копие на двигателя който сме намерили
            break;
        }
    }

    // определяме размера на гумите
    if (descriptor.wheelsize % 2 == 0) {
        const wheelsize = descriptor.wheelsize - 1;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    } else {
        const wheelsize = descriptor.wheelsize;
        car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    // връщаме резултата
    return car;
}

const input1 = solve(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 
    } 
);
console.log(input1);

const input2 = solve(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17 
    }
);
console.log(input2);