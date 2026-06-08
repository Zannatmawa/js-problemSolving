// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function largestNum(a = 0, b = 0, c = 0) {
    if (a > b) {
        if (a > c) {
            console.log("a is the largest number")
        }
        else {
            console.log("c is the largest number")
        }
    }
    else {
        console.log("b is the largest number")
    }
}

largestNum(9, 7, 11)