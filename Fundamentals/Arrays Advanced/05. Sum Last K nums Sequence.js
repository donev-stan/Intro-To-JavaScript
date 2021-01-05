function solve(n, k){

    let result = [1];
 
    // repeat Loop n-times
    for (let i = 1; i < n; i++) {
        // -- calculate current element as sum of previous k elements
        let lastK = result.slice(-k);
        let sum = 0;
        for (const num of lastK) {
            sum += num; 
        }
        // -- store values in array
        result.push(sum);
    }

    console.log(result.join(' '));
}

solve(10, 2);