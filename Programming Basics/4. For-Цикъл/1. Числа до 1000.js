function solve(){

    // Числа до 1к завършващи на 7

    //My Way
    for(let i = 7; i < 1000; i+=10){
        console.log(i);
    }

    //Correct way
    for(let i = 7; i < 1000; i++){
        if(i % 10 === 7){ // i % 10 взема последната цифра
            console.log(i);
        }
    }
}

solve();