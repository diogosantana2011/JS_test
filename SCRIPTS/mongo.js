/**
 * Open a mongo shell and run
 * use marketplace
 * load("adminUsers.js")
 */
// import {users} from '../json-output/adminUsers.js'
import { MongoClient, MongoNotConnectedError } from "mongodb";

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { monitorCommands: true });

// async function run() {
//     // Use connect method to connect to the server
//     await client.connect(err => {
//         if (err) throw err;
//         return
//     });
//     console.log('Connected successfully to server');
//     const db = client.db('local');
//     const collection = db.collection('startup_log');
//     return 'done.';
// }

// run()
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close());

// Find
/**
 * 
 * @returns {Object} = object from db using findOne
 * @param db = db name as 'str'
 * @parm col = collection name as 'str'
 */

async function queryDb(db, col, obj = {}) {
    try {
        const database = client.db(db);
        const collection = database.collection(col);
        const myObj = obj;
        const query = await collection.findOne(myObj);
        return query;
    } catch (err) {      
        throw err
    };
};

/**
 * 
 * @returns {Object} = object with insertedId, acknowledged
 * @param db = db name as 'str'
 * @parm col = collection name as 'str'
 */

async function dbInsert(db, col, obj = {}) {
    try {
        const database = client.db(db);
        const collection = database.collection(col);
        const myObj = obj;
        const query = await collection.insertOne(myObj);
        return query;
    } catch (err) {      
        throw err
    };
};

export {queryDb, dbInsert}