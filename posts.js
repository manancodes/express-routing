const express = require("express");
let app = express.Router();
app.get("/", function (req, res) {
  res.send("All Posts");
});
app.get("/:id", function (req, res) {
  res.send("View Post" + req.params.id);
});
module.exports = app;
