function bonusPoints(_points){
    let score = Number(_points);
    let bonusPoints = 0.0;

    // Score
    // Bonus

    let isEven = score % 2 === 0; 

    if(score <= 100){
        bonusPoints = 5;
    }
    else if(score <= 1000){
        bonusPoints = score * 0.20; // bonus = 20% от score
    }
    else{
        bonusPoints = score * 0.10; // bonus = 10% от score
    }

    if(isEven){
        bonusPoints++;
    }
    else if(score % 10 === 5){ // % 10 от числото връща последната цифра; % 100 връща последните 2 цифри и така нататък
        bonusPoints += 2;
    }
   
    console.log(`Bonus: ${bonusPoints}`);
    console.log(`Score + Bonus: ${score + bonusPoints}`);
}

bonusPoints("15875");