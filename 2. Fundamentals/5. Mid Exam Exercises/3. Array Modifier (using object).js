function solve(array){
    let actions = {
        swap: (arr, tokens) => {
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);
            let temp = arr[index1];
            arr[index1] = numberArray[index2];
            arr[index2] = temp;
        },
        multiply: (arr, tokens) => {
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);
            arr[index1] *= arr[index2];
        },
        decrease: (arr) => {
            for (let i = 0; i < arr.length; i++) {
                arr[i]--;
                
            }
        }
    };

    let numberArray = array.shift().split(' ').map(Number);

    for (const command of array) {
        if (command == 'end') {
            break;
        }

        let tokens = command.split(' ');

        actions[tokens[0]](numberArray, tokens);
    }

    console.log(numberArray.join(', '));
    console.log("-----------------------------------");
}

solve(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]
);

solve(
    [
        '1 2 3 4',
        'swap 0 1',
        'swap 1 2',
        'swap 2 3',
        'multiply 1 2',
        'decrease',
        'end'
    ]
);
