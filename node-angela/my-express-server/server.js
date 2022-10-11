const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello Yash!</h1>");
});

app.get("/contact", function(req, res){
  res.send("contact me at beehyv"); 
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
