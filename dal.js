const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://mongo:27017";
let db = null;

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) console.log(err);
  else {
    console.log("Connected Successfully  to db server");
    console.log(url);
    db = client.db("myproject");
  }
});

function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const doc = { name, email, password, balance: 0 };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

function user(email) {
  return new Promise((resolve, reject) => {
    const user = db
      .collection("users")
      .find({ email: email })
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

function transaction(email, newAmount) {
  return db
    .collection("users")
    .updateOne({ email: email }, { $set: { balance: newAmount } });
}

module.exports = { create, all, user, transaction };
