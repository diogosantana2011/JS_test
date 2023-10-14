import { fibonacci, isPrime } from "../index.js";

describe("Basic Math Utils - Fibonacci", () => {
    it('Checks Fibonacci fn - Fib(1)', () => {
        let output = fibonacci(1);
        expect(output).toEqual([0, 1])
    });

    it('Checks Fibonacci fn - fib(5)', () => {
        let output = fibonacci(5);
        expect(output).toEqual([ 0, 1, 1, 2, 3, 5 ])
    });
});

fdescribe("Basic Maths Utils - isPrime", () => {
    it('Checks if 7 is a prime number (true)', () => {
        let output = isPrime(7);
        expect(output).toEqual(true)
    });

    it('Checks if 97 is a prime number (true)', () => {
        let output = isPrime(97);
        expect(output).toEqual(true)
    });

    it('Checks if 8 is a prime number (false)', () => {
        let output = isPrime(8);
        expect(output).toEqual(false)
    });

    it('Checks if 62 and/or 58 are prime numbers (false)', () => {
        let output1 = isPrime(62);
        let output2 = isPrime(58);
        expect(output1).toEqual(false)
        expect(output2).toEqual(false)
    })
});