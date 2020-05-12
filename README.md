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