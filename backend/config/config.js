require("dotenv").config();

const env = process.env.NODE_ENV || "development";
const config = {
  development: {
    config_id: "development",
    node_port: 3002,
    APIKEY: "l7a41bdd3c0da647b48e9ddbdd18693794",
    APISecret: "953577a2b6554e03bbb540b48ed46b5a",
    requestUId: "dfsfsdfdsf",
    redis_port: 6379,
    redis_host: "scbdreamteam.tk",
    redis_password: ""
  },
  testing: {
    config_id: "testing"
  },
  staging: {
    config_id: "staging",
    node_port: 3002
  },
  production: {
    config_id: "production",
    node_port: process.env.PORT || 3002,
    APIKEY: "l7a41bdd3c0da647b48e9ddbdd18693794",
    APISecret: "953577a2b6554e03bbb540b48ed46b5a",
    requestUId: "dfsfsdfdsf",
    redis_port: 6379,
    redis_host: "scbdreamteam.tk",
    redis_password: ""
  }
};

module.exports = config[env];
