const runnerData = require('./runners-outright.json');

test('Check if odds are ordered', () => {
    let previousOdds = null;
    let isOrdered = true;

    for (const runner of runnerData) {
        if (!runner.aggregatedPrices || runner.aggregatedPrices.length === 0) {
            console.log(`Prices not defined for runner with Name (id): ${runner.name} (${runner.id})`);
            continue;
        }
        
        for (const price of runner.aggregatedPrices) {
            if (previousOdds !== null && price.odds < previousOdds) {
                isOrdered = false;
                break;
            }
            previousOdds = price.odds;
        }
    }

    expect(isOrdered).toBe(true);
});