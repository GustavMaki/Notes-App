const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();
var mysql = require('mysql');
var PORT = process.env.PORT || 8085;

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
app.listen(PORT);

console.log('Running at Port 8085');

