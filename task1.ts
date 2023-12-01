// Scenario 1 - Buying Groceries
let totalBill: number = 0;

// Simulate buying fruits, vegetables, and groceries
let choice: string = "fruits"; // Assume the customer wants to buy fruits

if (choice === "fruits") {
    // Suggest different fruit items available and their prices
    let fruits: { [key: string]: number } = {
        "apple": 2,
        "banana": 1,
        "orange": 3
    };

    // Calculate the total bill for fruits
    for (let fruit in fruits) {
        totalBill += fruits[fruit];
    }
} else if (choice === "vegetables") {
    // Suggest different vegetable items available and their prices
    let vegetables: { [key: string]: number } = {
        "carrot": 2,
        "tomato": 1,
        "spinach": 3
    };

    // Calculate the total bill for vegetables
    for (let vegetable in vegetables) {
        totalBill += vegetables[vegetable];
    }
}

// Display the total bill
console.log("Total bill for " + choice + " is: $" + totalBill);

// Scenario 2 - Checking Discounts
if (totalBill > 10) {
    // Apply a discount if the total bill is above a certain value
    let discount: number = totalBill * 0.1; // 10% discount
    let discountedTotal: number = totalBill - discount;
    console.log("Congratulations! You've received a 10% discount. Your discounted total is: $" + discountedTotal);
} else {
    console.log("No discount applicable. Your total is: $" + totalBill);
}

// Scenario 3 - Checkout Process
// Simulate the checkout process
let paymentMethod: string = "credit card"; // Assume the customer prefers to pay by credit card

// Nested loops to ask for payment methods
if (paymentMethod === "credit card") {
    console.log("Thank you for shopping with us. Your payment by credit card is confirmed.");
} else if (paymentMethod === "cash") {
    console.log("Thank you for shopping with us. Your payment by cash is confirmed.");
} else {
    console.log("Invalid payment method. Please choose a valid payment method.");
}