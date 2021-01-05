function calculateDeposit(_depositSum, _depositLength, _rate){

    let depositSum = Number(_depositSum);
    let depositLength = Number(_depositLength);
    let rate = Number(_rate);

    let natrupanaLihva = depositSum * (rate * 0.01); // За да получим проценти, ги умножаваме по 0.01

    let answer  = depositSum + depositLength * (natrupanaLihva / 12);
    
    console.log(answer);
}

calculateDeposit("200", "3", "5.7");