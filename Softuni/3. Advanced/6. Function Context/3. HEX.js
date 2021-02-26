class Hex {

    constructor(value) { this.value = value; }

    toString() { return `0x${this.value.toString(16).toUpperCase()}`; }
    
    valueOf() { return this.value; }

    /**
     * Add to current value
     * @param {Hex} hex Hex number to add
     */
    plus(hex) { return new Hex(this.value + hex); }

    /**
     * Subtract from current value
     * @param {Hex} hex Hex number to subtract
     */
    minus(hex) { return new Hex(this.value - hex); }

    static parse(hexValue) { return parseInt(hexValue); }
}

let FF = new Hex(255);
console.log(FF.toString());
console.log(FF + 1 == 256);;

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");