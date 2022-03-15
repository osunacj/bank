var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
const { all } = require("express/lib/application");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
var loggedUser = [];

function checkLoggedIn(response) {
  if (loggedUser.length < 1) {
    response.json({ message: "You need to login first.", code: 403 });
    return true;
  }
}

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

app.get("/balance/:email", function (req, res) {
  if (checkLoggedIn(res)) return;

  dal.user(req.params.email).then((user) => {
    res.json(user[0]);
  });
});

app.get("/logout", function (req, res) {
  loggedUser = [];
  console.log("Logged Out");
  res.json({ message: "User logged out" });
});

app.post("/login", function (req, res) {
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
        console.log("Logged In");
        res.json({ code: 200 });
      } else {
        res.json({ message: "Invalid Credentials", code: 403 });
      }
    })
    .catch((err) => console.log(err));
});

app.get("/user", function (req, res) {
  res.json(loggedUser);
});

app.get("/withdraw/:email/:amount", function (req, res) {
  var currentBalance = 0;
  var newBalance = 0;

  if (checkLoggedIn(res)) return;

  let isWithdrawPossible = function () {
    if (Number(req.params.amount) > Number(currentBalance)) {
      res.json({
        message: "Cannot withdraw more than current balance.",
        code: 403,
      });
      return false;
    }
    return true;
  };

  if (req.params.email !== loggedUser[0].email) {
    res.json({ message: "That email is not logged in.", code: 403 });
  } else {
    dal
      .user(req.params.email)
      .then((user) => {
        currentBalance = user[0].balance;
      })
      .then(() => {
        if (!isWithdrawPossible()) return;

        newBalance = Number(currentBalance) - Number(req.params.amount);
        dal
          .transaction(req.params.email, Number(newBalance))
          .then(() => {
            res.json({
              message: "Withdraw Successfull, balance " + newBalance,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
});

app.get("/deposit/:email/:amount", function (req, res) {
  var currentBalance = 0;
  var newBalance = 0;

  if (checkLoggedIn(res)) return;

  let isDepositPossible = function () {
    if (Number(req.params.amount) < 0) {
      res.json({
        message: "Cannot deposit negative amount",
        code: 403,
      });
      return false;
    }
    return true;
  };

  if (req.params.email !== loggedUser[0].email) {
    res.json({ message: "That email is not logged in.", code: 403 });
  } else {
    dal
      .user(req.params.email)
      .then((user) => {
        currentBalance = user[0].balance;
      })
      .then(() => {
        if (!isDepositPossible()) return;

        newBalance = Number(currentBalance) + Number(req.params.amount);
        dal
          .transaction(req.params.email, Number(newBalance))
          .then(() => {
            res.json({ message: "Deposit Successfull, balance " + newBalance });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
});

let port = 3000;
app.listen(port);
console.log("App running on port " + port);
