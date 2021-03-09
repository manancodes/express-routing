const express = require("express");
let app = express.Router();
app.get("/", function (req, res) {
  res.send("Profile Page");
});
app.get("/edit", function (req, res) {
  res.send("edit Page");
});
module.exports = app;
