const jwt = require("jwt-simple");
const transactionService = require('../services/transaction');

// const userTransaction = (req, res) => {    
//     let userId = req;
//     return transactionService.getTransactionById(1)
//     .then(result => {
//         console.log(result);
//         res.json(result);
//     })
//     .catch(err => {
//         console.log(err);
        
//     })
// }

const getTransByUsername = (req, res) => {    
    let username = req.user;
    return transactionService.getTransactionByUsername(username)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
        
    })
}

module.exports = {
    // userTransaction
    getTransByUsername
}