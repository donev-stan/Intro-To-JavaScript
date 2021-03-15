function solve(input){
    const carFactoryBuilder = () => {
        const cars = {};
      
        return {
            set: (name, key, value) => cars[name][key] = value, 
            
            create: (name, inherit, parent) => {
                inherit ? cars[name] = Object.create(cars[parent]) : cars[name] = {};
                // cars[name] = inherit ? Object.create(cars[parent]) : {};
            },
            
            print: (name) => {

                let result = [];
                for (const key in cars[name]) {
                    result.push(`${key}: ${cars[name][key]}`);
                }
                
                return result.join(', ');
            }
        };
    };

    let carFactory = carFactoryBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([command, ...args]) => {
            carFactory[command](...args);
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