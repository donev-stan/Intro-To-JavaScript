// Clean:
function solve(input){
    let result = input.map(([width, height]) => {
        return {
            width,
            height,
            area: () => width * height,
            compareTo(rect) {
                return this.area() - rect.area() || this.width - rect.width;
            }
        }
    }).sort((a, b) => b.compareTo(a));
    
    return result;
}

let result = solve([[10, 5], [5, 12]]);
console.log(result);


/* With explanation
function solve(input){
    // input.map(([width, height]) => ({ width, height}));
    
    // input.map(x => {
    //     return {
    //         width: x[0],
    //         height: x[1]
    //     }
    // });

    // input.map(([width, height]) => {
    //     return {
    //         width, // width: width,
    //         height // height: height
    //     }
    // });

    // input.map(([width, height]) => {
    //     return {
    //         width,
    //         height,
    //         area: function() {
    //             return this.width * this.height;
    //         }
    //     }
    // });

    let result = input.map(([width, height]) => {
        return {
            width,
            height,
            area: () => width * height,
            compareTo(rect) {
                // let result = this.area() - rect.area();
                // return result == 0 ? this.width - rect.width : result;

                return this.area() - rect.area() || this.width - rect.width;
            }
        }
    });

    let [first, second] = result;
    console.log(first.compareTo(second)); // -10
    console.log(second.compareTo(first)); // 10


    // Sort by their area in descending order as a first criteria
    // and by their width in descending order as a second criteria
    result.sort((a, b) => b.compareTo(a));

    console.log(result);
}

solve([[10, 5], [5, 12]]);
*/