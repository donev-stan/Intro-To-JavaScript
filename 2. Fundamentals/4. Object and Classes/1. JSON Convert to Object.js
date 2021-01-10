let input = '{"name": "Geogre", "age": 40, "town": "Sofia"}';

function jsonParse(objectAsString){
    let parsedObject = JSON.parse(objectAsString);

    //console.log(parsedObject);

    for (const key of Object.keys(parsedObject)) {
        console.log(`${key}: ${parsedObject[key]}`);
    }
}

jsonParse(input);