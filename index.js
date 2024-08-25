const express = require('express')
const app = express()

app.get("/",(req, res)=>{
    res.send("Hello world")
})

app.get('/api/todos', function (req, res) {
    res.send('This is todos')
  })

app.listen(8000, ()=>{
    console.log("Server started");
    
})