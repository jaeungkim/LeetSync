/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const row1 = new Set('qwertyuiop');
    const row2 = new Set('asdfghjkl');
    const row3 = new Set('zxcvbnm');

   const isOneRow = (word) => {
        const lowerWord = word.toLowerCase();
        let row;
        
        if (row1.has(lowerWord[0])) {
            row = row1;
        } else if (row2.has(lowerWord[0])) {
            row = row2;
        } else {
            row = row3;
        }
        
        for (let char of lowerWord) {
            if (!row.has(char)) {
                return false;
            }
        }
        return true;
    };

    return words.filter(word => isOneRow(word));
};