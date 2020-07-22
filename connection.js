const mysql = require("mysql");
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "Practice",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connection Successful");
    } else {
        console.log(err.message);
    }
});

module.exports = mysqlConnection;