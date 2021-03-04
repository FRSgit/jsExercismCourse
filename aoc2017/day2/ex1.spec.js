const { ex1, calculateSumRow, calculateSumRows } = require('./ex1.js')

const input = `5 1 9 5
7 5 3
2 4 6 8`

it('should return check sum for row', () => {
    const row = [5, 55, 7, 9, 12];
    const result = calculateSumRow(row);
    expect(result).toBe(50);
})

it('should return check sum for rows', () => {
    const rows = [
        [6, 3, 1, 5],
        [1, -2, 4, 5, 1],
        [2, 1]
    ];
    const result = calculateSumRows(rows);
    expect(result).toBe(13);
})

it('should return correct check sum for input', () => {
    expect(ex1(input)).toBe(18);
})