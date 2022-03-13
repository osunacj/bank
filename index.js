var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

app.use(express.static("public"));
app.use(cors());

app.get("/account/create/:name/:email/:password", function (req, res) {
  dal
    .create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

app.get("/user/:email", function (req, res) {
  console.log(req.params.email);
  dal.user(req.params.email).then((user) => {
    console.log(user);
    res.json(user);
  });
});

let port = 3000;
app.listen(port);
console.log("App running on port " + port);
