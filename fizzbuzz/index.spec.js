const { fizzBuzz } = require('./index.js')

describe('When n=1', () => {
    it('should return ["1"]', () => {
        expect(fizzBuzz(1)).toEqual(["1"]);
    })
})

describe('When n=2', () => {
    it('should return ["1","2"]', () => {
        expect(fizzBuzz(2)).toEqual(["1", "2"]);
    })
})

describe('When n=3', () => {
    it('should return ["1","2","Fizz"]', () => {
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    })
})

describe('When n=5', () => {
    it('should return ["1","2","Fizz","4","Buzz"]', () => {
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    })
})

describe('When n=15', () => {
    it('should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]', () => {
        expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    })
})