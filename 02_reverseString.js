/* 
    Reverse a String
*/

const reverseStr = (str) => {

    // split the string in to single chars
    const splitStr = str.split('');

    // initialize an array for the end result
    let result = [];

    // reverse the elements of the splitStr array
    for ( let i = splitStr.length; i >= 0; i-- ) {
        result.push(splitStr[i]) // add current element to the result
    }

    return result.join('');
}


console.log(reverseStr('Hello Wrold'))
console.log(reverseStr(''))

