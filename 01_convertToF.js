/* 
    Convert Celsius to Fahrenheit
    F = C * 9/5 + 32;
*/

const convertToF = celsius => {
    return celsius * 9 / 5 + 32;
}

console.log(convertToF(0))
console.log(convertToF(-30))
console.log(convertToF(-10))
console.log(convertToF(20))
console.log(convertToF(30))
console.log(convertToF(-20))