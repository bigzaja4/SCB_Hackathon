const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// เพิ่มตัว RedisStore ขึ้นมาจะทำหน้าที่เก็บ session แทน express-session ที่ใช้ในเวลาปกตินั่นเอง
// const RedisStore = require("connect-redis")(session);
const redis = require("redis"); //เป็นตัวสำหรับเชื่อมต่อไปยัง host เครื่องนั้นๆ
const app = express();
const loginRouter = require('./routes/router');

const config = require("./config/config.js");
global.gConfig = config;

const auth = require("./services/auth");

const client = redis.createClient(
  global.gConfig.redis_port,
  global.gConfig.redis_host,
  { password: global.gConfig.redis_host, ttl: 1 }
);

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
app.use("/login",loginRouter);


app.get("/api", (req, res) => {
  let publicBattles = [1, 2, 3];
  res.json(publicBattles);
});

app.get("/test", async (req, res) => {
  const data = await auth.login();
  console.log(data);
  res.send(data);
});

const PORT = global.gConfig.node_port || 3002;
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}...`);
  const data = await auth.login();
  client.set(
    "AccessToken",
    data.data.accessToken,
    "EX",
    data.data.expiresAt,
    redis.print
  );
});
