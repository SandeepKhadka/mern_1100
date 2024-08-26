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


// app.use(checkAuthorization) // global middleware 
// const checkAuthorization = (res) => {
//
// };

app.get("/dashboard", checkAuthorization, (req, res) => { // route level middleware
  res.send("dashboard data...");
});

app.get("/api/orders", checkAuthorization, (req, res) => {
  res.send("orders data...");
});

app.get("/api/product", function (req, res) {
  res.send("product data..");
});

app.listen(8000, () => {
  console.log("Server started");
});
