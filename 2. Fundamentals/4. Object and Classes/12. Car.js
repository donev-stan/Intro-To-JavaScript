/*
    Create a class with name Vehicle that has the following properties:
        type – a string
        model – a string
        parts – an object that contains:
            engine – number (quality of the engine)
            power – number
            quality – engine * power
        fuel – a number
        drive – a function that receives fuel loss and decreases the fuel of the vehicle by that number
    The constructor should receive the type, the model, the parts as an object and the fuel
*/

class Vehicle {
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts; // parts is an onject {engine, power}
        this.parts.quality = parts.engine * parts.power; // {engine, power, quality}
        this.fuel = fuel;
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss; 
    }
}

//Test Run
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

