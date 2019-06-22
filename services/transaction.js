const connection = require('../connection/connection');
const moment = require('moment');

var testJson = { 
    "payeeProxyId": '466546240814419',
    "payeeProxyType": 'BILLERID',
    "payeeAccountNumber": '0987654321',
    "payeeName": 'TestBiller1561128074',
    "payerProxyId": '0812345678',
    "payerProxyType": 'MSISDN',
    "payerAccountNumber": '0123456789',
    "payerName": 'Kuntod Nanmeun',
    "sendingBankCode": '014',
    "receivingBankCode": '014',
    "amount": 100,
    "transactionId": '201906222i6HQTjQMUwMglK',
    "transactionDateandTime": '2019-06-22T21:29:49+07:00',
    "billPaymentRef1": '12345678901234567890',
    "billPaymentRef3": '',
    "currencyCode": '764' 
}    

function recordTransaction(json){
    let dataJson = json;
    var ts = dataJson.transactionDateandTime;
    let dateInput = moment(ts).format("YYYY-MM-DD");
    let timeInput = moment(ts).format("HH:mm");
    
    return connection.pool.query(`INSERT INTO scbhackathon.Transaction (transRef, sendingBank, transDate, transTime, name, value, paidLocalAmount, UserId) 
    VALUES ('${dataJson.transactionId}', '${dataJson.sendingBankCode}', '${dateInput}', '${timeInput}', '${dataJson.payerName}', '${dataJson.payeeAccountNumber}', ${dataJson.amount}, 1)`)
    .then(result => {
        console.log(result);
        return result;
    })
    .catch(err => {
        console.log(err);        
    })
}

function getTransactionById(id){
    return connection.pool.query(`SELECT t.* FROM scbhackathon.Transaction t WHERE t.UserId = ${id}}`)
    .then(result => { 
        return result;
    })
    .catch(err => {
        console.log(err);
        return null;
    })
}

function getTransactionByUsername(username){
    return connection.pool.query(`SELECT t.* FROM scbhackathon.Transaction t
    JOIN Authentication a ON t.UserId = a.Id
    WHERE a.Username = '${username}'`)
    .then(result => { 
        let res = result.map(row => mapResult(row));
        return res;
    })
    .catch(err => {
        console.log(err);
        return null;
    })
}

function mapResult(preResult){
    let result = {        
        "transRef": preResult.transRef,
        "sendingBank": preResult.sendingBank,
        "transDate": preResult.transDate,
        "transTime": preResult.transTime,
        "sender": {
            "name": preResult.name,
            "account": {
                "value": preResult.value
            }
        },
        "paidLocalAmount": preResult.paidLocalAmount
    }
    return result;
}

getTransactionByUsername("admin");

module.exports = {
    recordTransaction,
    getTransactionById,
    getTransactionByUsername
}
