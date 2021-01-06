function store(_strawberryPrice, _bananasKG, _orangesKG, _raspberriesKG, _strawberryKG){
    let strawberryPrice = Number(_strawberryPrice);
    let bananasKG = Number(_bananasKG);
    let orangesKG = Number(_orangesKG);
    let raspberriesKG = Number(_raspberriesKG);
    let strawberryKG = Number(_strawberryKG);

    let raspberriePrice = strawberryPrice / 2;
    let orangesPrice = raspberriePrice * (60 * 0.01); // Портокалите са с 40% по ниска цена от малините
    let bananasPrice = raspberriePrice * (20 * 0.01);

    let raspberrieSUM = raspberriesKG * raspberriePrice;
    let orangeSUM = orangesKG * orangesPrice;
    let bananaSUM = bananasKG * bananasPrice;
    let strawberrySUM = strawberryKG * strawberryPrice;

    let sum =  raspberrieSUM + orangeSUM + bananaSUM + strawberrySUM;

    console.log(sum);


}

store("48", "10", "3.3", "6.5", "1.7");