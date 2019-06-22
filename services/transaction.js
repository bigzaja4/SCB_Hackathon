const connection = require('../connection/connection');

var testJson = {
    "status": {
        "code": 1000,
        "description": "Success"
    },
    "data": {
        "transRef": "201906225f3GFy43Qeh1vHp",
        "sendingBank": "014",
        "receivingBank": "014",
        "transDate": "20190622",
        "transTime": "10:06:41",
        "sender": {
            "displayName": "Suprapassara Jannapheang",
            "name": "Suprapassara Jannapheang",
            "proxy": {
                "type": "MSISDN",
                "value": "0812345678"
            },
            "account": {
                "type": "BANKAC",
                "value": "0123456789"
            }
        },
        "receiver": {
            "displayName": "TestBiller1561119707",
            "name": "TestBiller1561119707",
            "proxy": {
                "type": "BILLERID",
                "value": "483217414123442"
            },
            "account": {
                "type": "BANKAC",
                "value": "0987654321"
            }
        },
        "amount": "5345.45",
        "paidLocalAmount": "5345.45",
        "paidLocalCurrency": "764",
        "countryCode": "TH",
        "ref1": "ABCDFGH",
        "ref2": "IJKLNO",
        "ref3": "SCBDREAM"
    }
};

function recordTransaction(json){
    let dataJson = json;

    return connection.pool.query(`INSERT INTO scbhackathon.Transaction ( FullName, BankAccountNumber, TransactionDate, TransactionTime, Amount, UserId) VALUES ( '
            ${dataJson.data.sender.displayName}', '${dataJson.data.sender.account.value}', '${dataJson.data.transDate}', '${dataJson.data.transTime}', ${dataJson.data.amount}, 1)`)
    .then(result => {
        console.log(result);
        return result;
    })
    .catch(err => {
        console.log(err);        
    })
}

function getTransactionById(id){
    return connection.pool.query(`SELECT t.* FROM scbhackathon.Transaction t WHERE t.UserId = ${id}`)
    .then(result => {   
        return result;
    })
    .catch(err => {
        console.log(err);
    })
}
