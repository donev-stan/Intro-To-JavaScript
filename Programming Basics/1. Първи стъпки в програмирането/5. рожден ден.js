function birthday(_rent){
    let rent = Number(_rent);

    let cake = rent * (20 * 0.01); // Тортата е 20% от наема
    let cake2 = rent * 0.20; // Алтернативен начин 

    let beverages = cake * (55 * 0.01);
    let animator = rent / 3;
    
    let sum = rent + cake + beverages + animator;

    console.log(sum);
}

birthday("2250");