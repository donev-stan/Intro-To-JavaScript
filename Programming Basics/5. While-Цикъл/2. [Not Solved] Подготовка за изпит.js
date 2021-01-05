function solve(array){

    let index = 0;
    let nGrades = Number(array[index]);
    let nGradesCounter = 0;

    let lastTask;
    let taskCounter = 0;

    let gradesCounter = 0;
    let average = 0;

    index++;
    while(array[index] != "Enough"){
        if(nGradesCounter == nGrades){
            break;
        }
        
        if(index % 2 == 0){
            lastTask = array[index];
            taskCounter++;
        }
        else{
            average += array[index];
            gradesCounter++;
            if(array[index] <= 4)
            {
                nGradesCounter++;
            }
        }
        index++;
    }

    average = average / gradesCounter;

    if(array[index] == "Enough"){
        console.log(`Average score: ${average}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }
    else{
        console.log(`You need a break, ${nGrades} poor grades`);
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

