/**
 * Open a mongo shell and run
 * use marketplace
 * load("adminUsers.js")
 */
// import {users} from '../json-output/adminUsers.js'
import { MongoClient } from "mongodb";

const url = 'mongodb://admin:password@10.191.193.193:443/?authSource=admin&readPreference=primary&directConnection=true&ssl=false'
const client = new MongoClient(url, { monitorCommands: true });

// client.db('marketplace').collection('users');
// await client.find(myObj).toArray();

async function run() {
    // Use connect method to connect to the server
    await client.connect(err => {
        if (err) throw err;
        return
    });
    console.log('Connected successfully to server');
    const db = client.db('marketplace');
    const collection = db.collection('users');
    return 'done.';
}

run()
.then(console.log)
.catch(console.error)
.finally(() => client.close());

// Find

// async function run() {
//     try {
//         const database = client.db('marketplace')
//         const users = database.collection('users')
//         const myObj = { id: 'diegsan20@gmail.com', status: 'active' };
//         const query = await users.findOne(myObj)
//         console.log(query)
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// run().catch(console.dir);