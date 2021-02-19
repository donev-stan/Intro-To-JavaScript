/*
    You will receive two arrays. The first array represents a current stock of the local store.
    The second array will contain products which the store has ordered for delivery.
    The following information applies to both arrays:
    Every even index will hold the name of the product and on every odd index will hold the quantity of that product. 
    The second array could contain products that are already in the local store. If that happens increase the quantity for the given product.
    You should store them into an object, and print them in the following format: (product -> quantity)
    All of the arrays values will be strings.
*/

function solve(stock, ordered){
    // Object
    const products = {};

    // Loop stock and make add stock(as properties) and quantity to object 
    for (let i = 0; i < stock.length; i+=2) {
        const product = stock[i];
        const quantity = stock[i+1];
        products[product] = quantity;
    }

    //  /* Same but written in a different way
    stock.forEach((element, i) => {

        if (i % 2 === 0) {
            const product = stock[i];
            const quantity = Number(stock[i+1]);
            products[product] = quantity;
        }
        
    });
    //  */

    // Loop ordered
    for (let i = 0; i < ordered.length; i+=2) {
        const product = ordered[i];
        const quantity = Number(ordered[i+1]); 

        if (products[product] === undefined) { // If there isnt any such property
            products[product] = 0; // add this property with value 0
        }
        products[product] += quantity;
    }

    // forIn loop
    for(const product in products){
        console.log(`${product} -> ${products[product]}`);
    }

    // forOf loop 
    console.log("--------------------------------------");
    for (const product of Object.keys(products)) {
        console.log(`${product} -> ${products[product]}`);
    }
}



solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)