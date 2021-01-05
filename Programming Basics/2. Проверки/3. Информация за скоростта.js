function speedInfo(_speed){

    let speed = Number(_speed);

    if(speed <= 10){
        console.log("Slow Nigga");
    }
    else if(speed <= 50){
        console.log("Average Nigga");
    }
    else if(speed <= 150){
        console.log("Fast Nigga");
    }
    else if(score <= 1000){
        console.log("Ultra Fast, Legendary Nigga");
    }
    else{
        console.log("Extremely Fast Nigga");
    }

}

speedInfo("8");