var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
var loggedUser = [];

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

app.get("/logout", function (req, res) {
  loggedUser = [];
  console.log("Logged Out");
  console.log(loggedUser);
  res.json({ message: "User logged out" });
});

app.post("/login", function (req, res) {
  console.log(req.body);

  if (loggedUser.length > 0) {
    res.json({ message: "You are already logged in", code: 403 });
    return;
  }

  let email = req.body.email;
  let password = req.body.password;

  dal
    .user(email)
    .then((users) => {
      if (users[0].password === password) {
        loggedUser.push(users[0]);
        res.json({ code: 200 });
      } else {
        res.json({ message: "Invalid Credentials", code: 403 });
      }
    })
    .catch((err) => console.log(err));
});

app.get("/user", function (req, res) {
  console.log("Logged In");
  res.json(loggedUser);
});

let port = 3000;
app.listen(port);
console.log("App running on port " + port);
