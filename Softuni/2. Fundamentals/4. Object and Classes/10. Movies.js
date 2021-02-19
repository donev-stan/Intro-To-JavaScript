/*
    Write a function that stores information about movies inside an array. The movies object info must be name, director and date. You can receive several types of input:
    "addMovie {movie name}" – add the movie
    "{movie name} directedBy {director}" – check if the movie exists and then add the director
    "{movie name} onDate {date}" – check if the movie exists and then add the date
    At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) in JSON format.
*/

function solve(arrayInput){
    
    let movies = [];
    arrayInput.forEach(element => {
        const tokens = element.split(" ");
        const addIndex = tokens.indexOf("addMovie"); // indexOf return the index where the element was found or -1 if nothing was found
        const directorIndex = tokens.indexOf("directedBy");
        const dateIndex = tokens.indexOf("onDate");

        //if addIndex is assinged this means we have to add moive to the array
        if (addIndex > -1) {
            movies.push({name: tokens.slice(addIndex+1).join(" ")});
        }

        if (directorIndex > -1) {
            const name = tokens.slice(0, directorIndex).join(" ");
            const director = tokens.slice(directorIndex+1).join(" ");

            movies.forEach( movie =>{
                if(movie.name === name){
                    movie.director = director;
                }
            })
        }

        if (dateIndex > -1) {
            const name = tokens.slice(0, dateIndex).join(" ");
            const date = tokens.slice(dateIndex + 1).join(" ");

            movies.forEach(movie =>{
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    });
    
    movies.forEach(movie => {
        if (movie.name !== undefined &&
            movie.director !== undefined &&
            movie.date !== undefined) {
                console.log(JSON.stringify(movie));
        }
    })
}

solve(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]
)