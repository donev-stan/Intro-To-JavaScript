function addressBook(input){
    const addressBook = {};

    input
        .map(x => x.split(':'))
        .forEach(([name, address]) => {
            addressBook[name] = address;
        });

    // Object
    //     .keys(addressBook)
    //     .sort((a, b) => a.localeCompare(b))
    //     .forEach(key => console.log(`${key} -> ${addressBook[key]}`));

    Object
        .entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}

addressBook(
    [
        'Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd'
    ]
);