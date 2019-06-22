const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const config = require("./config/config.js");
global.gConfig = config;

const auth = require("./services/auth");

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  let publicBattles = [1, 2, 3];
  res.json(publicBattles);
});

app.get("/login", async (req, res) => {
  const data = await auth.login();
  console.log(data);
  res.send(data);
});

const PORT = global.gConfig.node_port || 3002;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
