const express = require("express");
const app = express();

/* 
    middleware
    - it has both res and req and has ability to modify both of them
    - has access to next middleware
*/

const checkAuthorization = (req, res, next) => {
  let loggedIn = true;
  if (!loggedIn) {
    return res.status(401).send({ msg: "Unauthorized" });
  }
  next()
};

const checkBuyer = (req, res,next) =>{
  let userRole = "buyer"
  console.log("checking user role...");
  if(userRole == "buyer"){
    next()
  }else{
    res.status(403).send({msg : "forbidden"});
    
  }
}

app.use(express.json())  // runs in every route, sets req.body

// app.use(checkBuyer)
// app.use(checkAuthorization) // global middleware 
// const checkAuthorization = (res) => {
//
// };

app.get("/dashboard", checkAuthorization, (req, res) => { // route level middleware
  res.send("dashboard data...");
});

app.get("/api/orders", checkAuthorization, checkBuyer, (req, res) => {
  res.send("orders data...");
});

app.post("/api/orders", checkAuthorization, checkBuyer, (req, res) => {
  console.log(req);
  let orders = req.body
  res.send(orders);
});

app.get("/api/product", function (req, res) {
  res.send("product data..");
});

app.listen(8000, () => {
  console.log("Server started");
});
