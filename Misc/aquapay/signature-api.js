const crypto = require('crypto');

/**
 * Add api constants here
 */

async function generateHeaders() {
    const path = "/payment/v1/requestPaymentAddress";
    let nonce = Date.now().toString();
    const httpMethod = "POST";

    const signatureContent = JSON.stringify({
        httpMethod,
        path,
        nonce,
    });

    const sig = crypto
        .createHmac("sha384", apiSecret)
        .update(signatureContent)
        .digest("hex");

    const headers = JSON.stringify(
        {
            "x-nonce": nonce,
            "x-api-key": apiKey,
            "x-signature": sig,
        }, null, 3
    )

    console.log(`Headers signature is: ${sig}`)
    console.log(`Headers apikey is: ${apiKey}`)
    console.log(`Headers nonce value is: ${nonce}`)
    console.log(`Headers are: ${headers}`)
}
  
generateHeaders();

// async function sendTransactionRequest() {  
//     const qsParams = "?address=n4piJLrXmSpqPkAQoS5bcvQZQRNkgBBYND";
//     const path = `/accounts/v1/transaction${qsParams}`;
//     const nonce = Date.now().toString();
//     const httpMethod = "GET";

//     const signatureContent = JSON.stringify({
//         httpMethod,
//         path,
//         nonce,
//     });

//     const sig = crypto
//         .createHmac("sha384", apiSecret)
//         .update(signatureContent)
//         .digest("hex");

//     const headers = JSON.stringify({
//         "x-nonce": nonce,
//         "x-api-key": apiKey,
//         "x-signature": sig,
//     }, null, 3)
//     console.log(headers)
//     try {
//       const res = await fetch(`https://api-staging.aquanow.io${path}`, {
//         method: httpMethod,
//         headers: {
//           "x-nonce": nonce,
//           "x-api-key": apiKey,
//           "x-signature": sig,
//         },
//       });
//       if (res.status !== 200) {
//         throw new Error(`${(await res.json()).message} status ${res.status}`);
//       }
//       const result = await res.json();
//       console.log("Result: ", result);
//     } catch (error) {
//       console.log(error);
//     }
// };

// sendTransactionRequest()

async function sendRequest() {  
    const path = "/payment/v1/requestPaymentAddress";
    const nonce = Date.now().toString();
    const httpMethod = "POST";
  
    const signatureContent = JSON.stringify({
      httpMethod,
      path,
      nonce,
    });
  
    const sig = crypto
      .createHmac("sha384", apiSecret)
      .update(signatureContent)
      .digest("hex");
  
    try {
      const res = await fetch(`https://api-staging.aquanow.io${path}`, {
        method: httpMethod,
        headers: {
          "x-nonce": nonce,
          "x-api-key": apiKey,
          "x-signature": sig,
        },
        body: JSON.stringify({
          cryptoType: "BTC",
          fiat: "CAD",
          fiatReceivable: 5,
          subaccount: "3etSubaccount",
        }),
      });
      if (res.status !== 200) {
        throw new Error(`${(await res.json()).message} status ${res.status}`);
      }
      const result = await res.json();
      console.log("Result: ", result);
    } catch (error) {
      console.log("error", error);
    }
}
  
sendRequest();