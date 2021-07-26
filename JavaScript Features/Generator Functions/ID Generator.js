function* idGenerator() {
    let id = 1;

    while (true) {
        yield id;
        id++;
    }
}

const generator = idGenerator();
console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // 3
console.log(generator.next()); // 4