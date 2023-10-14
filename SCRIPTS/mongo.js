/**
 * Open a mongo shell and run
 * use marketplace
 * load("adminUsers.js")
 */
// import {users} from '../json-output/adminUsers.js'
import { MongoClient, ObjectId } from "mongodb";

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { monitorCommands: true });

// client.db('marketplace').collection('users');
// await client.find(myObj).toArray();

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

async function findUser() {
    try {
        const database = client.db('local')
        const startup_log = database.collection('startup_log')
        const myObj = { _id: new ObjectId("64177535831175782ffc7c22")};
        const query = await startup_log.findOne(myObj)
        return query
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    };
};

export {findUser}