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
