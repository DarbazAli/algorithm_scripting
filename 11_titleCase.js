/* 
    Title Case a Sentence
    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

    For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

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
