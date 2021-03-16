function phoneBook(input){
    const phoneBook = {};

    input
        .map(x => x.split(' '))
        .forEach(([name, number]) => {
            phoneBook[name] = number;
    });

    Object.keys(phoneBook).forEach(key => console.log(`${key}: ${phoneBook[key]}`));
    // or:
    Object.entries(phoneBook).forEach(([key, value]) => console.log(`${key}: ${value}`));
}

phoneBook(
    [
        'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'
    ]
);
