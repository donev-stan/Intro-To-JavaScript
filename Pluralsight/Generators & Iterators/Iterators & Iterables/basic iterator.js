// A func that creates a basic iterator that will run until a value is reached
function myIterator(start, finish) {
    let index = start;
    let count = 0;

    return {
        next() {
            let result;
            if (index < finish) {
                result = { value: index, done: false};
                index += 1;
                count++;
                return result; 
            }

            return {
                value: count,
                done: true
            }
        }
    }
}