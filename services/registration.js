const connection = require('../connection/connection');
const jwt = require("jwt-simple");

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
    let condition = await checkIsUser(jsonData.username);
    if(!condition){
        return connection.pool.query(`INSERT INTO scbhackathon.Authentication (Username, Password) VALUES ('${jsonData.username}', '${jsonData.password}' )`)
        .then(result => {
            console.log(result);
            return {boo: true, mes: "Register PASS!"};
        })
        .catch(err => {
            console.log(err); 
            return {boo: false, mes: "Error Cannot Register!"};   
        })
    }
    else{
        console.log("Duplicate Username");
        return {boo: false, mes: "Duplicate Username"};
    }
    
}

module.exports = {
    register,
    checkIsUser
}