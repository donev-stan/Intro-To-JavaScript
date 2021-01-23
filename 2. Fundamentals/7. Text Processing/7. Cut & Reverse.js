/*
    The input will be a single string.
    Write a function that cuts the given string into half and reverse the two halves. 
    Print each half on a separate line.
*/

function solve(str){
    let firstHalf = str.substring(0, str.length / 2);
    console.log(firstHalf.split('').reverse().join(''));

    let secHalf = str.substring(str.length / 2)
    console.log(secHalf.split('').reverse().join(''));

    console.log('---------------------------------------');
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')