function solve(){
    function CreateFighter(name){
        this.name = name;
        this.health = 100;
        this.stamina = 100;
        this.fight = function(){
            this.stamina--;
            return `${this.name} slashes at the foe!`;
        }
    }

    function CreateMage(name){
        this.name = name;
        this.health = 100;
        this.mana = 100;
        this.cast = function(spell){
            this.mana--;
            return `${this.name} cast ${spell}!`;
        }
    }

    return {
        mage: function(name){
            return new CreateMage(name);
        },
        fighter: function(name){
            return new CreateFighter(name);
        }
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