/**
 * Fibonacci sequence
 * @date 12/12/2023 - 14:21:26
 *
 * @param {Number} n digit to start fibonacci sequence from
 * @returns {Array} an array of the numbers in the sequence.
 * Alternative for long fibonacci above
 * let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
 */ 

const fibonacci = (n) => {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    };
};

/**
 * Checks if number provided is prime number,.
 * @date 12/12/2023 - 14:21:26
 *
 * @param {Number} n integer
 * @returns {Number} an array of the numbers in the sequence.
 */ 
const isPrime = (num) => {
    for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
    return num !== 1 && num !== 0;
};

/**
 * Adds 2 numbers
 * @date 12/12/2023 - 14:21:26
 *
 * @param {Number} a first digit to add
 * @param {Number} b second digit to add
 * @returns {Number} result of adding 2 numbers passed.
 */ 
const sum = (a, b) => {
    return a + b
};

module.exports = {fibonacci, isPrime, sum}