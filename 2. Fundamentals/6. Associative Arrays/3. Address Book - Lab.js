/*
    Write a function that stores information about a person’s name and his address. The input comes as an array of strings. 
    Each string contains the name and the address separated by a colon. If you receive the same name twice just replace the address. 
    At the end print the full list, sorted alphabetically by the person’s name.
*/


function solve(input){
    let catalog = {};

    for (const line of input) {
        // parse input
        let [name, address] = line.split(':');

        // store data
        catalog[name] = address;
    }

    // sort catalog
    // -- convert to array
    let sorted = Object.entries(catalog);

    // -- sort array using compare function
    sorted.sort((a, b) =>{
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });
    // or in one line ---> sorted.sort((a, b) => a[0].localeCompare(b[0]));

    // print result
    for (const [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }

    /*
    for (const name in catalog) {
        console.log(`${name} -> ${catalog[name]}`);
    }
    */
}

solve(
    ['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)