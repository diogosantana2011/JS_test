// launchcode.spec.js code:
import { launchCode, launchOutput } from '../index.js';

describe('Checking launchCode fn', () => {
    it('Checking that output of launchCode returns organization', () => {
        expect(launchCode.organization).toEqual('nonprofit');
    });

    it('Checking that output oflaunchCode returns executiveDirector', () => {
        expect(launchCode.executiveDirector).toEqual('Jeff');
    });

    it('Checking that output of launchCode returns percentageCoolEmployees', () => {
        expect(launchCode.percentageCoolEmployees).toEqual(Number(100));
    });

    it('Checking that output of launchCode returns programsOffered', () => {
        expect(launchCode.programsOffered[0]).toEqual('LC101');
        expect(launchCode.programsOffered[1]).toEqual('LaunchCode Women+');
        expect(launchCode.programsOffered[2]).toEqual('CodeCamp');
        expect(launchCode.programsOffered).toHaveSize(3);
    });
});

describe('Checks launchOutput fn', () => {
    it('Checking that number divisible by 2 returns "Launch!"', () => {
        expect(launchOutput(2)).toEqual('Launch!');
    });

    it('Checking that number divisible by 3 returns "Code!"', () => {
        expect(launchOutput(3)).toEqual('Code!');
    });

    it('Checking that number divisible by 5 returns "Rocks!"', () => {
        expect(launchOutput(5)).toEqual('Rocks!');
    });

    xit('Checking that number divisible by 2 and 3 returns "LaunchCode!"', () => {
        expect(launchOutput(288)).toEqual('LaunchCode!');
    });

    xit('Checking that number divisible by 3 and 5 returns "Code Rocks!"', () => {
        expect(launchOutput(75)).toEqual('Code Rocks!');
    });

    xit('Checking that number divisible by 2, 3 and 5 returns "Code Rocks!"', () => {
        expect(launchOutput(120)).toEqual('LaunchCode Rocks!');
    });
});