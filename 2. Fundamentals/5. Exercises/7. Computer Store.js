/*
    Write a program that prints you a receipt for your new computer. You will receive the prices (without tax) of the parts until you receive what type of customer is this 
        - special or regular. Once you receive the type of the customer you should print the receipt.
    The taxes are 20% of each part's price you receive. 
    If the customer is special, then he has a 10% discount of the price of the total price with taxes.
    If a given price is not positive number, you should print "Invalid price!" on the console and continue with the next price.
    If total price is equal to zero, you should print "Invalid order!" on the console.
*/

function solve(array){
    // Every element is price until customer type [special, regular]
    // Every price + 20% from price
    // if special => 10% discount of total price

    // if price < 0 => print Invaid Price!
    // if total price == 0 => print Invalid Order!

    let customerType = array.pop();
    array = array.map(Number);

    let totalPrice = 0;
    array.forEach(price => {
        if (price < 0) {
            console.log('Invalid Price!');
        }
        else{
            let tax = price * 0.2;
            totalPrice += price + tax;
        }
    });

    if(totalPrice <= 0){
        console.log('Invalid Order!');
    }
    else{
        if(customerType == 'special'){
            totalPrice = totalPrice * 0.9;
            console.log(`Total Price: ${totalPrice.toFixed(2)}`);
        }
        else{
            console.log(`Total Price: ${totalPrice.toFixed(2)}`);
        }
    }

    console.log("-------------------------------------");
}
solve(
    [
        '1050', 
        '200', 
        '450',
        '2', 
        '18.50', 
        '16.86', 
        'special'
    ]
)


solve(
    [
        'regular'
    ]
)

solve(
    [
        '1023', 
        '15', 
        '-20',
        '-5.50',
        '450', 
        '20', 
        '17.66', 
        '19.30', 
        'regular'
    ]
)
