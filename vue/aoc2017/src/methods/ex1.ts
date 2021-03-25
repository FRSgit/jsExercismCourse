const calculateSumRow = (row:number[]) => {
    row.sort((a, b) => a - b);
    return row[row.length - 1] - row[0];
}

export const calculateSumRows = (rows:number[][]):number =>
    rows.reduce((acc, row) =>
        calculateSumRow(row) + acc, 0);
