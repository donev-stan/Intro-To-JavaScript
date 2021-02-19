/*
    Write a function that checks if a given password is valid. Password validations are:
        The length should be 6 - 10 characters (inclusive)
        It should consists only of letters and digits
        It should have at least 2 digits 
*/

function validator(passInput){

    let isDigit = (x) => x >= 48 && x <= 57; 

    let isCorrectLength = checkLength(passInput);
    let isCorrectCountDigits = checkDigits(passInput);
    let isCorrectFormat = checkValid(passInput);

    if(!isCorrectLength){
        console.log("Password must be between 6 and 10 characters");
    }
    else if (!isCorrectCountDigits){
        console.log("Password must have at least 2 digits");
    }
    else if(!isCorrectFormat){
        console.log("Password must consist only of letters and digits");
    }
    else{
        console.log("It's all good!");
    }

    // "Password must be between 6 and 10 characters" [6, 10]
    function checkLength(pass){ 
        return pass.length >= 6 && pass.length <= 10; // returns true or false
    }

    // "Password must have at least 2 digits"    
    function checkDigits(pass){ 
        let isOK = false;
        let counter = 0; 

        for (const char of pass) {
            let numberValue = char.charCodeAt(0);

            if (isDigit(numberValue)) {
                counter++;
            }

            if(counter === 2){
                isOK = true;
                break;
            }
        }

        return isOK;
    }

    //  "Password must consist only of letters and digits"
    function checkValid(pass){ 
        
        // function stored in a variable ---- ascii table 
        let isLowerLetter = (x) => x >= 87 && x <= 122;
        let isUpperLetter = (x) => x >= 65 && x <= 90;

        let isOK = true;

        for (const char of pass) {
            // get the number representation of the character(element)
            let numberValue = char.charCodeAt(0);

            // if one of these is NOT true then 
            if(!isDigit(numberValue) && !isLowerLetter(numberValue) && !isUpperLetter(numberValue)){
                isOK = false;
                break;
            }
        }

        return isOK;
    }
}

//validator('logIn');
validator('MyPass%123');
//validator('Pa$s$s');