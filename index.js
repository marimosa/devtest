var express = require("express");
var app = express();

app.controllers = require("./server/controllers/")(app);

app.use('/lib', express.static('./bower_components/angular'));
app.use('/js', express.static('./client/js'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/client/index.html");
});

app.listen("8888", function() {
  console.log("All gravy on port 8888");
});
