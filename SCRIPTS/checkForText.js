import fetch from 'node-fetch';

const checkForText = async (url, text) => {
    const page = fetch(url);
    const body = await page.then((result) => {
        if (JSON.stringify(result.url).includes(text)) {
            console.log(`Passed. "${text}" found on ${url}`);
        } else {
            console.error(`Failed. Did not find "${text}" on ${url}!`);
        };
    }).catch((err) => {
        console.log(`Error: ${err}`)
    });
}

checkForText('https://www.google.com/', 'google');