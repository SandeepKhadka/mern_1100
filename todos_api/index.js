const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mern_todos")
  .then(() => console.log("Connected!"))
  .catch((err) => console.error(err));

app.use(express.json());

app.post("/api/todos", (req, res) => {
  console.log("todos post api ......");
  res.status(200).send("create todo....");
});

app.get("/api/todos", (req, res) => {
  console.log("todos api ......");
  res.status(200).send("todos data....");
});

app.listen(8000, () => {
  console.log("server started....");
});
