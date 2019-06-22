const axios = require("axios");

async function login() {
  const response = await axios({
    method: "post",
    url: "https://api.partners.scb/partners/sandbox/v1/oauth/token",
    headers: {
      resourceOwnerId: "foobar",
      "accept-language": "EN",
      requestUId: global.gConfig.APIKEY,
      requestUId: global.gConfig.requestUId
    },
    data: {
      applicationKey: global.gConfig.APIKEY,
      applicationSecret: global.gConfig.APISecret
    }
  });
  return response.data;
}

module.exports = {
  login
};
