const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  // res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("server running on port 3000");
});
