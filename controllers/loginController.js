const login = require('../services/login');
const regisService = require('../services/registration');
const jwt = require("jwt-simple");

const loginMiddleware = (req, res, next) => {
    login.checkIsLoginPass(req.body.username,req.body.password)
    .then(result => {
        if(result) next();
        else res.send("Wrong username and password") 
    })
 }
 
const getLogin = (req,res) => {
    const payload = {
        sub: req.body.username,
        iat: new Date().getTime()
     };
     const SECRET = "MY_SECRET_KEY";
     response = {
        "token":jwt.encode(payload, SECRET)
    }
    res.json(response);
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
   if( login.checkIsLoginPass(payload.sub) ) done(null, payload.sub);
   else done(null, false);
});

const passport = require("passport");
passport.use(jwtAuth);

const requireJWTAuth = passport.authenticate("jwt",{session:false});

const getUserInfo = (req,res) => {
    let username = req.user;
    return login.userInformation(username)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.send("Error");
    })
}

module.exports = {
    loginMiddleware,
    getLogin,
    requireJWTAuth,
    getUserInfo
}
