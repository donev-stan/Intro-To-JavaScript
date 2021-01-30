function solve(array){

    let heroes = {};

    array.forEach(line => {
        let [heroName, heroLevel, ...items] = line.split(' / ');
        heroLevel = Number(heroLevel);

        if (!(heroes.hasOwnProperty(heroName))) {
            heroes[heroName] = {level: 0, items: [] };
        }

        heroes[heroName].level += heroLevel;
        heroes[heroName].items.push(...items);
    });

    console.log(JSON.stringify(heroes));
}

solve(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)

solve(
    ['Jake / 1000 / Gauss, HolidayGrenade']
)