var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path");

var app = express();
app.use(bodyParser.urlencoded({extended: true }));

var views = path.join(__dirname, "views");

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.listen(3000, function () {
  console.log("Running!");
})