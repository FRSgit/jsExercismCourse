const calculateModuloRow = (row:number[]) => {
    for (const [idx, val] of row.entries()) {
        for (const [idx2, val2] of row.entries()) {
            if (idx !== idx2 && val % val2 === 0) return val / val2;
        }
    }
    return -1;
}

export const calculateModuloRows = (rows:number[][]):number =>
    rows.reduce((acc, row) =>
        acc + calculateModuloRow(row), 0);

