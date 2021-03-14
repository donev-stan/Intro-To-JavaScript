function solve(){
    // Дефиниране на прототипи
    const fighterProto = {
        fight
    };

    function fight(){
        this.stamina--;
        console.log(`${this.name} slashed at the foe!`);
    }

    const mageProto = {
        cast
    };

    function cast(spell){
        this.mana--;
        console.log(`${this.name} cast ${spell}!`); // or instance.name
    }

    // Деклариране на фактори-функции
    function fighter(name){
        const instance = Object.create(fighterProto);

        Object.assign(instance, {
            name,
            health: 100,
            stamina: 100
        });

        return instance;
    }

    function mage(name){
        const instance = Object.create(mageProto);

        Object.assign(instance, {
            name,
            health: 100,
            mana: 100
        });

        return instance;
    }

    // Връщане на обект, съдържащ фактори-дункциите като методи
    return {
        fighter,
        mage
    }
}

// Inheritance test:
let create = solve();
const mage1 = create.mage('Mage 1'); 
const mage2 = create.mage('Mage 2'); 

console.log(mage1.cast == mage2.cast); // true -- This means that they both share the same function(cast)
// Instead of creating a function to every instace, we define it once and every instance uses this one func through its prototype