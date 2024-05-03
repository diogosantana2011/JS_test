const runnerData = require('./runners-outright.json');

for (runner of runnerData) {
    if (!runner.aggregatedPrices && runner.aggregatedPrices === undefined) 
        console.log(`Prices not defined for runner with Name (id): ${runner.name} (${runner.id})`);
    else for (j of runner.aggregatedPrices) 
        console.log(j.odds)
};