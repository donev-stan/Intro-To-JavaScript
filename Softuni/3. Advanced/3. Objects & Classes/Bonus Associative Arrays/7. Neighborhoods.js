function hood(input){
    const hoodPeople = {};

    input.shift().split(', ').forEach(hood => hoodPeople[hood] = {peopleCount: 0, people: []});

    input
        .map(x => x.split(' - '))
        .forEach(([hood, name]) => {
            if (hoodPeople[hood]) {
                hoodPeople[hood].peopleCount++;
                hoodPeople[hood].people.push(name);
            }
        });

    // [
    //     [hood, {peopleCount, [people]}]
    // ]
    Object
        .entries(hoodPeople)
        .sort((a, b) => b[1].peopleCount - a[1].peopleCount)
        .forEach(([hood, {peopleCount, people}]) => {
            console.log(`${hood}: ${peopleCount}`);
            people.forEach(person => console.log(`-- ${person}`));
        });
}

hood(
    [  
        'Abbey Street, Herald Street, Bright Mews',
        'Bright Mews - Garry',
        'Bright Mews - Andrea',
        'Invalid Street - Tommy',
        'Abbey Street - Billy'
    ]
);