
// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

let value = arr[0]
let count = 0
function findMax(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > value) {
            value = arr[i]
        }
        else {
            count++
        }
    }
}
console.log(value)
findMax([3, 1, 7, 2, 9])
