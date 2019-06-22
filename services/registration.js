const connection = require('../connection/connection');

async function checkIsUser(username){
    const result = await connection.pool.query(`SELECT t.Username FROM scbhackathon.Authentication t where t.Username = '${username}'`)
    if(result[0]){
        return true;
    }
    else{
        return false;
    }
}

async function register(registerData){
    let jsonData = registerData;
    let condition = await checkIsUser(jsonData.Username);
    if(!condition){
        let Token = "mockToken";
        connection.pool.query(`INSERT INTO scbhackathon.Authentication (Username, Password, Token) VALUES ('${jsonData.Username}', '${jsonData.Password}', '${Token}')`)
        .then(result => {
            return Token;
        })
        .catch(err => {
            console.log(err);    
        })
    }
    else{
        console.log("Duplicate Username");
        return null;
    }
    
}

module.exports = {
    register 
}