const { parseToNumbers } = require('./parse.utils.js')

const ex1 = (input) => calculateSumRows(parseToNumbers(input));

const calculateSumRow = (row) => {
    row.sort((a, b) => a - b);
    return row[row.length - 1] - row[0];
}

const calculateSumRows = (rows) =>
    rows.reduce((acc, row) =>
        calculateSumRow(row) + acc, 0);


module.exports = {
    ex1,
    calculateSumRow,
    calculateSumRows
};