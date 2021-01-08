//Write a function that keeps track of guests that are going to a house party.
function solve(array){
    let guests = [];

    for (let infoLine of array) {
        let info = infoLine.split(' '); // split-ваме елемента по спейсове.
        let name = info[0]; // get the name

        if(!info.includes('not')){ // If there's not 'not' in the element then..
            if(!guests.includes(name)){ //If there's no such name in the array then..
                guests.push(name); // add it to the array
            }
            else{
                console.log(`${name} is already in the list!`);
            }
        }
        else{ // if theres not in the element
            if(guests.includes(name)){ //if the name is in the array
                guests = guests.filter((guestName) => guestName !== name); //
            }
            else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guests.join(', '));
    console.log("==========================================");
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);