function destinations(input){
    const pack = {};
    // {
    //     'Bulgaria': {
    //         'Sofia': 200,
    //         'Sopot': 300
    //     },
    //     'Albania': {
    //         ...
    //     }
    // }

    input
        .map(x => x.split(' > '))
        .forEach(([country, town, price]) => {
            price = Number(price);

            if (pack.hasOwnProperty(country) == false) {
                pack[country] = {};
            }

            if (pack[country].hasOwnProperty(town) == false) {
                pack[country][town] = 0;
            } 

            if (!(pack[country][town]) || pack[country][town] > price) {
                pack[country][town] = price;
            }
        });;


    const sortedPack = Object
                        .entries(pack)
                        .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    console.log(sortedPack); 

    // Not quite finished:
    // First sort Country names alphabetically and then sort by lowest Travel cost.

}

destinations(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);