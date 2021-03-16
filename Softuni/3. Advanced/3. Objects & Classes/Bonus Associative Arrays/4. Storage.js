function storage(input){
    const storage = new Map();

    input
        .map(x => x.split(' '))
        .forEach(([product, quantity]) => {
            if (storage.has(product) == false) {
                storage.set(product, 0);
            }
            let currentQuantity = storage.get(product);
            let newQuantity = currentQuantity + Number(quantity);
            storage.set(product, newQuantity);
        });

    for (const [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(
    [
        'tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'
    ]
);