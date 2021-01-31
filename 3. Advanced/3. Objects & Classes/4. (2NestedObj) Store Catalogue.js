function solve(array){

    const catalog = {};

    for (let line of array) {
        const [product, price] = line.split(' : ');
        const letter = product[0];
        
        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }

        catalog[letter][product] = Number(price);
    }

    let sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));
    
    for (const key of sortedKeys) {
        console.log(`${key}`); 
        const sortedProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalog[key][product]}`);
        }
        console.log(sortedProducts);
    }
}

solve(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)

// solve(
//     ['Banana : 2',
//     'Rubics Cube : 5',
//     'Raspberry P : 4999',
//     'Rolex : 100000',
//     'Rollon : 10',
//     'Rali Car : 2000000',
//     'Pesho : 0.000001',
//     'Barrel : 10'] 
// )