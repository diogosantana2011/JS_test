const matchedBets = require('./MB-json.json');

let sumOfMatchBets = 0; 

for (bets of matchedBets) {
    // can use parseFloat if wanting to handle decimals
    sumOfMatchBets += bets.stake;
    console.log(sumOfMatchBets)
}