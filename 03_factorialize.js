/* 
    Factorialize a Number

    Factorials are often represented with the shorthand notation n!
    5! = 1 * 2 * 3 * 4 * 5 = 120
*/

const factorialize = ( n ) => {
    // initialze inital number;
    let resutl = 1;

    // create a range number between 1 to n;
    for ( let i = 1; i <= n; i++ ) {
        resutl *= i;
    }

    return resutl;
}


console.log(factorialize(0))
console.log(factorialize(5))
console.log(factorialize(10))
console.log(factorialize(20))


