// Write a function which calculates the area and the volume of a figure, which is defined by its coordinates (x, y, z)

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

const exampleInput01 = 
`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`;

const exampleInput02 = 
`[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
]`;

function solve(area, vol, dataAsJSON) {
    const shapes = JSON.parse(dataAsJSON);
    
    const result = [];

    shapes.forEach(shape => {
        const output = {
            area: area.call(shape),
            volume: vol.call(shape)
        };

        result.push(output);
    });

    return result;
}

let result01 = solve(area, vol, exampleInput01);
console.log(result01);

let result02 = solve(area, vol, exampleInput02);
console.log(result02);