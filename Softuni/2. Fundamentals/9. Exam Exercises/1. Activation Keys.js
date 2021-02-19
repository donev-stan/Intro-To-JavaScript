function solve(inputArray){
    
    let rawKey = inputArray.shift();

    index = 0;
    let command = inputArray[index].split('>>>');
    while (command != 'Generate') {
        let [cmd, param1, param2, param3] = inputArray[index].split('>>>');

        switch (cmd) {
            case 'Contains':{
                let substring = param1;
                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);
                }
                else{
                    console.log(`Substring not found!`);
                }
                break;
            }
            case 'Flip':{
                let type = param1;
                let startIndex = Number(param2);
                let endIndex = Number(param3);
                let difference = Math.abs(endIndex - startIndex);
                
                let rawKeyArray = rawKey.split('');
                let spliced = rawKeyArray.splice(startIndex, difference).join('');

                if (type == 'Upper') {
                    spliced = spliced.toLocaleUpperCase(); // Locale - works with special symbols or and like BG or german words so on..
                }
                else if (type == 'Lower') {
                    spliced = spliced.toLocaleLowerCase();
                }

                rawKeyArray.splice(startIndex, 0, spliced);
                rawKey = rawKeyArray.join('');
                console.log(`Flip ${type} (${startIndex} - ${endIndex}): ${rawKey}`);
                break;
            }
            case 'Slice':{
                let startIndex = Number(param1);
                let endIndex = Number(param2);
                let difference = Math.abs(endIndex - startIndex);

                let rawKeyArray = rawKey.split('');
                rawKeyArray.splice(startIndex, difference);

                rawKey = rawKeyArray.join('');
                
                console.log(`Sliced Raw Key: ${rawKey}`);
                break;
            }
        }
        index++;
        command = inputArray[index].split('>>>');
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