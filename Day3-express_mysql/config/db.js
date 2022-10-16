var mysql = require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'nodejs',
    port:3306
})

module.exports=db;