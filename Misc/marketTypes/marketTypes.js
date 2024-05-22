const marketPeriods = require('./marketTypes.json');

const fullEvent = marketPeriods.filter((markets) => markets.marketPeriod === 'FULL_EVENT')
const marketTypes = fullEvent[0].marketTypes;
let set = new Set();
for (markets of marketTypes) {
  set.add(markets.marketType)
}

console.log(Array.from(set))