// function letsGetMarried(){
//     let promise = new Promise((resolve, reject) => {
//         console.log('Prepare Wedding!');
        
//         setTimeout(function(){
//             // resolve('YeeY, just married');
//             reject(`She doesn't want you`); // rejected path
//         }, 2000);

//         setTimeout(function(){
//             resolve('YeeY, just married'); // wedding path
//             // reject(`She doesn't want you`);
//         }, 1000);

//     });

//     return promise;
// }

// or:
function letsGetMarried(){
    return Promise.reject('some error');
}



let promise = letsGetMarried();

promise
    .then(function(response) {  // successful
        console.log(response);
        console.log('Feeling happy!');
    })
    .catch(function(error) { // failed
        console.log(error);
        console.log('Crying. Cancel wedding');
    })
    .finally(function(){
        console.log(`The end`);
    });