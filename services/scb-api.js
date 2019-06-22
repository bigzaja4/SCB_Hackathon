const axios = require("axios");
const decryptQrCode = require("./decryptQrCode");
const genRefCode = require("./genRefCode");

async function login() {
  try {
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
  } catch (error) {}
}

async function slipVerification(query, AccessToken) {
  const { slipRef } = query;
  try {
    const realRef = decryptQrCode.decryptQrCode(slipRef);
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
  } catch (error) {}
}

async function createQrcode(query, AccessToken) {
  const { amount } = query;
  const ref1 = genRefCode.genRef1();
  const ref2 = "DREAMTEAM";
  const ref3 = "SCBHACKATHON";
  try {
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
        amount: amount,
        ref1: ref1,
        ref2: ref2,
        ref3: ref3,
        merchantId: global.gConfig.MerchantID,
        terminalId: global.gConfig.TerminalID,
        invoice: "1234512",
        csExtExpiryTime: "60"
      }
    });
    return response.data;
  } catch (error) {}
}

async function createDeepLink(query, AccessToken) {
  const { amount } = query;
  const ref1 = genRefCode.genRef1();
  const ref2 = "DREAMTEAM";
  try {
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
        paymentAmount: amount,
        transactionType: "PAYMENT",
        transactionSubType: "BPA",
        ref1: ref1,
        ref2: ref2,
        accountTo: global.gConfig.BillerID,
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
  } catch (error) {}
}

module.exports = {
  login,
  slipVerification,
  createQrcode,
  createDeepLink
};
