const express = require("express");
const mysql = require("mysql");
const mysqlConnection = require("./connection");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));

app.get("/", function(req, res){
    mysqlConnection.query("SELECT * from projects", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

app.post("/", function(req, res) {
    var sql = "INSERT INTO projects (id, name) VALUES (1, 'OK')";
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})

app.listen(3000);