const addALine = (lastLetter: number, i: number, arr: string[]) => {
    const spacesNumber = lastLetter - i;
    const line = ' '.repeat(spacesNumber)
               + String.fromCharCode(i)
               + ' '.repeat(spacesNumber);
    arr.push(line);
}

const addLine = (lastLetter: number, i: number, arr: string[]) => {
    const spacesNumber = lastLetter - i;
    const line = ' '.repeat(spacesNumber)
               + String.fromCharCode(i)
               + ' '.repeat(1 + 2 * (i - 66))
               + String.fromCharCode(i)
               + ' '.repeat(spacesNumber);
    arr.push(line);
}

export const rows = (input: string):string[] => {
    if (input === 'A') return ['A'];
    const arr: string[] = [];
    const lastLetter = input.charCodeAt(0);
  
    addALine(lastLetter, 65, arr);
    for (let i = 66; i <= lastLetter; ++i) addLine(lastLetter, i, arr);
    for (let i = lastLetter - 1; i >= 66; --i) addLine(lastLetter, i, arr);
    addALine(lastLetter, 65, arr);
  
    return arr;
  };