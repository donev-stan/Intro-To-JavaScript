function solve(){
    // Деклариране на фактори-функции
    function fighter(name){
        const instance = {
            name,
            health: 100,
            stamina: 100,
            fight
        }

        function fight(){
            instance.stamina--;
            console.log(`${instance.name} slashed at the foe!`); // or this.name
        }

        return instance;
    }

    function mage(name){
        const instance = {
            name,
            health: 100,
            mana: 100,
            cast
        }

        function cast(spell){
            instance.mana--;
            console.log(`${instance.name} cast ${spell}!`); // or this.name
        }

        return instance;
    }

    // Връщане на обект, съдържащ фактори-дункциите като методи
    return {
        fighter,
        mage
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);



// Inheritance test:
const mage1 = create.mage('Mage 1'); 
const mage2 = create.mage('Mage 2'); 

console.log(mage1.cast == mage2.cast); // false -- This means that two instances have two different functions (even tho it does the same)