function solve(inputArray){
    
    let rawKey = inputArray.shift();

    index = 0;
    let command = inputArray[index].split('>>>');
    while (command != 'Generate') {

        let [cmd, param1, param2, param3] = inputArray[index].split('>>>');
        
        switch (cmd) {
            case 'Contains':
                checkSubstring(rawKey, param1);
                break;

            case 'Flip':
                rawKey = flipSubstring(rawKey, param1, param2, param3);
                break;

            case 'Slice':
                rawKey = sliceSubstring(rawKey, param1, param2);
                break;
        }

        index++;
        command = inputArray[index].split('>>>');
    }

    console.log(`Your activation key is: ${rawKey}`);

}

function checkSubstring(rawKey, substring){
    if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
    }
    else{
        console.log(`Substring not found!`);
    }
    
    return rawKey;
}

function flipSubstring(rawKey, type, startIndex, endIndex){

    [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];

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
}

function sliceSubstring(rawKey, startIndex, endIndex) {

    [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];
    
    let difference = Math.abs(endIndex - startIndex);

    let rawKeyArray = rawKey.split('');
    rawKeyArray.splice(startIndex, difference);

    rawKey = rawKeyArray.join('');
    
    console.log(`Sliced Raw Key: ${rawKey}`);

    return rawKey;
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