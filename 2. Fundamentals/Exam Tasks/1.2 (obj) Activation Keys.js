function solve(inputArray){

    let actions = {
        Contains(rawKey, substring){
            if (rawKey.includes(substring)) {
                console.log(`${rawKey} contains ${substring}`);
            }
            else{
                console.log(`Substring not found!`);
            }
            return rawKey;
        },
    
        Flip(rawKey, type, startIndex, endIndex){
            let difference = Math.abs(endIndex - startIndex);
        
            let rawKeyArray = rawKey.split('');
            let spliced = rawKeyArray.splice(startIndex, difference).join('');
        
            if (type == 'Upper') {
                spliced = spliced.toUpperCase();
            }
            else if (type == 'Lower') {
                spliced = spliced.toLowerCase();
            }
        
            rawKeyArray.splice(startIndex, 0, spliced);
            rawKey = rawKeyArray.join('');
            console.log(`Flip ${type} (${startIndex} - ${endIndex}): ${rawKey}`);
        
            return rawKey;
        },
    
        Slice(rawKey, startIndex, endIndex){
            let difference = Math.abs(endIndex - startIndex);
    
            let rawKeyArray = rawKey.split('');
            rawKeyArray.splice(startIndex, difference);
    
            rawKey = rawKeyArray.join('');
            
            console.log(`Sliced Raw Key: ${rawKey}`);
    
            return rawKey;
        }
    };
    
    let rawKey = inputArray.shift();

    let command;
    while ((command = inputArray.shift()) != 'Generate') {

        let [cmd, ...params] = command.split('>>>');
        
        rawKey = actions[cmd](rawKey, ...params);
    }

    console.log(`Your activation key is: ${rawKey}`);

}




solve(
    [
        'abcdefghijklmnopqrstuvwxyz', // raw activation key - letters and numbers only
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate'
    ]
)