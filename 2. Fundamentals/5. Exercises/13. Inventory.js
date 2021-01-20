/*
    As a young traveler, you gather items and craft new items.
    You will receive a journal with some Collecting items, separated with ', ' (comma and space). After that, until receiving "Craft!" you will be receiving different commands. 
*/

function solve(input){
    let inverntory = input.shift().split(', ');

    let i = 0;
    let isCraft = input[i];
    while (isCraft != 'Craft!') {
        let [command, item] = input[i].split(' - ');

        switch (command) {
            case 'Collect':
                if(!(inverntory.includes(item))) inverntory.push(item);
                break;
            case 'Drop':
                if(inverntory.includes(item)){
                    let indexItem = inverntory.indexOf(item);
                    inverntory.splice(indexItem, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');

                if(inverntory.includes(oldItem)){
                    let oldItemIndex = inverntory.indexOf(oldItem);
                    inverntory.splice(oldItemIndex + 1, 0, newItem);

                }

                break;
            case 'Renew':
                if(inverntory.includes(item)){
                    let indexItem = inverntory.indexOf(item);
                    let itemToEnd = inverntory.splice(indexItem, 1);
                    inverntory.push(itemToEnd);
                }
                break;
        }

        i++;
        isCraft = input[i];
    }

    console.log(inverntory.join(', '));
}

solve([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])
solve(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])