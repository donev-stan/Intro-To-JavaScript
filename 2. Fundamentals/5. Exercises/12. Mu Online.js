/*
    You have initial health 100 and initial bitcoins 0. You will be given a string, representing the dungeons rooms. 
    Each room is separated with '|' (vertical bar): "room1|room2|room3…"
    Each room contains a command and a number, separated by space. 
*/

function solve(input){

    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;

    let inputString = input[0];
    let rooms = inputString.split('|');

    for (let i = 0; i < rooms.length; i++) {
        let [command, number] = rooms[i].split(' ');
        bestRoom++;

        if (command == 'potion') {
            health += Number(number);
            console.log(`You healed for ${number} hp`);
           if (health > 100) {
               health = 100;
           } 
           console.log(`Current health: ${health} hp`);
        }
        else if(command == 'chest'){
            bitcoins += Number(number);
            console.log(`You found ${number} bitcoins`);
        }
        else{
            let monster = command;
            health -= Number(number);
            if(health <= 0){
                console.log(`You died! Killed by ${monster}`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
            else{
                console.log(`You slayed ${monster}`);
            }
        }
    }

    if(rooms.length == bestRoom){
        console.log(`You have made it! \n Bitcoins: ${bitcoins} \n Health: ${health}`);
    }
    console.log('------------------------------');
}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])

solve(['bear 10|potion 30|orc 10|chest 10|snake 25|chest 110'])