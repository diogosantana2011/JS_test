let json = require('../JSON/getMappingGames-dev.json');
let codesForTest = [];
const fs = require('fs');

json.forEach((mainObj) => {
    mainObj.licensees.forEach((licensees) => {
        if (licensees.rgsId === 'gpas') {
            console.log(licensees.imsGameCode)
            // let data = licensees.imsGameCode;
            // fs.writeFile('new-imsGameCodes.txt', data, (err) => {
            //     if (err) 
            //     throw err;
            // });
        }        
    });
});