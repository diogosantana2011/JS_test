const sum = (a, b) => {
    try {
        return a + b;
    } catch (err) {
        throw new Error(err)
    }
};

module.exports = sum

/** logs 3 to console */
// console.log(sum(1, 2))