const express = require("express");
const superhero = require("superheroes");

const app = express();

app.get("/", function(req, res){
  var mySuperhero = superhero.random();
  res.send(mySuperhero);
});

app.get("/contact", function(req, res){
  res.send("<h1>contact me at majnu ki gali</h1>");
});

app.listen(4000, function(){
  console.log("server running on port 3000");
});
