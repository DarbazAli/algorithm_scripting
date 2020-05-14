# Basic Algorithm Scripting with JavaScript

## 01. Convert Celsius to Fahrenhiet
F = C * 9 / 5 + 32

    const convertToF = celsius => {
        return celsius * 9 / 5 + 32;
    }

    console.log(convertToF(0))      // 32
    console.log(convertToF(-30))    // -22
    console.log(convertToF(-10))    // 14
    console.log(convertToF(20))     // 68



## 02. Reverse a String

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



## 03. Factorialize a Number

Factorials are often represented with the shorthand notation n!
5! = 1 * 2 * 3 * 4 * 5 = 120

    const factorialize = ( n ) => {
        // initialze inital number;
        let resutl = 1;

        // create a range number between 1 to n;
        for ( let i = 1; i <= n; i++ ) {
            resutl *= i;
        }

        return resutl;
    }


    console.log(factorialize(0))    // 1
    console.log(factorialize(5))    // 120
    console.log(factorialize(10))   // 3628800
    console.log(factorialize(20))   // 2432902008176640000


## 04. Find the Longest Word in a String

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
    console.log(longestWord('What is the average airspeed velocity of an unladen swallow'))  



## 05. Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

    const largestOfFour = (arr) => {

        // init max array
        let arrMax = [];

        // first level loop
        for (let i = 0; i < arr.length; i++) {
    
            // assume that first index of sub array is max
        let max = arr[i][0];
    
            // second level loop
        for (let x = 0; x < arr[i].length; x++) {
            if (arr[i][x] > max) {
            max = arr[i][x];
            }
        }
    
        arrMax.push(max);
        }
    
        return arrMax;
    }
  
    console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));   // [1000, 1001, 857, 1]




## 06. Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

    const confirmEnding = ( str, target ) => {
    
        // init new string
        let newStr = '';

        // extract the end of the string
        newStr = str.substr( str.length - target.length );

        // compare target to new string
        return target === newStr;
    }


    console.log(confirmEnding("Bastian", "n")); // true
    console.log(confirmEnding("Connor", "n"));  // false


## 07. Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

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



## 08.     Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

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



    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // A-tisket...


## 09. Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

    const findElement = (arr, func) => {
        let num = 0;
    
        // loop through array
        for ( let i = 0; i < arr.length; i++ ) {
            if ( func(arr[i]) ) {
                num = arr[i];
                break;
            } else {
                num =  undefined;
            } // end if
        } // end for
    
        return num;
    }


    console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))  // 8



## 10. Boo Who

Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

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


## 11. Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

    function titleCase(str) {
        // convert str to array
        var arr = str.split(' ');
    
        // create an empty string
        var newStr = '';
        // loop through arr
        for (var i = 0; i < arr.length; i++) {
            // lowercase every char
            var lower = arr[i].toLowerCase();
            // make the first letter Capital
            newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
        }
        // trim the last space
        return newStr.trim();
    }


    console.log(titleCase("I'm a little tea pot"))
    console.log(titleCase("sHoRt AnD sToUt"))
    console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))



