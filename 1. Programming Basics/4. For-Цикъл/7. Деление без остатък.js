function solve(array){

    let n = Number(array[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for(let i = 1; i <= n; i++){
        if(array[i] % 2 === 0){
            p1++;
            console.log(`P1++ --- Array[${i}]=${array[i]}`);
        }
        else if(array[i] % 3 === 0){
            p2++;
            console.log(`P2++ --- Array[${i}]=${array[i]}`);
        }
        else if(array[i] % 4 === 0){
            p3++;
            console.log(`P3++ --- Array[${i}]=${array[i]}`);
        }
    }

    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
}   

solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);

solve(["3", "3", "6", "9"]);