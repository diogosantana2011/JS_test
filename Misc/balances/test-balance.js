const accountBalances = require('../balances/acc-balance.json');
const statements = accountBalances.statementBetsByDateList;

let [sumOfCredit, sumOfTurnover, sumOfStake] = [0, 0, 0];

for (items of statements) {
    sumOfCredit = sumOfCredit + items.credit;
};

for (items of statements) {
    sumOfTurnover = sumOfTurnover + items.turnover;
};

for (items of statements) {
    sumOfStake = sumOfStake + items.stake;
};

console.log(sumOfCredit)
console.log(sumOfStake)
console.log(sumOfTurnover)