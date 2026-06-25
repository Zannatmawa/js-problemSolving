// Problem 42: Check Anagram[Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
//     Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    return str1.split("").sort().join("") ===
        str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));   