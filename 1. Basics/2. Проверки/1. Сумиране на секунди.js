//https://softuni.bg/trainings/resources/officedocument/55259/conditional-statements-exercise-programming-basics-with-javascript-november-2020/3072

 function solve(arg1, arg2, arg3){
    
    let seconds1 = Number(arg1);
    let seconds2 = Number(arg2);
    let seconds3 = Number(arg3);

    let totalTime = seconds1 + seconds2 + seconds3;

    let minutes = parseInt(totalTime / 60); // pars-ваме резултата към int и ни връща цяло число
    let minutes02option = Math.trunc(totalTime / 60); // other option

    let seconds = totalTime % 60; // Процент от делението на 60 -- вземаме остатъка от делението на 60

    if(minutes <= 9){
        if(seconds <= 9){
            console.log(`0${minutes}:0${seconds}`);
        }
        else{
            console.log(`0${minutes}:${seconds}`);
        }
    }
    else{
        if(seconds <= 9){
            console.log(`${minutes}:0${seconds}`);
        }
        else{
            console.log(`${minutes}:${seconds}`);
        }
    }

    //console.log(minutes02option);



 }

 solve("885", "65", "49");