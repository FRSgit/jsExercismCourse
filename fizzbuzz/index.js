const fizzBuzz = (n) => 
    new Array(n)
        .fill()
        .map((_item, i) => {
            if (++i % 15 === 0) return 'FizzBuzz';
            else if (i % 3 === 0) return 'Fizz';
            else if (i % 5 === 0) return 'Buzz';
            return i.toString();
        });

// function fizzBuzz(n) {
//     const start = performance.now();
//     const result = [];
//     for (let i = 1; i < n + 1; ++i) {
//         if (i % 15 === 0) result.push("FizzBuzz");
//         else if (i % 3 === 0) result.push("Fizz");
//         else if (i % 5 === 0) result.push("Buzz");
//         else result.push(i.toString());
//     }
//     console.log(performance.now() - start);
//     return result;
// }

module.exports = {
    fizzBuzz
};
