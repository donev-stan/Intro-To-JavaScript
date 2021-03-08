// Using a closure, create an inner object to process list commands. The commands supported should be the following:
//- add <string> - adds the following string in an inner collection.
//- remove <string> - removes all occurrences of the supplied <string> from the inner collection.
//- print - prints all elements of the inner collection joined by ",".

function solve(input){
    let output = [];

    input.forEach(element => {
        let [command, arg] = element.split(' ');

        if (command === 'add') {
            add(arg);
        } else if (command === 'remove') {
            if (output.find(word => word === arg)) {
                let index = output.indexOf(arg);
                remove(index);
            }
        } else if (command === 'print') {
            console.log(output);
        }
    });

    function add(arg) {
        output.push(arg);
    }

    function remove(index) {
        output.splice(index, 1);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
