let json = require('../JSON/brandList.json');
let response = require('../JSON/post_activationBatch-response.json')
let payload = require('../JSON/POST-ActivationBatch-payload.json')
const QA = json[1];
let counter = 0;

// QA.skinArray.forEach((skin) => {
//     // Sakura Fortune
//     console.log(`Sakura Fortune™,gpas_3blindmice233_pop,Slots,gpas,,TARTU-QA1 [trtpopdevqa1],${skin.imsInstanceName},,`);
//     // 3 Blind Mice
//     console.log(`3 Blind Mice,gpas_3blindmice124_pop,Slots,gpas,,TARTU-QA1 [trtpopdevqa1],${skin.imsInstanceName},,`);
//     // Wild Scarab
//     console.log(`Wild Scarab,MAR9800WildScara,Slots,hyena,,TARTU-QA1 [trtpopdevqa1],${skin.imsInstanceName},,`);
//    // Wild Scarab - GPAS
//     console.log(`Wild Scarab,MAR9800WildScara,Slots,gpas,,TARTU-QA1 [trtpopdevqa1],${skin.imsInstanceName},,`);
    
//     counter = counter + 1
//     console.log(counter)
// });



// Array.from(response).forEach((entry) => {
//     if (entry.status === 'error') {
//         console.log('ERROR on entry: \n', JSON.stringify(entry.errorMessage))
//     } else {
//         // console.log(entry.brands.length)
//         counter = counter + 1
//         console.log(counter)
//     };
// });

// Array.from(payload).forEach((entry) => {
//     counter = counter + 1
//     console.log(counter)
// })

// Counting objects in array
for (let i = 0; i < payload.length; i++) {
    if (payload[i].imsInstanceName) 
        counter++;
}
console.log(`The total number of imsInstances in payload is: ${counter}`)
