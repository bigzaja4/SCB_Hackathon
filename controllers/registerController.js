const register = require('../services/registration');
const jwt = require("jwt-simple");

const regisCon = (req,res) => {
    register.register(req.body)    
    .then(result => {
        if(result.boo){
            const payload = {
                sub: req.body.username,
                iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
             };
             const SECRET = "MY_SECRET_KEY"; //ในการใช้งานจริง คีย์นี้ให้เก็บเป็นความลับ
             res.send(jwt.encode(payload, SECRET));
        }
        else{
            res.send(result.mes)
        }
    })
}

module.exports = {
    regisCon
}
