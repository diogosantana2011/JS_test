let launchCode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: [
        "LC101",
        "LaunchCode Women+",
        "CodeCamp"
    ]
};

const launchOutput = (num) => {
    let output = '';

    if (num% 2 === 0) {
        return output = "Launch!";
    }  if (num% 3 === 0) {
        return output = "Code!";
    } else if (num% 5 === 0) {
        return output = "Rocks!";
    };

    /**
     * below conditions fail, 
     * as above returns will be resolved first
     */
    // if (num% 2 === 0 && num% 3 === 0) {
    //     return output = 'LaunchCode!';
    // };

    // if (num% 3 === 0 && num% 5 === 0) {
    //     return output = 'Code Rocks!';
    // };

    // if (num% 3 === 0 && num% 5 === 0 && num% 2 === 0) {
    //     return output = 'Code Rocks!';
    // };

    if (!output) {
        return output = 'Rutabagas! That doesn\'t work!'
    };

    return output;
};

const fibonacci = (n) => {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

const isPrime = (num) => {
    for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
    return num !== 1 && num !== 0;
};

export { 
    launchCode,
    launchOutput,
    fibonacci,
    isPrime
}
