// Closure
// Write a func that can create and modify objects. All created objects should be kept and be accessible by name.

function solve(input){
    
    const carFactoryBuilder = () => { // closure:
        const cars = {};
        // cars {
        //     c1: {
        //         color: 'red'
        //     },
        //     c2: {

        //     }
        // }

        return {
            create: (name, inherit, parent) => {
                // if (inherit) {
                //     cars[name] = Object.create(cars[parent]);   
                //     // караме новия обект да наследи прототипа/ да използва същия прототип на бащата               
                // } else {
                //     cars[name] = {};
                // }

                inherit ? cars[name] = Object.create(cars[parent]) : cars[name] = {};

                // Or: 
                // cars[name] = inherit ? Object.create(cars[parent]) : {};

            },
            set: (name, key, value) => cars[name][key] = value, 
            print: (name) => {
                // for-in loops through the instanes first and then the prototypes
                let result = [];
                for (const key in cars[name]) {
                    result.push(`${key}: ${cars[name][key]}`);
                }
                
                console.log(result.join(', '));
            }
        };
    };

    let carFactory = carFactoryBuilder();

    // input
    //     .map(x => x.split(' ')) // 'create c1' => ['create', 'c1']
    //     .forEach(([command, name, argument, value]) => {
    //         carFactory[command](name, argument, value);
    //     });

    input
        .map(x => x.split(' '))
        .forEach(([command, ...args]) => {
            carFactory[command](...args);
            // carFactory[command].apply(null, ...args); // fancy way I don't like
        });
}

solve(
    [
        'create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2'
    ]
);