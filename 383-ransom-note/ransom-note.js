/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineMap = new Map();
    
    // Count frequency of characters in magazine
    for (const char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }
    
    // Check if characters in ransomNote can be formed from magazine
    for (const char of ransomNote) {
        if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
            return false;
        }
        magazineMap.set(char, magazineMap.get(char) - 1);
    }
    
    return true;
};