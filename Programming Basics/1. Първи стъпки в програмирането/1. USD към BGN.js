// https://softuni.bg/trainings/resources/officedocument/55256/first-steps-in-coding-exercise-programming-basics-with-javascript-november-2020/3072

function convertUSDtoBGN(usdNum){

    let usd = Number(usdNum); // Превръщаме го в число защото идва като String
    let bgn = usd * 1.79549;
    console.log(bgn);

}

convertUSDtoBGN("22");