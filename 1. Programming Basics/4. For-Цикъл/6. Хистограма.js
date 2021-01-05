function solve(array){

    let n = Number(array[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i <= n; i++){
        if(array[i] < 200){
            p1++;
        }
        else if(array[i] < 400){
            p2++;
        }
        else if(array[i] < 600){
            p3++;
        }
        else if(array[i] < 800){
            p4++;
        }
        else{
            p5++;
        }
    }

    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;
    p4 = p4 / n * 100;
    p5 = p5 / n * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
    console.log("=====================================");
}

solve(["3", "1", "2", "999"]);
solve(["7", "800", "801", "250", "199", "399", "599", "799"]);
solve(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
solve(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);