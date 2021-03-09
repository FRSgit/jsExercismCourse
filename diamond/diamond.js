//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const addALine = (lastLetter, i, arr) => {
    let spacesNumber = lastLetter - i;
    const line = ' '.repeat(spacesNumber)
               + String.fromCharCode(i)
               + ' '.repeat(spacesNumber);
    arr.push(line);
}

const addLine = (lastLetter, i, arr) => {
    let spacesNumber = lastLetter - i;
    const line = ' '.repeat(spacesNumber)
               + String.fromCharCode(i)
               + ' '.repeat(1 + 2 * (i - 66))
               + String.fromCharCode(i)
               + ' '.repeat(spacesNumber);
    arr.push(line);
}

// export const rows = input => {
//     const arr = [];
//     const lastLetter = input.charCodeAt(0);
//     addALine(lastLetter, 65, arr);
//     if (input !== 'A') {
//         for (let i = 66; i <= lastLetter; ++i) addLine(lastLetter, i, arr);
//         for (let i = lastLetter - 1; i >= 66; --i) addLine(lastLetter, i, arr);
//         addALine(lastLetter, 65, arr);
//     }
//     return arr;
// };

export const rows = input => {
  if (input === 'A') return ['A'];
  const arr = [];
  const lastLetter = input.charCodeAt(0);

  addALine(lastLetter, 65, arr);
  for (let i = 66; i <= lastLetter; ++i) addLine(lastLetter, i, arr);
  for (let i = lastLetter - 1; i >= 66; --i) addLine(lastLetter, i, arr);
  addALine(lastLetter, 65, arr);

  return arr;
};

// const replaceChar = (string, index, replacement) =>
//   string.substring(0, index) + replacement + string.substring(index + 1);

// const generateLine = (arr, inputCode, length, currentCharCode) => {
//   let line = ' '.repeat(length);
//   const char = String.fromCharCode(currentCharCode);
//   const index = inputCode - currentCharCode;
//   line = replaceChar(line, index, char);
//   line = replaceChar(line, length - 1 - index, char);
//   arr.push(line);
// };

// export const rows = input => {
//   const inputCode = input.charCodeAt(0);
//   const rowLength = (inputCode - 65) * 2 + 1;
//   const result = [];
//   for (let i = 65; i <= inputCode; ++i) generateLine(result, inputCode, rowLength, i);
//   for (let i = inputCode - 1; i >= 65; --i) generateLine(result, inputCode, rowLength, i);
//   return result;
// };
