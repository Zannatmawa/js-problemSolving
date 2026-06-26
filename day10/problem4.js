
// Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.
function romanToInt(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            total -= roman[s[i]];
        } else {
            total += roman[s[i]];
        }
    }

    return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));