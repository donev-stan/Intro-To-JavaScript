/*
    There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
    When guests come to the party check if he/she exists in any of the two reservation lists. 
    The input will come as array of strings. You will be given the list with the guests before you receive a command "PARTY"
    All VIP numbers start with digit
    When you receive the command "PARTY" the guests start coming.
    Print the count of guests then all guest, who didn't come to the party (VIP must be first) 
*/

// isNaN(arg) --- https://www.w3schools.com/jsref/jsref_isNaN.asp (returns True when string && False when number)

function solve(data){

    let list = {
        'VIP': [],
        'regular': []
    }

    let name = data.shift();
    while (name !== 'PARTY') {
        
        let char = name[0]; // name.charAt(0) -- same
        if (isNaN(char)) {
            list['regular'].push(name);
        }
        else{
            list['VIP'].push(name);
        }
        name = data.shift();
    }

    data.forEach(name => {
        if (list['VIP'].includes(name)) {
            let i = list['VIP'].indexOf(name);
            list['VIP'].splice(i, 1);
        }
        else if(list['regular'].includes(name)){
            let i = list['regular'].indexOf(name);
            list['regular'].splice(i, 1);
        }
    });

    console.log(list.VIP.length + list.regular.length); // 'VIP' & 'regular' doesnt contain any secial chars  so we ca use the dot sintax 
    console.log(list['VIP'].join('\n') + '\n' + list['regular'].join('\n'));
    console.log('--------------------------------------------------------------');
}

solve(
    ['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']
);

solve(
    ['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']
);