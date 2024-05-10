const crypto = require('crypto');

async function generateHeaders() {

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

async function sendTransactionRequest() {  

    const nonce = Date.now().toString();
    const httpMethod = "GET";

    const signatureContent = JSON.stringify({
        httpMethod,
        path,
        nonce,
    });

    const sig = crypto
        .createHmac("sha384", apiSecret)
        .update(signatureContent)
        .digest("hex");

    const headers = JSON.stringify({
        "x-nonce": nonce,
        "x-api-key": apiKey,
        "x-signature": sig,
    }, null, 3)
    console.log(headers)
    try {
      const res = await fetch(`https://api-staging.aquanow.io${path}`, {
        method: httpMethod,
        headers: {
          "x-nonce": nonce,
          "x-api-key": apiKey,
          "x-signature": sig,
        },
      });
      if (res.status !== 200) {
        throw new Error(`${(await res.json()).message} status ${res.status}`);
      }
      const result = await res.json();
      console.log("Result: ", result);
    } catch (error) {
      console.log("error", error);
    }
};

sendTransactionRequest()