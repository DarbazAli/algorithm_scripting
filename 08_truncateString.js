/* 
    Truncate a String

    Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

const truncateString = (str, num) => {

    // extract string based on length of num
    let newStr = str.substr(0, num);
    
    // if given number is >= length of given string, return the string
    if ( num >= str.length ) {
      return str;
    } else {
    // else, add ... to the end of the string
      newStr += "...";
      return newStr;
    }
}



console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))