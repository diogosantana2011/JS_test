import { dbInsert, queryDb, dbRemove, dbUpdate, dbRemoveMany, dbCount } from "../../SCRIPTS/mongo.js";
import { db1, db2, db3Insert, dbRemoveObj, dbRemoveManyObj, dbUpdateQueryObj } from '../support/mongo.helpers.js'
import { ObjectId } from "mongodb";

describe('Mongo - queryDb', () => {
    it(`Checks queryDb fn returns correct data, based on query from ${db1.description}`, () => { 
        return queryDb(db1.database, db1.collection, db1.obj).then((data) => {
            // Check if data is not null or undefined
            expect(data).not.toBeNull();
            expect(data).not.toBeUndefined();
    
            // Check if data contains pid and hostname
            expect(data.pid).toEqual({ '$numberLong': '10086' });
            expect(data.hostname).toEqual('Diogos-MacBook-Air.local');
        });
    });    

    it(`Checks queryDb fn returns correct data, based on query from ${db2.description}`, () => {
        return queryDb(db2.database, db2.collection, db2.obj).then((data) => {
            expect(data.pid).toEqual(db2.obj.pid)
            expect(data.manualInsert).toEqual(true)
            expect(data._id).toBeDefined();
        });
    });

    it('Checks queryDb returns false when invalid input', () => {
        return queryDb('random1', 'non-existing_collection').then((data) => {
            expect(data).toBeFalsy();
        });
    });
});

describe('Mongo - dbInsert', () => {
    it(`Checks insert is successfull, for insert ${db3Insert.description}`, async () => {
        await dbInsert(db3Insert.database, db3Insert.collection, db3Insert.obj).then((data) => {
            expect(data.acknowledged).toEqual(true);
        });

        await queryDb(db3Insert.database, db3Insert.collection, db3Insert.obj)
        .then((data) => {
            expect(data.scriptInsert).toBe(true);
            expect(data.arrayWithObjects).toEqual(jasmine.arrayContaining([
                {
                    "anotherKey": "anotherValue"
                },
                {
                    "anotherKey1": "anotherValue1"
                }
            ]));
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

describe('Mongo - dbRemove', () => {
    it(`Checks dbRemove is successfull for ${dbRemoveObj.description}`, async () => {
        await dbInsert(dbRemoveObj.database, dbRemoveObj.collection, dbRemoveObj.obj)
        .then((result) => {
            expect(result.acknowledged).toEqual(true);
            return dbRemove(dbRemoveObj.database, dbRemoveObj.collection, { _id: new ObjectId(result.insertedId)})
            .then((data) => {
                expect(data.acknowledged).toBe(true);
                expect(data.deletedCount).toEqual(1);
            });
        })
    });

    it('Checks queryDb returns false when invalid input', () => {
        return dbRemove('random_bananasJAck', 'non-existing_collection').then((data) => {
            expect(data.deletedCount).toEqual(0);
        });
    });
});

describe('Mongo - dbUpdate', () => {
    afterAll( async () => {
        await queryDb(dbUpdateQueryObj.database, dbUpdateQueryObj.collection, dbUpdateQueryObj.original)
        .then((query) => {
            if (query.resetByAfterClause === false) {
                return dbUpdate(
                    dbUpdateQueryObj.database,
                    dbUpdateQueryObj.collection,
                    query,
                    { 
                        $set: {
                            "pid": 6990,
                            "manualInsert": true,
                            "manualUpdate": false,
                            "resetToDefault": true,
                            "resetByScript": true,
                            "resetByAfterClause": true,
                            "updatedByScript": true,
                            "modifiedTimestamp": new Date()
                        }
                    }
                ).then((data) => {
                    expect(data.acknowledged).toBeTrue();
                    expect(data.modifiedCount).toEqual(1);
                    expect(data.matchedCount).toEqual(1);
                });
            }
        });        
    });

    it('Checks object is queried, and updated successfully', async () => {
        await dbUpdate(
            dbUpdateQueryObj.database, 
            dbUpdateQueryObj.collection, 
            dbUpdateQueryObj.original,
            {
                $set: dbUpdateQueryObj.update
            }
        ).then((data) => {
            expect(data.acknowledged).toBeTrue();
            expect(data.modifiedCount).toEqual(1);
            expect(data.matchedCount).toEqual(1);
            expect(data).toEqual(jasmine.objectContaining({
                acknowledged: true,
                modifiedCount: 1,
                upsertedId: null,
                upsertedCount: 0,
                matchedCount: 1
              })
            );
        });
    });
});

// WIP
// describe('Mongo - dbUpdateMany', () => {
// });

describe('Mongo - dbRemoveMany', () => {
    afterAll( async () => {
        await queryDb(dbUpdateQueryObj.database, dbUpdateQueryObj.collection, dbUpdateQueryObj.original)
        .then((result) => {
            if (!result) {
                dbInsert(dbUpdateQueryObj.database, dbUpdateQueryObj.collection, dbUpdateQueryObj.original)
            }
        });
    });

    it(`Checks dbRemoveMany is successfull for ${dbRemoveManyObj.description}`, async () => {
        // Make insert
        await dbInsert(dbRemoveManyObj.database, dbRemoveManyObj.collection, dbRemoveManyObj.insertedObjToDelete)
        .then((data) => {
            expect(data.acknowledged).toEqual(true);
        });

        // Ensure inserted success
        await queryDb(dbRemoveManyObj.database, dbRemoveManyObj.collection, {"scriptName": "dbRemoveMany"})
        .then((result) => {
            expect(result.scriptName).toEqual('dbRemoveMany')
            expect(result.actionedBy.users).toEqual(['diogoSan'])
        });

        // Count collection docs
        await dbCount(dbRemoveManyObj.database, dbRemoveManyObj.collection)
        .then((result) => {
            // Remove all docs
            return dbRemoveMany(dbRemoveObj.database, dbRemoveObj.collection, {})
            .then((data) => {
                expect(data.acknowledged).toBe(true);
                expect(data.deletedCount).toEqual(result);
            });
        });

        await dbCount(dbRemoveManyObj.database, dbRemoveManyObj.collection)
        .then((request) => {
            expect(request).toEqual(0)
        });
    });
});