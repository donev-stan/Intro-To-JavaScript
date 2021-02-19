function solve(input){

    let towns = {};

    let actions = {
        Plunder(townName, people, gold){
            //let town = towns[townName]; // this will have its properties
            towns[townName].population -= Number(people);
            towns[townName].gold -= Number(gold);

            console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (towns[townName].population <= 0 || towns[townName].gold <= 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete towns[townName];
            }
        },
        
        Prosper(townName, gold){
            gold = Number(gold);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            }
            else{
                towns[townName].gold += gold;
                console.log(`${townName} increased it's gold by ${gold}`);
            }
        }
    };

    // Create the towns
    let cmd;
    while ((cmd = input.shift()) != 'Sail') {
        let [townName, population, gold] = cmd.split('||');

        if (towns.hasOwnProperty(townName) == false) {
            towns[townName] = {population: 0, gold: 0};
        }
        towns[townName].population += Number(population);
        towns[townName].gold += Number(gold);
    }

    // Perform actions
    while ((cmd = input.shift()) != 'End') {
        let [action, ...params] = cmd.split('=>');

        actions[action](...params);
    }

    // sort by gold in descending order, then by name in ascending order
    let sorted = Object.entries(towns).sort(compareTowns);
    
    /*  explanation sorted
    sorted = [
        ['Nassau', {population: 1000, gold: 100}],
        ['Tortuga', {population: 2000, gold: 200}]
    ];
    */

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (const town of sorted) {
            console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold}kg`);
        }
    }
    else{
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }

     /*  explanation params
        a[0] = townNameA
        b[0] = townNameB

        a[1] = {population: 1000, gold: 100}
        b[1] = {population: 2000, gold: 200}
        */
    function compareTowns([nameA, townA], [nameB, townB]){
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }

}

solve(['Tortuga||345000||1250', 'Santo Domingo||240000||630', 'Havana||410000||1100', 'Sail', 'Plunder=>Tortuga=>7500=>380', 'Prosper=>Santo Domingo=>180', 'End'])
console.log("-----------------------------------------");
solve(['Nassau||9500||1000', 'San Juan||930000||1250', 'Campeche||270000||690', 'Port Royal||320000||1000', 'Port Royal||100000||2000', 'Sail', 'Prosper=>Port Royal=>-200', 'Plunder=>Nassau=>9400=>750', 'Plunder=>Nassau=>1000=>150', 'Plunder=>Campeche=>150000=>690', 'End'])