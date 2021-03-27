function sum(a, b){
    return a + b;
}
sum(3, 5); // 8

function product(a, b){
    return a * b;
}

// module.exports = sum;

// This is now public
module.exports = {
    sum,
    product
};