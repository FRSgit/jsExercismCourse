const { parseToNumbers } = require('./parse.utils');

const calculateModuloRow = (row) => {
    for (const [idx, val] of row.entries()) {
        for (const [idx2, val2] of row.entries()) {
            if (idx !== idx2 && val % val2 === 0) return val / val2;
        }
    }
}

const calculateModuloRows = (rows) =>
    rows.reduce((acc, row) =>
        acc + calculateModuloRow(row), 0);

const ex2 = (input) => calculateModuloRows(parseToNumbers(input));

module.exports = {
    ex2,
    calculateModuloRow,
    calculateModuloRows
};