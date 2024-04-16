// Load the JSON data from files
const activeCountriesData = require('./active-countries.json');
const endpointData = require('./countries-3et.json');

// Extract country names from both datasets
const activeCountries = activeCountriesData.map(country => country['name']);
const endpointCountries = endpointData.map(country => country['country-name']);

// Find the discrepancy
const discrepancy = activeCountries.filter(country => !endpointCountries.includes(country));

if (discrepancy.length === 0) {
    console.log("No discrepancy found. Both datasets contain the same country codes.");
} else {
    console.log("Discrepancy found. The following country codes are missing or extra in one of the datasets:");
    console.log(discrepancy);
}