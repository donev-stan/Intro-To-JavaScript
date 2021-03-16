function parkingLot(array){
    let parking = [];

    array
        .map(x => x.split(', '))
        .forEach(([dir, number]) => {
            if (dir === 'IN') {
                parking.push(number);
            } else if (dir === 'OUT'){
                parking.splice(parking.indexOf(number), 1);
            }
        });;

    if (parking.length) {
        parking.forEach(number => console.log(number));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

// parkingLot(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'IN, CA9999TT',
//         'IN, CA2866HI',
//         'OUT, CA1234TA',
//         'IN, CA2844AA',
//         'OUT, CA2866HI',
//         'IN, CA9876HH',
//         'IN, CA2822UU'
//     ]
// );

parkingLot(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA'
    ]
);