/**
 * Open a mongo shell and run
 * use {collection}
 * load("{file}")
 */
// import {users} from '../json-output/adminUsers.js'
import { MongoClient } from "mongodb";

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
 * @param db db name as 'str'
 * @param col collection name as 'str'
 * @parm obj {key: value} to query on db
 */

async function queryDb(db = '', col = '', obj = {}) {
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
 * @returns {Object} object with insertedId, acknowledged
 * @param db db name as 'str'
 * @param col collection name as 'str'
 * @param obj {key: value} object to insert
 */

async function dbInsert(db = '', col = '', obj = {}) {
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

/**
 * 
 * @returns {Object} = object with deletedCount, acknowledged
 * @param db db name as 'str'
 * @param col collection name as 'str'
 * @param obj object with matching params to delete {key: value}
 */

async function dbRemove(db = '', col = '', obj = {}) {
    try {
        const database = client.db(db);
        const collection = database.collection(col);
        const myObj = obj;
        const query = await collection.deleteOne(myObj);
        return query;
    } catch (err) {      
        throw err
    };
};

/**
 * 
 * @returns query object with updatedCount, acknowledged
 * @param db db name as 'str'
 * @param col collection name as 'str'
 * @param obj object to locate query to update {key: value}
 * @param update object to update on original 'obj' param
 */

async function dbUpdate(db = '', col = '', obj = {}, update = {}) {
    try {
        const database = client.db(db);
        const collection = database.collection(col);
        const myObj = obj;
        const query = await collection.updateOne(myObj, update);
        return query;
    } catch (err) {      
        throw err
    };
};

export {queryDb, dbInsert, dbRemove, dbUpdate}