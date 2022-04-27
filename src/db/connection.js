require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
  try {
    await client.connect();
    console.log("success");
    const db = client.db("Animedb");
    return db.collection("Anime");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connection, client };
