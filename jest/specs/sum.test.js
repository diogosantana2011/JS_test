const sum = require('../support/sum.js');
// console.log(sum(1, 2))

test('adds 1 + 2 and assures its correct', () => {
    expect(sum(1, 2)).toEqual(3);
});

test('adds 1 + 3 and assures it is not 5', () => {
    expect(sum(1, 3)).not.toBe(5);
});

test('pass no params, and assures sum returns NaN', () => {
    expect(sum()).toBe(NaN);
});