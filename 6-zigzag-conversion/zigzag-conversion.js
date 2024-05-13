/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s; // If numRows is 1, no zigzag, return the original string
    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => ''); // Create an array to store characters in each row
    let currentRow = 0; // Track the current row
    let goingDown = false; // Boolean to track the direction

    for (const char of s) {
        rows[currentRow] += char; // Add character to the current row
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown; // Change direction if reaching the top or bottom row
        currentRow += goingDown ? 1 : -1; // Move to the next row
    }

    return rows.join(''); // Join rows to form the zigzag conversion string
};