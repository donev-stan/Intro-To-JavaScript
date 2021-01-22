/*
    Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. 
    At the end print all the items and their amount without sorting them. The input comes as array of strings. Try using a Map().
*/

function solve(input){
    let storage = new Map();

    for (const line of input) {
        // parse input
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        // check for existing values
        if(storage.has(product)){
            quantity += storage.get(product);
        }
        
        storage.set(product, quantity)
    }

    // print result
    for (const [product, quantity] of storage) {
        console.log(`${product} - ${quantity}`);
    }
}

solve(
    ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'] 
)