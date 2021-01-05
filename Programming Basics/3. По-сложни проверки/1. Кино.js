//https://softuni.bg/trainings/resources/officedocument/55262/conditional-statements-advanced-exercise-programming-basics-with-javascript-november-2020/3072

function solve(arg1, arg2, arg3){
    
    let row = Number(arg2);
    let column = Number(arg3);
    let total;

    switch(arg1){
        case "Premiere": total = row * column * 12.00; break;
        case "Normal": total = row * column * 7.50; break;
        case "Discount": total = row * column * 5.00; break;
    }

    /*    Alternative uglier way

    if(arg1 === "Premiere")  total = row * column * 12.00;
    else if(arg1 === "Normal") total = row * column * 7.50;
    else if(arg1 === "Discount") total = row * column * 5.00;

    */

    console.log(`${total.toFixed(2)} leva`);
}

solve("Premiere", "10", "12");