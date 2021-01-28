function solve(input){

    let msg = input.shift();

    let actions = {
        InsertSpace(message, index){
            let word = [];
            for (let i = 0; i < message.length; i++) {
                if (i == index) {
                    word.push(' ');
                }
                word.push(message[i]);
            }

            let result = word.join('');        
            return result;
        },

        Reverse(message, substring){

            if (message.includes(substring)) {

                let startLetter = substring[0];
                let endLetter = substring[substring.length - 1];

                let msgArr = message.split('');

                let startIndex = msgArr.indexOf(startLetter);
                let endIndex = msgArr.indexOf(endLetter);

                let count = Math.abs(endIndex - startIndex);

                let cutted = msgArr.splice(startIndex, count + 1).reverse(); // [)  /// +1 []

                msgArr.push(...cutted);

                let result = msgArr.join('');
                return result;
            }
            else{
                console.log(`Error! '${message}' does not include '${substring}'`);
                return message;
            }
        },

        ChangeAll(message, substring, replacement){
            
            let msgArr = message.split('');

            while (msgArr.includes(substring)) {
                let index = msgArr.indexOf(substring);
                msgArr.splice(index, 1, replacement);
            }

            let result = msgArr.join('');

            return result;
        }
    };

    let cmd;
    while ((cmd = input.shift()) != 'Reveal') {
        let [command, ...params] = cmd.split(':|:');

        msg = actions[command](msg, ...params);

    }

   console.log(`You have a new text message: ${msg}`);

}

solve(
    [
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',// l
        'InsertSpace:|:5',
        'Reveal'
    ]
)
console.log(`----------------------`);
solve(
    [
        'Hiware?uiy',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ]
)