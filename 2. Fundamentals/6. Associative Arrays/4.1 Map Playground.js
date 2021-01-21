let myMap = new Map();

myMap.set('Tim', '+3592028325');
myMap.set('Bob', '+3592049291');
myMap.set('Kia', '+3237571284');

console.log(myMap);

console.log(myMap.has('Bob')); // true

myMap.delete('Bob');

console.log(myMap.has('Bob')); // false

for (const entry of myMap) {
    console.log(entry);
}

console.log('----------------------------------------');

let keys = myMap.keys();
for (const key of keys) {
    console.log(key);
}

console.log('----------------------------------------');

let values = myMap.values();
for (const value of values) {
    console.log(value);
}

console.log('----------------------------------------');

for (const [name, phone] of myMap) {
    console.log(name, phone);
}