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