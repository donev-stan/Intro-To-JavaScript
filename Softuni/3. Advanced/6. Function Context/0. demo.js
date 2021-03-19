const myObj = {
    name: 'stan',
    outerFunc(){
        console.log(this); // {name: 'stan', outerFunc: [Function: outerFunc]}

        myFunc(); // global invoking

        function myFunc(){
            console.log(this); // Object [global]
        }
    }
};


// Arrow functions запазват лексикални скоуп където са декларирани
const myObj2 = {
    name: 'stan',
    outerFunc(){
        console.log(this); // {name: 'stan', outerFunc: [Function: outerFunc]}
        
        const myFunc = () => {
            console.log(this); // {name: 'stan', outerFunc: [Function: outerFunc]}
        }

        myFunc(); // global invoking
    }
};


//>>> Explicit Binding
const myObj3 = {
    name: 'stan',
    myMethod(){
        console.log(`My name is: ${this.name}`);
    }
};

myFunc(a, b){
    console.log(this);
    console.log(a, b);
}
myFunc(5, 3); // global invoking // Object [global] // 5, 3

myFunc.call(myObj3, 6, 11); // изпълни се в скоупа на myObj3 // {name: 'stan'} // 6, 11
myFunc.apply(myObj3, [8, 4]); // изпълни се в скоупа на myObj3 // {name: 'stan'} // 8, 4


const boundFunc = myFunc.bind(myObj3);
boundFunc(9, 1); // {name: 'stan'} // 9, 1


const funcRef = myObj3.myMethod;
const boundRef = myObj3.myMethod.bind(myObj3);

funcRef(); // My name is undefined
boundRef(); // My name is stan