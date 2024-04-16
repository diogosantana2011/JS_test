const fs = require('fs');
const endpointData = require('./countries-3et.json');
const allCountries = require('./countries.json');

const activeCountries = allCountries.countries.filter((country) => {
    return country.status === 'active'
}); 

console.log(activeCountries.length)

const equalOrNot = allCountries.countries.length !== activeCountries.length;
console.log(`Countries listed on GET /country?lang=en amounts to a total of: ${endpointData.length}`)

if (equalOrNot) {
    console.log(`Active countries: ${activeCountries.length}`);
    console.log(`All countries listed: ${allCountries.countries.length}`);
    console.log(`All countries and active countries; are not equal? \nAnswer: ${equalOrNot}.\nActive countries have lenght of ${activeCountries.length} and all countries list has a length of ${allCountries.countries.length}`);
    console.log(`Active countries have lenght of ${activeCountries.length} and countries returned on 3et endpoint list has a length of ${endpointData.length}`);
};

fs.exists('./active-countries.json', (exists) => {
    if (exists) {
        console.log('File already exists! Skipped')
    } else {
        fs.writeFile('./active-countries.json', JSON.stringify(activeCountries, null, 2),
            (err) => {
                if (err) throw err;
            }
        );
        console.log('No file existing! File written!')
    };
});