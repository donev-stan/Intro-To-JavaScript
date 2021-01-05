function solve(array){
    // filter odd positions
    let filteredAnotherWay = array.filter(x => x % 2 === 1);
    let filtered = array.filter(isOddIndex);

    // map double values
    let doubled = filtered.map(x => x * 2);
    
    // reverse result
    console.log(doubled.reverse());

    function isOddIndex(value, index){
        return (index % 2) == 1;
    }
}

solve([10, 15, 20, 25]);

solve([3, 0, 10, 4, 7, 3]);