var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const resetAccounts = async () => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db("vuasale");
    const collection = db.collection("accounts");
    const result = await collection.updateMany(
      {},
      { $set: { total: 0, conversions: 0, status: 1 } }
    );
    console.log(`${result.modifiedCount} document updated`);
    client.close();
  } catch (error) {
    console.log(error);
  }
};

const resetUsers = async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db("vuasale");
    const collection = db.collection("users");
    const result = await collection.updateMany({}, { $set: { total: 0 } });
    console.log(`${result.modifiedCount} document updated`);
    client.close();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  resetAccounts,
  resetUsers,
};
