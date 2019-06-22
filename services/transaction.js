const connection = require("../connection/connection");
const moment = require("moment");

var testJson = {
  payeeProxyId: "466546240814419",
  payeeProxyType: "BILLERID",
  payeeAccountNumber: "0987654321", //value
  payeeName: "TestBiller1561128074", //name
  payerProxyId: "0812345678",
  payerProxyType: "MSISDN",
  payerAccountNumber: "0123456789",
  payerName: "Kuntod Nanmeun",
  sendingBankCode: "014", //sendingBank
  receivingBankCode: "014",
  amount: 100, //paidLocalAmount
  transactionId: "201906222i6HQTjQMUwMglK", //transRef
  transactionDateandTime: "2019-06-22T21:29:49+07:00", //transDate, transTime
  billPaymentRef1: "Test",
  billPaymentRef3: "",
  currencyCode: "764"
};

function recordTransaction(json) {
  let dataJson = json;
  var ts = dataJson.transactionDateandTime;
  let dateInput = moment(ts).format("YYYY-MM-DD");
  let timeInput = moment(ts).format("HH:mm");

  return connection.pool
    .query(
      `INSERT INTO scbhackathon.Transaction (transRef, sendingBank, transDate, transTime, name, value, paidLocalAmount, billPaymentRef1 , status ,UserId) 
    VALUES ('${dataJson.transactionId}', '${
        dataJson.sendingBankCode
      }', '${dateInput}', '${timeInput}', '${dataJson.payerName}', '${
        dataJson.payerAccountNumber
      }', ${dataJson.amount},${dataJson.billPaymentRef1} ,0,   1)`
    )
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(err => {
      console.log(err);
    });
}

function initTransaction(billPaymentRef1) {
  return connection.pool
    .query(
      `INSERT INTO scbhackathon.Transaction (billPaymentRef1 , status ,UserId) 
    VALUES ('${billPaymentRef1}' ,0,   1)`
    )
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);

      return null;
    });
}

function updateTransaction(dataJson) {
  var ts = dataJson.transactionDateandTime;
  let dateInput = moment(ts).format("YYYY-MM-DD");
  let timeInput = moment(ts).format("HH:mm");

  return connection.pool
    .query(
      `UPDATE scbhackathon.Transaction SET transRef = '${
        dataJson.transactionId
      }', sendingBank = '${
        dataJson.sendingBankCode
      }', transDate = '${dateInput}', 
    transTime = '${timeInput}', name = '${dataJson.payerName}', value = '${
        dataJson.payerAccountNumber
      }', paidLocalAmount = ${dataJson.amount} 
    WHERE billPaymentRef1 = '${dataJson.billPaymentRef1}'`
    )
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function updateTransactionStatus(id) {
  return connection.pool
    .query(
      `UPDATE scbhackathon.Transaction SET status = '${1}' WHERE id = '${id}'`
    )
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getTransactionById(id) {
  return connection.pool
    .query(`SELECT t.* FROM scbhackathon.Transaction t WHERE t.id = '${id}'`)
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getTransactionByUserId(userId) {
  return connection.pool
    .query(
      `SELECT t.* FROM scbhackathon.Transaction t WHERE t.UserId = '${userId}'`
    )
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getTransactionByUsername(username) {
  return connection.pool
    .query(
      `SELECT t.* FROM scbhackathon.Transaction t
    JOIN Authentication a ON t.UserId = a.Id
    WHERE a.Username = '${username}'`
    )
    .then(result => {
      let res = result.map(row => mapResult(row));
      return res;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

function getTransactionByTransRefAndNotValidated(transRef) {
  return connection.pool
    .query(
      `SELECT t.* FROM scbhackathon.Transaction t WHERE t.transRef = '${transRef}' AND t.status = 0`
    )
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
      return null;
    });
}

async function validateTransaction(transRef) {
  const result = await getTransactionByTransRefAndNotValidated(transRef);
  if (result.length > 0) {
    console.log("validate transRef");
    updateTransactionStatus(result[0].id);
  } else {
    console.log("transRef not found");
    return null;
  }
}

function mapResult(preResult) {
  let result = {
    transRef: preResult.transRef,
    sendingBank: preResult.sendingBank,
    transDate: preResult.transDate,
    transTime: preResult.transTime,
    sender: {
      name: preResult.name,
      account: {
        value: preResult.value
      }
    },
    paidLocalAmount: preResult.paidLocalAmount
  };
  return result;
}

module.exports = {
  recordTransaction,
  getTransactionById,
  getTransactionByUserId,
  getTransactionByUsername,
  getTransactionByTransRefAndNotValidated,
  initTransaction,
  updateTransaction,
  updateTransactionStatus,
  validateTransaction
};
