import { ObjectId } from "mongodb";

const db1 = {
    obj : { _id: new ObjectId("64177535831175782ffc7c22")},
    database : 'local',
    collection : 'startup_log',
    description: 'querying startup_log collection'
};

const db2 = {
    obj: {_id: new ObjectId('652a92104a9b540e46ceb767')},
    pid: 6990,
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

const dbDelete = {
    obj: {
        description: "querying playground collection insert"
    },
    database: 'playground',
    collection: 'collection1',
    description: 'querying playground collection dbRemove',
};

const dbUpdateQueryObj = {
    database: 'playground',
    collection: 'collection1',
    original: {
        _id: new ObjectId('652a92104a9b540e46ceb767'),
        "manualInsert": true,
    },
    update: {
        "pid": 1000,
        "manualInsert": true,
        "manualUpdate": false,
        "resetToDefault": true,
        "resetByScript": true,
        "resetByAfterClause": false,
        "updatedByScript": true
    }
};

export {
    db1,
    db2,
    db3Insert,
    dbDelete,
    dbUpdateQueryObj
}