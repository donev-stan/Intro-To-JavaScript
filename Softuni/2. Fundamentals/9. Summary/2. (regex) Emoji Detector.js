function solve(input){
    let text = input[0];
    let numberPattern = /\d/g;
    let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g;
    // (::|\*\*) -> group of 2':' OR 2'*'
    // [A-Z][a-z]{2,} -> 1 upper case letter and 2 lower case letters({2,}) or more
    // \1 -> match the group before --- \1 === (::|\*\*)

    let numbers = text.match(numberPattern);
    numbers = numbers.map(Number);
    let coolThreshold = 1;
    numbers.forEach(x => { coolThreshold *= x; });
    
    let emojis = text.match(emojiPattern);
    
    console.log(`Cool Threshold: ${coolThreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are: `);

    for (let emoji of emojis) {
        let word = emoji.slice(2, -2); // start from 2 and end -2 from the end to get the word ::exampleWord::
        let coolFactor = 0;
        for (let i = 0; i < word.length; i++) {
            coolFactor += word.charCodeAt(i);
        }

        if (coolFactor > coolThreshold) {
            console.log(emoji);
        }
    }
}

solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant::, 12 **Monk3ys**, a **Gorilla**, 5 ::fox:es:: and 21 different types of :Snak::Es::.::Mooning:: **Shy**']);