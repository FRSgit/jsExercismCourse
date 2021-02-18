//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function replaceField(resultRow, i, value) {
    resultRow = resultRow.split('');
    const oldValue = isNaN(parseInt(resultRow[i])) ? 0 : parseInt(resultRow[i]);
    resultRow[i] = oldValue + value; // += to co masz + nowe
    return resultRow.join('');
}

export const annotate = (input) => {
    let result = [...input] //spread operator
    input.forEach((row, idx) => {
        for (let idy = 0; idy < row.length; ++idy) {
            if (row[idy] === ' ') {
                for (let j = -1; j < 2; ++j) {
                    if (
                        j === 1 && idx !== input.length - 1 ||
                        j === -1 && idx !== 0 ||
                        j === 0
                    ) {
                        const nextRow = input[idx + j];
                        const mines = nextRow
                            .substring(idy - 1, idy + 2)
                            .replace(/ /g, "").length;
                        if (!mines) continue;
                        result[idx] = replaceField(result[idx], idy, mines);
                    }
                }
            }
        }
    });
    return result;
};