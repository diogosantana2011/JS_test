import { error } from 'console';
import fs from 'fs';

const readFile = (file) => {
    fs.readFile(file, (error, data) => {
        // if the reading process failed,
        // throwing the error
        if (error) {
          // logging the error
          console.error(error);
          throw err;
        };
    });
}

const createUser = (userGroups, numUsers) => {
    let adminUsers = [];
    let warehouseUsers = [];
    let operatorUsers = [];

    if (userGroups === 'ADMIN') {
        for (let i = 1; i <= numUsers; i++) {
            let userId = `mpqaauto_${i}_adm@autotest.com`;
            adminUsers.push({
                "id": `${userId}`,
                "fullName": "Auto QA",
                "userGroup": "ADMIN",
                "roles": [
                    "POP_licensees_management",
                    "audit",
                    "branded_tc_management",
                    "bulk_operations",
                    "campaign_management",
                    "devops",
                    "discovery",
                    "game_approval",
                    "game_configuration_production",
                    "game_lock_edit",
                    "game_lock_view",
                    "game_management",
                    "games_tabs_management",
                    "games_tabs_view",
                    "kiosk_management",
                    "licensee_currency_edit",
                    "licensee_markets_edit",
                    "licensee_multipliers_edit",
                    "licensee_view",
                    "manufacturers_management",
                    "manufacturers_view",
                    "pop_edit",
                    "pop_mapping_edit",
                    "pop_mapping_register",
                    "pop_mapping_view",
                    "pop_view",
                    "reports_generation",
                    "roadmap_edit",
                    "roadmap_view",
                    "service_management",
                    "service_view",
                    "side_to_side_export",
                    "skin_multipliers_edit",
                    "user_management",
                    "global_default_limits"
                ],
                "createdBy": "Automation script",
                "updatedBy": "Automation script",
                "company": "PT QA - Games Innovation Labs",
                "status": "active",
                "timestampCreated": 685522383000,
                "timestampModified": 685522383000,
                "password": "c2NyeXB0ABEAAAAIAAAAAgreI6ukviRSyIbwKVGla1qeNYWSdBxGkjWI+5r20OpF9lHzSqlv3OLt990dfiUHjNow/kpZNYP+qPLpKG1aBAgggZ9lkbrIib/hsoX+4EN3",
                "resetPasswordToken": "120b065c-94cb-43c6-8a69-1a1c6274df1e",
                "resetPasswordExpiryDate": 685522383000,
                "accessibility": null,
                "notificationDisabled": true,
                "notificationChannel": {
                "subscribedRolesArray": [
                    "POP_licensees_management",
                    "audit",
                    "branded_tc_management",
                    "bulk_operations",
                    "campaign_management",
                    "devops",
                    "discovery",
                    "game_approval",
                    "game_configuration_production",
                    "game_lock_edit",
                    "game_lock_view",
                    "game_management",
                    "games_tabs_management",
                    "games_tabs_view",
                    "kiosk_management",
                    "licensee_currency_edit",
                    "licensee_markets_edit",
                    "licensee_multipliers_edit",
                    "licensee_view",
                    "manufacturers_management",
                    "manufacturers_view",
                    "pop_edit",
                    "pop_mapping_edit",
                    "pop_mapping_register",
                    "pop_mapping_view",
                    "pop_view",
                    "reports_generation",
                    "roadmap_edit",
                    "roadmap_view",
                    "service_management",
                    "service_view",
                    "side_to_side_export",
                    "skin_multipliers_edit",
                    "user_management",
                    "global_default_limits"
                ],
                "channelArray": [
                    "email"
                ],
                "excludedActions": []
                },
                "lastLogin": 685522383000
            });
        };

        fs.writeFile('json-output/adminUsers.json', JSON.stringify(adminUsers, null, 4), (err) => {
            if(err) throw err;
            console.log('Admin file successfully written')
        });
    } else if (userGroups === 'WAREHOUSE') {
        for (let i = 1; i <= numUsers; i++) {
            let userId = `mpqaauto_${i}_wh@autotest.com`;
            // Add user templates
            warehouseUsers.push({
                "id": `${userId}`,
                "fullName": "QA Auto",
                "userGroup": "DEVELOPER",
                "roles": [
                    "game_configuration",
                    "game_publishing",
                    "game_management",
                    "client_area_management",
                    "client_area_view"
                ],
                "createdBy": "Automation Script",
                "updatedBy": "Automation Script",
                "company": "Playtech QA",
                "status": "active",
                "timestampCreated": {
                    "$numberLong": "685522383000"
                },
                "timestampModified": {
                    "$numberLong": "685522383000"
                },
                "password": "c2NyeXB0ABEAAAAIAAAAAgreI6ukviRSyIbwKVGla1qeNYWSdBxGkjWI+5r20OpF9lHzSqlv3OLt990dfiUHjNow/kpZNYP+qPLpKG1aBAgggZ9lkbrIib/hsoX+4EN3",
                "resetPasswordToken": "e7c5df90-2cac-4b18-b529-ef7e52f28063",
                "resetPasswordExpiryDate": {
                    "$numberLong": "685522383000"
                },
                "accessibility": {
                    "mfgCodeArray": [
                    "OGN",
                    "ASH",
                    "VIK",
                    "GCO",
                    "PSI",
                    "CRS",
                    "QSP",
                    "SKW",
                    "SFX",
                    "AKA",
                    "EYE",
                    "RSG",
                    "TST",
                    "MTP",
                    "WDG",
                    "SMA",
                    "BTX",
                    "3KG",
                    "APL",
                    "PLV",
                    "MGS",
                    "PZO",
                    "1X2",
                    "AGS",
                    "ARI",
                    "AXI",
                    "BBG",
                    "BDG",
                    "BLP",
                    "BOO",
                    "BSF",
                    "BTG",
                    "CGG",
                    "CRD",
                    "CRT",
                    "DTH",
                    "EDI",
                    "ESP",
                    "FFR",
                    "FGA",
                    "FXM",
                    "GMB",
                    "GMR",
                    "IDS",
                    "IGT",
                    "ING",
                    "IWG",
                    "JRS",
                    "JTW",
                    "LBX",
                    "LDG",
                    "MDS",
                    "MGA",
                    "NGG",
                    "NTN",
                    "NVM",
                    "PGS",
                    "PLS",
                    "PNG",
                    "PRG",
                    "PRP",
                    "RBT",
                    "REV",
                    "RLT",
                    "SCI",
                    "SGH",
                    "SGO",
                    "SMT",
                    "SZG",
                    "TES",
                    "WSK",
                    "WST",
                    "WZD",
                    "YDL",
                    "YLY",
                    "ZI",
                    "ZIT",
                    "3x4",
                    "120",
                    "DDD",
                    "RRR",
                    "GGG",
                    "LLL",
                    "TTT",
                    "EEE",
                    "AAA",
                    "QQQ",
                    "FFF",
                    "FAZ",
                    "BBB",
                    "SSS",
                    "III",
                    "PTC",
                    "CCC",
                    "OOO",
                    "NNN",
                    "POK",
                    "205",
                    "INT",
                    "100",
                    "KJT",
                    "SPN",
                    "SKL",
                    "MPL",
                    "EGM",
                    "VFU",
                    "RBP",
                    "KIR",
                    "NSW",
                    "RDR",
                    "RLX",
                    "ORX",
                    "GAM",
                    "RWB",
                    "KNM",
                    "CNL",
                    "cnl",
                    "PRM",
                    "SPG",
                    "SNT",
                    "GRC",
                    "999",
                    "795",
                    "DSS",
                    "SPR",
                    "CTI",
                    "EVM",
                    "spt",
                    "ADL",
                    "BIT",
                    "BFE",
                    "BAR",
                    "SPT",
                    "DAR",
                    "ALN",
                    "22G",
                    "tst",
                    "VSO"
                    ]
                },
                "legalEntities": [],
                "notificationDisabled": false,
                "notificationChannel": {
                    "channelArray": [
                    "email"
                    ],
                    "subscribedRolesArray": [
                    "game_configuration",
                    "game_publishing",
                    "game_management",
                    "client_area_management",
                    "client_area_view"
                    ],
                    "excludedActions": []
                },
                "lastLogin": 1695302267191,
                "signedTermsAndConditions": true
            });

            fs.writeFile('json-output/warehouseUsers.json', JSON.stringify(warehouseUsers, null, 4), (err) => {
                if(err) throw err;
                console.log('Admin file successfully written')
            });
        }
    } else if (userGroups === 'OPERATOR') {
        for (let i = 1; i <= numUsers; i++) {
            let userId = `mpqaauto_${i}_mkt@autotest.com`;
            // Add user templates
            operatorUsers.push({
                "id": `${userId}`,
                "fullName": "QA auto",
                "userGroup": "OPERATOR",
                "roles": [
                    "game_management",
                    "side_to_side_export",
                    "roadmap_view",
                    "skin_multipliers_edit",
                    "game_configuration_production",
                    "games_performance",
                    "games_benchmark",
                    "game_analytics",
                    "benchmark_exclusive_analytics",
                    "client_area",
                    "client_area_branded",
                    "featured_view",
                    "activated_games_list_view",
                    "branded_tc_row",
                    "branded_tc_us",
                    "branded_tc_sports_row",
                    "branded_tc_sports_us",
                    "game_certificates_management",
                    "global_default_limits"
                ],
                "createdBy": "Automation Script",
                "updatedBy": "Automation Script",
                "company": "Playtech Auto QA",
                "status": "active",
                "timestampCreated": {
                    "$numberLong": "1687163913806"
                },
                "timestampModified": {
                    "$numberLong": "1693416894053"
                },
                "password": "c2NyeXB0ABEAAAAIAAAAAgreI6ukviRSyIbwKVGla1qeNYWSdBxGkjWI+5r20OpF9lHzSqlv3OLt990dfiUHjNow/kpZNYP+qPLpKG1aBAgggZ9lkbrIib/hsoX+4EN3",
                "resetPasswordToken": "03e2f737-4449-4a29-be95-ca8ba8a47eff",
                "resetPasswordExpiryDate": {
                    "$numberLong": "685522383000"
                },
                "accessibility": {
                    "brandId": "QA",
                    "skinArray": [
                    "mp-playtech800051",
                    "mp-playtech800052",
                    "mp-playtech850043",
                    "mp-playtech850027",
                    "mp-playtech850028",
                    "mp-playtech850037",
                    "mp-playtech850041",
                    "mp-playtech850044",
                    "mp-playtech850088"
                    ]
                },
                "legalEntities": null,
                "notificationDisabled": false,
                "notificationChannel": {
                    "subscribedRolesArray": [
                    "game_management",
                    "side_to_side_export",
                    "roadmap_view",
                    "skin_multipliers_edit",
                    "game_configuration_production",
                    "games_performance",
                    "games_benchmark",
                    "game_analytics",
                    "benchmark_exclusive_analytics",
                    "client_area",
                    "client_area_branded",
                    "featured_view",
                    "activated_games_list_view",
                    "branded_tc_row",
                    "branded_tc_us",
                    "branded_tc_sports_row",
                    "branded_tc_sports_us",
                    "game_certificates_management",
                    "global_default_limits"
                    ],
                    "channelArray": [
                    "email"
                    ],
                    "excludedActions": []
                },
                "lastLogin": 685522383000,
                "signedTermsAndConditions": true,
                "acceptedBrandedTermsNotice": true
            });

            fs.writeFile('json-output/operatorUsers.json', JSON.stringify(operatorUsers, null, 4), (err) => {
                if(err) throw err;
                console.log('Admin file successfully written')
            });
        };
    } 
};

createUser('ADMIN', 2)
createUser('WAREHOUSE', 2)
createUser('OPERATOR', 2)