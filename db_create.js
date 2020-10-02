var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "GustavMaki",
    password: "g.m12301g5"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE notes", function (err, result){
        if (err) throw err;
    });
});