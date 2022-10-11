const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var height_squared = (height * height) / 10000;
  var BMI = weight / height_squared;
  var temp = Math.floor(BMI * 100);
  BMI = temp/100;
  res.send("your BMI is " + BMI);

});

app.listen(3000, function(){
  console.log("server running at port 3000");
});
