
/* 
    Confirm the Ending
    Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

const confirmEnding = ( str, target ) => {
    
    // init new string
    let newStr = '';

    // extract the end of the string
    newStr = str.substr( str.length - target.length );

    // compare target to new string
    return target === newStr;
}


console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
