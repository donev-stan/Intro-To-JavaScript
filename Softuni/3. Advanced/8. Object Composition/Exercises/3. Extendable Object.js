// Closure
function solve(){
    // създаваме обект със зададен прототип (за да го extend-ваме)
    const proto = {};
    const instance = Object.create(proto); // Създаваме обект който е закачен към прототипа

    // дефинираме функция, копираща свойства и методи
    instance.extend = function(template) {
        // обхождаме шаблона
        for (let property in template) {
            if (typeof(template[property]) === 'function') {
                //-- ако е функция, копираме върху прототипа
                proto[property] = template[property];
            } else {
                //-- иначе копираме върху инстанцията
                instance[property] = template[property];
            }
        }
    };

    // връщаме референция
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