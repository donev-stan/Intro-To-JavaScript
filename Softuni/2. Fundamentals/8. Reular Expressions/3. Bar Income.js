/*
    Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and you are the person who has to draw the line 
    and calculate the money from the products that were sold throughout the day. Until you receive a line with text "end of shift" you will be given lines of input.
    But before processing that line you have to do some validations first.
    Each valid order should have a customer, product, count and a price:
    Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
    Valid product contains any word character and must be surrounded by '<' and '>' 
    Valid count is an integer, surrounded by '|'
    Valid price is any real number followed by '$'
    The parts of a valid order should appear in the order given: customer, product, count and a price.
    Between each part there can be other symbols, except ('|', '$', '%' and '.')
    For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
    When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}".
*/

function solve(input){
        // %(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[A-Za-z]+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$

        
    let income = 0;
    for (const line of input) {
        const regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
        let match = regex.exec(line);

        if (match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            income += totalPrice;
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

solve(
    ['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$', 
    'end of shift']
)