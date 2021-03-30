function letsGetMarried(){
    let firstPromise = new Promise((res, rej) => setTimeout(function() { res('yes')}, 500));
    // let secondPromise = new Promise((res, rej) => setTimeout(function() { res('Restorant booked')}, 2000));
    let secondPromise = new Promise((res, rej) => setTimeout(function() { rej('Restorant UNbooked')}, 2000));
    let thirdPromise = new Promise((res, rej) => setTimeout(function() { res('Guests invited')}, 1000));

    return Promise.all([firstPromise, secondPromise, thirdPromise]); 
        // waits for all to be done and resolved 
    // return Promise.allSettled([firstPromise, secondPromise, thirdPromise]); 
        // waits for all and doesnt care if resolved or rejected
    // return Promise.race([firstPromise, secondPromise, thirdPromise]); 
        // gets whoever is first done and resolved 
    // return Promise.any([firstPromise, secondPromise, thirdPromise]); 
        // gets whoever is first done and doesnt care if resolved or rejected 
}

letsGetMarried()
    .then(response => {
        console.log(`success`);
        console.log(`She said ${response}`);
        console.log(response);
    })
    .catch(error => {
        console.log(`error`);
    });