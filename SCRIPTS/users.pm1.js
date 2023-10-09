import { error } from 'console';
import fs from 'fs';

let usersArr = [];

const createDBUserObj = (numUsers) => {
    for (let i = 0; i <= numUsers; i++) {
        let skinName = `QA Skin ${i}`;
        let skinId = `QA_skin${i}`;
        let imsInstanceName = `PM1_qa_brand.qa_skin${i}`;
        let usersToUpdate = {
            "skinArray": [
              {
                "skinId": skinId,
                "skinName": skinName,
                "imsInstanceName": imsInstanceName,
                "rgsArray": [
                  {
                    "rgsId": "gpas",
                    "rgsName": "GPAS RGS"
                  }
                ]
              }
            ]
        };
        // Object assign
        // Object.assign(usersObj, usersToUpdate)
        /**
         * Need to figure out how to correctly
         * set loop
         */
        // Users Array
        usersArr.push(usersToUpdate)
        console.log(usersToUpdate)
    };
    fs.writeFile('json-output/dbUsers_operator.json', JSON.stringify(usersArr, null, 4), (err) => {
        if(err) throw err;
        console.log('Admin file successfully written')
    });
};

createDBUserObj(200)