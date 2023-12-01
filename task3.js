// Scenario 1 - Modify Array with Methods
let initialArray = [1, 2, 3, 4, 5];
console.log("Initial Array:", initialArray);
// push: Add new elements to the end of the array
initialArray.push(6, 7);
console.log("Array after push:", initialArray);
// pop: Remove the last element from the array
initialArray.pop();
console.log("Array after pop:", initialArray);
// shift: Remove the first element from the array
initialArray.shift();
console.log("Array after shift:", initialArray);
// unshift: Add new elements to the beginning of the array
initialArray.unshift(-1, 0);
console.log("Array after unshift:", initialArray);
// Scenario 2 - Subarray Creation
let originalArray = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("\nOriginal Array:", originalArray);
// splice: Create a subarray by removing elements from the original array
let removedElements = originalArray.splice(1, 2); // Removes 2 elements starting from index 1
console.log("Array after splice:", originalArray);
console.log("Removed Elements:", removedElements);
// slice: Create a subarray without modifying the original array
let subArray = originalArray.slice(1, 3); // Creates a subarray from index 1 to 2
console.log("Original Array after slice:", originalArray);
console.log("Subarray:", subArray);
export {};
