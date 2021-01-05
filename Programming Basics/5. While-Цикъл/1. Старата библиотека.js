function solve(array){

    let index = 1;
    let favBook = array[0];
    let counter = 0;

    while(array[index] != favBook){
        if(array[index] === "No More Books"){
            break;
        }
        counter++;
        index++;
    }

    if(array[index] == favBook){
        console.log(`You checked ${counter} books and found it.`);
    }
    else{
        console.log(`The book you search is not here! You checked ${counter} books.`);
    }
}

solve(["Troy", "Stronger", "Life Style", "Troy"]);
solve(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
solve(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"]);