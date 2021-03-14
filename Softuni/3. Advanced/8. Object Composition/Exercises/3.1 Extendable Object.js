// Closure
function solve(){
    const instance = Object.create({}); // Създай обект, който има прототип

    instance.extend = function(template) {
        for (let property in template) {
            if (typeof(template[property]) === 'function') {
                Object.getPrototypeOf(instance)[property] = template[property];
                // Вземи прототипа на инстанцията и като негово пропърти сложи подаденото (функцията)
            } else {
                instance[property] = template[property];
            }
        }
    };

    return instance;
}

const myInstance = solve();
myInstance.extend(
    {
        extensionMethod: function () { /* do something */ },
        extensionProperty: 'someString'
    }
);

console.log(myInstance);
// { extend: [Function (anonymous)], extensionProperty: 'someString' }

console.log(Object.getPrototypeOf(myInstance));
// { extensionMethod: [Function: extensionMethod] }