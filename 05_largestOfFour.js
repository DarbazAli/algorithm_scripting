/* 
    Return Largest Numbers in Arrays

    Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/


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