// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.
function findDuplicateNames(arr) {
    let value = arr;
    // let Duplicate = value.map((v) =>
    //     console.log(v)
    // )
    for (const element of value) {
        console.log(element)
    }
}
findDuplicateNames([{ name: 'Ali' }, { name: 'Sara' }, { name: 'Ali' }])