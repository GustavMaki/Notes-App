var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "GustavMaki",
    password: "g.m12301g5",
    database: "notes"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE notes (title VARCHAR(255), content VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });