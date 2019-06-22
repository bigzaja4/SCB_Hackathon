var  mariadb = require('mariadb')

const pool = mariadb.createPool({
    user: 'admin123',
    password: '12345678',
    host: 'hackathonscb.cfjis4ucqztr.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    database: 'hackathonScb'
})

// pool.getConnection()
// .then(conn => {
//     conn.query("SELECT t.* FROM scbhackathon.User t ORDER BY SecretId DESC")
//     .then( result => {
//         console.log(result[0]);
//     })
// })

module.exports = {
    pool

}
