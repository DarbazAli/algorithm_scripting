
/* 
    Find the Longest Word in a String
*/

const longestWord = str => {

    // split the string in to single words
    let words = str.split(' ');
    let longest = words[0].length;

    // iterate through each word
    for ( let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > longest ) {
            longest = word.length;
        }
    }

    return longest;
}

console.log(longestWord('hello world')) // 5
console.log(longestWord('The quick brown fox jumped over the lazy dog'))    // 6
console.log(longestWord('Google do a barrel roll'))     // 6
console.log(longestWord('What is the average airspeed velocity of an unladen swallow'))     // 8
