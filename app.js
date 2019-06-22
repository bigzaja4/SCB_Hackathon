const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const redis = require("redis");
const { promisify } = require("util");
const app = express();

const config = require("./config/config.js");
global.gConfig = config;

const router = require("./routes/router");
const api = require("./services/scb-api");

const client = redis.createClient(
  global.gConfig.redis_port,
  global.gConfig.redis_host
);
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/route", router);

async function checkAccessToken(req, res, next) {
  const accessToken = await getAccessToken();
  if (accessToken) {
    req.accessToken = accessToken;
  } else {
    const data = await api.login();
    const response = await setAccessToken(data);
    if (response) {
      req.accessToken = await getAccessToken();
    } else {
      res.status(500).send("internal error");
    }
  }
  next();
}

app.use(checkAccessToken);

app.get("/api", (req, res) => {
  let publicBattles = [1, 2, 3];
  res.json(publicBattles);
});

app.get("/check-slip", async (req, res) => {
  if (req.query.slipRef) {
    const slip = await api.slipVerification(req.query, req.accessToken);
    res.send(slip);
  } else {
    res.status(400).send("need query slipRef");
  }
});

app.get("/qrcode", async (req, res) => {
  const { amount, psid } = req.query;
  if (amount && psid) {
    const qrcode = await api.createQrcode(req.query, req.accessToken);
    res.send(qrcode);
  } else {
    res.status(400).send("need query amount and psid");
  }
});

app.get("/deeplink", async (req, res) => {
  const { amount, psid } = req.query;
  if (amount && psid) {
    const deepLink = await api.createDeepLink(req.query, req.accessToken);
    res.send(deepLink);
  } else {
    res.status(400).send("need query amount and psid");
  }
});

app.post("/callback", (req, res) => {
  console.log(req.body);
  api.callBackLogic(req.body);
  res.send("Ok");
});

async function setAccessToken({ data }) {
  try {
    const res = await setAsync(
      "AccessToken",
      data.tokenType + " " + data.accessToken,
      "EX",
      data.expiresAt
    );
    return res;
  } catch (error) {}
}

async function getAccessToken() {
  try {
    const res = await getAsync("AccessToken");
    return res;
  } catch (error) {}
}

const PORT = global.gConfig.node_port || 3002;
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}...`);
  const data = await api.login();
  setAccessToken(data);
});
