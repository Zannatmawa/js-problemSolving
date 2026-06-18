// Day 9 — Algorithms & Problem Solving I

// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns 
// the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9 Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.
let count = 0
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // const element = arr[i];
        console.log(arr[i])
        if (arr[i] + arr[i + 1] == target) {
            // return target
            console.log('first')
        }
        else {
            count++
        }
    }
    // return element
}
twoSum([2, 7, 11, 15], 13)
// console.log()





























