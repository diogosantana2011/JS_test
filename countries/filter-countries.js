const threeEtCountries = require('./countries-3et.json');
const allCountries = require('./all-countries.json');
const fs = require('fs');

const activeCountries = allCountries.countries.filter((country) => {
    return country.status === 'active'
}); 

const equalOrNot = allCountries.countries.length !== activeCountries.length;
console.log(`Countries listed on GET /country?lang=en amounts to a total of: ${threeEtCountries.length}`)

if (equalOrNot) {
    console.log(`Active countries: ${activeCountries.length}`);
    console.log(`All countries listed: ${allCountries.countries.length}`);
    console.log(`All countries and active countries; are not equal? \nAnswer: ${equalOrNot}.\nActive countries have lenght of ${activeCountries.length} and all countries list has a length of ${allCountries.countries.length}`);
    console.log(`Active countries have lenght of ${activeCountries.length} and countries returned on 3et endpoint list has a length of ${threeEtCountries.length}`);
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