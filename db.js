const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "Abcd@1234",
  database: "db_vuamarketing",
});

module.exports = db;
