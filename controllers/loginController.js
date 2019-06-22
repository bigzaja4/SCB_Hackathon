const login = require('../services/login');
const jwt = require("jwt-simple");

const loginMiddleware = (req, res, next) => {
    login.checkIsLoginPass(req.body.username,req.body.password)
    .then(result => {
        if(result) next();
        else res.send("Wrong username and password") 
    })
    //ถ้า username password ไม่ตรงให้ส่งว่า Wrong username and password
 }
 
const getLogin = (req,res) => {
    const payload = {
        sub: req.body.username,
        iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
     };
     const SECRET = "MY_SECRET_KEY"; //ในการใช้งานจริง คีย์นี้ให้เก็บเป็นความลับ
     res.send(jwt.encode(payload, SECRET));
}

//ใช้ในการ decode jwt ออกมา
const ExtractJwt = require("passport-jwt").ExtractJwt;
//ใช้ในการประกาศ Strategy
const JwtStrategy = require("passport-jwt").Strategy;

const jwtOptions = {
   jwtFromRequest: ExtractJwt.fromHeader("authorization"),
   secretOrKey: "MY_SECRET_KEY",//SECRETเดียวกับตอนencodeในกรณีนี้คือ MY_SECRET_KEY
}
const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
   if(payload.sub=== "kennaruk") done(null, true);
   else done(null, false);
});

const passport = require("passport");
passport.use(jwtAuth);

const requireJWTAuth = passport.authenticate("jwt",{session:false});

module.exports = {
    loginMiddleware,
    getLogin,
    requireJWTAuth
}

