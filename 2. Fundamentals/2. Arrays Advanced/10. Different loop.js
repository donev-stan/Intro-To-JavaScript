
//This works like map() function
function demo(array){

    array.forEach((element, index, arr) => {
        element += index;
        console.log(element);
    });
}

demo(['a', 'd', 'c', 'b'])