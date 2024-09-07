const accountBalances = require('./test-balance-usd.json');
const statements = accountBalances.statementBetsByDateList;

let [sumOfCredit, sumOfTurnover, sumOfStake] = [0, 0 , 0];

const to3Dec = (num) => {
    return num.toFixed(2)
}

for (items of statements) {
    sumOfCredit = sumOfCredit + items.credit;
};

for (items of statements) {
    sumOfTurnover = sumOfTurnover + items.turnover;
};

for (items of statements) {
    sumOfStake = sumOfStake + items.stake;
};

console.log(to3Dec(sumOfCredit))
console.log(to3Dec(sumOfStake))
console.log(to3Dec(sumOfTurnover))

