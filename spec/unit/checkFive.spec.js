import checkFive from '../support/checkFive.js';

describe('Check Five', () => {
    it('Checks output is less than 5', () => {
        let output = checkFive(2);
        expect(output).toEqual('2 is less than 5.')
    });
    it('Checks output is more than 5', () => {
        let output = checkFive(6);
        expect(output).toEqual('6 is greater than 5.')
    });
    it('Checks output is 5', () => {
        let output = checkFive(5);
        expect(output).toEqual('5 is equal to 5.')
    });
});