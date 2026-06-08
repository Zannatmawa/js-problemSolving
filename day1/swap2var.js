// Day 1 — Variables, Data Types & Operators

// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10
// Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.


// function swapping(a = 0, b = 0) {

// }
// swapping(5, 10)
let a = 5
let b = 10
let [a, b] = [b, a];
console.log(a)
console.log(b)