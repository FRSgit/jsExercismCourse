const parseInputToRows = (input) => input.split('\n');

const parseToNumbers = input => 
    parseInputToRows(input)
        .map((row) => row.split(/\s+/)
            .map(value => parseInt(value))
        );

module.exports = {
    parseInputToRows,
    parseToNumbers
}
