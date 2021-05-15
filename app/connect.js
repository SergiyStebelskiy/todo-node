const mysql = require("mysql")
const DB = require("./db.config")

var connect = mysql.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.DATABASE
})

connect.connect(err => {
  if (err) throw error
  console.log("success connect with database")
})

module.exports = connect
