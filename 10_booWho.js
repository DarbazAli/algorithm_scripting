/* 
    Boo who
    Check if a value is classified as a boolean primitive. Return true or false.

    Boolean primitives are true and false.
*/

const booWho = bool => {
    if ( typeof bool === 'boolean' ) {
        return true
    } else {
        return false;
    }
}

console.log(booWho(true))
console.log(booWho([1, 2, 3]))
console.log(booWho({'a': 1}))