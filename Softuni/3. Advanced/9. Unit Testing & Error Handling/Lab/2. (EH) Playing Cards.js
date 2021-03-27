// Factory-Function
function createCard(face, suit){

    const validFaces = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

    const suitToString = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    if (validFaces.includes(face) == false) {
        throw new Error('Invalid Face!');
    } else if (Object.keys(suitToString).includes(suit) == false) {
        throw new Error('Invalid Suit!');
    }

    return {
        face, 
        suit,
        toString(){  
            // return `${this.face}${this.suit}`; 
            return `${face}${suitToString[suit]}`;
        }
    };
}

const myCard = createCard('A', 'D');
console.log(myCard.toString());