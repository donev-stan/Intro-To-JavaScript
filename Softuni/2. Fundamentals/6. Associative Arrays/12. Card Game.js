/*
    You are given a sequence of people and for every person what cards he draws from the deck. The input will be array of strings. Each string will be in format:
    {personName}: {PT, PT, PT,… PT}
    Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. 
    The input will always be valid and in the format described, there is no need to check it.
    A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. 
    Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. 
    Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
    Finally print out the total value each player has in his hand in the format:
    {personName}: {value}
*/

function solve(input){
    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    const cards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let players = {};

    for (const line of input) {
        [name, hand] = line.split(': ');
        hand = hand.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name].push(...hand);
        // .push(...hand) - takes every element from array hand and push it into the array in the object [key]: [array] (name: [hand])
    }

    Object.keys(players).forEach(key => {
        let cardsArr = new Set(players[key]);

        let total = 0;
        Array.from(cardsArr).forEach(card => {
            let elements = card.split('');
            let color = elements.pop();
            let cardNum = elements.join('');

            if (isNaN(cardNum)) {
                cardNum = cards[cardNum];
            }

            total += colors[color] * Number(cardNum);
        });

        players[key] = total;

    });

    console.log(players);
}

solve(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
)