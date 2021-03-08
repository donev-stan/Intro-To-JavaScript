// Write a several functions performing calculations with vectors in 2D space and collect them all in a single object (namespace), so they don't pollute the global scope.
// Implement the following functions:
//- add(vec1, vec2) - addition of two vectors
//- multiply(vec1, scalar) - scalar multiplication
//- length(vec1) - vector length (магнитуда)
//- dot(vec1, vec2) - dot product of two vectors (скаларно произведение)
//- cross(vec1, vec2) - cross product of two vectors (векторно произведение)


function solve(){

    function add(a, b){
        // return ...
    }

    function multiply(a, s){
        // return ...
    }

    function length(a){
        // return ...
    }
    
    function dot(a, b){
        // return ...
    }
    
    function cross(a, b){
        // return ...
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
}

const vectorMath = solve();
vectorMath.add();