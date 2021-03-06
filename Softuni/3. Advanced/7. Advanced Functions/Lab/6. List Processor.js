// Using a closure, create an inner object to process list commands. The commands supported should be the following:
//- add <string> - adds the following string in an inner collection.
//- remove <string> - removes all occurrences of the supplied <string> from the inner collection.
//- print - prints all elements of the inner collection joined by ",".

function solve(input){
    let output = [];

    input.forEach(element => {
        let [command, arg] = element.split(' ');

        if (command === 'add') {
            output.push(arg);
        } else if (command === 'remove') {
            if (output.find(word => word === arg)) {

            }
        } 
    });

    return {
        
    }
}

const output = solve();
output(['add hello', 'add again', 'remove hello', 'add again', 'print']);
