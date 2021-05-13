import { Ref } from 'vue';

export type Cell = {
    value: string,
    hidden: boolean,
    flag: boolean,
};

export const parseMap = (map: Ref<string[]>): Cell[][] =>
  annotate(map.value)
    .map(row => row
      .split('')
      .map(value => ({ value, hidden: true, flag: false}))
    ) as Cell[][]


export const revealMap = (board: Cell[][], y:number, x:number): void => {
  const cell = board[y][x];
  if(cell.flag || !cell.hidden) return;
  cell.hidden = false;
  if(cell.value===' '){
    for(let i = -1; i < 2; ++i){
      for(let j = -1; j < 2; ++j){
        if(y+i <0 || x+j <0 || y+i >= board.length || x+j >= board[0].length || (i===0 && j===0) || cell.flag) continue;
        revealMap(board, y+i,x+j);
      }
    }
  } 
}

function replaceField(resultRow:string, i:number, value:number) {
    const temporaryRow = resultRow.split('');
    const oldValue = isNaN(parseInt(temporaryRow[i])) ? 0 : parseInt(temporaryRow[i]);
    temporaryRow[i] = (oldValue + value).toString(); // += to co masz + nowe
    return temporaryRow.join('');
}

export const annotate = (input:string[]):string[] => {
    const result = [...input] //spread operator
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