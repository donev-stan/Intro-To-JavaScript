class Stringer{
    
    constructor(str, length){
        this.innerString = str;
        this.innerLength = Number(length);
        this.strLength = Number(length);
    }

    increase(length){
        this.validate(length);
        this.strLength += Number(length);
    }

    decrease(length){
        this.validate(length);
        this.strLength -= Number(length);
    }

    validate(length){
        length = Number(length);
        if (this.strLength - length < 0 ) {
            this.strLength = 0;
        }
    }

    toString(){

        let result = [];
        for (let i = 0; i < this.strLength; i++) {
            result.push(this.innerString[i]);
        }

        result = result.join('');
        if(this.strLength != this.innerLength){
            return `${result}...`
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test