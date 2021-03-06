/* 
    Finders Keepers
    Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

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


console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))



