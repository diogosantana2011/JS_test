import { findUser } from "../../SCRIPTS/mongo.js";

describe('Mongo - findUser', () => {
    it('Checks find user returns expected data', () => { 
        return findUser().then((data) => {
            if (!data) return;
            expect(data.pid).toEqual({ '$numberLong': '10086' })
            expect(data.hostname).toEqual('Diogos-MacBook-Air.local')
        });
    });
});