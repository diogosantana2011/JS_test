const { fibonacci, isPrime } = require('../support/maths.js')
// const isPrime = require('../support/maths.js')

test('Checks Fibonacci fn - Fib(1)', () => {
    expect(fibonacci(1)).toEqual([0, 1])
});

test('Checks Fibonacci fn - fib(5)', () => {
    expect(fibonacci(5)).toEqual([ 0, 1, 1, 2, 3, 5 ])
});

test('Checks if 7 is a prime number (true)', () => {
    expect(isPrime(7)).toEqual(true)
});

test('Checks if 97 is a prime number (true)', () => {
    expect(isPrime(97)).toEqual(true)
});

test('Checks if 8 is a prime number (false)', () => {
    expect(isPrime(8)).toEqual(false)
});

it('Checks if 62 and/or 58 are prime numbers (false)', () => {
    expect(isPrime(62)).toEqual(false)
    expect(isPrime(58)).toEqual(false)
});
