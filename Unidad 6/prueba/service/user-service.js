const { MongoClient } = require("mongodb");
const crypto = require("crypto");

class UserService {
  static async register(user) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("ProductosDB");
      const tasksDB = database.collection("users");
      const data = await tasksDB.insertOne(user);
      user._id = data.insertedId;
      return user;
    } finally {
      await client.close();
    }
  }

  static async login(user) {
    const uri = "mongodb://mongoadmin:secret@localhost:27017";
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("ProductosDB");
      const tasksDB = database.collection("users");
      const userDB = await tasksDB.findOne({
        name: user.name,
        password: user.password,
      });
      if (userDB._id) {
        const token = crypto.randomUUID();
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        tokens.add(token);
        localStorage.setItem("tokens", tokens);
        return { admin: userDB.admin, token: token };
      }
      return user;
    } finally {
      await client.close();
    }
  }
}

module.exports = UserService;
