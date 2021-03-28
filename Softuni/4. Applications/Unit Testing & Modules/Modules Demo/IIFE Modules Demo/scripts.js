/*
(function(scope){
    //closure
    let message = 'Hello from console!';
    function printMessage(){
        console.log(message);
    }

    scope.printMessage = printMessage;
})(window);
*/

// or:
let logger = (function(){
    //closure
    let message = 'Hello from console!';
    function printMessage(){
        console.log(message);
    }

    return {
        printMessage
    };
})();