
// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().
function removeDuplicates(arr) {
    let val = arr[0]
    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] === val) {
            let f = [...arr[i]]
            console.log(f)
        }

    }
}
removeDuplicates([1, 2, 2, 3, 3, 4])