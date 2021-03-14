function solve({model, power, color, carriage, wheelsize}){
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const fulfullOrder = {
        model,
        engine: engines.find(p => power <= p.power),
        carriage: {type: carriage, color: color},
        wheels: Array(4).fill(wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize)
    };

    return fulfullOrder;
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