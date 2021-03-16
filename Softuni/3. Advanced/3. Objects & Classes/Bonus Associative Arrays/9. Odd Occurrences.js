function oddOccurrences(input){

    const wordsCount = {};

    input
        .split(' ')
        .forEach(word => {
            word = word.toLowerCase();

            if (wordsCount.hasOwnProperty(word) == false) {
                wordsCount[word] = 0;
            }
            wordsCount[word]++;
        });
        
    let result = [];
    Object.entries(wordsCount).sort((a, b) => b[1] - a[1]).forEach(([key, value]) => {
        if (value % 2 !== 0) result.push(key);
    });

    console.log(result.join(' '));
}
    
oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);