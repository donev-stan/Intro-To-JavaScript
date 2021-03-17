function farm(input){
    const chest = {
        'keyResources': {},
        'junk': {}
    };

    input = input.split(' ');

    for (let i = 1; i < input.length; i+=2) {
        const quantity = Number(input[i-1]);
        const resource = (input[i]).toLowerCase();

        if (isKeyResource(resource)) {
            if (chest['keyResources'].hasOwnProperty(resource) == false) {
                chest['keyResources'][resource] = 0;
            }
            chest['keyResources'][resource] += quantity;
        } else {
            if (chest['junk'].hasOwnProperty(resource) == false) {
                chest['junk'][resource] = 0;
            }
            chest['junk'][resource] += quantity;
        }
    }

    function isKeyResource(resource){
        return (resource == 'shards' || resource == 'fragments' || resource == 'motes');
    }

    // Output:
    // On the first line, print the obtained item in format {Legendary item} obtained!
    Object
        .entries(chest['keyResources'])
        .forEach(([resource, quantity]) => {
            if (quantity >= 250) {
                switch (resource) {
                    case 'shards':
                        console.log(`Shadowmourne obtained!`);
                        chest['keyResources'][resource] -= 250;
                        break;
                
                    case 'fragments':
                        console.log(`Valanyr obtained!`);
                        chest['keyResources'][resource] -= 250;
                        break;
                        
                    case 'motes':
                        console.log(`Dragonwrath obtained!`);
                        chest['keyResources'][resource] -= 250;
                        break;
                }
            }});

    // On the next three lines, print the remaining key materials in descending order by quantity
    //-- If two key materials have the same quantity, print them in alphabetical order
    Object
        .entries(chest['keyResources'])
        .sort(([keyA, valueA], [keyB, valueB]) => (valueB - valueA) || (keyA.localeCompare(keyB)))
        .forEach(([resource, quantity]) => console.log(`${resource}: ${quantity}`));
   
    // On the final several lines, print the junk items in alphabetical order
    Object
        .entries(chest['junk'])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([resource, quantity]) => console.log(`${resource}: ${quantity}`));


    console.log(chest);
}

farm(
    '3 Motes 5 stones 5 Shards 6 leathers 255 fragments'
);

// farm(
//     '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
// );