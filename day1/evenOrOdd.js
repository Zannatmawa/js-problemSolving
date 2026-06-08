// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: true
// Input: 7  → Output: false
// Hint: Use the modulus (%) operator.

// let value = 7;
function evenOrOdd(value) {
    if (value % 2 === 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}

evenOrOdd(4)