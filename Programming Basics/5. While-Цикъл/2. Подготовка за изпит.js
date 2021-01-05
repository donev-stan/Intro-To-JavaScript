function solve(array){

    let counterGoodGrades = 0;
    let counterBadGrades = 0;
    let sumGrades = 0;
    let lastTask = "";

    let limitBadGrades = Number(array[0]);

    let index = 1;
    while(counterBadGrades < limitBadGrades){
        lastTask = array[index];
        sumGrades += array[++index];

        if(array[index] == "Enough"){
            let averageGrade = (counterBadGrades + counterGoodGrades) / sumGrades;
            console.log(`Average Score: ${averageGrade}`);
            //console.log(`Number of Problems: ${}`);
            console.log(`Last Problem: ${lastTask}`);
        }
        if(array[++index] <= 4){
            counterBadGrades++;
        }
        else{
            counterGoodGrades++;
        }
        index++;
    }

    if(counterBadGrades >= limitBadGrades){
        console.log(`You need a break, ${counterBadGrades} poor grades`);
    }


    console.log("===========================================================");
}

solve(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"]);

solve(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"]);

