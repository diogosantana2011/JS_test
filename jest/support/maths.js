const fibonacci = (n) => {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
    return num !== 1 && num !== 0;
};

const sum = (a, b) => {
    return a + b
};

module.exports = {fibonacci, isPrime, sum}