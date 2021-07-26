function* generatorFunction() {
    console.log(`Before 1`);
    yield 1;
    console.log(`After 1`);
    console.log(`Before 2`);
    yield 2;
    console.log(`After 2`);
    console.log(`Before 3`);
    yield 3;
    console.log(`After 3`);
}

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());