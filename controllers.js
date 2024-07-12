const db = require("./db");

const resetAccounts = async () => {
  var selectStatement = `UPDATE accounts set Total = 0, Conversions = 0 WHERE ID > 0`;
  db.query(selectStatement, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
};

const resetUsers = async (req, res) => {
  var selectStatement = `UPDATE users set Total = 0 WHERE ID > 0`;
  db.query(selectStatement, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  resetAccounts,
  resetUsers,
};
