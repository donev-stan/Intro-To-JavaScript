function solve(array){

    let openedTabs = Number(array[0]);
    let salary = Number(array[1]);
    let fine = 0;

    for(let i = 2; i <= openedTabs; i++){
        switch(array[i]){
            case "Facebook": fine += 150;
            case "Instagram": fine += 100;
            case "Reddit": fine += 50;
        }
    }

    if(fine > salary){
        console.log("No salary mate");
    }
    else{
        console.log(salary - fine);
    }
}

solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);