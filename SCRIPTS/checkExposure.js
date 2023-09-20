// let json = require('./GET-Exposure-DEV.json');
let json = require('../JSON/GET-Exposure-DEV-1.json');

json.forEach((game) => {
    if (game.imsGameCode) {
        if (game.imsGameCode === "") {
            console.log(`The game: ${game.gameTitle} has no imsGameCode: (${game.imsGameCode}).`);
        } else if (game.imsGameCode !== "") {
            console.log(`imsGameCode (${game.imsGameCode}) is present for game: ${game.gameTitle} `)
        };
    };

    if (!game.imsGameCode) {
        console.log(`The game ${game.gameTitle} has no imsGameCode property.`)
    };
});

let counter = 0;

for (let properties in json) {
    counter = counter + 1;
};

console.log(`\n The JSON file has total of ${counter} game objects. \n`)