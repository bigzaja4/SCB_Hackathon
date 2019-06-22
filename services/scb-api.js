const axios = require("axios");

async function login() {
  const response = await axios({
    method: "post",
    url: "https://api.partners.scb/partners/sandbox/v1/oauth/token",
    headers: {
      resourceOwnerId: global.gConfig.APIKEY,
      requestUId: global.gConfig.requestUId,
      "accept-language": "EN"
    },
    data: {
      applicationKey: global.gConfig.APIKEY,
      applicationSecret: global.gConfig.APISecret
    }
  });
  return response.data;
}

async function slipVerification(transRef, AccessToken) {
  const response = await axios({
    method: "get",
    url: `https://api.partners.scb/partners/sandbox/v1/payment/billpayment/transactions/${transRef}?sendingBank=014`,
    headers: {
      authorization: AccessToken,
      requestUID: global.gConfig.requestUId,
      resourceOwnerId: global.gConfig.APIKEY,
      "accept-language": "EN"
    }
  });
  return response.data;
}

module.exports = {
  login,
  slipVerification
};
