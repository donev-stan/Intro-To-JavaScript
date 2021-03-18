function solve(){

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },

        eggs: {
            protein: 5,
            fat: 5,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    }

    const microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function restock(element, quantity){
        microelements[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity){
        const required = Object.assign({}, recipes[recipe]);

        required.order.forEach(key => required[key] *= quantity);
        
        for (const element of required.order) {
            if (microelements[element] < required[element]) {
                return `Error: not enought ${element} in stock`;
            }
        }

        required.order.forEach(key => microelements[key] -= required[key]);

        return 'Success';
    }

    function report(){
        return `protein: ${microelements.protein} carbohydrate: ${microelements.carbohydrate} fat: ${microelements.fat} flavour: ${microelements.flavour}`;
    }

    return {
        restock,
        prepare,
        report
    }
}

const robot = solve();
console.log(robot.restock('flavour', 50));
console.log(robot.prepare('lemonade', 4));
console.log(robot.restock('carbohydrates', 10))
console.log(robot.restock('flavour', 10))
console.log(robot.prepare('apple', 1))
console.log(robot.restock('fat', 10))
console.log(robot.prepare('burger', 1))
console.log(robot.report())