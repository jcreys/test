const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();

module.exports = {apiInstance}