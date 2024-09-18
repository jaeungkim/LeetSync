function generate(numRows: number): number[][] {
    const triangle = [];

    for (let row = 0; row < numRows; row++) {
        // Create a new row initialized with 1s
        const newRow = new Array(row + 1).fill(1);
        console.log(newRow);
        // Calculate the values for the current row
        for (let col = 1; col < row; col++) { 
            newRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }

        // Add the new row to the triangle
        triangle.push(newRow);
    }

    return triangle;
}
