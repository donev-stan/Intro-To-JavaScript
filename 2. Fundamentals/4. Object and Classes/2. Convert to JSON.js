function jsonString(firstName, lastName, hairColor){
    let person = {
        firstName,
        lastName,
        hairColor
    };
    let asString = JSON.stringify(person);

    console.log(asString);
}

jsonString('Stan', 'Donev', 'normal');