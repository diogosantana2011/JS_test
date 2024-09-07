const allBalance = require('./statement-all-usd.json');
const statement = allBalance.statements;

let [sumOfCredit, sumOfTurnover, sumOfStake] = [0, 0, 0];

const to2Dec = (num) => {
    return num.toFixed(2)
};

for (items of statement) {
    sumOfCredit = sumOfCredit + items.credit;
};

for (items of statement) {
    sumOfTurnover = sumOfTurnover + items.turnover;
};

for (items of statement) {
    sumOfStake = sumOfStake + items.stake;
};

console.log(to2Dec(sumOfCredit))
console.log(to2Dec(sumOfTurnover))
console.log(to2Dec(sumOfStake))