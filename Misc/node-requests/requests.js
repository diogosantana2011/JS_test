const axios = require('axios');

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://alpha.3et.com/cashier/v3/currencies',
    headers: { }
};

axios.request(config).then((response) => {
    console.log(JSON.stringify(response.data, undefined, 3))
}).catch((error) => {
    console.log(error)
});