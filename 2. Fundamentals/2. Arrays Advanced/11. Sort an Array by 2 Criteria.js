/*
    Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by
    alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
*/

function solve(array){
    array.sort(customSort);

    console.log(array);

    function customSort(a, b){
        if(a.length > b.length){ return 1; }
        else if(a.length < b.length) {return -1; } 
        else{ return a.localeCompare(b); } // sorting strings a-z
    }
}
solve(
    ["Isacc", "Theodor", "Jack", "Harrison", "George"]
)

solve(
    ["alpha", "beta", "gamma"]
)
