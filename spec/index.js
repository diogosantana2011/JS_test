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
    };

    if (num% 3 === 0) {
        return output = "Code!";
    };

    if (num% 5 === 0) {
        return output = "Rocks!";
    };

    // if (num% 2 === 0 && num% 3 === 0) {
    //     return output = 'LaunchCode!';
    // };

    // if (num% 3 === 0 && num% 5 === 0) {
    //     return output = 'Code Rocks!';
    // };

    if (!output) {
        return output = 'Rutabagas! That doesn\'t work!'
    };

    return output;
};

export { 
    launchCode,
    launchOutput
}
