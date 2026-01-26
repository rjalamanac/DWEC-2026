const Task = require("../model/task");
const { MongoClient } = require("mongodb");

class TaskService {
  static uri = "mongodb://mongoadmin:secret@localhost:27017";
  static async get() {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("TaskDB");
      const tasksDB = database.collection("tasks");

      const tasks = await tasksDB.find().toArray();

      return tasks;
    } finally {
      await client.close();
    }
  }

  static getById(id) {}

  static post(marca, modelo, precio) {}

  static delete(id) {}

  static update(id, marca, modelo, precio) {}
}

module.exports = TaskService;
