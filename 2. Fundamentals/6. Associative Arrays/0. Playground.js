let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;

for (const key of Object.keys(assocArr)) {
    console.log(`${key} -> ${assocArr[key]}`);
}

console.log('-------------------------------');

for (const key in assocArr) {
    console.log(`${key} -> ${assocArr[key]}`);
}

console.log('-------------------------------');

Object.keys(assocArr).forEach(key => console.log(`${key} -> ${assocArr[key]}`));


//Manipulation
console.log('--- Manipulation ---');

let key = 'three';
console.log(assocArr.hasOwnProperty(key)); // true

delete assocArr['three'];
console.log(assocArr.hasOwnProperty(key)); // false

for (const entry of Object.entries(assocArr)) {
    console.log(entry);
    let [key, value] = entry;
    console.log(key, value);
}
// or ...
for (const [key, value] of Object.entries(assocArr)) {
    console.log(key, value);
}