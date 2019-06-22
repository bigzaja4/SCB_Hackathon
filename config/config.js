require("dotenv").config();

const env = process.env.NODE_ENV || "development";
const config = {
  development: {
    config_id: "development",
    node_port: 3002,
    db_host: "hackathonscb.cfjis4ucqztr.ap-southeast-1.rds.amazonaws.com",
    db_user: "admin123",
    db_password: "12345678",
    db_database: "scbhackathon",
    APIKEY: "l7a20ad00b6aca48ed8bcba74f501710e3",
    APISecret: "a198d9439e92489a8396aefaa2c1e340",
    requestUId: "46577477-d5cf-4f46-8cb4-7508415ad838",
    BillerID: "466546240814419",
    MerchantID: "730747667056559",
    TerminalID: "507804412000648",
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
    db_host: "hackathonscb.cfjis4ucqztr.ap-southeast-1.rds.amazonaws.com",
    db_user: "admin123",
    db_password: "12345678",
    db_database: "scbhackathon",
    APIKEY: "l7a20ad00b6aca48ed8bcba74f501710e3",
    APISecret: "a198d9439e92489a8396aefaa2c1e340",
    requestUId: "46577477-d5cf-4f46-8cb4-7508415ad838",
    BillerID: "466546240814419",
    MerchantID: "730747667056559",
    TerminalID: "507804412000648",
    redis_port: 6379,
    redis_host: "scbdreamteam.tk",
    redis_password: ""
  }
};

module.exports = config[env];
