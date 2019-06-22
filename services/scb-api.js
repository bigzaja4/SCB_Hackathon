const axios = require("axios");

async function slipVerification(transRef, authorization) {
  const response = await axios({
    method: "get",
    url: `https://api.partners.scb/partners/sandbox/v1/payment/billpayment/transactions/${transRef}}?sendingBank=014`,
    headers: {
      resourceOwnerId: global.gConfig.APIKEY,
      requestUId: global.gConfig.requestUId,
      "accept-language": "EN",
      authorization: authorization
    },
    data: {
      applicationKey: global.gConfig.APIKEY,
      applicationSecret: global.gConfig.APISecret
    }
  });
  return response.data;
}
module.exports = {
  slipVerification
};
