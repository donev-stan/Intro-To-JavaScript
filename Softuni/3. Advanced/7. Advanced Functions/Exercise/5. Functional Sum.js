// Write a function that adds a number passed to it to an internal sum and 
//  returns itself with its internal sum set to the new value, so it can be chained in a functional manner. 
// Input:
//- Your function needs to take one numeric argument.
// Output:
//- Your function needs to return itself with an updated context.


function add(x){

    function sum(b) {
        x += b;
        return sum;  
    }

    sum.toString = () => x;

    return sum;
}

console.log(add(1)(3)(-2).toString());