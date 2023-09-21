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

const formatUser = (userGroups, numUsers) => {
    let adminUsers = [];
    let warehouseUsers = [];
    let operatorUsers = [];

    if (userGroups === 'ADMIN') {
        for (let i = 1; i <= numUsers; i++) {
            let userId = `mpqaauto_${i}_adm@autotest.com`;
            adminUsers.push({
                "id": `${userId}`,
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
                    "marketing_assets_management",
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
                    "user_management"
                ],
                "accessibility": null,
                "fullName": "QA Auto ",
                "company": "Auto Playtech QA",
                "createdBy": "Automation script",
                "timestampCreated": 685485391000,
                "updatedBy": "Automation script",
                "timestampModified": 685485391000,
                "status": "active",
                "lastLogin": 1695215826478,
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
                        "marketing_assets_management",
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
                        "user_management"
                    ],
                    "channelArray": [
                        "email"
                    ],
                    "excludedActions": []
                },
                "notificationDisabled": false,
                "resetPasswordExpiryDate": 685485391000
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
            warehouseUsers.push(
                // Enter user object
                // with user Id interpolated
            )

            fs.writeFile('json-output/warehouseUsers.json', JSON.stringify(warehouseUsers, null, 4), (err) => {
                if(err) throw err;
                console.log('Admin file successfully written')
            });
        }
    } else if (userGroups === 'OPERATOR') {
        for (let i = 1; i <= numUsers; i++) {
            let userId = `mpqaauto_${i}_mkt@autotest.com`;
            // Add user templates
            operatorUsers.push(
                // Enter user object
                // with user Id interpolated
            )

            fs.writeFile('json-output/operatorUsers.json', JSON.stringify(operatorUsers, null, 4), (err) => {
                if(err) throw err;
                console.log('Admin file successfully written')
            });
        };
    } 
}

formatUser('ADMIN', 2)
// formatUser('WAREHOUSE', 2)
// formatUser('OPERATOR', 2)