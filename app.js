const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// เพิ่มตัว RedisStore ขึ้นมาจะทำหน้าที่เก็บ session แทน express-session ที่ใช้ในเวลาปกตินั่นเอง
// const RedisStore = require("connect-redis")(session);
const redis = require("redis"); //เป็นตัวสำหรับเชื่อมต่อไปยัง host เครื่องนั้นๆ
const { promisify } = require("util");
const app = express();
const router = require('./routes/router');

const config = require("./config/config.js");
global.gConfig = config;

const api = require("./services/scb-api");

// const client = redis.createClient(
//   global.gConfig.redis_port,
//   global.gConfig.redis_host
// );
// const getAsync = promisify(client.get).bind(client);
// const setAsync = promisify(client.set).bind(client);

// app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   session({
//     // เป็นการ config ให้ session ใช้ redis ซึ่งใช้แบบ client connect ก็ได้หรือจะ inject host, port เอง
//     store: new RedisStore({
//       client
//     }),
//     secret: "Hello My First Time To Start ;)",
//     resave: true,
//     saveUninitialized: true
//   })
// );
app.use("/route",router);

// async function checkAccessToken(req, res, next) {
//   const accessToken = await getAccessToken();
//   if (accessToken) {
//     // console.log(11111);
//     req.accessToken = accessToken;
//   } else {
//     // console.log(2222);
//     const data = await api.login();
//     const response = await setAccessToken(data);
//     if (response) {
//       req.accessToken = await getAccessToken();
//     } else {
//       res.status(500).send("internal error");
//     }
//   }
//   next();
// }

// app.use(checkAccessToken);

// app.get("/api", (req, res) => {
//   let publicBattles = [1, 2, 3];
//   res.json(publicBattles);
// });

// app.get("/check-slip", async (req, res) => {
//   if (req.query.slipRef) {
//     const slip = await api.slipVerification(req.query.slipRef, req.accessToken);
//     console.log(slip);
//     res.send(slip);
//   } else {
//     res.status(400).send("need slipRef");
//   }
// });

// app.get("/qrcode", async (req, res) => {
//   const qrcode = await api.createQrcode(req.accessToken);
//   console.log(qrcode);
//   res.send(qrcode);
// });

// app.post("/callback", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

// async function setAccessToken({ data }) {
//   const res = await setAsync(
//     "AccessToken",
//     data.tokenType + " " + data.accessToken,
//     "EX",
//     data.expiresAt
//   );
//   return res;
// }

// async function getAccessToken() {
//   const res = await getAsync("AccessToken");
//   return res;
// }

const PORT = global.gConfig.node_port || 3002;
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}...`);
  // const data = await api.login();
  // setAccessToken(data);
});
