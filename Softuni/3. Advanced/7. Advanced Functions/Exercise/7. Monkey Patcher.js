function solution(cmd){
   
    let upvote = () => this.upvotes++;
    let downvote = () => this.downvotes++;
    let score = () => [this.upvotes, this.downvotes];

    const commands = {
        upvote,
        downvote,
        score
    };

    return commands[cmd].call(this);
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

let post2 = {
    id: '4',
    author: 'stan',
    content: 'wazaaaaa',
    upvotes: 10,
    downvotes: 10
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);

let score2 = solution.call(post2, 'score');
console.log(score2);

// for (let i = 0; i < 50; i++) {
//     solution.call(post, 'downvote');     // (executed 50 times)
// }

// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score);