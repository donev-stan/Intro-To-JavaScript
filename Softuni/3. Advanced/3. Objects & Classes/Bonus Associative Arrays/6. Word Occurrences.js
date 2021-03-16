function wordCount(input){
    const words = {};

    input.forEach(word => {
        if (words.hasOwnProperty(word) == false) {
            words[word] = 0;
        }
        words[word]++;
    });

    Object.entries(words).sort((a, b) => b[1] - a[1]).forEach(([word, count]) => console.log(`${word}: ${count}`));
}

wordCount(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
);