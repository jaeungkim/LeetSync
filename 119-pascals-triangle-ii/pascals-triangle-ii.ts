function getRow(rowIndex: number): number[] {
    const row: number[] = new Array(rowIndex + 1).fill(0); //[0,0,0,0]
    row[0] = 1; // The first element is always 1 // [1,0,0,0]

    for (let k = 1; k <= rowIndex; k++) { //rowIndex === 3
        // Calculate each element in the row from the end to the beginning
        row[k] = (row[k - 1] * (rowIndex - (k - 1))) / k;
    }

    return row;
}

// Example usage:
const rowIndex = 4;
console.log(getRow(rowIndex)); // Output: [1, 4, 6, 4, 1]
