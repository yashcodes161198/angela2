
var supervillain = require("supervillains");



const express = require("express");

const app = express();

app.get("/", function(request, response){
  var mySupervillain = supervillain.random();
  console.log(mySupervillain);
  response.send(mySupervillain);
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
