function solve(input) {
    let propList = JSON.parse(input);

    let result = propList.reduce((a, x) => Object.assign({}, a, x), {});

    console.log(result);
}

solve(
    `[{"canMove": true}, {"canMove": true, "doors": 4}, {"capacity": 5}]`
);