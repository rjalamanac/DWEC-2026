var express = require("express");
var router = express.Router();

const { MongoClient } = require("mongodb");
const url = "mongodb://mongoadmin:secret@localhost:32768";
const client = new MongoClient(url);
const dbName = "Mono";

/* GET home page. */
router.get("/", async function (req, res, next) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("spicies");
  const data = await collection.find({}).toArray();
  res.json(data);
});

module.exports = router;
