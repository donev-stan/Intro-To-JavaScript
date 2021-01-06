function solve(_hour, _min){

    let hour = Number(_hour);
    let min = Number(_min);

    min += 15;

    if(min > 59){
        hour++;
        min -= 60;
        
        if(hour > 23){
            hour = 0;
        }
    }

    if(min < 10){
        console.log(`${hour}:0${min}`);
    }
    else{
        console.log(`${hour}:${min}`);
    }
}

solve("23", "59");