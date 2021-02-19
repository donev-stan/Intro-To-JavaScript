// declare class
class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow!`);
    }
}

function solve(catsAsStrings){
    //let myCat = new Cat('Lilly', 1);
    //console.log(myCat);
    //myCat.meow();

    for (const catAsString of catsAsStrings) {
        // parse input
            //let tokens = catAsString.split(' '); 
            //let cat = new Cat(tokens[0], tokens[1]);
            // or ..
        let [catName, catAge] = catAsString.split(' ');
        // instantiate cats from input
        let cat = new Cat(catName, catAge);
        
        // iterate cats say meow
        cat.meow();
    }
}
solve(['Lilly 1', 'Tom 5', 'Mellow 2']);