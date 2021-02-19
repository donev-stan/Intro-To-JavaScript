class Circle{
    constructor(radius){
        this.radius = radius;
    }

    // getter
    get area(){
        return Math.PI * (this.radius ** 2);
    }

    // getter
    get diameter(){
        return this.radius * 2;
    }

    // setter
    set diameter(value){
        this.radius 
    }
}


let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);