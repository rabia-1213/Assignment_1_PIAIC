// Scenario 1: Sum numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// Input taking statement for Scenario 1
let sum: number = add(5, 3);
console.log("Sum of 5 and 3 is: " + sum);

// Scenario 2: Check Even or Odd
function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Input taking statement for Scenario 2
let numberToCheck: number = 7;
console.log(numberToCheck + " is " + checkEvenOrOdd(numberToCheck));

// Scenario 3: Calculate Area
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Input taking statement for Scenario 3
let area: number = calculateArea(4, 5);
console.log("Area of the rectangle with width 4 and height 5 is: " + area);

// Scenario 4: String Reversal
function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

// Input taking statement for Scenario 4
let originalString: string = "tortoise";
console.log("Reversed string of " + originalString + " is: " + reverseString(originalString));

// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Input taking statement for Scenario 5
let celsiusTemp: number = 30;
console.log(celsiusTemp + "°C is equal to " + convertCelsiusToFahrenheit(celsiusTemp) + "°F");