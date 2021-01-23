/*
    Write a function that receives list of neighborhoods and then some people, who are going to live in it. The input will come as array of strings. 
    The first element will be the list of neighborhoods separated by ", ". The rest of the elements will be a neighborhood followed by a name of a person 
    in the format "{neighborhood} - {person}". Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. 
    At the end print the neighborhoods sorted by the count of inhabitants in descending order. Print them in the following format: 
    "{neighborhood}: {inhabitants count}
    --{1st inhabitant}
    --{2nd inhabitant}
    …"
*/

function solve(input){

    let neighborhoods = getNeighborhoods(input);

    function getNeighborhoods(array){
        let obj = {};
        
        array.shift().split(', ').forEach( hood => {
            obj[hood] = [];
        });;
        return obj;
    }

    input.forEach( line => {
        let [hood, person] = line.split(' - ');

        if(neighborhoods.hasOwnProperty(hood)){
            neighborhoods[hood].push(person);
        }
    });

    for (const key in neighborhoods) {
        if(neighborhoods[key].length !== 0){
            console.log(`${key}: ${neighborhoods[key].length} -- ${neighborhoods[key].join(', ')}`);
        }
        else{
            console.log(`${key}: ${neighborhoods[key].length} -- Nobody Here!`);
        }
    }

    console.log(neighborhoods);


}

solve(
    ['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)