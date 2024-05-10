/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let charCodeSumS = 0;
    let charCodeSumT = 0;
    
    // Calculate the sum of ASCII codes for characters in string s
    for (let i = 0; i < s.length; i++) {
        charCodeSumS += s.charCodeAt(i);
    }
    
    // Calculate the sum of ASCII codes for characters in string t
    for (let i = 0; i < t.length; i++) {
        charCodeSumT += t.charCodeAt(i);
    }
    
    // The difference between the sum of ASCII codes of characters in t and s
    // will be the ASCII code of the added character
    const diff = charCodeSumT - charCodeSumS;
    
    // Convert the ASCII code back to the character and return it
    return String.fromCharCode(diff);
};