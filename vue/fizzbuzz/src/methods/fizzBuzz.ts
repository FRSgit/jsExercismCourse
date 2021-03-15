export const fizzBuzz = (n: number) => {
    console.log("fizzbuzz");
    return new Array(n)
      .fill(undefined)
      .map((_item, i) => {
          if (++i % 15 === 0) return 'FizzBuzz';
          else if (i % 3 === 0) return 'Fizz';
          else if (i % 5 === 0) return 'Buzz';
          return i.toString();
      });
  }
