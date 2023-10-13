import whoWon from "../support/whoWon.js";

describe('Checks whoWon function', () => {
    it('Checks TIE', () => {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!')
    });

    it('Checks that player 2 wins \
        paper vs scissors', () => {
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!')
    });

    it('Checks that player 2 wins \
        rock vs paper', () => {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!')
    });

    it('Checks that player 2 wins \
        scissors vs rock', () => {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!')
    });

    it('Checks that player 1 wins', () => {
        let output = whoWon('scissors', 'paper');
        expect(output).toEqual('Player 1 wins!')
    });
});