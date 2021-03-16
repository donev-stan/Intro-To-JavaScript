function wordTracker(input){
    const wordsToSearch = {};
    input.shift().split(' ').forEach(word => wordsToSearch[word] = 0);

    input.forEach(word => {
        if (wordsToSearch.hasOwnProperty(word)) {
            wordsToSearch[word]++;
        }
    });

    Object.entries(wordsToSearch).forEach(([word, count]) => console.log(`${word} - ${count}`));
}

wordTracker(
    [
        'this sentence', 
        'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','your','task'
    ]
);