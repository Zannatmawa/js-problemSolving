
// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

function positiveOrNegative(value) {
    if (value < 0) {
        console.log(`${value} is a negative number`)
    }
    else {
        console.log(`${value} is a positive number`)

    }
}
positiveOrNegative(0)