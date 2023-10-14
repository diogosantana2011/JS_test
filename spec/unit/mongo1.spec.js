import { dbInsert, queryDb } from "../../SCRIPTS/mongo.js";
import { ObjectId } from "mongodb";

const db1 = {
    obj : { _id: new ObjectId("64177535831175782ffc7c22")},
    database : 'local',
    collection : 'startup_log',
    description: 'querying startup_log collection'
};

const db2 = {
    obj: {_id: new ObjectId('652a92104a9b540e46ceb767')},
    pid: 6969,
    manual_insert: true,
    database: 'playground',
    collection: 'collection1',
    description: 'querying playground collection'
};

const db3Insert = {
    obj: {
        "scriptInsert": true,
        _id: new ObjectId(),
        "description": "querying playground collection insert",
        randomArray: [
            'value1',
            'value2',
            'value3'
        ],
        arrayWithObjects: [
            {
                anotherKey: "anotherValue"
            },
            {
                anotherKey1: "anotherValue1"
            }
        ]
    },
    database: 'playground',
    collection: 'collection1',
    description: 'querying playground collection insert',
};

describe('Mongo - queryDb', () => {
    it(`Checks queryDb fn returns correct data, based on query from ${db1.description}`, () => { 
        return queryDb(db1.database, db1.collection, db1.obj).then((data) => {
            if (!data) return;
            console.log(`Data returned id: ${data._id}`)
            expect(data.pid).toEqual({ '$numberLong': '10086' })
            expect(data.hostname).toEqual('Diogos-MacBook-Air.local')
        });
    });

    it(`Checks queryDb fn returns correct data, based on query from ${db2.description}`, async () => {
        await queryDb(db2.database, db2.collection, db2.obj).then((data) => {
            if (!data) return;
            console.log(`Data returned: ${JSON.stringify(data)}`)
            expect(data.pid).toEqual(db2.pid)
            expect(data.manualInsert).toEqual(true)
            expect(data._id).toEqual(new ObjectId('652a92104a9b540e46ceb767'))
        });
    });
});

describe('Mongo - dbInsert', () => {
    it(`Checks insert is successfull, for insert ${db3Insert.description}`, async () => {
        await dbInsert(db3Insert.database, db3Insert.collection, db3Insert.obj).then((data) => {
            if (!data) return;
            console.log(`Data returned id: ${JSON.stringify(data)}`)
            expect(data.acknowledged).toEqual(true);
        });

        return queryDb(db3Insert.database, db3Insert.collection, db3Insert.obj)
        .then((data) => {
            console.log(data)
            expect(data.scriptInsert).toBe(true);
            expect(data.arrayWithObjects).toEqual(jasmine.arrayContaining(
                [
                    {
                      "anotherKey": "anotherValue"
                    },
                    {
                      "anotherKey1": "anotherValue1"
                    }
                ]
            ));
            expect(data.randomArray).toEqual(jasmine.arrayContaining(
                [
                    "value1",
                    "value2",
                    "value3"
                ]
            ));
        });
    });
});