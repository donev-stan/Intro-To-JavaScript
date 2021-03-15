function createSortedList(){
    const list = [];
    let size = 0;
    
    const instance = {
        add,
        remove,
        get,
        size
    }

    Object.defineProperty(instance, 'size', {
        get() { return size; }
    });

    function add(element){
        list.push(element);
        list.sort(compare);
        instance.size++;
        return instance;
    }

    function remove(index){
        validate(index);
        list.splice(index, 1);
        instance.size--;
        return instance;
    }

    function get(index){
        validate(index);
        return list[index];
    }

    function validate(index){
        if (index < 0 || index >= list.length) {
            throw new Error('Index out of bounds!');
        }
    }

    function compare(a, b){
        return a - b;
    }

    return instance;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));