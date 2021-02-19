class List {
    
    constructor(){
        this.list = [];
    }

    add(element){
        this.list.push(element);
        this.list.sort((a, b) => a - b);
    }

    get(index){
        this.validate(index);
        return this.list[index];
    }

    remove(index){
        this.validate(index);
        this.list.splice(index, 1);
    }

    // getter
    get size(){
        return this.list.length;
    }

    validate(index){
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index ${index} is out of bounds!`);
            //throw new IndexOutOfBoundsException(`Index ${index} is out of bounds!`);  //idk
        }
    }
}



let list = new List();
console.log(`Added element. ${list.add(5)}`);
console.log(`Added element. ${list.add(4)}`);
console.log(`Added element. ${list.add(1)}`);
console.log(`Added element. ${list.add(8)}`);

console.log(list.list);

console.log(`list size: ${list.size}`);

console.log(`list.get(index - 1): ${list.get(-1)}`);

console.log(`Remove element. ${list.remove(1)}`);

console.log(`list.get(index - 1): ${list.get(1)}`);

console.log(`list size: ${list.size}`);