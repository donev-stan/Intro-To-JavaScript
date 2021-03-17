function mineCart(input){
    const cart = {};

    for (let i = 1; i < input.length; i+=2) {
        const resource = input[i-1];
        const quantity = Number(input[i]);

        if (cart.hasOwnProperty(resource) == false) {
            cart[resource] = 0;
        }
        cart[resource] += quantity;
    }

    console.log(cart);
}

// mineCart(
//     [
//         'Gold',
//         '155',
//         'Silver',
//         '10',
//         'Copper',
//         '17'
//     ]
// );

mineCart(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
);