function letsGetMarried(){
    let firstPromise = Promise.resolve('Yes');
    let secondPromise = Promise.resolve('Restorant booked');
    let thirdPromise = Promise.resolve('Guests invited');

    return Promise.all([firstPromise, secondPromise, thirdPromise]);
}



letsGetMarried()
    .then(response => {
        console.log(`success`);
        console.log(`She said ${response}`);
        console.log(response);
    })
    .catch(error => {
        console.log(`error`);
    })