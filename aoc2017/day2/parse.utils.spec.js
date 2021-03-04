const { parseInputToRows, parseToNumbers } = require('./parse.utils.js')

const input = `5 1 9 5
7 5 3
2 4 6 8`

it('should return array of rows', function() {
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
