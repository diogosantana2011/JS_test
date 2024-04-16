const environmentData = require('./envData/environment-data.json');
const alpha =  environmentData.environment.alpha.users;
const preProd = environmentData.environment['pre-prod'].users;

console.log('\n---------------- ALPHA -------------------------------\n')
console.time()
alpha.forEach((user) => {
    console.log(`Username: ${user['nick-name']}`)
});
console.timeEnd()

console.log('\n---------------- PRE PROD -----------------------------\n')

console.time()
preProd.forEach((user) => {
    console.log(`Username: ${user['nick-name']}`)
});
console.timeEnd()