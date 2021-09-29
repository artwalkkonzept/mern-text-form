const express = require("express");

// artwalkRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /artwalk.
const artwalkRoutes = express.Router();

//This will help us connect to the database
const dbo = require("./conn");

// This section will help you get a list of all the artwalks.
artwalkRoutes.route("/artwalk").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("artwalks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single artwalk by id
artwalkRoutes.route("/artwalk/:id").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  db_connect
      .collection("artwalks")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new artwalk.
artwalkRoutes.route("/artwalk/add").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myobj = {
    name: req.body.name,
    bilds: req.body.bilds,
  };
  db_connect.collection("artwalks").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

module.exports = artwalkRoutes;
