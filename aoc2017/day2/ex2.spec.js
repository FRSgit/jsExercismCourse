const { ex2, calculateModuloRow, calculateModuloRows } = require('./ex2.js')

it('should return check sum for row', () => {

    const inputLine = [5, 9, 2, 8];
    const result = calculateModuloRow(inputLine);
    expect(result).toBe(4);
})

it('should return check sum for row', () => {

    const inputLine = [9, 4, 7, 3];
    const result = calculateModuloRow(inputLine);
    expect(result).toBe(3);
})

it('should return check sum for rows', () => {
    const input = [
        [5, 9, 2, 8],
        [9, 4, 7, 3],
        [3, 8, 6, 5]
    ];
    const result = calculateModuloRows(input);
    expect(result).toBe(9);
})

it('should return check sum for input', () => {
    const input = `5 9 2 8
    9 4 7 3
    3 8 6 5`;
    const result = ex2(input);
    expect(result).toBe(9);
})