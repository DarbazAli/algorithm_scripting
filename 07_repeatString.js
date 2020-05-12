/* 
    Repeat a String Repeat a String

    Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
    
*/

const repeatStringNumTimes = (str, num) => {
    let newStr = '';
    for ( let i = 0; i < num; i++) {
      newStr += str
    }

    return newStr;
}

console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes('*', 8));
console.log(repeatStringNumTimes('*', -8));

