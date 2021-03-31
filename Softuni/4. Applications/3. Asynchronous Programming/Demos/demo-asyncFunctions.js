let expressionAsyncFunction = async function(){ };
let arrowAsyncFunction = async () => { };

async function getName(){
	return 'Pesho';
	
	// or if:
	throw new Error('some error here'); // goes to catch
}

console.log(getName()); // Promise

getName()
	.then(name => console.log(name))
	.catch(error => console.log(error.message)) // some error here