// Day 2 — Strings & String Methods

// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').




// function reverseString(value) {
//     const strValue = value.split().reverse().join()
//     console.log(strValue)
// }
// reverseString("hello")

let s = "hello"
let val = s.split(" ").reverse().join()
console.log(val)


















