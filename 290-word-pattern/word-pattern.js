/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
    // Split the string into an array of words
    const words = s.split(' ');

    // Check if pattern and words have the same length
    if (pattern.length !== words.length) {
        return false;
    }

    // Create two maps to store the mapping between pattern and words
    const patternMap = new Map();
    const wordMap = new Map();

    // Iterate through each character in the pattern
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // If the character is already mapped and the mapping is not the current word, return false
        if (patternMap.has(char) && patternMap.get(char) !== word) {
            return false;
        }

        // If the word is already mapped and the mapping is not the current character, return false
        if (wordMap.has(word) && wordMap.get(word) !== char) {
            return false;
        }

        // Otherwise, establish the mapping between character and word
        patternMap.set(char, word);
        wordMap.set(word, char);
    }

    // If all mappings are consistent, return true
    return true;
}