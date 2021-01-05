//https://softuni.bg/trainings/resources/officedocument/55262/conditional-statements-advanced-exercise-programming-basics-with-javascript-november-2020/3072
//мноог тъпа задача

function solve(arg1, arg2, arg3, arg4) {
  let examHour = Number(arg1);
  let examMin = Number(arg2);
  let arriveHour = Number(arg3);
  let arriveMin = Number(arg4);

  //Late - On time - Early

    console.log(`Exam Time: ${examHour} ${examMin}`);
    console.log(`Arrive Time: ${arriveHour} ${arriveMin}`);

    if(examHour < arriveHour){
        console.log("Late");
    }
    else if(examHour === arriveHour){
        if(examMin >= arriveMin){
            console.log("On Time");
        }
        else{
            console.log("Late");
        }
    }
    else if(examHour > arriveHour){
        if(examMin - 30 >= 0){
            console.log("Early");
        }
        else{
            // examHour - 30min
            examHour--; //15 
            if(examMin !== 0){
                examMin -= 60; 
            }
           
            if(examHour >= arriveHour){
                if(examMin <= arriveMin){
                    console.log("On Time");
                }
                else{
                    console.log("Early");
                }
            }

        }
    }






    console.log("=============================================");
}
solve("9", "30", "9", "50");

solve(
  "9",

  "00",

  "10",

  "30"
);

solve(
  "10",

  "00",

  "10",

  "00"
);

solve(
  "9",

  "00",

  "8",

  "30"
);

solve(
  "14",

  "00",

  "13",

  "55"
);

solve(
  "11",

  "30",

  "10",

  "55"
);

solve(
  "16",

  "00",

  "15",

  "00"
);

solve(
  "11",

  "30",

  "8",

  "12"
);

solve(
  "11",

  "30",

  "12",

  "29"
);
