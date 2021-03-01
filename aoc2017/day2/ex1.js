const ex1 = (input) => calculateSumRows(parseToNumbers(input));

const parseInputToRows = (input) => input.split('\n');

const parseToNumbers = input => parseInputToRows(input)
    .map((row) => row.split('\t')
        .map(value => parseInt(value))
    );

const calculateSumRow = (row) => {
    row.sort((a, b) => a - b);
    return row[row.length - 1] - row[0];
}

const calculateSumRows = (rows) =>
    rows.reduce((acc, row) =>
        calculateSumRow(row) + acc, 0);


module.exports = {
    ex1,
    parseInputToRows,
    parseToNumbers,
    calculateSumRow,
    calculateSumRows
};