/*
    Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". 
    For the line to be valid it should be in the following format:
    ">>{furniture name}<<{price}!{quantity}"
    The price can be floating point number or whole number. Store the names of the furniture and the total price. 
    At the end print the each bought furniture on separate line in the format:
    "Bought furniture:
    {1st name}
    {2nd name}
*/                                                      https://regex101.com/

function solve(input){
    
    let total = 0;
    let result = 'Bought furniture: \n';
    for (const line of input) {
        
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+(\.[0-9]+)?)!(?<quantity>[0-9]+)/g;
        
        let match = regex.exec(line);
        if (match) {
            
            result += match.groups.name + '\n';
            total += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }

    result += `Total money spend: ${total.toFixed(2)}`
    console.log(result);
}

solve(
    ['>>Sofa<<312.23!3', '>>TV<<300!5>', 'Invalid<<!5', 'Purchase']
)