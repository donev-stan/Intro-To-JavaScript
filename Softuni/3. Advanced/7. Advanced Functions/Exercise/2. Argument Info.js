function solve(){

    const argTypes = {};

    for (const arg of arguments) {
        const type = typeof(arg);

        console.log(`${type}: ${arg}`); //e.g  string: cat

        if (argTypes[type] === undefined) { // (argTypes.hasOwnProperty(type) == false)
            argTypes[type] = 0;
        }
        argTypes[type]++;
    }

    Object.entries(argTypes).sort((a, b) => b[1] - a[1]).forEach(element => console.log(`${element[0]} = ${element[1]}`));

    /*
        Object.entries(argTypes).sort((a, b) => {
            const [aKey, aValue] = a;
            const [bKey, bValue] = b;

            return bValue - aValue;
        })
        .forEach(element => {
            const [type, value] = element;

            console.log(`${type} = ${value}`);
        })

    */
}

// argTypes will look like this:
const demo = {
    string: 1,
    number: 2,
    function: 1
};

// When we call Object.entries on argTypes:
[
    ['string', 1],
    ['number', 2],
    ['function', 1]
]

solve('cat', 42, 24, function () { console.log('Hello world!'); });


// Using Map
// https://youtu.be/qx2qytDPI8k?list=PLa6_uta9oizKL2Z_wqPnLI2-Kfud3sddo&t=4971 (1:22:00)  