require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nu6ig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const usersCollection = client.db("taskManagement").collection("users");
    const taskCollection = client.db("taskManagement").collection("tasks");

    // =======================  user api =============================
    // **Get All Users**
    app.get("/users", async (req, res) => {
      const email = req.query.email;
      const query = email ? { email } : {};
      const result = await usersCollection.find(query).toArray();
      res.send(result);
    });

    // **Create User**
    app.post("/postUser", async (req, res) => {
      const { name, email } = req.body;
      const query = { email };
      const exist = await usersCollection.findOne(query);
      if (exist) {
        return res.status(409).send({ message: "User already exists" });
      }
      const user = { name, email };
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    // =======================  user api =============================

    // =======================  task api =============================
    // **Get All Tasks**
    app.get("/tasks", async (req, res) => {
      const email = req.query.email;
      const query = email ? { userEmail: email } : {};
      const tasks = await taskCollection.find(query).toArray();
      res.send(tasks);
    });

    // **Create Task**
    app.post("/addTask", async (req, res) => {
      const task = req.body;
      const result = await taskCollection.insertOne(task);
      res.send(result);
    });
    // =======================  task api =============================

    // ======================= task update api =========================
    // **Update Task**
    app.patch("/updateTask/:id", async (req, res) => {
      const id = req.params.id;
      const task = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: task };
      const result = await taskCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // **Update Task Category**
    app.put("/tasks/:id", async (req, res) => {
      const id = req.params.id;
      const { category } = req.body;
      const timestamp = new Date().toLocaleString();
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: { category, timestamp } };
      const result = await taskCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // **Update task order list**
    app.put("/tasksUpdateOrder", async (req, res) => {
      const { tasks } = req.body;
      const bulkOperations = tasks.map((task) => ({
        updateOne: {
          filter: { _id: new ObjectId(task._id) },
          update: { $set: { serial: task.serial } },
        },
      }));
      const result = await taskCollection.bulkWrite(bulkOperations);
      res.send(result);
    });
  } finally {
  }
}
