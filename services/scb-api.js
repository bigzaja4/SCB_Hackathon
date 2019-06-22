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

async function createQrcode(AccessToken) {
  const response = await axios({
    method: "post",
    url: "https://api.partners.scb/partners/sandbox/v1/payment/qrcode/create",
    headers: {
      authorization: AccessToken,
      requestUID: global.gConfig.requestUId,
      resourceOwnerId: global.gConfig.APIKEY,
      "accept-language": "EN"
    },
    data: {
      qrType: "PPCS",
      ppType: "BILLERID",
      ppId: global.gConfig.BillerID,
      amount: "3434.00",
      ref1: "DEWTERYTRY",
      ref2: "SCB",
      ref3: "HACK",
      merchantId: global.gConfig.MerchantID,
      terminalId: global.gConfig.TerminalID,
      invoice: "1234512",
      csExtExpiryTime: "60"
    }
  });
  return response.data;
}

module.exports = {
  login,
  slipVerification,
  createQrcode
};
