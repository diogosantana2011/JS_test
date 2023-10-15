import users from "../SCRIPTS/json-output/adminUsers.json" assert {type: 'json'};
import { dbInsertMany, dbRemoveMany, queryDb } from './mongo.js'

const userInsertData = {
    database : 'playground',
    collection : 'users',
}

/**
 * Insert
 */
dbInsertMany(userInsertData.database, userInsertData.collection, users).then((result) => {
    console.log(result)
});

// users.forEach( async (data) => {
//     console.log(data)
//     // Removes all
//     await dbRemoveMany(userInsertData.database, userInsertData.collection, {})
//     .then((result) => {
//         // Queries db which should return null
//         queryDb(userInsertData.database, userInsertData.collection).then((query) => {
//             console.log(query)
//         })
//     });
// });







