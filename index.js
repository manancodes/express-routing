var express = require("express");
var app = express();
const profile = require("./Routes/profile");
const home = require("./Routes/home");
const posts = require("./Routes/posts");
app.use("/", home);
app.use("/posts", posts);
app.use("/profile", profile);
app.listen(8000, function () {
  console.log("Listening to Port 8000");
});
