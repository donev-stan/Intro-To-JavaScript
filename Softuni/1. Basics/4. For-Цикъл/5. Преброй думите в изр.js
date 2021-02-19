function solve(text){

    let count = 1;

    for(let i=0; i < text.length; i++){
        if(text[i] == " "){
            count++;
        }
    }

    if(count > 10){
        console.log("Nigga too many words!");
    }
    else{
        console.log("Message Sent!");
    }

    console.log(count);
}

solve("This message has exactly eleven words. One more as it's allowed!");
solve("This message has ten words and you can send it!");