// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

function flattenArray(arr) {
    let value = arr
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
flattenArray([1, [2, 3], [4, 5]])