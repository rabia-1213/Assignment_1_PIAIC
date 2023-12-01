// Scenario 1: Sum numbers
function add(num1, num2) {
    return num1 + num2;
}
// Input taking statement for Scenario 1
let sum = add(5, 3);
console.log("Sum of 5 and 3 is: " + sum);
// Scenario 2: Check Even or Odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// Input taking statement for Scenario 2
let numberToCheck = 7;
console.log(numberToCheck + " is " + checkEvenOrOdd(numberToCheck));
// Scenario 3: Calculate Area
function calculateArea(width, height) {
    return width * height;
}
// Input taking statement for Scenario 3
let area = calculateArea(4, 5);
console.log("Area of the rectangle with width 4 and height 5 is: " + area);
// Scenario 4: String Reversal
function reverseString(str) {
    return str.split("").reverse().join("");
}
// Input taking statement for Scenario 4
let originalString = "tortoise";
console.log("Reversed string of " + originalString + " is: " + reverseString(originalString));
// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Input taking statement for Scenario 5
let celsiusTemp = 30;
console.log(celsiusTemp + "°C is equal to " + convertCelsiusToFahrenheit(celsiusTemp) + "°F");
export {};
