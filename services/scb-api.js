const axios = require("axios");
const decryptQrCode = require("./decryptQRCode");

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
  const realRef = decryptQrCode.decryptQrCode(transRef);
  const response = await axios({
    method: "get",
    url: `https://api.partners.scb/partners/sandbox/v1/payment/billpayment/transactions/${realRef}?sendingBank=014`,
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

async function createDeepLink(AccessToken) {
  const response = await axios({
    method: "post",
    url: "https://api.partners.scb/partners/sandbox/v2/deeplink/transactions",
    headers: {
      authorization: AccessToken,
      requestUID: global.gConfig.requestUId,
      resourceOwnerId: global.gConfig.APIKEY,
      "accept-language": "EN",
      channel: "scbeasy"
    },
    data: {
      paymentAmount: 100,
      transactionType: "PAYMENT",
      transactionSubType: "BPA",
      ref1: "2003002913251522",
      accountTo: "900242300232",
      merchantMetaData: {
        paymentInfo: [
          {
            type: "<TEXT, TEXT_WITH_IMAGE>",
            title: "<Title text>",
            header: "<Header text>",
            description: "<Description>",
            imageUrl: "<Image url require if type TEXT_WITH_IMAGE>"
          }
        ],
        analytics: {
          "Product category": "<Product category>",
          Partner: "<Name of partner>",
          "Product code": "<Product code>",
          Detail1: "<Product name>",
          Detail2: "<sub-product name, if any>",
          Detail3: "<sub-product name, if any>",
          Detail4: "<date format: YYYY-MM-DD to YYYY-MM-DD>",
          Detail5: "<sub-product name, if any>",
          Detail6: "<Number of items, packages, etc.>"
        }
      }
    }
  });
  return response.data;
}

module.exports = {
  login,
  slipVerification,
  createQrcode,
  createDeepLink
};
