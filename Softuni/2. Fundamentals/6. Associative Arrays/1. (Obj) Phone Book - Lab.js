/*
    Write a function that stores information about a person’s name and his phone number. The input comes as an array of strings.
    Each string contains the name and the number. If you receive the same name twice just replace the number. At the end print the result without sorting it. 
    Try using an associative array.
*/
function solve(input){
    let phonebook = {};

    // repeat for each element
    for (const line of input) {
        // parse input to string
        let [name, phone] = line.split(' ');
        
        // store in collection
        phonebook[name] = phone;
    }

    // print result
    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }

    console.log(phonebook);
}

solve(
    [
        'Tim 098475837',
        'Bill 93845737',
        'Tiffany 092743252',
        'Corey 325436534',
        'Trevor 927452355'
    ]
)