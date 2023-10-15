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

const dbRemoveObj = {
    obj: {
        description: "actioning playground collection remove",
        _id: new ObjectId(),
        date: new Date(),
        updatedByScript: true,
        actionedBy: {
            users: [
                "diogoSan"
            ]
        }
    },
    database: 'playground',
    collection: 'collection1',
    description: 'querying playground collection dbRemove',
};

const dbRemoveManyObj = {
    objDeleteQuery: {},
    insertedObjToDelete: {
        "scriptInsert": true,
        "scriptName": "dbRemoveMany",
        "actionedBy": {
            "users": [
                'diogoSan'
            ],
            "device": [
                "osx"
            ]
        },
        "manualInsert": false
    },
    database: 'playground',
    collection: 'collection1',
    description: 'querying playground collection dbRemoveMany',
};

const dbUpdateQueryObj = {
    database: 'playground',
    collection: 'collection1',
    original: {
        _id: new ObjectId('652ba76ea21bfbcc0e6336fa'),
        "manualInsert": true
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
    dbRemoveObj,
    dbRemoveManyObj,
    dbUpdateQueryObj
}