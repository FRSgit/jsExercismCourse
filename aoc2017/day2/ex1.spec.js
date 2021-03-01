const { ex1, parseInputToRows, parseToNumbers, calculateSumRow, calculateSumRows } = require('./ex1.js')


const input = `5 1 9 5
7 5 3
2 4 6 8`

it("should return array of rows", function() {
    const result = parseInputToRows(input);
    expect(result.length).toBe(3);
})

it('should return array of arrays of numbers', () => {
    const result = parseToNumbers(input);
    expect(result.length).toBe(3);
    expect(result[0].length).toBe(4);
    expect(result[1].length).toBe(3);
    expect(result[2].length).toBe(4);
    expect(result[0]).toEqual([5, 1, 9, 5]);
    expect(result[1]).toEqual([7, 5, 3])
    expect(result[2]).toEqual([2, 4, 6, 8]);
})

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