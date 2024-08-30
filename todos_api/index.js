const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mern_todos")
  .then(() => console.log("Connected!"))
  .catch((err) => console.error(err));

app.use(express.json());

const Todo = require("./model/Todo.js")

app.post("/api/todos", async (req, res) => {
  try{
    let todo = await Todo.create({title : req.body.title})
    console.log(todo);
    res.send(todo);
  }catch(error){
    console.error(error);
    res.status(500).send("server error")
  }
 
});

app.get("/api/todos", async(req, res) => {
  let todos = await Todo.find()
  res.status(200).send(todos);
});

app.listen(8000, () => {
  console.log("server started....");
});
