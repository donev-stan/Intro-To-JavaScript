function solve(a, b) {

  // determine the lower value number
  const smaller = Math.min(a, b);
  let gcd = 1;
  
  // loop from 1 to the lower number
  for (let i = 1; i <= smaller; i++) {
    // -- check if the 2 numbers %2==0
    // -- if so - save the number
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
  }

  // print out the number
  console.log(gcd);
}

solve(15, 5);
