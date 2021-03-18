class Ticket {
    constructor(descriptor){ // descriptor contains the actual ticket => 'Philadelphia|94.20|available'
        const [destination, price, status] = descriptor.split('|');

        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}

function solve(tickets, criteria){
    
    const comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a - b,
        status: (a, b) => a.status.localeCompare(b.status)
    }

    return tickets.map(t => new Ticket(t)).sort(comparator[criteria]);
}

let one = solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],                          // array is tickets
    'destination'               // 'destination' is criteria
)


let two = solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
)

// Terminal
console.log(one);
console.log(two);